// src/components/Sponsors.jsx
import './Sponsors.css';

const sponsors = [
  {
    name: 'Arthanta Tech',
    logo: '/logos/arthanta.png',
    link: 'https://startup-beige-ten.vercel.app/',
  },
];

export default function Sponsors() {
  return (
    <section id="sponsors" className="sponsors-section">
      <p className="section-tag">Sponsors</p>
      <h2 className="section-title">
        Our <span className="gradient-text">Partners</span>
      </h2>
      <p className="section-desc">
        Backed by companies building the future of technology.
      </p>

      <div className="sponsor-logos">
        {sponsors.map(({ name, logo, link }) => (
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="sponsor-logo-box"
            key={name}
          >
            <img src={logo} alt={name} />
          </a>
        ))}
      </div>
    </section>
  );
}