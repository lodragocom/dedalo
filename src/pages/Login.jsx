import React from "react"; // ✅ Import necessario
import { signInWithGoogle } from "../utils/auth"; // ✅ Percorso corretto per Firebase auth
import { useAuth } from "../context/AuthContext"; // ✅ Import corretto

export default function Login() {
  const { user, logout } = useAuth();
  
  return (
    <div className="login-page">
      {user ? (
        <>
          <h1>Benvenuto, {user.displayName}!</h1>
          <button onClick={logout}>Logout</button>
        </>
      ) : (
        <>
          <h1>Login</h1>
          <button onClick={signInWithGoogle}>Accedi con Google</button>
        </>
      )}
    </div>
  );
}
