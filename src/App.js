import Login from './pages/login/Login';
import {
  BrowserRouter,
  Routes,
  Route,
  Link
} from "react-router-dom";
import UserDashboard from './pages/dashboard/UserDashboard';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
        <Route path="/" element={<Login/>} />
        <Route path="/user-dashboard" element={<UserDashboard/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
