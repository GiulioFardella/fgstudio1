import { Container, Row, Col } from "react-bootstrap";
import ContactForm from "../components/ContactForm";
import "../css/contacts.css";

function Contacts() {
  return (
    <main className="contacts-page">
      <section className="contacts-hero page-hero">
        <Container>
          <p className="contacts-hero__eyebrow">CONTATTI</p>

          <h1 >
          Parliamo del tuo progetto.</h1>

          <p className="contacts-hero__text">
            Scrivici per informazioni, collaborazioni o per iniziare
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
                  abovolab@gmail.com
                </a>

                <p className="contacts-info__text">
                  Racconta brevemente cosa vuoi realizzare. Ti risponderemo con
                  le informazioni necessarie per capire come procedere.
                </p>
              </div>
            </Col>

            <Col lg={7}>
              <ContactForm />
            </Col>
          </Row>
        </Container>
      </section>
    </main>
  );
}

export default Contacts;