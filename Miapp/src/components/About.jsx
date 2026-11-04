import './About.css';

const About = () => {
  const amenities = [
    { title: 'Restaurante', desc: 'Gastronomía local e internacional.' },
    { title: 'Spa & Relax', desc: 'Sauna, masajes y tratamientos.' },
    { title: 'Wi-Fi Gratis', desc: 'Conexión de alta velocidad.' },
    { title: 'Servicio 24/7', desc: 'Atención y recepción permanente.' },
    { title: 'Estacionamiento', desc: 'Cochera privada y segura.' }
  ];

  return (
    <section id="about" className="about-section">
      <div className="about-header">
        <h2>Sobre Hotel Vasquez</h2>
        <p>Un espacio de descanso, confort y atención personalizada frente al cerro.</p>
      </div>

      <div className="about-content">
        <div className="about-text">
          <h3>Más de 20 años de experiencia</h3>
          <p>
            Hotel Vasquez ofrece un ambiente tranquilo y familiar, diseñado para 
            brindar la mejor experiencia de descanso en la región de Salta.
          </p>
        </div>
        <img 
          src="https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=800&q=80" 
          alt="Hotel Vasquez" 
          className="about-img"
        />
      </div>

      <div className="amenities">
        <h3>Nuestros Servicios</h3>
        <div className="amenities-grid">
          {amenities.map((item, index) => (
            <div key={index} className="amenity-card">
              <h4>{item.title}</h4>
              <p>{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;