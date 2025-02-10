import express from "express";
import cors from "cors";
import multer from "multer";
import path from "path";

const app = express();

// Abilita CORS per tutte le richieste (o solo per l'origine specifica)
app.use(cors({ origin: "http://localhost:5173" }));

app.use(express.json());

// Configura Multer per l'upload dei file CSV
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/"); // Imposta la cartella in cui salvare i file
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname)); // Usa il timestamp per evitare conflitti di nomi
  },
});

const upload = multer({ storage });

// Route per caricare un file CSV
app.post("/upload", upload.single("file"), (req, res) => {
  if (!req.file) {
    return res.status(400).send("Nessun file caricato");
  }

  // Rispondi con il nome del file e altri dettagli
  res.status(200).send({
    message: "File caricato con successo",
    file: req.file,
  });
});

// Per poter accedere ai file dalla cartella 'uploads'
app.use("/uploads", express.static("uploads"));

app.listen(5001, () => {
  console.log("Server avviato su http://localhost:5001");
});
