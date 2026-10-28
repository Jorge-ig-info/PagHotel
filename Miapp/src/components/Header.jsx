import React from 'react';
import './Header.css';

const Header = ({ onNavigate }) => {
  const handleNavClick = (sectionId) => {
    if (onNavigate) {
      onNavigate(sectionId);
    } else {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <header className="hotel-header">
      {/* Barra superior de anuncios */}
      <div className="top-banner">
        <div className="container banner-content">
          <span>✨ <strong>Promoción de Temporada:</strong> 15% OFF reservando online con cancelación flexible</span>
          <div className="banner-contact">
            <span>📞 +54 9 11 3456-7890</span>
            <span>📍 Av. Costanera 1420</span>
          </div>
        </div>
      </div>

      {/* Navegación Principal */}
      <nav className="main-nav">
        <div className="container nav-container">
          <div className="brand" onClick={() => handleNavClick('inicio')}>
            <span className="brand-icon">🏨</span>
            <div className="brand-text">
              <span className="brand-name">Hotel Costa Serena</span>
              <span className="brand-tagline">Resort & Spa</span>
            </div>
          </div>

          <ul className="nav-menu">
            <li>
              <a href="#inicio" onClick={(e) => { e.preventDefault(); handleNavClick('inicio'); }}>
                Inicio
              </a>
            </li>
            <li>
              <a href="#habitaciones" onClick={(e) => { e.preventDefault(); handleNavClick('habitaciones'); }}>
                Habitaciones (4)
              </a>
            </li>
            <li>
              <a href="#about" onClick={(e) => { e.preventDefault(); handleNavClick('about'); }}>
                Sobre Nosotros
              </a>
            </li>
            <li>
              <a href="#contac" onClick={(e) => { e.preventDefault(); handleNavClick('contac'); }}>
                Contacto
              </a>
            </li>
          </ul>

          <div className="nav-cta">
            <button 
              className="btn btn-primary"
              onClick={() => handleNavClick('habitaciones')}
            >
              Reservar Ahora
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Banner */}
      <div id="inicio" className="hero-section">
        <div className="hero-overlay"></div>
        <div className="container hero-content">
          <span className="hero-badge">⭐ Experiencia 5 Estrellas</span>
          <h1 className="hero-title">Tu Refugio de Lujo Frente al Mar</h1>
          <p className="hero-subtitle">
            Descubre el equilibrio perfecto entre confort, elegancia y tranquilidad. Disfruta de nuestras 4 exclusivas categorías de habitaciones y un servicio de clase mundial.
          </p>

          {/* Buscador rápido de reserva */}
          <div className="booking-widget">
            <div className="widget-field">
              <label>📅 Entrada (Check-in)</label>
              <input type="date" defaultValue="2026-11-01" />
            </div>
            <div className="widget-field">
              <label>📅 Salida (Check-out)</label>
              <input type="date" defaultValue="2026-11-05" />
            </div>
            <div className="widget-field">
              <label>👥 Huéspedes</label>
              <select defaultValue="2">
                <option value="1">1 Huésped (Simple)</option>
                <option value="2">2 Huéspedes (Doble/Suite)</option>
                <option value="4">4 Huéspedes (Familiar)</option>
              </select>
            </div>
            <button 
              className="widget-button"
              onClick={() => handleNavClick('habitaciones')}
            >
              🔍 Ver Habitaciones
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
