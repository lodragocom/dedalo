import Navbar from "./components/Navbar"; // Barra di navigazione
import Footer from "./components/Footer"; // Piè di pagina
import { useLocation } from "react-router-dom"; // Importa useLocation
import Sidebar from "./components/Dashboard/Sidebar"; // Barra laterale
import "./styles/index.css"; 
// App.jsx contiene Navbar e Footer per ogni pagina, eccetto quelle gestite da Builder.io
function App({ children }) {
  const location = useLocation();

  // Se la pagina corrente è quella di Builder.io (Home), non renderizzare Navbar e Footer
  const isBuilderPage = location.pathname === "/"; // Imposta questa condizione per Builder.io (o altre pagine che gestisci tramite Builder.io)

  // Controlla se la pagina è relativa alla dashboard
  const isDashboardPage = location.pathname.includes("/dashboard");

  return (
    <div className="app-container">
      {/* Se non siamo nella Home di Builder.io, rendi Navbar e Footer */}
      {!isBuilderPage && <Navbar />} {/* Header fisso */}
      
      <div className="main-content">
        {/* Mostra la Sidebar solo se siamo nella Dashboard */}
        {isDashboardPage && <Sidebar />}
        
        {/* Il contenuto che cambierà sarà caricato tramite il routing */}
        <main>{children}</main>
      </div>
      
      {/* Mostra il Footer solo se non siamo nella Home di Builder.io */}
      {!isBuilderPage && <Footer />} {/* Footer fisso */}
    </div>
  );
}

export default App;

