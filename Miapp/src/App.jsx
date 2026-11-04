import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Header from './components/Header';
import About from './components/About';
import RouterHabitaciones from './components/Router';
import Contac from './components/Contact';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/habitaciones" element={<RouterHabitaciones />} />
        <Route path="/nosotros" element={<About />} />
        <Route path="/contacto" element={<Contac />} />
      </Routes>
    </Router>
  );
}

// Componente simple para la página de Inicio
function Home() {
  return (
    <div style={{ padding: '40px', textAlign: 'center' }}>
      <h2>Bienvenido a Hotel Vasquez</h2>
      <p>Selecciona una opción del menú para navegar por el sitio.</p>
    </div>
  );
}

export default App;