import { useState } from 'react';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    mensaje: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Gracias ${formData.nombre}, hemos recibido tu mensaje.`);
  };

  return (
    <section id="contact" className="contact-section">
      <h2>Contacto</h2>
      
      <div className="contact-container">
        <div className="contact-info">
          <h3>Información</h3>
          <p> Av. Costanera 1420</p>
          <p> +54 387</p>
          <p> reservas@hotelvasquez.com</p>
        </div>

        <form className="contact-form" onSubmit={handleSubmit}>
          <input 
            type="text" 
            name="nombre" 
            placeholder="Nombre completo" 
            value={formData.nombre} 
            onChange={handleChange} 
            required 
          />
          <input 
            type="email" 
            name="email" 
            placeholder="Correo electrónico" 
            value={formData.email} 
            onChange={handleChange} 
            required 
          />
          <textarea 
            name="mensaje" 
            placeholder="Escribe tu mensaje..." 
            value={formData.mensaje} 
            onChange={handleChange}
            rows="4"
          ></textarea>
          <button type="submit">Enviar</button>
        </form>
      </div>
    </section>
  );
};

export default Contact;