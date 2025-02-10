import React from "react";
import { Link } from "react-router-dom"; // Per la navigazione

const Sidebar = () => {
  return (
    <div className="sidebar">
      <h2>Dashboard</h2>
      <ul>
        <li>
          <Link to="/dashboard/catalogo">📦 Catalogo</Link> {/* ✅ Percorso corretto */}
        </li>
        <li>
          <Link to="/dashboard/orders">📜 Ordini</Link> {/* ✅ Percorso corretto */}
        </li>
        <li>
          <Link to="/dashboard/settings">⚙️ Impostazioni</Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
