import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const loginUser = async () => {
    try {
      const res = await axios.post("http://localhost:8080/login", { email, password });
      localStorage.setItem("user", JSON.stringify(res.data));
      navigate("/apply");
    } catch (err) {
      alert("Login failed");
    }
  };

  return (
    <div className="container mt-5 d-flex justify-content-center">
      <div className="card p-4 shadow" style={{ width: "400px" }}>
        <h4 className="text-center mb-3">Login</h4>
        <input type="email" className="form-control mb-3" placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
        <input type="password" className="form-control mb-3" placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
        <button className="btn btn-primary w-100" onClick={loginUser}>Login</button>
      </div>
    </div>
  );
}
export default Login;