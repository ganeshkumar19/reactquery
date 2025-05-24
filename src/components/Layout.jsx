import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import DrawerComponent from './DrawerComponent';

const Layout = ({ children }) => {
  return (
    <Container fluid>
      <Row className="">
        {/* Sidebar */}
        <Col xs={4} md={3} className="p-0" >
          <DrawerComponent />
        </Col>
        
        {/* Main Content Area */}
        <Col xs={8} md={9} className="p-0">
          {children}
        </Col>
      </Row>
    </Container>
  );
};

export default Layout;