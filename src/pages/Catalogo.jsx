import React, { useState } from "react";
import Papa from "papaparse";

export default function Catalogo() {
  const [prodotti, setProdotti] = useState([]);
  const [loading, setLoading] = useState(false);
  const [errore, setErrore] = useState(null);
  const [fileName, setFileName] = useState("");

  // Funzione per caricare il file CSV
  const handleFileUpload = (e) => {
    const file = e.target.files[0];

    if (file && file.type === "text/csv") {
      setLoading(true);
      setFileName(file.name); // Visualizza il nome del file

      const formData = new FormData();
      formData.append("file", file);

      // Invia il file al server
      fetch("http://localhost:5001/upload", {
        method: "POST",
        body: formData,
      })
        .then((res) => res.json())
        .then((data) => {
          console.log("File caricato con successo:", data);
          // Una volta caricato, prendi il percorso del file caricato e carica il CSV
          caricaCSV(`http://localhost:5001/uploads/${data.file.filename}`);
        })
        .catch((err) => {
          console.error("Errore nel caricamento del file:", err);
          setErrore("Errore nel caricamento del file");
          setLoading(false);
        });
    } else {
      setErrore("Seleziona un file CSV valido.");
    }
  };

  // Funzione per caricare il CSV dal percorso
  const caricaCSV = (filePath) => {
    fetch(filePath)
      .then((res) => res.text())
      .then((csv) => {
        Papa.parse(csv, {
          header: true,
          skipEmptyLines: true,
          complete: (result) => {
            setProdotti(result.data);
            setLoading(false);
          },
        });
      })
      .catch((err) => {
        console.error("Errore nel caricamento del CSV:", err);
        setErrore("Errore nel caricamento del CSV");
        setLoading(false);
      });
  };

  return (
    <div className="dashboard-container">
      <h1>Catalogo Prodotti</h1>

      <input type="file" accept=".csv" onChange={handleFileUpload} />

      {loading && <div>Caricamento in corso...</div>}
      {errore && <div style={{ color: "red" }}>{errore}</div>}
      {fileName && <div>File caricato: {fileName}</div>}

      <ul>
        {prodotti.map((prodotto, index) => (
          <li key={index}>
            {prodotto.nome} - {prodotto.prezzo}€
          </li>
        ))}
      </ul>
    </div>
  );
}
