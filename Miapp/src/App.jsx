import { HashRouter as Router, Routes, Route, Link } from 'react-router-dom';

import Header from './components/Header';
import About from './components/About';
import RouterHabitaciones from './components/Router';
import Contac from './components/Contact';

function Home() {
  return (
    <div style={{ padding: '60px 20px', textAlign: 'center', maxWidth: '800px', margin: '0 auto' }}>
      <span style={{ 
        display: 'inline-block', 
        padding: '6px 14px', 
        background: '#e8efe9', 
        color: '#1b3b36', 
        borderRadius: '20px', 
        fontSize: '14px', 
        fontWeight: '600',
        marginBottom: '16px' 
      }}>
        Hospitalidad y Confort
      </span>
      <h1 style={{ fontSize: '2.5rem', color: '#1b3b36', marginBottom: '16px' }}>
        Bienvenido a Hotel Vasquez
      </h1>
      <p style={{ fontSize: '1.1rem', color: '#5f706a', lineHeight: '1.6', marginBottom: '30px' }}>
        Descubre un espacio diseñado para tu descanso. Contamos con 4 habitaciones exclusivas, atención personalizada y la mejor ubicación.
      </p>
      <div style={{ display: 'flex', gap: '14px', justifyContent: 'center', flexWrap: 'wrap' }}>
        <Link 
          to="/habitaciones" 
          style={{ 
            backgroundColor: '#1b3b36', 
            color: '#ffffff', 
            padding: '12px 24px', 
            borderRadius: '6px', 
            textDecoration: 'none', 
            fontWeight: '600' 
          }}
        >
          Ver Nuestras 4 Habitaciones
        </Link>
        <Link 
          to="/contacto" 
          style={{ 
            backgroundColor: '#c4734a', 
            color: '#ffffff', 
            padding: '12px 24px', 
            borderRadius: '6px', 
            textDecoration: 'none', 
            fontWeight: '600' 
          }}
        >
          Contactar Recepción
        </Link>
      </div>
    </div>
  );
}

function App() {
  return (
    <Router>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/habitaciones" element={<RouterHabitaciones />} />
          <Route path="/nosotros" element={<About />} />
          <Route path="/contacto" element={<Contac />} />
        </Routes>
      </main>
    </Router>
  );
}

export default App;
