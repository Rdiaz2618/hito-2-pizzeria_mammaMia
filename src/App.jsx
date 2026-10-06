import Navbar from './componentes/Navbar';
import Registro from './componentes/Registro';
import Footer from './componentes/Footer';
import './App.css';

function App() {
  return (
    <div className="d-flex flex-column min-vh-100">
      <Navbar />
      {/* <Home /> */}
      <main className="pagina-autenticacion">
        <Registro />
      </main>
      <Footer />
    </div>
  );
}

export default App;
