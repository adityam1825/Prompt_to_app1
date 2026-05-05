// src/components/JudgingCriteria.jsx
import { useEffect, useRef, useState } from 'react';
import './JudgingCriteria.css';

const criteria = [
  { icon: '🧠', name: 'Innovationn & Uniqueness', pct: 30, desc: 'How original and creative is your solution? Does it solve the problem in a way no one has thought of before?' },
  { icon: '⚙️', name: 'Technical Implementation', pct: 20, desc: 'Quality of code, system architecture, scalability considerations, and overall technical depth of the solution.' },
  { icon: '🤖', name: 'Use of AI', pct: 20, desc: 'How effectively and creatively were AI tools integrated? Judges reward novel and strategic AI usage throughout.' },
  { icon: '🎨', name: 'UI/UX Design', pct: 15, desc: 'Is the interface intuitive, polished, and accessible? Great UX shows judges your app is ready for real users.' },
  { icon: '🎤', name: 'Presentation', pct: 10, desc: 'Clarity, confidence, and storytelling during your 10-minute demo. How well did you sell your idea to the panel?' },
  { icon: '💵', name: 'Business Viability', pct: 5, desc: 'How feasible is your business model? Judges will evaluate the market potential and revenue streams.' },
];

function CriteriaCard({ icon, name, pct, desc }) {
  const [width, setWidth] = useState(0);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setWidth(pct); },
      { threshold: 0.4 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [pct]);

  return (
    <div className="criteria-card card" ref={ref}>
      <div className="criteria-top">
        <span className="criteria-name">{icon} {name}</span>
        <span className="criteria-pct gradient-text">{pct}%</span>
      </div>
      <p className="criteria-desc">{desc}</p>
      <div className="progress-bar">
        <div className="progress-fill" style={{ width: `${width}%` }} />
      </div>
    </div>
  );
}

export default function JudgingCriteria() {
  return (
    <section id="judging" className="judging-section">
      <p className="section-tag">Scoring</p>
      <h2 className="section-title">
        Judging <span className="gradient-text">Criteria</span>
      </h2>
      <p className="section-desc">
        Projects are evaluated across six dimensions. A panel of industry experts
        scores each category independently.
      </p>

      <div className="judging-grid">
        {criteria.map((c) => <CriteriaCard {...c} key={c.name} />)}

        {/* Total card */}
        <div className="criteria-card card criteria-card--featured">
          <div className="criteria-top">
            <span className="criteria-name">🏆 Total Score</span>
            <span className="criteria-pct gradient-text">100%</span>
          </div>
          <p className="criteria-desc">
            Score will be Evaluated based on a weighted average of the six criteria. Judges will provide detailed feedback to help you improve.
          </p>
          <div className="progress-bar">
            <div className="progress-fill" style={{ width: '100%' }} />
          </div>
        </div>
      </div>
    </section>
  );
}
