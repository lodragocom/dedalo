// src/routes/ProtectedRoute.jsx

import { Navigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext"; // Importa il contesto di autenticazione

export default function ProtectedRoute({ children }) {
  const { user } = useAuth(); // Ottieni l'utente dal contesto

  if (!user) {
    // Se non c'è un utente, redirigi alla pagina di login
    return <Navigate to="/login" />;
  }

  // Se l'utente è autenticato, mostra il contenuto protetto
  return children;
}
