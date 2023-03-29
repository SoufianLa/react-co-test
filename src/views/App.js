import './../styles/App.css';
import { Route, Routes } from 'react-router-dom';
import SignupPage from './SignupPage';
import DashboardPage from './DashboardPage';
import LoginPage from './LoginPage';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {

  return (
    <div className="wrapper">

        <Routes>
          <Route path="/dashboard" element={<DashboardPage />} />

          <Route path="/login" element={<LoginPage />} />
  
          <Route path="/sign-up" element={<SignupPage />} />
 
        </Routes>

    </div>
    )
}

export default App;
