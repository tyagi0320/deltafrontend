import React, { useState } from "react";
import axios from "axios";

const Register = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage("");

    try {
      const res = await axios.post("http://localhost:5000/register", {
        username,
        password,
      });
      setMessage(res.data.message);
      setUsername("");
      setPassword("");
    } catch (err) {
      if (err.response?.status === 409) {
        setMessage("User exists already");
      } else {
        setMessage("Something went wrong. Please try again.");
      }
    }
  };

  return (
    <div className="min-vh-100 d-flex align-items-center justify-content-center bg-dark">
      <div className="p-4 rounded-3 shadow-lg" style={{
        maxWidth: "400px",
        width: "100%",
        backgroundColor: "#2c3034",
        border: "1px solid #444"
      }}>
        <h1 className="mb-4 text-center text-white fs-3 fw-light">Delta User Registration</h1>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label className="form-label text-white-50">Username</label>
            <input
              type="text"
              className="form-control bg-dark text-white border-secondary"
              required
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Enter username"
            />
          </div>
          <div className="mb-3">
            <label className="form-label text-white-50">Password</label>
            <input
              type="password"
              className="form-control bg-dark text-white border-secondary"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter password"
            />
          </div>
          {message && (
            <div
              className={`alert ${message.includes("exists") ? "alert-warning" : "alert-success"} mt-3`}
              role="alert"
            >
              {message}
            </div>
          )}
          <button 
            type="submit" 
            className="btn btn-primary w-100 mt-3 py-2 fw-bold"
            style={{ backgroundColor: "#0d6efd", border: "none" }}
          >
            Register
          </button>
        </form>
      </div>
    </div>
  );
};

export default Register;