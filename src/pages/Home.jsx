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
            Trasformiamo idee in spazi digitali veloci e fatti per farsi capire.
          </h2>
          <p> Contattaci per realizzare ogni tipo di applicativo. </p>
        </Container>
      </section>

      <MiddleHome />

      <HomeFooter />
    </>
  );
}

export default Home;
