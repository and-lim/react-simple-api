import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import logo from '../logo.svg';

function Menu() {
  return (
    <Navbar bg="primary" expand="lg">
      <Container className="mx-3">
        <Navbar.Brand href="#home">
        <img
              src={logo}
              width="50"
              height="30"
              className="d-inline-block align-top"
              alt="React Bootstrap logo"
            />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto ms-lg-3 fw-700 gap-3">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/Item">Item</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Menu;