import Dashboard from '../components/Dashboard';
import { Container } from 'react-bootstrap';
import withAuth from '../hocs/withAuth';

const DashboardPage = () => {
  return (
    <Container className="justify-content-center">
        <Dashboard ></Dashboard>
  </Container>
  );

};

export default withAuth(DashboardPage);
