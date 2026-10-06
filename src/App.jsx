import Navbar from './componentes/Navbar';
import Registro from './componentes/Registro';
import InicioSesion from './componentes/InicioSesion';
import Footer from './componentes/Footer';
import './App.css';

function App() {
  return (
    <div className="d-flex flex-column min-vh-100">
      <Navbar />
      <main className="pagina-autenticacion">
        <Registro />
        <InicioSesion />
      </main>
      <Footer />
    </div>
  );
}

export default App;
