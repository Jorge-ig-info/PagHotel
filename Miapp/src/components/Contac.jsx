import React, { useState } from 'react';
import './Contac.css';

const Contac = ({ preselectedRoom }) => {
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    telefono: '',
    habitacion: preselectedRoom || 'Habitación Doble Superior',
    noches: '2',
    mensaje: ''
  });

  const [enviado, setEnviado] = useState(false);

  // Actualizar si cambia la habitación preseleccionada desde Raauter
  React.useEffect(() => {
    if (preselectedRoom) {
      setFormData(prev => ({ ...prev, habitacion: preselectedRoom }));
    }
  }, [preselectedRoom]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.nombre || !formData.email) {
      alert('Por favor completa al menos tu nombre y correo electrónico.');
      return;
    }
    setEnviado(true);
  };

  const handleReset = () => {
    setEnviado(false);
    setFormData({
      nombre: '',
      email: '',
      telefono: '',
      habitacion: 'Habitación Doble Superior',
      noches: '2',
      mensaje: ''
    });
  };

  return (
    <section id="contac" className="hotel-contac">
      <div className="container">
        {/* Encabezado de Sección */}
        <div className="section-header text-center">
          <span className="section-subtitle">Estamos a tu Disposición</span>
          <h2 className="section-title">Contáctanos & Reserva</h2>
          <div className="divider"></div>
          <p className="section-description">
            ¿Tienes alguna consulta o deseas reservar una de nuestras 4 habitaciones? Envíanos tu mensaje y nuestro equipo de conserjería te responderá a la brevedad.
          </p>
        </div>

        <div className="contac-grid">
          {/* Información de Contacto Directo */}
          <div className="contac-info-panel">
            <div className="info-card-header">
              <h3>Información del Hotel</h3>
              <p>Ven a disfrutar de una estadía única en Hotel Costa Serena.</p>
            </div>

            <div className="info-items-list">
              <div className="info-item">
                <div className="info-icon">📍</div>
                <div>
                  <strong>Dirección:</strong>
                  <p>Av. Costanera 1420, Playa Serena, CP 7600</p>
                </div>
              </div>

              <div className="info-item">
                <div className="info-icon">📞</div>
                <div>
                  <strong>Teléfono Directo / WhatsApp:</strong>
                  <p>+54 9 11 3456-7890 / (0223) 456-7890</p>
                </div>
              </div>

              <div className="info-item">
                <div className="info-icon">✉️</div>
                <div>
                  <strong>Correo Electrónico:</strong>
                  <p>reservas@hotelcostaserena.com</p>
                </div>
              </div>

              <div className="info-item">
                <div className="info-icon">🕒</div>
                <div>
                  <strong>Horario de Recepción:</strong>
                  <p>Abierto 24 horas / 365 días al año</p>
                  <small className="info-checkin-badge">Check-in: 14:00 | Check-out: 11:00</small>
                </div>
              </div>
            </div>

            {/* Tarjeta de Ubicación / Mapa */}
            <div className="map-placeholder-card">
              <div className="map-inner">
                <span className="map-pin">📍</span>
                <span>Frente al mar y a 5 minutos del centro comercial</span>
              </div>
            </div>
          </div>

          {/* Formulario de Contacto / Reserva */}
          <div className="contac-form-panel">
            {enviado ? (
              <div className="form-success-card">
                <div className="success-icon">✅</div>
                <h3>¡Mensaje Enviado con Éxito!</h3>
                <p>
                  Muchas gracias <strong>{formData.nombre}</strong>. Hemos recibido tu consulta para la habitación:
                </p>
                <div className="summary-box">
                  <p><strong>🛏️ Habitación:</strong> {formData.habitacion}</p>
                  <p><strong>🌙 Noches solicitadas:</strong> {formData.noches}</p>
                  <p><strong>📧 Correo de respuesta:</strong> {formData.email}</p>
                  {formData.telefono && <p><strong>📱 Teléfono:</strong> {formData.telefono}</p>}
                </div>
                <p className="success-note">
                  Nuestro equipo de reservas se pondrá en contacto contigo en menos de 2 horas para confirmar disponibilidad.
                </p>
                <button className="btn btn-primary" onClick={handleReset}>
                  Enviar otra consulta
                </button>
              </div>
            ) : (
              <form className="hotel-form" onSubmit={handleSubmit}>
                <h3 className="form-title">Envíanos un Mensaje</h3>
                
                <div className="form-group-row">
                  <div className="form-group">
                    <label htmlFor="nombre">Nombre Completo *</label>
                    <input 
                      type="text" 
                      id="nombre" 
                      name="nombre" 
                      placeholder="Ej: Juan Pérez"
                      value={formData.nombre}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="email">Correo Electrónico *</label>
                    <input 
                      type="email" 
                      id="email" 
                      name="email" 
                      placeholder="juan@ejemplo.com"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>

                <div className="form-group-row">
                  <div className="form-group">
                    <label htmlFor="telefono">Teléfono / Celular</label>
                    <input 
                      type="tel" 
                      id="telefono" 
                      name="telefono" 
                      placeholder="+54 9 11 1234-5678"
                      value={formData.telefono}
                      onChange={handleChange}
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="noches">Cantidad de Noches</label>
                    <input 
                      type="number" 
                      id="noches" 
                      name="noches" 
                      min="1" 
                      max="30"
                      value={formData.noches}
                      onChange={handleChange}
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="habitacion">Habitación de tu Interés</label>
                  <select 
                    id="habitacion" 
                    name="habitacion" 
                    value={formData.habitacion}
                    onChange={handleChange}
                  >
                    <option value="Habitación Individual Clásica">1. Habitación Individual Clásica ($45/noche)</option>
                    <option value="Habitación Doble Superior">2. Habitación Doble Superior ($80/noche)</option>
                    <option value="Junior Suite Familiar">3. Junior Suite Familiar ($130/noche)</option>
                    <option value="Master Suite Presidencial">4. Master Suite Presidencial ($220/noche)</option>
                    <option value="Consulta General">Consulta General / Eventos</option>
                  </select>
                </div>

                <div className="form-group">
                  <label htmlFor="mensaje">Mensaje o Pedido Especial</label>
                  <textarea 
                    id="mensaje" 
                    name="mensaje" 
                    rows="4" 
                    placeholder="Indícanos fechas estimadas de llegada o requerimientos especiales (cuna para bebé, dieta especial, etc.)..."
                    value={formData.mensaje}
                    onChange={handleChange}
                  ></textarea>
                </div>

                <button type="submit" className="btn btn-primary submit-btn">
                  ✉️ Enviar Consulta de Reserva
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contac;
