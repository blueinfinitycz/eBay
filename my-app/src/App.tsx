import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import './App.css';
import HeaderContainer from './components/Header/index';
import ListItems from './components/ListItems/index';
import WishList from './components/WishList/index';

const App: React.FC = () => {
  return (
    <Container>
      <Row className="justify-content-center">
        <Col>
          <HeaderContainer />
        </Col>
      </Row>
      <Row>
        <Col md={8} lg={8}>
          <Row>
            <Col>
              <ListItems />
            </Col>
          </Row>
        </Col>
        <Col md={4} lg={4}>
          <Row>
            <Col>
              <WishList />
            </Col>
          </Row>
        </Col>
      </Row>
      <Row />
    </Container>
  );
};

export default App;
