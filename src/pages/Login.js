import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleLogin = async () => {
    setLoading(true);
    setError("");
    try {
      const response = await axios.post("http://localhost:8080/api/login", {
        email,
        password,
      });

      localStorage.setItem("user", JSON.stringify(response.data));
      navigate("/apply");
    } catch (err) {
      setError("Invalid credentials");
    }
    setLoading(false);
  };

  return (
    <div className="container mt-5 d-flex justify-content-center">
      <div className="card p-4 shadow" style={{ width: "400px" }}>
        <h4 className="text-center mb-3">Login</h4>

        <input
          type="email"
          className="form-control mb-3"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          className="form-control mb-3"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button
          className="btn btn-primary w-100"
          onClick={handleLogin}
          disabled={loading}
        >
          {loading ? (
            <span className="spinner-border spinner-border-sm me-2" role="status" />
          ) : null}
          {loading ? "Logging in..." : "Login"}
        </button>

        {error && <div className="alert alert-danger mt-3">{error}</div>}
      </div>
    </div>
  );
}

export default Login;
