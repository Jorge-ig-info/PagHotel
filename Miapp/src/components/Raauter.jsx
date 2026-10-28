import React, { useState } from 'react';
import './Raauter.css';

// 4 Habitaciones del Hotel
const habitacionesData = [
  {
    id: 1,
    nombre: 'Habitación Individual Clásica',
    tipo: 'simple',
    capacidad: '1 Huésped',
    cama: '1 Cama Individual (Plaza y media)',
    superficie: '22 m²',
    precio: 45,
    descripcion: 'Diseñada para el viajero independiente o estadías corporativas. Equipada con escritorio ergonómico, conexión a internet de alta velocidad y un silencioso ambiente para un descanso reparador.',
    amenidades: ['Wi-Fi 500 Mbps', 'Smart TV 43"', 'Aire Acondicionado', 'Baño Privado con Ducha', 'Desayuno Incluido', 'Caja Fuerte'],
    imagen: 'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?auto=format&fit=crop&w=800&q=80',
    disponible: true
  },
  {
    id: 2,
    nombre: 'Habitación Doble Superior',
    tipo: 'doble',
    capacidad: '2 Huéspedes',
    cama: '1 Cama Queen Size',
    superficie: '32 m²',
    precio: 80,
    descripcion: 'La opción perfecta para parejas. Cuenta con un hermoso balcón privado con vista a los jardines tropicales, cafetera Nespresso de cortesía y acabados en madera cálida.',
    amenidades: ['Balcón con Vista', 'Cama Queen Size', 'Frigobar Surtido', 'Cafetera Nespresso', 'Smart TV 50"', 'Amenidades de Baño Premium'],
    imagen: 'https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=800&q=80',
    disponible: true
  },
  {
    id: 3,
    nombre: 'Junior Suite Familiar',
    tipo: 'familiar',
    capacidad: '4 Huéspedes',
    cama: '1 Cama King + 2 Camas Twin',
    superficie: '50 m²',
    precio: 130,
    descripcion: 'Espaciosa suite pensada en familias. Posee dos ambientes conectados, sala de estar independiente, microondas, frigobar grande y dos baños completos para máxima comodidad.',
    amenidades: ['2 Ambientes Conectados', '2 Baños Completos', 'Sala de Estar', 'Microondas y Frigobar', 'Juegos de Mesa y Streaming', 'Bañera'],
    imagen: 'https://images.unsplash.com/photo-1566665797739-1674de7a421a?auto=format&fit=crop&w=800&q=80',
    disponible: true
  },
  {
    id: 4,
    nombre: 'Master Suite Presidencial',
    tipo: 'suite',
    capacidad: '2 Huéspedes',
    cama: '1 Cama King Size Ultra Confort',
    superficie: '75 m²',
    precio: 220,
    descripcion: 'Nuestra joya arquitectónica. Una suite de máximo lujo con terraza privada panorámica, jacuzzi al aire libre con vista al océano, cava de vinos selectos y servicio de mayordomo privado 24hs.',
    amenidades: ['Terraza Privada con Jacuzzi', 'Vista Panorámica al Mar', 'Cava de Vinos de Cortesía', 'Servicio de Mayordomo', 'Baño de Mármol con Sauna', 'Check-in VIP'],
    imagen: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=800&q=80',
    disponible: true
  }
];

