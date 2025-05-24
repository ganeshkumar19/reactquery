import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';


const NavbarComponent = () => {
  const [expanded, setExpanded] = useState(false);

  const handleExpand = () => {
      setExpanded(!expanded)
  }

  return (
      <Navbar expand="md" fixed="top" expanded={expanded} style={{ backgroundColor: "green" }}>
          <Container fluid>
              <Navbar.Brand>
                  <p className='m-0 p-0'>Splash Chemicals</p>
              </Navbar.Brand>
              <Navbar.Toggle aria-controls='basic-nav' onClick={handleExpand} />
              <Navbar.Collapse id='basic-nav' className='ms-auto'>
                  <Nav className="ms-auto d-flex align-items-center">
                      <Nav.Link href="#" className="m-0 p-2 text-white">Home</Nav.Link>
                      <Nav.Link href="#" className="m-0 p-2 text-white">About</Nav.Link>
                      <Nav.Link href="#" className="m-0 p-2 text-white">Contact</Nav.Link>
                  </Nav>
              </Navbar.Collapse>
          </Container>
      </Navbar>
  );
}

export default NavbarComponent;



