// src/App.js
// Prompt to App — Main Application Entry Point
import { useEffect } from 'react';
import './index.css';

// Components
import Navbar        from './components/Navbar';
import Hero          from './components/Hero';
import About         from './components/About';
import Rules         from './components/Rules';
import HowItWorks    from './components/HowItWorks';
import AITools       from './components/AITools';
import Timeline      from './components/Timeline';
import JudgingCriteria from './components/JudgingCriteria';
import Sponsors      from './components/Sponsors';
import Contact       from './components/Contact';
import Footer        from './components/Footer';

// Logo strip between Hero and About
function LogoStrip() {
  const logos = ['TechCorp India', 'InnovateLabs', 'DevBridge', 'AIFoundry', 'CodeNation', 'BuildForward'];
  return (
    <div className="logos-strip">
      <p className="logos-label">Supported by leading tech organizations</p>
      <div className="logos-row">
        {logos.map((l) => <div className="logo-pill" key={l}>{l}</div>)}
      </div>
    </div>
  );
}

// "What to Present" section (inline, between AITools and Timeline)
function PresentToJudges() {
  const items = [
    { num: '01', title: 'Problem Statement', desc: 'Clearly define the problem your app solves and why it matters to real users.' },
    { num: '02', title: 'Solution Overview', desc: 'Explain your approach, architecture, and key design decisions end-to-end.' },
    { num: '03', title: 'Live Demo', desc: 'Demonstrate core features of your working application live in front of judges.' },
    { num: '04', title: 'Tech Stack Used', desc: 'Walk through frameworks, APIs, and cloud services powering your app.' },
    { num: '05', title: 'AI Usage Explanation', desc: 'Show specifically how AI tools accelerated and shaped your development.' },
    { num: '06', title: 'Future Scope', desc: 'Share your vision — how would this grow and monetize beyond the hackathon?' },
  ];

  return (
    <section style={{ padding: '6rem 5%', background: 'var(--bg2)' }}>
      <p className="section-tag">Judging Day</p>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '3rem', alignItems: 'center' }}>
        <div className="fade-in">
          <h2 className="section-title">
            What to Present <span className="gradient-text">to Judges</span>
          </h2>
          <p className="section-desc">
            Your 10-minute presentation must cover all these elements.
            Judges score each component separately for maximum transparency.
          </p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
            {items.map(({ num, title, desc }) => (
              <div key={num} style={{
                display: 'flex', gap: '1rem', alignItems: 'center',
                background: 'var(--card)', border: '1px solid var(--border)',
                borderRadius: '12px', padding: '1rem 1.25rem',
                transition: 'border-color .3s, transform .3s',
              }}
                onMouseEnter={e => { e.currentTarget.style.borderColor = 'var(--purple)'; e.currentTarget.style.transform = 'translateX(4px)'; }}
                onMouseLeave={e => { e.currentTarget.style.borderColor = 'var(--border)'; e.currentTarget.style.transform = 'none'; }}
              >
                <div style={{
                  width: '32px', height: '32px', borderRadius: '8px',
                  background: 'linear-gradient(135deg, var(--purple), var(--accent))',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontSize: '0.78rem', fontWeight: '700', flexShrink: 0, color: '#fff',
                }}>{num}</div>
                <div>
                  <h5 style={{ fontWeight: '600', fontSize: '0.93rem', marginBottom: '0.15rem' }}>{title}</h5>
                  <p style={{ fontSize: '0.8rem', color: 'var(--muted)' }}>{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Tip panel */}
        <div className="fade-in" style={{ background: 'var(--card)', border: '1px solid var(--border)', borderRadius: '18px', padding: '2rem' }}>
          <div style={{ background: 'rgba(124,58,237,.1)', borderRadius: '14px', padding: '2.5rem 2rem', textAlign: 'center' }}>
            <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>🎤</div>
            <h3 style={{ fontFamily: 'Syne', fontWeight: '700', marginBottom: '0.5rem' }}>Presentation Tips</h3>
            <p style={{ fontSize: '0.85rem', color: 'var(--muted)', marginBottom: '1.5rem' }}>Pro tips from past Prompt to App winners</p>
            {[
              '🎯 Lead with the problem, not the technology',
              '⚡ Open your demo early — show, don\'t tell',
              '🤖 Be specific about which AI wrote what',
              '💰 End with a clear monetization angle',
              '🙋 Prep for technical Q&A — know your stack',
            ].map((tip) => (
              <div key={tip} style={{ background: 'rgba(0,0,0,.3)', borderRadius: '10px', padding: '0.85rem 1rem', fontSize: '0.83rem', color: 'var(--muted)', marginBottom: '0.6rem', textAlign: 'left' }}>
                {tip}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default function App() {
  // Intersection Observer for .fade-in elements
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) e.target.classList.add('visible'); }),
      { threshold: 0.1 }
    );
    document.querySelectorAll('.fade-in').forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="App">
      <Navbar />
      <Hero />
      <LogoStrip />
      <About />
      <Rules />
      <HowItWorks />
      <AITools />
      <PresentToJudges />
      <Timeline />
      <JudgingCriteria />
     <Sponsors /> 
      <Contact />
      <Footer />
    </div>
  );
}
