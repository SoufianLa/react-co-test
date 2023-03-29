import { Container, Row, Col, Card } from 'react-bootstrap';
import SignupForm from '../components/SignupForm';
import { pathLogin } from '../routes';
import { Link} from 'react-router-dom';

const SignupPage = () => {
  return (
        <Container className="justify-content-center">
      <Row className="justify-content-md-center">
        <Col md={6}>
          <Card className='card-login'>
            <Card.Header className="text-center">Sign up</Card.Header>
            <Card.Body>
            <SignupForm />
            <div className="text-center">
                you already have an account?{' '}
                <Link to={pathLogin()} className="text-decoration-none">
                  Sign In
                </Link>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default SignupPage;
