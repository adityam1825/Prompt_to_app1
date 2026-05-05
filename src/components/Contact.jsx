// src/components/Contact.jsx
import { useState } from 'react';
import './Contact.css';

const contactInfo = [
  { 
    icon: '👨‍🏫', 
    title: 'Faculty Coordinator', 
    main: 'Prof. Siddaling: +91 9916575250', 
    sub: 'Prof. Sudha: +91 8105448143' 
  },
  { 
    icon: '👨‍🎓', 
    title: 'Student Coordinators', 
    main: 'Aditya: +91 9307698460 | Omkar: +91 9380473500', 
    sub: 'Mahantesh: +91 9110471767 | Madhura: +91 9663926444' 
    
  },
  { 
    icon: '👩‍🎓', 
    title: 'More Coordinators', 
    main: 'Nikita: +91 9034850991', 
    sub: 'Mansi: +91 8431256750' 
  },
  { 
    icon: '📍', 
    title: 'Venue', 
    main: 'CISCO LAB', 
    sub: 'APPA College of Engineering, Kalaburagi' 
  },
  { 
    icon: '💼', 
    title: 'Sponsorship', 
    main: 'ARTHANTA TECH', 
    sub: 'Partnership & advertising queries' 
  },
];
export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
  const [sent, setSent] = useState(false);

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    // In production: call your API here
    setSent(true);
    setTimeout(() => setSent(false), 4000);
    setForm({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <section id="contact" className="contact-section">
      <p className="section-tag">Get In Touch</p>
      <h2 className="section-title">
        Contact <span className="gradient-text">Us</span>
      </h2>

      <div className="contact-grid">
        {/* Info column */}
        <div className="contact-info fade-in">
          <p className="contact-intro">
            Have a question about registration, sponsorship, or the competition?
            We'd love to hear from you. Reach out and we'll respond within 24 hours.
          </p>
          {contactInfo.map(({ icon, title, main, sub }) => (
            <div className="contact-item" key={title}>
              <div className="contact-icon">{icon}</div>
              <div>
                <h5>{title}</h5>
                <p>{main}</p>
                <span>{sub}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Form column */}
       {/* QR Code column */}
<div className="contact-form card fade-in qr-container">
  <div>
    <p className="form-title">Scan & Register</p>
    <p className="form-subtitle">Use your phone to quickly access registration</p>
  </div>

  <div className="qr-box">
    <img 
      src="/qr-code.png" 
      alt="QR Code" 
      className="qr-image"
    />
  </div>

  <p className="qr-note">
    Scan this QR code to open the registration form or event details.
  </p>
</div>
      </div>
    </section>
  );
}
