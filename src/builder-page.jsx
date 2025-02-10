import { BuilderComponent, builder } from "@builder.io/react";
import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useAuth } from "./context/AuthContext";
import "./styles/builder.css";

builder.init(import.meta.env.VITE_PUBLIC_BUILDER_KEY);

export default function BuilderPage() {
  const [content, setContent] = useState(null);
  const { page } = useParams();
  const navigate = useNavigate();
  const { user, logout } = useAuth(); // Ho rimosso 'signInWithGoogle' dato che non serve

  useEffect(() => {
    document.getElementById("root").classList.add("builder-root");
    builder
      .get("page", { userAttributes: { urlPath: "/" + (page || "") } })
      .toPromise()
      .then(setContent);

    return () => {
      document.getElementById("root").classList.remove("builder-root");
    };
  }, [page]);

  // Gestione del reindirizzamento se l'utente è già loggato
  useEffect(() => {
    if (user) {
      if (window.location.pathname !== "/dashboard") {
        navigate("/dashboard");  // Reindirizza a /dashboard se loggato
      }
    }
  }, [user, navigate]);

  if (!content) {
    return <h1>Pagina non trovata</h1>;
  }

  return (
    <div>
      {user ? (
        <div>
          <p>Ciao, {user.displayName}</p>
          <img src={user.photoURL} alt={user.displayName} />
          <button onClick={logout}>Logout</button> {/* Mantieni solo il bottone logout */}
        </div>
      ) : (
        <div>
           {/* Solo il messaggio se non loggato */}
        </div>
      )}

      <BuilderComponent model="page" content={content} />
    </div>
  );
}
