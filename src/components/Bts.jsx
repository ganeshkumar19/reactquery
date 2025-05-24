import React from 'react'
import { Card, Col, Container, Row , Button} from 'react-bootstrap'
import BAR from '../assets/Bar3.png'
import SHIRT from '../assets/shirt1.jpg'

const Bts = () => {

    const products = [
        {
          name: "Wireless Headphones",
          description: "High-quality wireless headphones with noise-cancellation.",
          originalPrice: 100,
          offerPrice: 80,
          discount: "20%",
          image: SHIRT
        },
        {
          name: "Smartwatch",
          description: "Feature-packed smartwatch with health tracking and notifications.",
          originalPrice: 150,
          offerPrice: 120,
          discount: "20%",
          image: SHIRT
        },
        {
          name: "Gaming Mouse",
          description: "Ergonomic gaming mouse with customizable buttons and RGB lighting.",
          originalPrice: 50,
          offerPrice: 35,
          discount: "30%",
          image: SHIRT
        }
      ];
  return (
    <Container fluid>
        <Row className='g-3'>
        {products.map((pr, index)=>
            <Col xs={12} sm={6} md={4} lg={3}>
            <Card className='crdContainer'>
                <div className='imgContainer'>
                <Card.Img variant="top" src={pr.image} className='cardImg'/>
                <span>4.2 | 5.2 k</span>
                </div>
                <Card.Body className='cardBodyContainer'>
                    <Card.Title>{pr.name}</Card.Title>
                    <Card.Text>
                     {pr.description}
                    </Card.Text>
                    <div className='d-flex gap-2'>
                      <p className='m-0 p-0'>{`$ ${pr.originalPrice}`}</p>
                      <p className='m-0 p-0'>{`(${pr.discount} off)`}</p>
                    </div>
                </Card.Body>
                </Card>
            </Col>
             )}
        </Row>
        
    </Container>

  )
}

export default Bts