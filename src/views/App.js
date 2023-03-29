import { Route, Routes } from 'react-router-dom';
import SignupPage from './SignupPage';
import DashboardPage from './DashboardPage';
import LoginPage from './LoginPage';
import 'bootstrap/dist/css/bootstrap.min.css';
import { pathSignup, pathLogin, pathDashboard } from '../routes';
import useToken from '../hooks/useToken';
import './../styles/App.css';

function App() {
  const {token, setToken}= useToken()
  /*if(!token){
    return <LoginPage setToken ={setToken}></LoginPage>
  }*/

  return (
        <Routes>
        <Route path={pathSignup()} element={<SignupPage />} />
        <Route path={pathDashboard()} element={<DashboardPage />} />
        <Route path={pathLogin()} element={<LoginPage  setToken ={setToken} />} />
  
        
 
        </Routes>

    )
}

export default App;
