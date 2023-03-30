import { Container } from 'react-bootstrap';
import withAuth from '../hocs/withAuth';
import UserOverview from '../components/UserOverview';

const DashboardPage = () => {
  return (
    <Container className="justify-content-center">
      <UserOverview></UserOverview>
  </Container>
  );

};

export default withAuth(DashboardPage);
