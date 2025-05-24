import React, { useState } from 'react';
import { ListGroup, Offcanvas, Button } from 'react-bootstrap';
import { useMediaQuery } from 'react-responsive';

const DrawerComponent = () => {
  const [show, setShow] = useState(false);
  const isLargeScreen = useMediaQuery({ query: '(min-width: 992px)' });

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      {!isLargeScreen && (
        <Button variant="light" onClick={handleShow} className="mb-3">
          &#x2022;&#x2022;&#x2022; {/* Three dots icon */}
        </Button>
      )}

      <Offcanvas show={show || isLargeScreen} onHide={handleClose} backdrop={isLargeScreen ? false : true} scroll={true} style={{ maxWidth: '250px'}} backdropClassName='offcanvas'>
        <Offcanvas.Header closeButton={!isLargeScreen}>
          <Offcanvas.Title>Menu</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <ListGroup as="ul">
            <ListGroup.Item as="li" active>
              Home
            </ListGroup.Item>
            <ListGroup.Item as="li">About</ListGroup.Item>
            <ListGroup.Item as="li">Contact</ListGroup.Item>
            <ListGroup.Item as="li">Porta ac consectetur ac</ListGroup.Item>
          </ListGroup>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
};

export default DrawerComponent;