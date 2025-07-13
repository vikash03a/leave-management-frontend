import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from './components/Login';
import Register from './components/Register';
import ApplyLeave from './components/ApplyLeave';
import LeaveList from './components/LeaveList';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/apply" element={<ApplyLeave />} />
        <Route path="/leaves" element={<LeaveList />} />
      </Routes>
    </Router>
  );
}

export default App;
