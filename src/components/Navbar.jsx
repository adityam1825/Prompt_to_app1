// src/components/Navbar.jsx
import { useState, useEffect } from 'react';
import './Navbar.css';

const navItems = [
  { label: 'About', href: '#about' },
  { label: 'Rules', href: '#rules' },
  { label: 'How It Works', href: '#how' },
  { label: 'Timeline', href: '#timeline' },
  { label: 'Sponsors', href: '#sponsors' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Track scroll for sticky shadow effect
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleNav = (href) => {
    setOpen(false);
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      {/* Logo */}
      <span className="nav-logo" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
        Prompt → App
      </span>

      {/* Links */}
      <ul className={`nav-links ${open ? 'open' : ''}`}>
        {navItems.map(({ label, href }) => (
          <li key={label}>
            <a href={href} onClick={(e) => { e.preventDefault(); handleNav(href); }}>
              {label}
            </a>
          </li>
        ))}
      </ul>

      {/* CTA */}
      <button className="nav-cta" onClick={() => handleNav('#contact')}>
        Register Now
      </button>

      {/* Hamburger (mobile) */}
      <button className="hamburger" onClick={() => setOpen(!open)} aria-label="Toggle menu">
        <span />
        <span />
        <span />
      </button>
    </nav>
  );
}
