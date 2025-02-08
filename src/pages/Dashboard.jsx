// src/pages/Dashboard.jsx

import { useAuth } from "../context/AuthContext"; // Importa il contesto
import { useNavigate } from "react-router-dom";  // Importa useNavigate

export default function Dashboard() {
  const { logout, user } = useAuth(); // Usa il contesto per ottenere l'utente e il logout
  const navigate = useNavigate(); // Usa useNavigate per il reindirizzamento

  const handleLogout = () => {
    logout(); // Chiama la funzione logout
    navigate("/"); // Redirigi alla home manualmente, se necessario
  };

  return (
    <div>
      <h1>Benvenuto, {user ? user.displayName : "utente"}</h1>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
}
