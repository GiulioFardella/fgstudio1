import { useState } from "react";
import { Form } from "react-bootstrap";

function ContactForm() {
  const [isSent, setIsSent] = useState(false);

  function handleSubmit(event) {
    event.preventDefault();

    const form = event.currentTarget;

    if (!form.checkValidity()) {
      event.stopPropagation();
      form.classList.add("was-validated");
      return;
    }

    const formData = new FormData(form);
    const honeypot = String(formData.get("website") || "").trim();

    // Per ora non esiste ancora il backend.
    // Quando sarà pronto, qui faremo POST /api/contact.
    if (honeypot) {
      form.reset();
      form.classList.remove("was-validated");
      return;
    }

    setIsSent(true);
    form.reset();
    form.classList.remove("was-validated");
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

      <button className="contacts-form__submit" type="submit">
        Invia messaggio
      </button>

      {isSent && (
        <p className="contacts-form__success" role="status">
          Messaggio compilato correttamente. Il collegamento al backend verrà
          aggiunto nella fase successiva.
        </p>
      )}
    </Form>
  );
}

export default ContactForm;