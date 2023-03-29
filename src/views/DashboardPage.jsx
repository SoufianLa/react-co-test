import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Dashboard from '../components/Dashboard';

const DashboardPage = () => {
  return (
    <Container>
      <Row className="justify-content-md-center">
        <Col xs={12} md={6}>
          <h1 className="text-center my-5">Dashboard</h1>
          <Dashboard></Dashboard>
        </Col>
      </Row>
    </Container>
  );
};

export default DashboardPage;
