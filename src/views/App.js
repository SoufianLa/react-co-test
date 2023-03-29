import './../styles/App.css';
import { Route, Routes } from 'react-router-dom';
import SignupPage from './SignupPage';
import DashboardPage from './DashboardPage';
import LoginPage from './LoginPage';
import 'bootstrap/dist/css/bootstrap.min.css';
import { pathSignup, pathLogin, pathDashboard } from '../routes';

function App() {


  return (
    <div className="wrapper">

        <Routes>

        <Route path={pathSignup()} element={<SignupPage />} />
        <Route path={pathDashboard()} element={<DashboardPage />} />
        <Route path={pathLogin()} element={<LoginPage />} />
  
        
 
        </Routes>

    </div>
    )
}

export default App;
