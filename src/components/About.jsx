// src/components/About.jsx
import './About.css';

const highlights = [
  {
    icon: '🤖',
    title: 'AI-Driven Development',
    desc: 'Leverage ChatGPT, GitHub Copilot, Cursor AI, and more to generate, refine, and ship production-quality code at unprecedented speed.',
  },
  {
    icon: '💡',
    title: 'Pure Innovation',
    desc: 'Solve real-world problems with creative solutions. We reward thinking differently — not just coding quickly. Every idea deserves to be built.',
  },
  {
    icon: '⚡',
    title: 'Rapid Prototyping',
    desc: 'Experience the future of building — where a full-stack app can go from concept to live demo in hours, not weeks. Ship fast, iterate faster.',
  },
];

export default function About() {
  return (
    <section id="about" className="about-section">
      <div className="about-grid">
        {/* Left: text */}
        <div className="about-text fade-in">
          <p className="section-tag">What is this?</p>
          <h2 className="section-title">
            AI-Powered <span className="gradient-text">Development</span>
            <br />Meets Competition
          </h2>
          <p>
            Prompt to App is a first-of-its-kind hackathon that challenges developers, designers,
            and innovators to harness the power of artificial intelligence to build real, working
            applications — guided entirely by prompts. No months of planning. Just your ideas,
            your prompts, and the tools to make it real.
          </p>
         
          <p>
            Whether you're a seasoned engineer or a curious student, if you can think it and
            prompt it, you can build it. We provide the stage; you bring the vision.
          </p>
        </div>

        {/* Right: highlight cards */}
        <div className="about-cards fade-in">
          {highlights.map(({ icon, title, desc }) => (
            <div className="about-card card" key={title}>
              <div className="about-card-icon">{icon}</div>
              <h4>{title}</h4>
              <p>{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
