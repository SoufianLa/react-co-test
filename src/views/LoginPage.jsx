import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import LoginForm from '../components/LoginForm';
import { Link} from 'react-router-dom';
import { pathSignup } from '../routes';


const LoginPage = ({setToken}) => {
  return (
    <Container className="justify-content-center">
      <Row className="justify-content-md-center">
        <Col md={6}>
          <Card className='card-login'>
            <Card.Header className="text-center">Login</Card.Header>
            <Card.Body>
              <LoginForm setToken={setToken} />
              <div className="text-center">
                Don't have an account?{' '}
                <Link to={pathSignup()} className="text-decoration-none">
                  Sign up
                </Link>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default LoginPage;
