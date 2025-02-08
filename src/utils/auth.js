// Importa le funzioni necessarie dai pacchetti Firebase
import { initializeApp, getApp, getApps } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup, signOut, onAuthStateChanged } from "firebase/auth";

// La configurazione di Firebase con la tua chiave API
const firebaseConfig = {
  apiKey: "AIzaSyDKGWb9jO5RNajJY6-Zi-Nn3qbjrRGCw1w",  // La tua Web API Key
  authDomain: "dedalo-f6374.firebaseapp.com",       // Questo è l'ID del tuo progetto
  projectId: "dedalo-f6374",                        // ID del progetto
  storageBucket: "dedalo-f6374.appspot.com",        // Storage del progetto
  messagingSenderId: "54083871764",                 // Sender ID
  appId: "1:54083871764:web:08d4d10eb37f7f03b1041b", // Il tuo App ID (trovi questa info nella console Firebase)
  measurementId: "G-MEASUREMENT_ID"                 // Se hai Google Analytics abilitato
};

// Inizializza Firebase solo se non è già stato inizializzato
let app;
if (getApps().length === 0) {
  app = initializeApp(firebaseConfig); // Solo inizializzazione se non esiste una app Firebase
} else {
  app = getApp(); // Usa l'istanza esistente
}

// Inizializza l'autenticazione Firebase
const auth = getAuth(app);

// Configura il provider di Google
const provider = new GoogleAuthProvider();
provider.setCustomParameters({
  prompt: "select_account"  // Forza la selezione dell'account ogni volta
});

// Funzione per il login con Google
export const signInWithGoogle = () => {
  signInWithPopup(auth, provider)
    .then((result) => {
      console.log("Google sign-in result: ", result); // Log completo della risposta
      const user = result?.user;  // Usa l'operatore opzionale per evitare l'errore
      if (user) {
        console.log("User info: ", user);
      } else {
        console.error("User info is undefined");
      }
    })
    .catch((error) => {
      console.error("Error during Google sign-in:", error);
    });
};

// Funzione per il logout
export const logout = () => {
  return signOut(auth)
    .then(() => {
      console.log("User signed out successfully.");
    })
    .catch((error) => {
      console.error("Error during sign-out:", error); // Gestisci errori di logout
    });
};

// Funzione per monitorare lo stato di autenticazione dell'utente
onAuthStateChanged(auth, (user) => {
  if (user) {
    console.log("User is logged in: ", user);
  } else {
    console.log("No user is logged in");
  }
});

export default auth;
