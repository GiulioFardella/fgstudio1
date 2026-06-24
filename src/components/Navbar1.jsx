import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import "../css/navbar.css";
function Navbar1() {
  return (
    <Navbar expand="lg">
      <Container>
        <Nav.Link>
          <img className="logo" src="/fglogo1.jpg" alt="FG Studio" />
        </Nav.Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav>
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#servizi">Servizi</Nav.Link>
            <Nav.Link href="#portfolio">Portfolio</Nav.Link>
            <Nav.Link href="#contatti">Contatti</Nav.Link>
            <Nav.Link href="#preventivo">Richiedi un preventivo</Nav.Link>
            <Nav.Link href="#login">Accedi</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navbar1;
