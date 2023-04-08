import Login from "./pages/login/Login";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import UserDashboard from "./pages/dashboard/UserDashboard";
import AdminDashboard from "./pages/dashboard/AdminDashboard";
import NewEntry from "./pages/dashboard/NewEntry";
import NewForm from "./pages/dashboard/NewForm";
import Signup from "./pages/login/Sigup";
import Settings from "./pages/settings/Settings";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/sign-up" element={<Signup />} />
          <Route path="/user-dashboard" element={<UserDashboard />} />
          <Route path="/new-entry" element={<NewEntry />} />
          <Route path="/admin-dashboard" element={<AdminDashboard />} />
          <Route path="/new-form" element={<NewForm />} />
          <Route path="/admin-dashboard/settings" element={<Settings />} />
          <Route path="/admin-dashboard/forms" element={<Settings />} />
          <Route path="/admin-dashboard/team" element={<Settings />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
