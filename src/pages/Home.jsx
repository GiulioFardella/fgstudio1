import "../css/home.css";
import Container from "react-bootstrap/Container";
import MiddleHome from "../components/MiddleHome";

function Home() {
  return (
    <>
        <section id="hero-section">
      <Container>
          <h1>Dritti al punto.</h1>

          <h2>
            Trasformiamo idee chiare in siti essenziali, veloci e fatti per
            farsi capire.
          </h2>
      </Container>
        </section>

      <MiddleHome />
    </>
  );
}

export default Home;