const Raauter = ({ onSelectRoomForBooking }) => {
  const [filtroActivo, setFiltroActivo] = useState('todas');
  const [habitacionModal, setHabitacionModal] = useState(null);
  const [reservaConfirmada, setReservaConfirmada] = useState(null);

  // Filtrado de las 4 habitaciones
  const habitacionesFiltradas = filtroActivo === 'todas'
    ? habitacionesData
    : habitacionesData.filter(h => h.tipo === filtroActivo);

  const handleAbrirDetalles = (hab) => {
    setHabitacionModal(hab);
  };

  const handleCerrarModal = () => {
    setHabitacionModal(null);
  };

  const handleReservarClick = (hab) => {
    if (onSelectRoomForBooking) {
      onSelectRoomForBooking(hab.nombre);
    } else {
      setReservaConfirmada(`¡Excelente! Has seleccionado la ${hab.nombre} ($${hab.precio}/noche). Dirígete al formulario de Contacto para finalizar tu reserva.`);
      setTimeout(() => {
        const contactSection = document.getElementById('contac');
        if (contactSection) contactSection.scrollIntoView({ behavior: 'smooth' });
      }, 1500);
    }
  };

  return (
    <section id="habitaciones" className="hotel-raauter">
      <div className="container">
        {/* Encabezado */}
        <div className="section-header text-center">
          <span className="section-subtitle">Nuestras 4 Habitaciones</span>
          <h2 className="section-title">Encuentra Tu Habitación Ideal</h2>
          <div className="divider"></div>
          <p className="section-description">
            Descubre nuestra selección de 4 habitaciones exclusivas. Cada espacio ha sido decorado para ofrecer confort, elegancia y vistas inolvidables.
          </p>
        </div>

        {/* Notificación de Reserva */}
        {reservaConfirmada && (
          <div className="alert-reserva">
            <span>🎉 {reservaConfirmada}</span>
            <button onClick={() => setReservaConfirmada(null)}>✕</button>
          </div>
        )}

        {/* Botones de Navegación / Filtro entre las 4 habitaciones */}
        <div className="raauter-nav-tabs">
          <button 
            className={`tab-btn ${filtroActivo === 'todas' ? 'active' : ''}`}
            onClick={() => setFiltroActivo('todas')}
          >
            Todas las Habitaciones (4)
          </button>
          <button 
            className={`tab-btn ${filtroActivo === 'simple' ? 'active' : ''}`}
            onClick={() => setFiltroActivo('simple')}
          >
            1. Individual
          </button>
          <button 
            className={`tab-btn ${filtroActivo === 'doble' ? 'active' : ''}`}
            onClick={() => setFiltroActivo('doble')}
          >
            2. Doble Superior
          </button>
          <button 
            className={`tab-btn ${filtroActivo === 'familiar' ? 'active' : ''}`}
            onClick={() => setFiltroActivo('familiar')}
          >
            3. Junior Suite Familiar
          </button>
          <button 
            className={`tab-btn ${filtroActivo === 'suite' ? 'active' : ''}`}
            onClick={() => setFiltroActivo('suite')}
          >
            4. Master Presidencial
          </button>
        </div>

        {/* Cuadrícula de las 4 Habitaciones */}
        <div className="rooms-grid">
          {habitacionesFiltradas.map((room) => (
            <div key={room.id} className="room-card">
              <div className="room-image-wrapper">
                <img src={room.imagen} alt={room.nombre} className="room-img" />
                <span className="room-badge">Habitación #{room.id}</span>
                <span className="room-price-tag">
                  <strong>${room.precio}</strong> <small>/ noche</small>
                </span>
              </div>

              <div className="room-body">
                <div className="room-meta">
                  <span>👥 {room.capacidad}</span>
                  <span>📐 {room.superficie}</span>
                </div>
                <h3 className="room-title">{room.nombre}</h3>
                <p className="room-bed">🛏️ {room.cama}</p>
                <p className="room-excerpt">{room.descripcion.slice(0, 115)}...</p>

                {/* Amenidades de muestra */}
                <div className="room-amenities-tags">
                  {room.amenidades.slice(0, 3).map((amenity, idx) => (
                    <span key={idx} className="amenity-tag">✓ {amenity}</span>
                  ))}
                  {room.amenidades.length > 3 && (
                    <span className="amenity-tag-more">+{room.amenidades.length - 3} más</span>
                  )}
                </div>

                {/* Acciones */}
                <div className="room-actions">
                  <button 
                    className="btn btn-outline"
                    onClick={() => handleAbrirDetalles(room)}
                  >
                    Ver Detalles
                  </button>
                  <button 
                    className="btn btn-primary"
                    onClick={() => handleReservarClick(room)}
                  >
                    Reservar
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Modal de Detalle de Habitación */}
        {habitacionModal && (
          <div className="modal-backdrop" onClick={handleCerrarModal}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
              <button className="modal-close-btn" onClick={handleCerrarModal}>✕</button>
              <div className="modal-grid">
                <div className="modal-img-container">
                  <img src={habitacionModal.imagen} alt={habitacionModal.nombre} />
                  <div className="modal-img-badge">Habitación #{habitacionModal.id}</div>
                </div>
                <div className="modal-info">
                  <span className="modal-price">${habitacionModal.precio} / noche</span>
                  <h3 className="modal-title">{habitacionModal.nombre}</h3>
                  <div className="modal-specs">
                    <span>👥 {habitacionModal.capacidad}</span>
                    <span>📐 {habitacionModal.superficie}</span>
                    <span>🛏️ {habitacionModal.cama}</span>
                  </div>
                  <p className="modal-desc">{habitacionModal.descripcion}</p>
                  
                  <h4>Servicios y Amenidades Incluidos:</h4>
                  <ul className="modal-amenities-list">
                    {habitacionModal.amenidades.map((am, i) => (
                      <li key={i}>✨ {am}</li>
                    ))}
                  </ul>

                  <button 
                    className="btn btn-primary modal-action-btn"
                    onClick={() => {
                      handleReservarClick(habitacionModal);
                      handleCerrarModal();
                    }}
                  >
                    Confirmar Selección de esta Habitación
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Raauter;
