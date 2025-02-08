import { initializeApp } from "firebase/app";
import { getAuth, signInWithPopup, GoogleAuthProvider, signOut } from "firebase/auth";

// Configurazione Firebase (sostituisci con i tuoi dati)
const firebaseConfig = {
  apiKey: "TUA_API_KEY",
  authDomain: "TUA_AUTH_DOMAIN",
  projectId: "TUA_PROJECT_ID",
  storageBucket: "TUA_STORAGE_BUCKET",
  messagingSenderId: "TUA_MESSAGING_SENDER_ID",
  appId: "TUA_APP_ID"
};

// Inizializza Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

// Funzioni di autenticazione
export const signInWithGoogle = () => signInWithPopup(auth, provider);
export const logout = () => signOut(auth);
export default auth;
