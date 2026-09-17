import Container from "react-bootstrap/Container";
import homePic from "../assets/homepic.png";
import "../css/middleHome.css";

function MiddleHome() {
  return (
    <section className="middle-home">
      <Container className="middle-home__content">
        <div className="middle-home__copy">
          <p>
            Cambriano Lab nasce dal minimalismo come liberazione dell&apos;uomo.
          </p>

          <p>La necessità di tornare alla fonte.</p>

          <p>Progetti funzionali, essenziali,</p>
          <p>
            mai superflui.
          </p>
        </div>

        <div className="middle-home__visual">
          <img src={homePic} alt="Dettaglio visivo FG Studio" />
        </div>
      </Container>
    </section>
  );
}

export default MiddleHome;
