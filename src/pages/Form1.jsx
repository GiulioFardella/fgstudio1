import { useRef, useState } from "react";
import { Form, Modal } from "react-bootstrap";
import { API_BASE_URL } from "../config";
import "../css/form.css";

function Form1() {
  const [showModal, setShowModal] = useState(false);
  const [submittedName, setSubmittedName] = useState("");
  const [isSending, setIsSending] = useState(false);
  const [error, setError] = useState("");
  const closeButtonRef = useRef(null);

  async function handleSubmit(event) {
    event.preventDefault();

    const form = event.currentTarget;

    if (!form.checkValidity()) {
      event.stopPropagation();
      form.classList.add("was-validated");
      return;
    }

    setIsSending(true);
    setError("");

    const formData = new FormData(form);
    const fullName = String(formData.get("name") || "").trim();

    const payload = {
      name: fullName,
      email: String(formData.get("email") || "").trim(),
      phone: String(formData.get("phone") || "").trim(),
      company: String(formData.get("company") || "").trim(),
      sector: String(formData.get("sector") || "").trim(),
      siteType: String(formData.get("siteType") || "").trim(),
      goal: String(formData.get("goal") || "").trim(),
      existingSite: String(formData.get("existingSite") || "").trim(),
      budget: String(formData.get("budget") || "").trim(),
      timeline: String(formData.get("timeline") || "").trim(),
      message: String(formData.get("message") || "").trim(),
      consent: formData.get("consent") === "on",
      website: String(formData.get("website") || "").trim(),
    };

    try {
      const response = await fetch(`${API_BASE_URL}/api/quote`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(payload),
      });

      const data = await response.json().catch(() => null);

      if (!response.ok || !data?.success) {
        throw new Error(
          data?.message || "Impossibile inviare la richiesta. Riprova."
        );
      }

      setSubmittedName(fullName.split(" ")[0] || "");
      form.reset();
      form.classList.remove("was-validated");
      setShowModal(true);
    } catch (submitError) {
      setError(
        submitError.message ||
          "Si è verificato un errore. Riprova più tardi."
      );
    } finally {
      setIsSending(false);
    }
  }

  return (
    <>
      <Form noValidate className="quote-form" onSubmit={handleSubmit}>
        <div className="quote-form__heading">
          <p className="quote-form__eyebrow">IL TUO PROGETTO</p>
          <h2>Compila il brief.</h2>
        </div>

        <div className="quote-form__honeypot" aria-hidden="true">
          <label htmlFor="website">Sito web</label>
          <input
            id="website"
            type="text"
            name="website"
            tabIndex={-1}
            autoComplete="off"
          />
        </div>

        <section className="quote-form__section">
          <h3>Dati di contatto</h3>

          <div className="quote-form__grid">
            <Form.Group className="quote-form__field" controlId="name">
              <Form.Label>Nome e cognome *</Form.Label>
              <Form.Control
                type="text"
                name="name"
                placeholder="Il tuo nome"
                maxLength={120}
                required
              />
            </Form.Group>

            <Form.Group className="quote-form__field" controlId="email">
              <Form.Label>Email *</Form.Label>
              <Form.Control
                type="email"
                name="email"
                placeholder="nome@email.it"
                maxLength={254}
                required
              />
            </Form.Group>

            <Form.Group className="quote-form__field" controlId="phone">
              <Form.Label>Telefono</Form.Label>
              <Form.Control
                type="tel"
                name="phone"
                placeholder="+39 ..."
                maxLength={50}
              />
            </Form.Group>

            <Form.Group className="quote-form__field" controlId="company">
              <Form.Label>Nome attività *</Form.Label>
              <Form.Control
                type="text"
                name="company"
                placeholder="Nome della tua attività"
                maxLength={160}
                required
              />
            </Form.Group>
          </div>
        </section>

        <section className="quote-form__section">
          <h3>Il sito che ti serve</h3>

          <div className="quote-form__grid">
            <Form.Group className="quote-form__field" controlId="sector">
              <Form.Label>Settore *</Form.Label>

              <Form.Select name="sector" defaultValue="" required>
                <option value="" disabled>
                  Seleziona un settore
                </option>
                <option value="professionista">
                  Professionista o consulente
                </option>
                <option value="attivita-locale">Attività locale</option>
                <option value="artigiano">Artigiano</option>
                <option value="piccola-impresa">Piccola impresa</option>
                <option value="creativo">Creativo o portfolio</option>
                <option value="altro">Altro</option>
              </Form.Select>
            </Form.Group>

            <Form.Group className="quote-form__field" controlId="siteType">
              <Form.Label>Tipo di sito *</Form.Label>

              <Form.Select name="siteType" defaultValue="" required>
                <option value="" disabled>
                  Seleziona una tipologia
                </option>
                <option value="sito-vetrina">Sito vetrina</option>
                <option value="landing-page">Landing page</option>
                <option value="portfolio-personale">Portfolio personale</option>
                <option value="attivita-locale">
                  Sito per attività locale
                </option>
                <option value="restyling">Restyling sito esistente</option>
                <option value="consulenza">Consulenza o ottimizzazione</option>
              </Form.Select>
            </Form.Group>

            <Form.Group className="quote-form__field" controlId="goal">
              <Form.Label>Obiettivo principale *</Form.Label>

              <Form.Select name="goal" defaultValue="" required>
                <option value="" disabled>
                  Seleziona un obiettivo
                </option>
                <option value="contatti">Ottenere più contatti</option>
                <option value="presentazione">
                  Presentare servizi o attività
                </option>
                <option value="portfolio">Mostrare lavori e progetti</option>
                <option value="vendita">Vendere online</option>
                <option value="aggiornamento">
                  Aggiornare un sito esistente
                </option>
              </Form.Select>
            </Form.Group>

            <Form.Group className="quote-form__field" controlId="existingSite">
              <Form.Label>Hai già un sito?</Form.Label>

              <Form.Select name="existingSite" defaultValue="">
                <option value="">Seleziona una risposta</option>
                <option value="no">No, parto da zero</option>
                <option value="rifare">Sì, ma va rifatto</option>
                <option value="ottimizzare">Sì, ma va ottimizzato</option>
              </Form.Select>
            </Form.Group>
          </div>
        </section>

        <section className="quote-form__section">
          <h3>Budget e tempistiche</h3>

          <div className="quote-form__grid">
            <Form.Group className="quote-form__field" controlId="budget">
              <Form.Label>Budget indicativo *</Form.Label>

              <Form.Select name="budget" defaultValue="" required>
                <option value="" disabled>
                  Seleziona una fascia
                </option>
                <option value="meno-1000">Meno di 1.000 €</option>
                <option value="1000-2000">1.000 € – 2.000 €</option>
                <option value="2000-3500">2.000 € – 3.500 €</option>
                <option value="oltre-3500">Oltre 3.500 €</option>
                <option value="da-definire">Da definire</option>
              </Form.Select>
            </Form.Group>

            <Form.Group className="quote-form__field" controlId="timeline">
              <Form.Label>Tempistiche *</Form.Label>

              <Form.Select name="timeline" defaultValue="" required>
                <option value="" disabled>
                  Seleziona una tempistica
                </option>
                <option value="subito">Il prima possibile</option>
                <option value="un-mese">Entro un mese</option>
                <option value="due-mesi">Entro due mesi</option>
                <option value="senza-scadenza">
                  Non ho una scadenza precisa
                </option>
              </Form.Select>
            </Form.Group>
          </div>
        </section>

        <section className="quote-form__section">
          <Form.Group className="quote-form__field" controlId="message">
            <Form.Label>Raccontami qualcosa in più sul progetto *</Form.Label>

            <Form.Control
              as="textarea"
              name="message"
              rows={7}
              placeholder="Servizi, pubblico di riferimento, pagine necessarie, idee o dettagli utili."
              maxLength={4000}
              required
            />
          </Form.Group>
        </section>

        <Form.Check
          className="quote-form__check"
          type="checkbox"
          id="consent"
          name="consent"
          label="Acconsento a essere ricontattato in merito a questa richiesta. *"
          required
        />

        <div className="quote-form__actions">
          <button
            className="quote-form__submit"
            type="submit"
            disabled={isSending}
          >
            {isSending ? "Invio in corso..." : "Invia richiesta"}
          </button>
        </div>

        {error && (
          <p className="quote-form__error" role="alert">
            {error}
          </p>
        )}
      </Form>

      <Modal
        show={showModal}
        onHide={() => setShowModal(false)}
        centered
        onEntered={() => closeButtonRef.current?.focus()}
        contentClassName="quote-modal__content"
      >
        <Modal.Header closeButton>
          <Modal.Title>Richiesta inviata.</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <p>
            {submittedName ? `${submittedName}, grazie. ` : "Grazie. "}
            Abbiamo ricevuto la tua richiesta.
          </p>

          <p className="quote-modal__note">
            Ti ricontatteremo via email appena possibile.
          </p>
        </Modal.Body>

        <Modal.Footer>
          <button
            ref={closeButtonRef}
            type="button"
            className="quote-modal__button"
            onClick={() => setShowModal(false)}
          >
            Chiudi
          </button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default Form1;