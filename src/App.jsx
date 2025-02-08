import Navbar from "./components/Navbar"; // ✅ Giusto
import Footer from "./components/Footer";
import "./styles/index.css"; // Stili unificati per tutto il sito

function App() {
  return (
    <div className="app-container">
      <Navbar />
      <main>
        <h1>Benvenuto su Dedalo</h1>
        <p>Il tuo e-commerce interattivo con Builder.io e React.</p>
      </main>
      <Footer />
    </div>
  );
}

export default App;
