// src/components/HowItWorks.jsx
import './HowItWorks.css';

const steps = [
  { num: '1', title: 'Register Your Team', desc: 'Sign up through our portal. Fill your team details, and confirm your slot before spots run out.' },
  { num: '2', title: 'Build with AI Tools', desc: 'Use ChatGPT, Copilot, Cursor, or any approved AI tool to architect and build your solution across the 24-hour window.' },
  { num: '3', title: 'Submit Your Project', desc: 'Push code to GitHub, deploy your demo, and submit via the portal with your documentation and video walkthrough.' },
  { num: '4', title: 'Present to Judges', desc: 'Take the stage. Walk experts through your solution, demo live, and field technical questions from the expert panel.' },
];

export default function HowItWorks() {
  return (
    <section id="how" className="how-section">
      <p className="section-tag">Process</p>
      <h2 className="section-title">
        How It <span className="gradient-text">Works</span>
      </h2>
      <p className="section-desc">
        From registration to the winner's podium — here's your journey through
        Prompt to App in four clear steps.
      </p>

      <div className="steps-grid fade-in">
        {steps.map(({ num, title, desc }) => (
          <div className="step-card card" key={num}>
            <div className="step-num">{num}</div>
            <h4>{title}</h4>
            <p>{desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
