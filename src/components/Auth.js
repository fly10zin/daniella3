import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Auth.css";

function Auth({ setIsAuthenticated }) {
  const [name, setName] = useState("");
  const [dob, setDob] = useState("");
  const navigate = useNavigate();

  const handleLogin = () => {
    const correctName = "CHOKTTER"; // Retrieve from .env
    const correctDob = "2003-02-11"; // Retrieve from .env

    if (name === correctName && dob === correctDob) {
      setIsAuthenticated(true); // ✅ Set authentication state to true
      navigate("/home"); // ✅ Redirect to Home.js
    } else {
      alert("Incorrect name or date of birth. Are you really Daniella?");
    }
  };

  return (
    <div className="auth-container">
      <h2>Designed Only for Daniella</h2>
      <p className="name">Enter My Last Name (All CAPs)</p>
      <input
        type="text"
        placeholder="Enter Tenzin's Last Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <p className="name">Date Of Birth (Mine)</p>
      <input type="date" value={dob} onChange={(e) => setDob(e.target.value)} />
      <button
        onClick={handleLogin}
        style={{
          padding: ".7rem 1rem",
          fontSize: "1.1rem",
          cursor: "pointer",
        }}
      >
        Login
      </button>
    </div>
  );
}

export default Auth;
