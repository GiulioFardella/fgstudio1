import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { API_BASE_URL } from "../config";
import "../css/admin-dashboard.css";

const mockContacts = [
  {
    id: 1,
    name: "Mario Rossi",
    email: "mario.rossi@email.it",
    phone: "+39 333 1234567",
    status: "NEW",
    createdAt: "Oggi, 10:32",
    message:
      "Ciao, vorrei capire come realizzare il sito per la mia attività e ricevere qualche informazione.",
  },
  {
    id: 2,
    name: "Giulia Bianchi",
    email: "giulia@email.it",
    phone: "",
    status: "IN_PROGRESS",
    createdAt: "Ieri, 17:48",
    message:
      "Vorrei aggiornare il sito esistente e renderlo più moderno e semplice da usare.",
  },
  {
    id: 3,
    name: "Luca Verdi",
    email: "luca@email.it",
    phone: "+39 347 7654321",
    status: "ANSWERED",
    createdAt: "2 giorni fa",
    message:
      "Mi servirebbero informazioni per un piccolo sito portfolio personale.",
  },
];

const mockQuotes = [
  {
    id: 1,
    name: "Studio Marea",
    email: "info@studiomarea.it",
    phone: "+39 02 1234567",
    company: "Studio Marea",
    sector: "Architettura",
    siteType: "Sito vetrina",
    goal: "Presentare lo studio",
    existingSite: "Sì",
    budget: "2.000 – 4.000 €",
    timeline: "Entro 2 mesi",
    status: "NEW",
    createdAt: "Oggi, 09:14",
    message:
      "Abbiamo bisogno di un sito essenziale per presentare progetti, servizi e contatti.",
  },
  {
    id: 2,
    name: "Nero Coffee",
    email: "ciao@nerocoffee.it",
    phone: "",
    company: "Nero Coffee",
    sector: "Ristorazione",
    siteType: "E-commerce",
    goal: "Vendere prodotti online",
    existingSite: "No",
    budget: "4.000 – 6.000 €",
    timeline: "Entro 3 mesi",
    status: "IN_PROGRESS",
    createdAt: "Ieri, 14:20",
    message:
      "Vorremmo vendere caffè e accessori online, con una parte dedicata al nostro brand.",
  },
];

function statusLabel(status) {
  const labels = {
    NEW: "Nuova",
    IN_PROGRESS: "In corso",
    ANSWERED: "Risposta",
    ARCHIVED: "Archiviata",
  };

  return labels[status] || status;
}

function statusClass(status) {
  return status.toLowerCase().replace("_", "-");
}

function AdminDashboard() {
  const [isCheckingSession, setIsCheckingSession] = useState(true);
  const [sessionError, setSessionError] = useState("");
  const [isLoggingOut, setIsLoggingOut] = useState(false);
  const [selectedType, setSelectedType] = useState("contact");
  const [selectedId, setSelectedId] = useState(1);
  const navigate = useNavigate();

  useEffect(() => {
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

        setIsCheckingSession(false);
      } catch {
        setSessionError("Impossibile verificare la sessione.");
        setIsCheckingSession(false);
      }
    }

    checkSession();
  }, [navigate]);

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

  const selectedList =
    selectedType === "contact" ? mockContacts : mockQuotes;

  const selectedRequest =
    selectedList.find((item) => item.id === selectedId) || selectedList[0];

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

      <div className="admin-dashboard__workspace">
        <section className="admin-dashboard__lists">
          <div className="admin-dashboard__list-column">
            <div className="admin-dashboard__list-heading">
              <p>CONTATTI</p>
              <span>{mockContacts.length}</span>
            </div>

            <div className="admin-dashboard__requests">
              {mockContacts.map((contact) => (
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
              ))}
            </div>
          </div>

          <div className="admin-dashboard__list-column">
            <div className="admin-dashboard__list-heading">
              <p>PREVENTIVI</p>
              <span>{mockQuotes.length}</span>
            </div>

            <div className="admin-dashboard__requests">
              {mockQuotes.map((quote) => (
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
              ))}
            </div>
          </div>
        </section>

        <aside className="admin-dashboard__detail">
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
              <strong>{selectedRequest.createdAt}</strong>
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
                <strong>{selectedRequest.company}</strong>
              </div>

              <div>
                <span>Settore</span>
                <strong>{selectedRequest.sector}</strong>
              </div>

              <div>
                <span>Tipologia sito</span>
                <strong>{selectedRequest.siteType}</strong>
              </div>

              <div>
                <span>Obiettivo</span>
                <strong>{selectedRequest.goal}</strong>
              </div>

              <div>
                <span>Budget</span>
                <strong>{selectedRequest.budget}</strong>
              </div>

              <div>
                <span>Tempistiche</span>
                <strong>{selectedRequest.timeline}</strong>
              </div>
            </div>
          )}

          <div className="admin-dashboard__message">
            <p>MESSAGGIO</p>
            <div>{selectedRequest.message}</div>
          </div>

          <div className="admin-dashboard__note">
            <p>NOTA INTERNA</p>
            <textarea placeholder="Aggiungi una nota interna..." disabled />
          </div>
        </aside>
      </div>
    </main>
  );
}

export default AdminDashboard;