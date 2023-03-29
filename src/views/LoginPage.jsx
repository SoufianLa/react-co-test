import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import LoginForm from '../components/LoginForm';

const LoginPage = () => {
  return (
    <Container className="my-5">
      <Row className="justify-content-center">
        <Col sm={8} md={6} lg={4}>
          <Card>
            <Card.Header className="text-center">Login</Card.Header>
            <Card.Body>
              <LoginForm />
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default LoginPage;
