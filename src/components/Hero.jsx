// src/components/Hero.jsx
import './Hero.css';

export default function Hero() {
  const scrollTo = (id) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });

  return (
    <section className="hero" id="home">
      {/* Background radial glow */}
      <div className="hero-bg" />
      {/* Animated orb */}
      <div className="hero-orb" />

      <div className="hero-content fade-in">
        {/* Live badge */}
        <div className="hero-badge">
          <span className="badge-dot" />
          🚀 Applications Open — May 2026
        </div>

        <h1>
          Prompt to <span className="gradient-text">App</span>
          <br />Competition
        </h1>

        <p className="hero-sub">Turn your ideas into real applications using AI</p>

        <p className="hero-desc">
          The ultimate AI-powered hackathon where participants use cutting-edge AI tools to
          transform prompts into fully functional applications — in just 24 hours.
          No limits. Just innovation.
        </p>

        <div className="btn-group">
          <button className="btn-primary" onClick={() => scrollTo('contact')}>
            Register Now
          </button>
          <button className="btn-secondary" onClick={() => scrollTo('about')}>
            Learn More
          </button>
        </div>

        {/* Stats row */}
        <div className="hero-stats">
          {[
            
            { num: 'Exciting ',  label: '   Prize Pool' },
            { num: '6hr', label: 'Build Window' },
            { num: 'Suprise Hampers ', label: 'Live games' },
            { num: '📤 Live Demo + Pitch  ', label: 'Participants' }
         
          ].map(({ num, label }) => (
            <div className="stat" key={label}>
              <div className="stat-num gradient-text">{num}</div>
              <div className="stat-label">{label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
