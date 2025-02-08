import { useState } from "react";
import { signInWithGoogle } from "../utils/auth";

export default function LoginModal({ initialTab, onClose }) {
  const [activeTab, setActiveTab] = useState(initialTab || "login"); // 🔹 Mantiene la scheda attiva

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <button className="close-button" onClick={onClose}>✖</button>

        {/* Navigazione tra Login e Registrazione */}
        <div className="modal-tabs">
          <button className={activeTab === "login" ? "active" : ""} onClick={() => setActiveTab("login")}>Login</button>
          <button className={activeTab === "register" ? "active" : ""} onClick={() => setActiveTab("register")}>Registrazione</button>
        </div>

        {/* Contenuto delle Schede */}
        {activeTab === "login" ? (
          <div className="login-form">
            <h2>Accedi</h2>
            <button onClick={signInWithGoogle} className="google-login">
              Accedi con Google
            </button>
          </div>
        ) : (
          <div className="register-form">
            <h2>Registrati</h2>
            <input type="email" placeholder="Email" />
            <input type="password" placeholder="Password" />
            <button className="register-button">Registrati</button>
          </div>
        )}
      </div>
    </div>
  );
}
