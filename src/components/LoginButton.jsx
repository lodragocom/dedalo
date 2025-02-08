import { useState } from "react";
import LoginModal from "./LoginModal";

export default function LoginButton() {
  const [showModal, setShowModal] = useState(false);
  const [initialTab, setInitialTab] = useState("login"); // 🔹 Memorizza il tab iniziale

  return (
    <>
      <div className="auth-links">
        <a href="#" onClick={(e) => { e.preventDefault(); setInitialTab("login"); setShowModal(true); }}>
          Login
        </a>
        <a href="#" onClick={(e) => { e.preventDefault(); setInitialTab("register"); setShowModal(true); }}>
          Registrazione
        </a>
      </div>

      {showModal && <LoginModal initialTab={initialTab} onClose={() => setShowModal(false)} />}
    </>
  );
}
