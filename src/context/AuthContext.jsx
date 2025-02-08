import { createContext, useContext, useEffect, useState } from "react";
import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";
import { initializeApp } from "firebase/app";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { useNavigate } from "react-router-dom"; // Aggiungi l'import di useNavigate

// Configurazione Firebase
const firebaseConfig = {
  apiKey: "AIzaSyDKGWb9jO5RNajJY6-Zi-Nn3qbjrRGCw1w",
  authDomain: "dedalo-f6374.firebaseapp.com",
  projectId: "dedalo-f6374",
  storageBucket: "dedalo-f6374.appspot.com",
  messagingSenderId: "54083871764",
  appId: "1:54083871764:web:08d4d10eb37f7f03b1041b",
  measurementId: "G-MEASUREMENT_ID",
};

// Inizializza Firebase
const app = initializeApp(firebaseConfig);
const authInstance = getAuth(app);
const provider = new GoogleAuthProvider();

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const navigate = useNavigate(); // Usa useNavigate per il reindirizzamento

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(authInstance, (currentUser) => {
      console.log("Utente autenticato:", currentUser); // 🔹 Log per debug
      setUser(currentUser);
    });

    return () => unsubscribe();
  }, []);

  const signInWithGoogle = () => signInWithPopup(authInstance, provider);

  const logout = async () => {
    await signOut(authInstance); // Effettua il logout
    navigate("/"); // Redirige alla home dopo il logout
  };

  return (
    <AuthContext.Provider value={{ user, signInWithGoogle, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}
