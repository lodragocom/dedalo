import express from "express";
import cors from "cors";

const app = express();
app.use(cors());
app.use(express.json());

const prodotti = [
  { id: 1, nome: "Prodotto 1", prezzo: 29.99 },
  { id: 2, nome: "Prodotto 2", prezzo: 49.99 }
];

app.get("/api/prodotti", (req, res) => {
  res.json(prodotti);
});

app.listen(5000, () => console.log("Server avviato su http://localhost:5000"));
