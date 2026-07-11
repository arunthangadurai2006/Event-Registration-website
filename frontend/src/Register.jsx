import { useState } from "react";
import axios from "axios";
import "./Login.css";
import { FaUser, FaStore } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

function Register() {
  const navigate = useNavigate();

  const [role, setRole] = useState("Service Provider");

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
  });

  // Handle Input Change
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // Register User
  const handleRegister = async () => {
    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    try {
      const res = await axios.post(
        "http://localhost:5000/api/auth/register",
        {
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          password: formData.password,
          role: role,
        }
      );

      alert(res.data.message);

      // Clear Form
      setFormData({
        name: "",
        email: "",
        phone: "",
        password: "",
        confirmPassword: "",
      });

      navigate("/login");
    } catch (err) {
      alert(err.response?.data?.message || "Registration Failed");
    }
  };

  return (
    <div className="login-page">
      <div className="login-container">

        {/* Tabs */}
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

        {/* Register Card */}
        <div className="login-card">

          <h1>Create Account</h1>
          <p>as a {role}</p>

          <label>Full Name</label>
          <input
            type="text"
            name="name"
            placeholder="Enter your name"
            value={formData.name}
            onChange={handleChange}
          />

          <label>Email</label>
          <input
            type="email"
            name="email"
            placeholder="you@example.com"
            value={formData.email}
            onChange={handleChange}
          />

          <label>Phone Number</label>
          <input
            type="tel"
            name="phone"
            placeholder="+91 9876543210"
            value={formData.phone}
            onChange={handleChange}
          />

          <label>Password</label>
          <input
            type="password"
            name="password"
            placeholder="••••••••"
            value={formData.password}
            onChange={handleChange}
          />

          <label>Confirm Password</label>
          <input
            type="password"
            name="confirmPassword"
            placeholder="••••••••"
            value={formData.confirmPassword}
            onChange={handleChange}
          />

          <button
            className="login-btn"
            onClick={handleRegister}
          >
            Create Account
          </button>

          <p className="signup">
            Already have an account?{" "}
            <span onClick={() => navigate("/login")}>
              Log in
            </span>
          </p>

        </div>

      </div>
    </div>
  );
}

export default Register;