import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css";
import { FaUser, FaStore } from "react-icons/fa";

function Login() {
  const navigate = useNavigate();

  const [role, setRole] = useState("Service Provider");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    try {
      const res = await fetch("http://localhost:5000/api/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          password,
          role,
        }),
      });

      const data = await res.json();

      if (res.ok) {
        alert("Login Successful");

        localStorage.setItem("token", data.token);

        // Redirect after login
        navigate("/");
      } else {
        alert(data.message);
      }
    } catch (err) {
      console.log(err);
      alert("Server Error");
    }
  };

  return (
    <div className="login-page">
      <div className="login-container">

        <div className="login-tabs">

          <div
            className={`tab ${role === "Customer" ? "active" : ""}`}
            onClick={() => setRole("Customer")}
          >
            <FaUser />
            <span>Customer</span>
          </div>

          <div
            className={`tab ${role === "Service Provider" ? "active" : ""}`}
            onClick={() => setRole("Service Provider")}
          >
            <FaStore />
            <span>Service Provider</span>
          </div>

        </div>

        <div className="login-card">

          <h1>Log in</h1>
          <p>as a {role}</p>

          <label>Email</label>

          <input
            type="email"
            placeholder="you@example.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <label>Password</label>

          <input
            type="password"
            placeholder="••••••••"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <button
            className="login-btn"
            onClick={handleLogin}
          >
            Log in
          </button>

          <p className="signup">
            New to PreBook?{" "}
            <span onClick={() => navigate("/register")}>
              Create an account
            </span>
          </p>

        </div>

      </div>
    </div>
  );
}

export default Login;