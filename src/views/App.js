import { Route, Routes } from 'react-router-dom';
import SignupPage from './SignupPage';
import DashboardPage from './DashboardPage';
import LoginPage from './LoginPage';
import 'bootstrap/dist/css/bootstrap.min.css';
import { pathSignup, pathLogin, pathDashboard } from '../routes';
import './../styles/App.css';

function App() {

  return (
        <Routes>
        <Route path={pathSignup()} element={<SignupPage />} />
        <Route path={pathDashboard()} element={<DashboardPage/>} />
        <Route path={pathLogin()} element={<LoginPage />} />
        </Routes>

    )
}

export default App;
