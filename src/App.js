import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import Register from "./components/Register";
import ApplyLeave from "./components/ApplyLeave";
import LeaveList from "./components/LeaveList";
import Navbar from "./components/Navbar";
function App() {
  return (
      <Router>
      <Navbar />
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/apply" element={<ApplyLeave />} />
        <Route path="/LeaveList" element={<LeaveList />} />
      </Routes>
    </Router>
  );
}

export default App;
