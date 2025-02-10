import React from "react";
import { useAuth } from "../context/AuthContext";
import { Outlet, useLocation } from "react-router-dom"; // ✅ Importiamo Outlet e useLocation

function Dashboard() {
  const { user, logout } = useAuth();
  const location = useLocation(); // ✅ Controlliamo il percorso attuale

  return (
    <div className="dashboard-container">
      {/* Mostra il messaggio di benvenuto SOLO se siamo esattamente su /dashboard */}
      {location.pathname === "/dashboard" && (
        <div>
          <h2>Benvenuto nella tua Dashboard</h2>
          {user && (
            <>
              <p>Ciao, {user.displayName}</p>
              <button onClick={logout}>Logout</button>
            </>
          )}
        </div>
      )}

      {/* Questo renderizzerà Catalogo, Orders o altre sottopagine */}
      <Outlet />
    </div>
  );
}

export default Dashboard;
