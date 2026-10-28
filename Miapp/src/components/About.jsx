import React from 'react';
import './About.css';

const About = () => {
  const amenities = [
    {
      icon: '🏊‍♂️',
      title: 'Piscina Infinity & Solarium',
      desc: 'Piscina climatizada frente al mar con servicio de cócteles y reposeras premium.'
    },
    {
      icon: '🍽️',
      title: 'Restaurante de Autor',
      desc: 'Gastronomía internacional con ingredientes locales y desayuno buffet artesanal incluido.'
    },
    {
      icon: '💆‍♀️',
      title: 'Spa & Circuito Termal',
      desc: 'Sauna seco, baño turco, masajes relajantes y tratamientos corporales.'
    },
    {
      icon: '📶',
      title: 'Wi-Fi 500 Mbps de Cortesía',
      desc: 'Conectividad de máxima velocidad disponible en habitaciones y todas las áreas comunes.'
    },
    {
      icon: '🛎️',
      title: 'Servicio a la Habitación 24/7',
      desc: 'Atención personalizada, conserjería experta y menú nocturno disponible en todo momento.'
    },
    {
      icon: '🚗',
      title: 'Estacionamiento Privado',
      desc: 'Cocheras cubiertas con vigilancia y seguridad las 24 horas sin costo adicional.'
    }
  ];

  return (
    <section id="about" className="hotel-about">
      <div className="container">
        {/* Encabezado de Sección */}
        <div className="section-header text-center">
          <span className="section-subtitle">Conoce Nuestra Historia</span>
          <h2 className="section-title">Sobre Hotel Costa Serena</h2>
          <div className="divider"></div>
          <p className="section-description">
            Fundado con la misión de brindar un santuario de descanso y excelencia, nuestro hotel combina arquitectura contemporánea, calidez humana y una vista inigualable del océano.
          </p>
        </div>

        {/* Contenido Principal: Historia e Imagen */}
        <div className="about-main-grid">
          <div className="about-text-content">
            <h3>Más de 20 años creando recuerdos inolvidables</h3>
            <p>
              Ubicado estratégicamente en una de las costas más hermosas de la región, Hotel Costa Serena ofrece un ambiente donde el tiempo se detiene. Diseñado meticulosamente para parejas, ejecutivos y familias que buscan calidad y atención al detalle.
            </p>
            <p>
              Contamos con <strong>4 categorías exclusivas de habitaciones</strong> cuidadosamente equipadas para garantizar su máximo descanso, junto a una propuesta gastronómica que deleita los paladares más exigentes.
            </p>

            <div className="about-highlights">
              <div className="highlight-item">
                <span className="highlight-number">4.9 ★</span>
                <span className="highlight-label">Valoración en Booking & TripAdvisor</span>
              </div>
              <div className="highlight-item">
                <span className="highlight-number">+18k</span>
                <span className="highlight-label">Huéspedes satisfechos cada año</span>
              </div>
              <div className="highlight-item">
                <span className="highlight-number">100%</span>
                <span className="highlight-label">Compromiso ecológico y sostenible</span>
              </div>
            </div>
          </div>

          <div className="about-image-card">
            <img 
              src="https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=800&q=80" 
              alt="Instalaciones Hotel Costa Serena" 
              className="about-img"
            />
            <div className="about-badge-card">
              <span>🏆 Reconocido como Mejor Hotel Boutique 2025</span>
            </div>
          </div>
        </div>

        {/* Amenidades y Servicios */}
        <div className="amenities-container">
          <h3 className="amenities-title text-center">Nuestros Servicios Destacados</h3>
          <div className="amenities-grid">
            {amenities.map((item, index) => (
              <div key={index} className="amenity-card">
                <span className="amenity-icon">{item.icon}</span>
                <h4 className="amenity-name">{item.title}</h4>
                <p className="amenity-desc">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
