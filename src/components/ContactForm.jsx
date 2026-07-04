import { useState } from "react";
import { Form } from "react-bootstrap";
import { API_BASE_URL } from "../config";

function ContactForm() {
  const [isSent, setIsSent] = useState(false);
  const [isSending, setIsSending] = useState(false);
  const [error, setError] = useState("");

  async function handleSubmit(event) {
    event.preventDefault();

    const form = event.currentTarget;

    if (!form.checkValidity()) {
      event.stopPropagation();
      form.classList.add("was-validated");
      return;
    }

    setIsSending(true);
    setIsSent(false);
    setError("");

    const formData = new FormData(form);

    const payload = {
      name: String(formData.get("name") || "").trim(),
      email: String(formData.get("email") || "").trim(),
      phone: String(formData.get("phone") || "").trim(),
      message: String(formData.get("message") || "").trim(),
      consent: formData.get("consent") === "on",
      website: String(formData.get("website") || "").trim(),
    };

    try {
      const response = await fetch(`${API_BASE_URL}/api/contact`, {
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

      form.reset();
      form.classList.remove("was-validated");
      setIsSent(true);
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
    <Form noValidate className="contacts-form" onSubmit={handleSubmit}>
      <div className="contacts-form__heading">
        <p className="contacts-form__label">MESSAGGIO</p>
        <h2>Mandaci un messaggio.</h2>
      </div>

      <div className="contacts-form__honeypot" aria-hidden="true">
        <label htmlFor="website">Sito web</label>
        <input
          id="website"
          type="text"
          name="website"
          tabIndex={-1}
          autoComplete="off"
        />
      </div>

      <Form.Group className="contacts-form__group" controlId="contact-name">
        <Form.Label>Nome *</Form.Label>
        <Form.Control
          type="text"
          name="name"
          placeholder="Il tuo nome"
          maxLength={120}
          required
        />
      </Form.Group>

      <Form.Group className="contacts-form__group" controlId="contact-email">
        <Form.Label>Email *</Form.Label>
        <Form.Control
          type="email"
          name="email"
          placeholder="nome@email.it"
          maxLength={254}
          required
        />
      </Form.Group>

      <Form.Group className="contacts-form__group" controlId="contact-phone">
        <Form.Label>Telefono</Form.Label>
        <Form.Control
          type="tel"
          name="phone"
          placeholder="+39 ..."
          maxLength={50}
        />
      </Form.Group>

      <Form.Group className="contacts-form__group" controlId="contact-message">
        <Form.Label>Messaggio *</Form.Label>
        <Form.Control
          as="textarea"
          name="message"
          rows={6}
          placeholder="Raccontami di cosa hai bisogno."
          maxLength={4000}
          required
        />
      </Form.Group>

      <Form.Check
        className="contacts-form__check"
        id="contact-consent"
        name="consent"
        type="checkbox"
        label="Acconsento a essere ricontattato in merito a questa richiesta. *"
        required
      />

      <button
        className="contacts-form__submit"
        type="submit"
        disabled={isSending}
      >
        {isSending ? "Invio in corso..." : "Invia messaggio"}
      </button>

      {isSent && (
        <p className="contacts-form__success" role="status">
          Messaggio inviato correttamente. Ti ricontatteremo presto.
        </p>
      )}

      {error && (
        <p className="contacts-form__error" role="alert">
          {error}
        </p>
      )}
    </Form>
  );
}

export default ContactForm;