import { useCallback, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { API_BASE_URL } from "../config";
import {
  getAdminContactById,
  getAdminContacts,
  getAdminQuoteById,
  getAdminQuotes,
  updateAdminContact,
  updateAdminQuote,
} from "../services/adminApi";
import "../css/admin-dashboard.css";

function statusLabel(status) {
  const labels = {
    NEW: "Nuova",
    IN_PROGRESS: "In corso",
    ANSWED: "Risposta",
    ARCHIVED: "Archiviata",
  };

  return labels[status] || status;
}

function statusClass(status) {
  return String(status || "NEW").toLowerCase().replace("_", "-");
}

function formatDate(value) {
  if (!value) {
    return "—";
  }

  return new Intl.DateTimeFormat("it-IT", {
    dateStyle: "medium",
    timeStyle: "short",
  }).format(new Date(value));
}

function AdminDashboard() {
  const [isCheckingSession, setIsCheckingSession] = useState(true);
  const [isSessionValid, setIsSessionValid] = useState(false);
  const [sessionError, setSessionError] = useState("");
  const [isLoggingOut, setIsLoggingOut] = useState(false);

  const [contacts, setContacts] = useState([]);
  const [quotes, setQuotes] = useState([]);
  const [isLoadingRequests, setIsLoadingRequests] = useState(true);
  const [requestsError, setRequestsError] = useState("");

  const [selectedType, setSelectedType] = useState(null);
  const [selectedId, setSelectedId] = useState(null);
  const [selectedRequest, setSelectedRequest] = useState(null);
  const [isLoadingDetail, setIsLoadingDetail] = useState(false);
  const [detailError, setDetailError] = useState("");
  const [detailReloadKey, setDetailReloadKey] = useState(0);

  const [editableStatus, setEditableStatus] = useState("NEW");
  const [adminNote, setAdminNote] = useState("");
  const [isSavingChanges, setIsSavingChanges] = useState(false);
  const [saveError, setSaveError] = useState("");
  const [saveSuccess, setSaveSuccess] = useState("");

  const navigate = useNavigate();

  useEffect(() => {
    let isActive = true;

    async function checkSession() {
      try {
        const response = await fetch(`${API_BASE_URL}/api/admin/auth/me`, {
          method: "GET",
          credentials: "include",
          headers: {
            Accept: "application/json",
          },
        });

        const data = await response.json().catch(() => null);

        if (!response.ok || !data?.success) {
          navigate("/admin/login", { replace: true });
          return;
        }

        if (isActive) {
          setIsSessionValid(true);
          setIsCheckingSession(false);
        }
      } catch {
        if (isActive) {
          setSessionError("Impossibile verificare la sessione.");
          setIsCheckingSession(false);
        }
      }
    }

    checkSession();

    return () => {
      isActive = false;
    };
  }, [navigate]);

  const loadRequests = useCallback(async () => {
    setIsLoadingRequests(true);
    setRequestsError("");

    try {
      const [contactsData, quotesData] = await Promise.all([
        getAdminContacts(),
        getAdminQuotes(),
      ]);

      setContacts(contactsData);
      setQuotes(quotesData);

      if (contactsData.length > 0) {
        setSelectedType("contact");
        setSelectedId(contactsData[0].id);
      } else if (quotesData.length > 0) {
        setSelectedType("quote");
        setSelectedId(quotesData[0].id);
      } else {
        setSelectedType(null);
        setSelectedId(null);
        setSelectedRequest(null);
      }
    } catch (error) {
      if (error?.status === 401) {
        navigate("/admin/login", { replace: true });
        return;
      }

      setRequestsError(
        error?.message || "Impossibile caricare le richieste."
      );
    } finally {
      setIsLoadingRequests(false);
    }
  }, [navigate]);

  useEffect(() => {
    if (isSessionValid) {
      loadRequests();
    }
  }, [isSessionValid, loadRequests]);

  useEffect(() => {
    if (!isSessionValid || !selectedType || !selectedId) {
      return;
    }

    let isActive = true;

    async function loadDetail() {
      setIsLoadingDetail(true);
      setDetailError("");
      setSaveError("");
      setSaveSuccess("");
      setSelectedRequest(null);

      try {
        const data =
          selectedType === "contact"
            ? await getAdminContactById(selectedId)
            : await getAdminQuoteById(selectedId);

        if (isActive) {
          setSelectedRequest(data);
          setEditableStatus(data.status || "NEW");
          setAdminNote(data.adminNote || "");
        }
      } catch (error) {
        if (error?.status === 401) {
          navigate("/admin/login", { replace: true });
          return;
        }

        if (isActive) {
          setDetailError(
            error?.message || "Impossibile caricare il dettaglio."
          );
        }
      } finally {
        if (isActive) {
          setIsLoadingDetail(false);
        }
      }
    }

    loadDetail();

    return () => {
      isActive = false;
    };
  }, [isSessionValid, selectedType, selectedId, detailReloadKey, navigate]);

  async function handleLogout() {
    setIsLoggingOut(true);

    try {
      const response = await fetch(`${API_BASE_URL}/api/admin/auth/logout`, {
        method: "POST",
        credentials: "include",
        headers: {
          Accept: "application/json",
        },
      });

      if (!response.ok) {
        throw new Error();
      }

      navigate("/admin/login", { replace: true });
    } catch {
      setIsLoggingOut(false);
    }
  }

  function selectRequest(type, id) {
    setSelectedType(type);
    setSelectedId(id);
  }

  async function handleSaveChanges() {
    if (!selectedType || !selectedId) {
      return;
    }

    setIsSavingChanges(true);
    setSaveError("");
    setSaveSuccess("");

    try {
      const payload = {
        status: editableStatus,
        adminNote,
      };

      const updatedRequest =
        selectedType === "contact"
          ? await updateAdminContact(selectedId, payload)
          : await updateAdminQuote(selectedId, payload);

      setSelectedRequest(updatedRequest);
      setEditableStatus(updatedRequest.status || "NEW");
      setAdminNote(updatedRequest.adminNote || "");

      if (selectedType === "contact") {
        setContacts((currentContacts) =>
          currentContacts.map((contact) =>
            contact.id === selectedId
              ? { ...contact, status: updatedRequest.status }
              : contact
          )
        );
      } else {
        setQuotes((currentQuotes) =>
          currentQuotes.map((quote) =>
            quote.id === selectedId
              ? { ...quote, status: updatedRequest.status }
              : quote
          )
        );
      }

      setSaveSuccess("Modifiche salvate.");
    } catch (error) {
      if (error?.status === 401) {
        navigate("/admin/login", { replace: true });
        return;
      }

      if (error?.status === 403) {
        setSaveError(
          "Operazione bloccata. Ricarica la pagina e riprova."
        );
        return;
      }

      setSaveError(
        error?.message || "Impossibile salvare le modifiche."
      );
    } finally {
      setIsSavingChanges(false);
    }
  }

  if (isCheckingSession) {
    return (
      <main className="admin-dashboard">
        <p className="admin-dashboard__loading">Verifica accesso...</p>
      </main>
    );
  }

  if (sessionError) {
    return (
      <main className="admin-dashboard">
        <p className="admin-dashboard__error">{sessionError}</p>
      </main>
    );
  }

  return (
    <main className="admin-dashboard">
      <header className="admin-dashboard__header">
        <div>
          <p className="admin-dashboard__eyebrow">FG STUDIO</p>
          <h1>Richieste.</h1>
        </div>

        <button
          className="admin-dashboard__logout"
          type="button"
          onClick={handleLogout}
          disabled={isLoggingOut}
        >
          {isLoggingOut ? "Uscita..." : "Esci"}
        </button>
      </header>

      {requestsError && (
        <div className="admin-dashboard__error">
          <p>{requestsError}</p>

          <button
            className="admin-dashboard__logout"
            type="button"
            onClick={loadRequests}
          >
            Riprova
          </button>
        </div>
      )}

      <div className="admin-dashboard__workspace">
        <section className="admin-dashboard__lists">
          <div className="admin-dashboard__list-column">
            <div className="admin-dashboard__list-heading">
              <p>CONTATTI</p>
              <span>{contacts.length}</span>
            </div>

            <div className="admin-dashboard__requests">
              {isLoadingRequests ? (
                <p className="admin-dashboard__loading">Caricamento...</p>
              ) : contacts.length === 0 ? (
                <p className="admin-dashboard__loading">
                  Nessun contatto ricevuto.
                </p>
              ) : (
                contacts.map((contact) => (
                  <button
                    className={`admin-dashboard__request ${
                      selectedType === "contact" && selectedId === contact.id
                        ? "admin-dashboard__request--selected"
                        : ""
                    }`}
                    key={contact.id}
                    type="button"
                    onClick={() => selectRequest("contact", contact.id)}
                  >
                    <span className="admin-dashboard__request-name">
                      {contact.name}
                    </span>

                    <span className="admin-dashboard__request-email">
                      {contact.email}
                    </span>

                    <span
                      className={`admin-dashboard__status admin-dashboard__status--${statusClass(
                        contact.status
                      )}`}
                    >
                      {statusLabel(contact.status)}
                    </span>
                  </button>
                ))
              )}
            </div>
          </div>

          <div className="admin-dashboard__list-column">
            <div className="admin-dashboard__list-heading">
              <p>PREVENTIVI</p>
              <span>{quotes.length}</span>
            </div>

            <div className="admin-dashboard__requests">
              {isLoadingRequests ? (
                <p className="admin-dashboard__loading">Caricamento...</p>
              ) : quotes.length === 0 ? (
                <p className="admin-dashboard__loading">
                  Nessuna richiesta di preventivo ricevuta.
                </p>
              ) : (
                quotes.map((quote) => (
                  <button
                    className={`admin-dashboard__request ${
                      selectedType === "quote" && selectedId === quote.id
                        ? "admin-dashboard__request--selected"
                        : ""
                    }`}
                    key={quote.id}
                    type="button"
                    onClick={() => selectRequest("quote", quote.id)}
                  >
                    <span className="admin-dashboard__request-name">
                      {quote.name}
                    </span>

                    <span className="admin-dashboard__request-email">
                      {quote.email}
                    </span>

                    <span
                      className={`admin-dashboard__status admin-dashboard__status--${statusClass(
                        quote.status
                      )}`}
                    >
                      {statusLabel(quote.status)}
                    </span>
                  </button>
                ))
              )}
            </div>
          </div>
        </section>

        <aside className="admin-dashboard__detail">
          {isLoadingDetail ? (
            <p className="admin-dashboard__loading">
              Caricamento dettaglio...
            </p>
          ) : detailError ? (
            <div className="admin-dashboard__error">
              <p>{detailError}</p>

              <button
                className="admin-dashboard__logout"
                type="button"
                onClick={() =>
                  setDetailReloadKey((currentValue) => currentValue + 1)
                }
              >
                Riprova
              </button>
            </div>
          ) : !selectedRequest ? (
            <p className="admin-dashboard__loading">
              Nessuna richiesta da visualizzare.
            </p>
          ) : (
            <>
              <div className="admin-dashboard__detail-top">
                <div>
                  <p className="admin-dashboard__detail-eyebrow">
                    {selectedType === "contact" ? "CONTATTO" : "PREVENTIVO"}
                  </p>

                  <h2>{selectedRequest.name}</h2>

                  <p className="admin-dashboard__detail-email">
                    {selectedRequest.email}
                  </p>
                </div>

                <span
                  className={`admin-dashboard__status admin-dashboard__status--${statusClass(
                    selectedRequest.status
                  )}`}
                >
                  {statusLabel(selectedRequest.status)}
                </span>
              </div>

              <div className="admin-dashboard__detail-meta">
                <div>
                  <span>Ricevuta</span>
                  <strong>{formatDate(selectedRequest.createdAt)}</strong>
                </div>

                {selectedRequest.phone && (
                  <div>
                    <span>Telefono</span>
                    <strong>{selectedRequest.phone}</strong>
                  </div>
                )}
              </div>

              {selectedType === "quote" && (
                <div className="admin-dashboard__quote-info">
                  <div>
                    <span>Azienda</span>
                    <strong>{selectedRequest.company || "—"}</strong>
                  </div>

                  <div>
                    <span>Settore</span>
                    <strong>{selectedRequest.sector || "—"}</strong>
                  </div>

                  <div>
                    <span>Tipologia sito</span>
                    <strong>{selectedRequest.siteType || "—"}</strong>
                  </div>

                  <div>
                    <span>Obiettivo</span>
                    <strong>{selectedRequest.goal || "—"}</strong>
                  </div>

                  <div>
                    <span>Sito esistente</span>
                    <strong>{selectedRequest.existingSite || "—"}</strong>
                  </div>

                  <div>
                    <span>Budget</span>
                    <strong>{selectedRequest.budget || "—"}</strong>
                  </div>

                  <div>
                    <span>Tempistiche</span>
                    <strong>{selectedRequest.timeline || "—"}</strong>
                  </div>
                </div>
              )}

              <div className="admin-dashboard__message">
                <p>MESSAGGIO</p>
                <div>{selectedRequest.message}</div>
              </div>

              <div className="admin-dashboard__edit">
                <div className="admin-dashboard__edit-field">
                  <label htmlFor="admin-request-status">STATO</label>

                  <select
                    id="admin-request-status"
                    value={editableStatus}
                    onChange={(event) => {
                      setEditableStatus(event.target.value);
                      setSaveSuccess("");
                    }}
                    disabled={isSavingChanges}
                  >
                    <option value="NEW">Nuova</option>
                    <option value="IN_PROGRESS">In corso</option>
                    <option value="ANSWERED">Risposta</option>
                    <option value="ARCHIVED">Archiviata</option>
                  </select>
                </div>

                <div className="admin-dashboard__note">
                  <label htmlFor="admin-request-note">NOTA INTERNA</label>

                  <textarea
                    id="admin-request-note"
                    placeholder="Aggiungi una nota interna..."
                    value={adminNote}
                    maxLength={2000}
                    onChange={(event) => {
                      setAdminNote(event.target.value);
                      setSaveSuccess("");
                    }}
                    disabled={isSavingChanges}
                  />
                </div>

                <button
                  className="admin-dashboard__save"
                  type="button"
                  onClick={handleSaveChanges}
                  disabled={isSavingChanges}
                >
                  {isSavingChanges ? "Salvataggio..." : "Salva modifiche"}
                </button>

                {saveSuccess && (
                  <p className="admin-dashboard__save-message admin-dashboard__save-message--success">
                    {saveSuccess}
                  </p>
                )}

                {saveError && (
                  <p
                    className="admin-dashboard__save-message admin-dashboard__save-message--error"
                    role="alert"
                  >
                    {saveError}
                  </p>
                )}
              </div>
            </>
          )}
        </aside>
      </div>
    </main>
  );
}

export default AdminDashboard;