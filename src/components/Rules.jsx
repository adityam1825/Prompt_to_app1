// src/components/Rules.jsx
import './Rules.css';

const rules = [
  {
    num: '01', title: 'Team Composition',
    items: ['Teams of 1–4 members allowed', 'Cross-college teams are welcome', 'Each member can join only one team', 'Only team leader must register individually'],
  },
  {
    num: '02', title: 'Time Constraints',
    items: ['6 hour build window starts at the event', 'No code written before the start signal', 'Submissions close at exact deadline — no exceptions', 'Presentations are 10 minutes per team'],
  },
  {
    num: '03', title: 'Allowed AI Tools',
    items: ['All major AI coding assistants permitted', 'Open-source models and APIs are allowed', 'Must document all AI tools used', 'No pre-built templates claiming as original'],
  },
  {
    num: '04', title: 'Originality & Ethics',
    items: ['Projects must be built during the competition hours', 'No plagiarism or IP violations allowed', 'Respectful conduct towards all participants', 'Organizer decisions are final and binding'],
  },
  {
    num: '05', title: 'Submission Guidelines',
    items: ['Submission details will be given at the event', 'Include GitHub repo with commit history', 'Working demo link is mandatory', 'Submit a 2-minute demo video'],
  },
  {
    num: '06', title: 'Code of Conduct',
    items: ['Zero tolerance for harassment or discrimination', 'Mentors are here to guide — not build for you', 'All disputes resolved by organizing committee', 'Violation results in immediate disqualification'],
  },
];

export default function Rules() {
  return (
    <section id="rules" className="rules-section">
      <p className="section-tag">Guidelines</p>
      <h2 className="section-title">
        Rules & <span className="gradient-text">Regulations</span>
      </h2>
      <p className="section-desc">
        Read these carefully before registering. All participants must adhere to these rules
        to ensure a fair and exciting competition for everyone.
      </p>

      <div className="rules-grid fade-in">
        {rules.map(({ num, title, items }) => (
          <div className="rule-card card" key={num}>
            <span className="rule-bg-num">{num}</span>
            <h4>{title}</h4>
            <ul>
              {items.map((item) => (
                <li key={item}><span className="rule-arrow">→</span>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
