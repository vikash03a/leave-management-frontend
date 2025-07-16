import { useState } from "react";
import axios from "axios";
function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const registerUser = async () => {
    try {
      await axios.post("http://localhost:8080/api/register", { name, email, password });
      alert("Registered successfully");
    } catch (err) {
      alert("Registration failed");
    }
  };

  return (
    <div className="container mt-5 d-flex justify-content-center">
      <div className="card p-4 shadow" style={{ width: "400px" }}>
        <h4 className="text-center mb-3">Register</h4>
        <input type="text" className="form-control mb-3" placeholder="Name" onChange={(e) => setName(e.target.value)} />
        <input type="email" className="form-control mb-3" placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
        <input type="password" className="form-control mb-3" placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
        <button className="btn btn-dark w-100" onClick={registerUser}>Register</button>
      </div>
    </div>
  );
}
export default Register;