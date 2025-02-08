import { BuilderComponent, builder } from "@builder.io/react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useAuth } from "./context/AuthContext"; // Dati utente Firebase/Auth0


builder.init(import.meta.env.VITE_PUBLIC_BUILDER_KEY);

export default function BuilderPage() {
  const [content, setContent] = useState(null);
  const { page } = useParams();

  useEffect(() => {
    document.getElementById("root").classList.add("builder-root"); // Aggiunge la classe
    builder
      .get("page", { userAttributes: { urlPath: "/" + (page || "") } })
      .toPromise()
      .then(setContent);

    return () => {
      document.getElementById("root").classList.remove("builder-root"); // Rimuove la classe quando si esce
    };
  }, [page]);

  if (!content) {
    return <h1>Pagina non trovata</h1>;
  }

  return <BuilderComponent model="page" content={content} />;
}
