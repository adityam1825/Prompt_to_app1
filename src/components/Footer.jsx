// src/components/Footer.jsx
import './Footer.css';

const footerLinks = {
  Navigate: [
    { label: 'About', href: '#about' },
    { label: 'Rules', href: '#rules' },
    { label: 'How It Works', href: '#how' },
    { label: 'AI Tools', href: '#tools' },
    { label: 'Timeline', href: '#timeline' },
  ],
  Competition: [
    { label: 'Judging Criteria', href: '#judging' },
    { label: 'Sponsors', href: '#sponsors' },
    { label: 'Contact', href: '#contact' },
    { label: 'FAQ', href: '#faq' },
    { label: 'Past Winners', href: '#winners' },
  ],
  Legal: [
    { label: 'Privacy Policy', href: '#' },
    { label: 'Terms of Service', href: '#' },
    { label: 'Code of Conduct', href: '#' },
    { label: 'Refund Policy', href: '#' },
  ],
};

const socials = ['𝕏', 'in', 'ig', 'yt', 'gh'];

export default function Footer() {
  const scrollTo = (href) => {
    if (href.startsWith('#') && document.querySelector(href)) {
      document.querySelector(href).scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="footer">
      <div className="footer-grid">
        {/* Brand */}
        <div className="footer-brand">
          <span className="footer-logo">Prompt → App</span>
          <p>
            India's premier AI-powered hackathon. Build the future, one prompt at a time.
            Join 500+ innovators at the cutting edge of technology.
          </p>
          <div className="socials">
            {socials.map((s) => (
              <button key={s} className="social-btn" aria-label={`Social ${s}`}>{s}</button>
            ))}
          </div>
        </div>

        {/* Link columns */}
        {Object.entries(footerLinks).map(([col, links]) => (
          <div className="footer-col" key={col}>
            <h5>{col}</h5>
            <ul>
              {links.map(({ label, href }) => (
                <li key={label}>
                  <a href={href} onClick={(e) => { e.preventDefault(); scrollTo(href); }}>
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="footer-bottom">
        <p className="footer-copy">
          © 2025 Prompt to App Competition. All rights reserved. Made with ⚡ in Bengaluru.
        </p>
        <p className="footer-copy footer-copy--dim">
          
        </p>
      </div>
    </footer>
  );
}
