import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import SignupForm from '../components/SignupForm';

const SignupPage = () => {
  return (
    <Container>
      <Row className="justify-content-md-center">
        <Col xs={12} md={6}>
          <h1 className="text-center my-5">Sign Up</h1>
          <SignupForm />
        </Col>
      </Row>
    </Container>
  );
};

export default SignupPage;
