
import { useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { NavLink, useLocation } from "react-router-dom";
import "../css/navbar.css";

function Navbar1() {
  const [expanded, setExpanded] = useState(false);
  const location = useLocation();

  const closeMenu = () => setExpanded(false);

  useEffect(() => {
    closeMenu();
  }, [location.pathname]);

  return (
    <Navbar
      expand="lg"
      expanded={expanded}
      onToggle={(nextExpanded) => setExpanded(nextExpanded)}
    >
      <Container>
        <Nav.Link as={NavLink} to="/" onClick={closeMenu}>
          <img
            className="logo"
            src="/fglogo1.png"
            alt="AbOvo Lab"
          />
        </Nav.Link>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />

        <Navbar.Collapse id="basic-navbar-nav">
          <Nav>
            <Nav.Link as={NavLink} to="/" onClick={closeMenu}>
              Home
            </Nav.Link>

            <Nav.Link as={NavLink} to="/portfolio" onClick={closeMenu}>
              Portfolio
            </Nav.Link>

            <Nav.Link as={NavLink} to="/contacts" onClick={closeMenu}>
              Contatti
            </Nav.Link>

            <Nav.Link as={NavLink} to="/form" onClick={closeMenu}>
              Richiedi un preventivo
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navbar1;
