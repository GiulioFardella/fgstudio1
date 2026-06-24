import Container from "react-bootstrap/Container";
import homePic from "../assets/homepic.png";
import "../css/middleHome.css";

function MiddleHome() {
  return (
    <section className="middle-home">
      <Container className="middle-home__content">
        <div className="middle-home__copy">
          <p>
           FG Studio nasce dal minimalismo come liberazione dell'uomo.
           Il desiderio di arrivare all’essenza: progetti essenziali, curati e funzionali, senza nulla di superfluo.
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