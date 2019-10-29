import React from 'react';
import circle from './img/2.jpg'
import { Container, Row, Col } from 'reactstrap';
import SimpleSlider from './Components/Slick';
import './App.css';

function App() {
  return (
    <Container>
      <Row className="align-items-center">
        <Col md="6">
          <h1>3D - слайдеры на любую тематику</h1>
          <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.</p>
          <a href="" className="btn btn--scroll">Показать каталог</a>
        </Col>
        <Col md="6">
          <SimpleSlider />
        </Col>
      </Row>
      <div className="circle"><img src={circle}></img></div>
    </Container>
  );
}

export default App;
