import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Router.css';

const habitacionesData = [
  {
    id: 1,
    nombre: 'Habitación Individual Clásica',
    tipo: 'simple',
    precio: 45,
    descripcion: 'Diseñada para el viajero independiente o estadías corporativas.',
    imagen: 'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 2,
    nombre: 'Habitación Doble Superior',
    tipo: 'doble',
    precio: 80,
    descripcion: 'La opción perfecta para parejas. Cuenta con balcón privado.',
    imagen: 'https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 3,
    nombre: 'Junior Suite Familiar',
    tipo: 'familiar',
    precio: 130,
    descripcion: 'Espaciosa suite pensada para familias con sala de estar.',
    imagen: 'https://images.unsplash.com/photo-1566665797739-1674de7a421a?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 4,
    nombre: 'Master Suite Presidencial',
    tipo: 'suite',
    precio: 220,
    descripcion: 'Máximo lujo con terraza privada y jacuzzi al aire libre.',
    imagen: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=800&q=80'
  }
];

const RouterHabitaciones = () => {
  const [filtro, setFiltro] = useState('todas');
  const navigate = useNavigate();

  const habitacionesFiltradas = filtro === 'todas'
    ? habitacionesData
    : habitacionesData.filter(h => h.tipo === filtro);

  // Redirige a la ruta /contacto
  const handleReservar = () => {
    navigate('/contacto');
  };

  return (
    <section className="rooms-section">
      <h2>Nuestras Habitaciones</h2>

      <div className="filter-buttons">
        <button onClick={() => setFiltro('todas')}>Todas</button>
        <button onClick={() => setFiltro('simple')}>Individual</button>
        <button onClick={() => setFiltro('doble')}>Doble</button>
        <button onClick={() => setFiltro('familiar')}>Familiar</button>
        <button onClick={() => setFiltro('suite')}>Suite</button>
      </div>

      <div className="rooms-grid">
        {habitacionesFiltradas.map((room) => (
          <div key={room.id} className="room-card">
            <img src={room.imagen} alt={room.nombre} className="room-img" />
            <div className="room-info">
              <h3>{room.nombre}</h3>
              <p className="room-price">${room.precio} / noche</p>
              <p>{room.descripcion}</p>

              <button onClick={handleReservar} className="btn-reserve">
                Reservar
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default RouterHabitaciones;