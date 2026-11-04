import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

function Header() {
  return (
    <header className="hotel-header">
      <nav className="navbar">
        <div className="brand">
          <Link to="/" style={{ textDecoration: 'none', color: 'inherit' }}>
            <h2>Hotel Vasquez</h2>
          </Link>
        </div>

        <ul className="nav-links">
          <li><Link to="/">Inicio</Link></li>
          <li><Link to="/habitaciones">Habitaciones</Link></li>
          <li><Link to="/nosotros">Nosotros</Link></li>
          <li><Link to="/contacto">Contacto</Link></li>
        </ul>

        <Link to="/habitaciones" className="btn-reserve">
          Reservar
        </Link>
      </nav>
    </header>
  );
}

export default Header;