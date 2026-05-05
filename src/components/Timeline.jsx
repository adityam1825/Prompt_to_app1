// src/components/Timeline.jsx
import './Timeline.css';

const events = [
  { date: 'May 01, 2026', label: 'Registration Opens', sub: 'Portal goes live' },
  { date: 'May 14, 2026', label: 'Registration Closes', sub: 'Limited seats only' },
  { date: 'May 15, 2026', label: 'Event Begins at 9 am', sub: '6hr build window' },
  { date: 'May 15, 2026', label: 'Submission Deadline ', sub: '2 PM sharp' },
  { date: 'May 15, 2026', label: 'Final Presentations', sub: '2:30 PM sharp' },
   { date: 'May 16, 2026', label: 'Result announcement', sub: ' At Sabha Mantap' }
];

export default function Timeline() {
  return (
    <section id="timeline" className="timeline-section">
      <p className="section-tag">Schedule</p>
      <h2 className="section-title">
        Event <span className="gradient-text">Timeline</span>
      </h2>
      <p className="section-desc">
        Mark your calendar. Every date below is critical to your participation journey.
      </p>

      {/* Horizontal scrollable timeline */}
      <div className="timeline-track fade-in">
        <div className="timeline-line" />
        {events.map(({ date, label, sub }) => (
          <div className="tl-item" key={label}>
            <div className="tl-dot" />
            <div className="tl-date">{date}</div>
            <div className="tl-label">{label}</div>
            <div className="tl-sub">{sub}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
