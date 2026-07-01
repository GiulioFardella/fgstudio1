import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { NavLink } from "react-router-dom";
import "../css/navbar.css";

function Navbar1() {
  return (
    <Navbar expand="lg">
      <Container>
        <Nav.Link as={NavLink} to="/">
          <img className="logo" src="/fglogo1.png" alt="FG Studio" />
        </Nav.Link>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />

        <Navbar.Collapse id="basic-navbar-nav">
          <Nav>
            <Nav.Link as={NavLink} to="/">
              Home
            </Nav.Link>

            <Nav.Link as={NavLink} to="/portfolio">
              Portfolio
            </Nav.Link>

            <Nav.Link as={NavLink} to="/contacts">
              Contatti
            </Nav.Link>

            <Nav.Link as={NavLink} to="/form">
              Richiedi un preventivo
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navbar1;