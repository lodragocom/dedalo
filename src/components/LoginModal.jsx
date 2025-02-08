import { useState } from "react";
import { signInWithGoogle } from "../utils/auth"; // Login con Google
import { signInWithEmailAndPassword, createUserWithEmailAndPassword } from "firebase/auth"; // Login e registrazione
import auth from "../utils/auth"; // Configurazione Firebase

export default function LoginModal({ initialTab, onClose }) {
  const [activeTab, setActiveTab] = useState(initialTab || "login"); // Tab attivo (Login o Registrazione)
  const [email, setEmail] = useState(""); // Stato per l'email
  const [password, setPassword] = useState(""); // Stato per la password
  const [user, setUser] = useState(null); // Stato per l'utente
  const [loading, setLoading] = useState(false); // Stato di caricamento
  const [error, setError] = useState(null); // Stato per gli errori

  // Funzione per login con Google
  const handleLoginWithGoogle = async () => {
    setLoading(true);
    try {
      const result = await signInWithGoogle();
      const user = result.user;
      setUser(user);
      console.log("User info:", user);
      onClose();
    } catch (error) {
      console.error("Error during Google login:", error);
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  // Funzione per login con email e password
  const handleLoginWithEmailPassword = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      setUser(userCredential.user);
      console.log("User info:", userCredential.user);
      onClose();
    } catch (error) {
      console.error("Error during email login:", error);
      setError("Credenziali errate. Per favore, riprova.");
    } finally {
      setLoading(false);
    }
  };

  // Funzione per la registrazione con email e password
  const handleRegisterWithEmailPassword = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      setUser(userCredential.user);
      console.log("User info:", userCredential.user);
      onClose(); // Chiudi la modale dopo la registrazione
    } catch (error) {
      console.error("Error during registration:", error);
      setError("Errore durante la registrazione. Per favore, riprova.");
    } finally {
      setLoading(false);
    }
  };

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
            <button
              onClick={handleLoginWithGoogle}
              className="google-login"
              disabled={loading}
            >
              {loading ? "Caricamento..." : "Accedi con Google"}
            </button>

            <form onSubmit={handleLoginWithEmailPassword}>
              <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              {error && <div className="error-message">{error}</div>}
              <button
                type="submit"
                className="email-login"
                disabled={loading}
              >
                {loading ? "Caricamento..." : "Accedi con Email"}
              </button>
            </form>

            <div className="forgot-password">
              <a href="/forgot-password" onClick={(e) => { e.preventDefault(); alert("Funzionalità di recupero password in arrivo!"); }}>
                Hai dimenticato la password?
              </a>
            </div>

            {user && (
              <div className="user-info">
                <p>Ciao, {user.displayName}</p>
                <img src={user.photoURL} alt={user.displayName} />
              </div>
            )}
          </div>
        ) : (
          <div className="register-form">
            <h2>Registrati</h2>
            <form onSubmit={handleRegisterWithEmailPassword}>
              <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              {error && <div className="error-message">{error}</div>}
              <button type="submit" className="register-button" disabled={loading}>
                {loading ? "Caricamento..." : "Registrati"}
              </button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
}
