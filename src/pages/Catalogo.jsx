import React, { useEffect, useState } from "react";

export default function Catalogo() {
  const [prodotti, setProdotti] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/api/prodotti")
      .then((res) => res.json())
      .then((data) => setProdotti(data))
      .catch((err) => console.error("Errore:", err));
  }, []);

  return (
    <div>
      <h1>Catalogo Prodotti</h1>
      <ul>
        {prodotti.map((prodotto) => (
          <li key={prodotto.id}>
            {prodotto.nome} - {prodotto.prezzo}€
          </li>
        ))}
      </ul>
    </div>
  );
}
