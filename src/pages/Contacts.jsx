import { useState } from "react";
import { Container, Row, Col, Form } from "react-bootstrap";
import "../css/contacts.css";

function Contacts() {
  const [isSent, setIsSent] = useState(false);

  function handleSubmit(event) {
    event.preventDefault();
    setIsSent(true);
    event.currentTarget.reset();
  }

  return (
    <main className="contacts-page">
      <section className="contacts-hero">
        <Container>
          <p className="contacts-hero__eyebrow">CONTATTI</p>

          <h1>Parliamo del tuo progetto.</h1>

          <p className="contacts-hero__text">
            Scrivi a FG Studio per informazioni, collaborazioni o per iniziare
            a costruire il tuo nuovo sito.
          </p>
        </Container>
      </section>

      <section className="contacts-content">
        <Container>
          <Row className="g-5">
            <Col lg={5}>
              <div className="contacts-info">
                <p className="contacts-info__label">SCRIVI A</p>

                <a
                  className="contacts-info__email"
                  href="mailto:fgstudio@gmail.com"
                >
                  fgstudio@gmail.com
                </a>

                <p className="contacts-info__text">
                  Racconta brevemente cosa vuoi realizzare. Vi risponderemo con
                  le informazioni necessarie per capire come procedere.
                </p>
              </div>
            </Col>

            <Col lg={7}>
              <Form className="contacts-form" onSubmit={handleSubmit}>
                <div className="contacts-form__heading">
                  <p className="contacts-form__label">MESSAGGIO</p>
                  <h2>Mandaci un messaggio.</h2>
                </div>

                <Form.Group className="contacts-form__group" controlId="name">
                  <Form.Label>Nome</Form.Label>
                  <Form.Control
                    type="text"
                    name="name"
                    placeholder="Il tuo nome"
                    required
                  />
                </Form.Group>

                <Form.Group className="contacts-form__group" controlId="email">
                  <Form.Label>Email</Form.Label>
                  <Form.Control
                    type="email"
                    name="email"
                    placeholder="nome@email.it"
                    required
                  />
                </Form.Group>

                <Form.Group
                  className="contacts-form__group"
                  controlId="message"
                >
                  <Form.Label>Messaggio</Form.Label>
                  <Form.Control
                    as="textarea"
                    name="message"
                    rows={6}
                    placeholder="Raccontami di cosa hai bisogno."
                    required
                  />
                </Form.Group>

                <button className="contacts-form__submit" type="submit">
                  Invia messaggio
                </button>

                {isSent && (
                  <p className="contacts-form__success" role="status">
                    Messaggio pronto. Per ora questa è una conferma frontend:
                    il collegamento all’invio reale verrà aggiunto più avanti.
                  </p>
                )}
              </Form>
            </Col>
          </Row>
        </Container>
      </section>
    </main>
  );
}

export default Contacts;