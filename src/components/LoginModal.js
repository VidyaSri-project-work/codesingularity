import React, { useState } from "react";
import "./Modal.css";

function LoginModal({ closeModal }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
    const res = await fetch("http://localhost:5000/api/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password })
    });
    const data = await res.json();
    setMessage(data.message);
    if(data.success) closeModal();
  };

  return (
    <div className="modal-backdrop">
      <div className="modal">
        <h2>Login</h2>
        {message && <p>{message}</p>}
        <form onSubmit={handleLogin}>
          <input type="email" placeholder="Email" value={email} onChange={e=>setEmail(e.target.value)} required/>
          <input type="password" placeholder="Password" value={password} onChange={e=>setPassword(e.target.value)} required/>
          <button type="submit">Login</button>
        </form>
        <button className="close-btn" onClick={closeModal}>X</button>
      </div>
    </div>
  );
}

export default LoginModal;
