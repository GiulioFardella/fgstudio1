import "../css/home.css";
import Container from "react-bootstrap/Container";
import MiddleHome from "../components/MiddleHome";
import HomeFooter from "../components/HomeFooter";

function Home() {
  return (
    <>
      <section id="hero-section">
        <Container>
          <h1>Dritti al punto.</h1>

          <h2>
            Trasformiamo idee in spazi veloci e fatti per
            farsi capire.
          </h2>
          <p> Contattaci per realizzare la tua intuizione in applicativi intuitivi, efficienti e responsive sia per browser che mobile. </p>
        </Container>
      </section>

      <MiddleHome />

      <HomeFooter />
    </>
  );
}

export default Home;

