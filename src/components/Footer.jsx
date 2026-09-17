import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import "../css/footer.css";

function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="site-footer">
      <Container className="site-footer__container">
        <Row className="g-5">
          <Col lg={5}>
            <Link className="site-footer__brand" to="/">
              AbOvo Lab 
            </Link>

            <p className="site-footer__intro">
              Siti web essenziali, chiari e costruiti per farsi capire.
            </p>
          </Col>

          <Col xs={6} lg={3}>
            <h2 className="site-footer__title">Naviga</h2>

            <nav className="site-footer__links" aria-label="Navigazione footer">
              <Link to="/">Home</Link>
              <Link to="/servizi">Servizi</Link>
              <Link to="/portfolio">Portfolio</Link>
              <Link to="/contatti">Contatti</Link>
            </nav>
          </Col>

          <Col xs={6} lg={4}>
            <h2 className="site-footer__title">Hai un progetto?</h2>

            <p className="site-footer__text">
              Raccontami cosa vuoi costruire.
            </p>

            <Link className="site-footer__cta" to="/form">
              Richiedi un preventivo
            </Link>
          </Col>
        </Row>

        <div className="site-footer__bottom">
          <p>© {year} AbOvo Lab</p>

          <div className="site-footer__legal">
            <Link to="/privacy">Privacy</Link>
            <Link to="/cookies">Cookie</Link>
            <Link to="/terms">Termini</Link>
          </div>
        </div>
      </Container>
    </footer>
  );
}

export default Footer;