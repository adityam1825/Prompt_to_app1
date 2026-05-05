// src/components/AITools.jsx
import './AITools.css';

const tools = [
  { 
    icon: '🤖', 
    name: 'ChatGPT', 
    vendor: 'OpenAI', 
    desc: 'OpenAI\'s flagship model for brainstorming, architecture design, debugging, and generating complete code modules from natural language prompts.' 
  },
  { 
    icon: '🐙', 
    name: 'GitHub Copilot', 
    vendor: 'GitHub × OpenAI', 
    desc: 'An AI pair programmer inside your editor offering context-aware code completions, function generation, and automated test suggestions.' 
  },
  { 
    icon: '🔁', 
    name: 'Replit AI', 
    vendor: 'Replit', 
    desc: 'Build, run, and deploy full-stack apps directly in the browser. Helps scaffold projects, fix bugs, and iterate rapidly.' 
  },
  { 
    icon: '⌨️', 
    name: 'Cursor AI', 
    vendor: 'Cursor', 
    desc: 'An AI-first code editor that allows you to chat with your codebase, refactor efficiently, and generate production-ready code with full context.' 
  },
  { 
    icon: '♊', 
    name: 'Google Gemini', 
    vendor: 'Google DeepMind', 
    desc: 'A multimodal AI model capable of advanced reasoning, code generation, visual understanding, and seamless integration with Google services.' 
  },
  { 
    icon: '🔍', 
    name: 'Perplexity AI', 
    vendor: 'Perplexity', 
    desc: 'An AI-powered answer engine that combines real-time web search with LLM reasoning, ideal for research and factual queries.' 
  },
  { 
    icon: '🧠', 
    name: 'Claude AI', 
    vendor: 'Anthropic', 
    desc: 'Known for producing clean, well-structured code and detailed explanations, making it ideal for complex problem-solving.' 
  },

  // 🔥 Newly Added Tools

  { 
    icon: '⚡', 
    name: 'Vercel AI', 
    vendor: 'Vercel', 
    desc: 'Helps build AI-powered web apps with seamless deployment, serverless functions, and frontend integrations.' 
  },
  { 
    icon: '🧩', 
    name: 'LangChain', 
    vendor: 'LangChain', 
    desc: 'Framework for building LLM-powered applications with memory, agents, and tool integrations.' 
  },
  { 
    icon: '🗄️', 
    name: 'Pinecone', 
    vendor: 'Pinecone', 
    desc: 'Vector database for semantic search, embeddings, and building retrieval-augmented AI applications.' 
  },
  { 
    icon: '📊', 
    name: 'Hugging Face', 
    vendor: 'Hugging Face', 
    desc: 'Open-source platform providing pre-trained models, datasets, and APIs for NLP and ML applications.' 
  },
  { 
    icon: '🎨', 
    name: 'Midjourney', 
    vendor: 'Midjourney', 
    desc: 'Generates high-quality AI images from prompts, useful for UI assets, branding, and design inspiration.' 
  },
  { 
    icon: '🖌️', 
    name: 'DALL·E', 
    vendor: 'OpenAI', 
    desc: 'Creates images and visual assets from textual descriptions for design and prototyping.' 
  },
  { 
    icon: '🧑‍💻', 
    name: 'Codeium', 
    vendor: 'Codeium', 
    desc: 'Free AI coding assistant providing fast autocomplete, chat-based coding help, and multi-language support.' 
  },
  { 
    icon: '🚀', 
    name: 'Firebase AI', 
    vendor: 'Google Firebase', 
    desc: 'Integrates AI capabilities into apps with real-time databases, authentication, and backend services.' 
  },
  { 
    icon: '📡', 
    name: 'Replicate', 
    vendor: 'Replicate', 
    desc: 'Run and deploy open-source AI models via API for tasks like image generation, NLP, and audio processing.' 
  },
  { 
    icon: '🔊', 
    name: 'ElevenLabs', 
    vendor: 'ElevenLabs', 
    desc: 'Advanced AI voice generation platform for realistic speech synthesis and voice cloning.' 
  },
];
export default function AITools() {
  return (
    <section id="tools" className="tools-section">
      <p className="section-tag">Arsenal</p>
      <h2 className="section-title">
        AI Tools <span className="gradient-text">Allowed</span>
      </h2>
      <p className="section-desc">
        You're not building alone. These AI-powered tools are your co-pilots for the hackathon.
        Each brings unique superpowers to your development workflow.
      </p>

      <div className="tools-grid fade-in">
        {tools.map(({ icon, name, vendor, desc }) => (
          <div className="tool-card card" key={name}>
            <div className="tool-logo">{icon}</div>
            <h4>{name}</h4>
            <p>{desc}</p>
            <span className="tool-tag">{vendor}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
