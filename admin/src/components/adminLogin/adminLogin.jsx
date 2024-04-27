import React, { useState } from "react";
import axios from "axios";
import './adminLogin.css';

const AdminLoginForm = ({ setLoggedIn, url }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(`${url}/api/admin/login`, { email, password });
      const { token } = response.data;
      localStorage.setItem("adminToken", token);
      setLoggedIn(true); // Set loggedIn state to true upon successful login
    } catch (error) {
      setError("Invalid email or password.");
    }
  };

  return (
    <div>
      <h2 className="admin-header">Admin Login</h2>
      {error && <p>{error}</p>}
      <form className="admin-form" onSubmit={handleSubmit}>
        <div>
          <label className="email-label">Email:</label>
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
        </div>
        <div>
          <label>Password:</label>
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default AdminLoginForm;
