import React, { useState } from 'react';
import Header from './components/Header';
import About from './components/About';
import Contac from './components/Contac';
import Raauter from './components/Raauter';
import './App.css';

function App() {
  const [selectedRoom, setSelectedRoom] = useState(null);

  const handleSelectRoomForBooking = (roomName) => {
    setSelectedRoom(roomName);
    const contacSection = document.getElementById('contac');
    if (contacSection) {
      contacSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleNavigate = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="hotel-app">
      {/* 1. Header con Navegación y Banner Principal */}
      <Header onNavigate={handleNavigate} />

      {/* 2. Raauter (Componente de las 4 Habitaciones del Hotel) */}
      <Raauter onSelectRoomForBooking={handleSelectRoomForBooking} />

      {/* 3. About (Sobre Nosotros y Servicios del Hotel) */}
      <About />

      {/* 4. Contac (Formulario de Contacto y Reserva) */}
      <Contac preselectedRoom={selectedRoom} />

      {/* Footer del Hotel */}
      <footer className="hotel-footer">
        <div className="container footer-content">
          <div className="footer-brand">
            <h3>🏨 Hotel Costa Serena</h3>
            <p>El mejor descanso frente al mar con excelencia y calidad garantizada.</p>
          </div>
          <div className="footer-links">
            <h4>Estructura de la App</h4>
            <ul>
              <li><a href="#inicio">Header (Inicio)</a></li>
              <li><a href="#habitaciones">Raauter (4 Habitaciones)</a></li>
              <li><a href="#about">About (Nosotros)</a></li>
              <li><a href="#contac">Contac (Contacto)</a></li>
            </ul>
          </div>
          <div className="footer-payments">
            <h4>Medios de Pago Aceptados</h4>
            <p>💳 Tarjetas de Crédito / Débito, Transferencia Bancaria y Efectivo al ingresar.</p>
          </div>
        </div>
        <div className="footer-bottom">
          <p>© {new Date().getFullYear()} Hotel Costa Serena - Todos los derechos reservados.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
