import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import ApplyLeave from "./pages/ApplyLeave";
import LeaveList from "./pages/LeaveList";
import Header from "./components/Header";
import ProtectedRoute from './components/ProtectedRoute';
import AdminDashboard from './pages/AdminDashboard';

function App() {
  return (
    <Router>
      <Header />
      <div className="container mt-4">
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/admin" element={<ProtectedRoute><AdminDashboard /></ProtectedRoute>} />
          <Route path="/apply" element={<ProtectedRoute><ApplyLeave /></ProtectedRoute>} />
          <Route path="/LeaveList" element={<ProtectedRoute><LeaveList /></ProtectedRoute>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
