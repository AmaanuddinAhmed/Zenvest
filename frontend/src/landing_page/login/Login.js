import React, { useState } from "react";
import { Link } from "react-router-dom";
import api from "../../api";

function Login() {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    try {
      const res = await api.post("/login", formData);
      if (res.data.success) {
        window.location.href =
          process.env.REACT_APP_DASHBOARD_URL || "http://localhost:3001";
      } else {
        setError(res.data.message || "Login failed");
      }
    } catch (err) {
      setError(err.response?.data?.message || "Something went wrong");
    }
  };

  return (
    <div className="container p-5" style={{ maxWidth: "450px" }}>
      <h2 className="mb-4">Log in</h2>

      {error && <div className="alert alert-danger">{error}</div>}

      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label className="form-label">Email</label>
          <input
            type="email"
            name="email"
            className="form-control"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Password</label>
          <input
            type="password"
            name="password"
            className="form-control"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </div>

        <button type="submit" className="btn btn-primary w-100">
          Log in
        </button>
      </form>

      <p className="mt-3">
        New here? <Link to="/signup">Create an account</Link>
      </p>
    </div>
  );
}

export default Login;
