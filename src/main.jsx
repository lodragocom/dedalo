import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext"; // ✅ Importiamo il contesto
import BuilderPage from "./builder-page";
import Catalogo from "./pages/Catalogo";
import Checkout from "./pages/Checkout";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import ProtectedRoute from "./routes/ProtectedRoute"; // ✅ Importiamo il ProtectedRoute
import "./styles/index.css";
import "./builder-registry"; // ✅ Import corretto per registrare i componenti in Builder.io

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter> {/* BrowserRouter deve essere sopra tutto */}
      <AuthProvider> {/* Avvolgi l'intera app con AuthProvider */}
        <Routes>
          {/* Pagine gestite da Builder.io */}
          <Route path="/*" element={<BuilderPage />} />

          {/* Pagine gestite da React */}
          <Route path="/catalogo" element={<Catalogo />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/login" element={<Login />} />

          {/* 🔒 Protezione della Dashboard */}
          <Route path="/dashboard" element={
            <ProtectedRoute> {/* Protegge la Dashboard */}
              <Dashboard />
            </ProtectedRoute>
          } />
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  </React.StrictMode>
);
