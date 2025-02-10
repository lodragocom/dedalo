import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext"; 
import BuilderPage from "./builder-page";
import Catalogo from "./pages/Catalogo";
import Checkout from "./pages/Checkout";
import Dashboard from "./pages/Dashboard";  // Dashboard separata
import Orders from "./pages/Orders"; 
import Login from "./pages/Login";
import ProtectedRoute from "./routes/ProtectedRoute";   
import "./builder-registry";       // Stili globali React
import "./styles/builder.css";        // Stili per le pagine builder.io
import App from "./App"; // Importa il componente App che contiene Navbar e Footer

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <AuthProvider>
        {/* App.jsx include Navbar e Footer, quindi è il layout globale */}
        <App>
          <Routes>
            {/* Pagine gestite da Builder.io */}
            <Route path="/*" element={<BuilderPage />} />

            {/* Pagine gestite da React */}
            <Route path="/login" element={<Login />} />
            <Route path="/checkout" element={<Checkout />} />

            {/* Protezione della Dashboard */}
            <Route path="/dashboard" element={<ProtectedRoute><Dashboard /></ProtectedRoute>}>
              {/* Le rotte figlie */}
              <Route path="catalogo" element={<Catalogo />} />
              <Route path="orders" element={<Orders />} />
            </Route>
          </Routes>
        </App>
      </AuthProvider>
    </BrowserRouter>
  </React.StrictMode>
);
