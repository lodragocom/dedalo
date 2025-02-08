import { BuilderComponent, builder } from "@builder.io/react";
import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useAuth } from "./context/AuthContext";

builder.init(import.meta.env.VITE_PUBLIC_BUILDER_KEY);

export default function BuilderPage() {
  const [content, setContent] = useState(null);
  const { page } = useParams();
  const navigate = useNavigate();
  const { user, signInWithGoogle, logout } = useAuth();

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
          <button onClick={logout}>Logout</button>
        </div>
      ) : (
        <div>
          <p>Non sei loggato</p>
          <button onClick={signInWithGoogle}>Accedi con Google</button>
        </div>
      )}

      <button onClick={() => navigate("/")}>Torna alla Home</button>

      <BuilderComponent model="page" content={content} />
    </div>
  );
}
