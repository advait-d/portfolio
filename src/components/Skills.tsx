import React from 'react';
import { Network, Brain, Server, Cloud } from 'lucide-react';

const expertiseAreas = [
  {
    title: "Distributed Systems & Architecture",
    icon: <Network className="w-5 h-5 text-[#64ffda]" />,
    description: "I design fault-tolerant, highly available systems. I've formally verified the Ben-Or consensus algorithm using TLA+/PlusCal and built comprehensive platforms that teach engineers how to implement active-active replication, database sharding, and eventual consistency.",
    technologies: "Distributed Consensus • TLA+ • Microservices • Data Partitioning",
    span: "md:col-span-2",
    highlight: true
  },
  {
    title: "Backend Platforms",
    icon: <Server className="w-5 h-5 text-[#64ffda]" />,
    description: "I build secure, data-intensive backend systems. Architected a headless-CMS-driven OTT video streaming platform featuring complex content filtering, low-latency search APIs, and scalable authentication pipelines.",
    technologies: "Python • Spring Boot • PostgreSQL • Node.js",
    span: "md:col-span-1",
    highlight: false
  },
  {
    title: "AI-Powered Applications",
    icon: <Brain className="w-5 h-5 text-[#64ffda]" />,
    description: "I integrate intelligent models into production workflows. Built an interactive System Design Learning Assistant that leverages LLMs to conduct real-time engineering interviews and provide dynamic architectural feedback.",
    technologies: "LLMs • RAG • OpenAI API • Prompt Engineering",
    span: "md:col-span-1",
    highlight: false
  },
  {
    title: "Cloud Infrastructure & DevOps",
    icon: <Cloud className="w-5 h-5 text-[#64ffda]" />,
    description: "I treat infrastructure as code and an extension of the application architecture. Experienced in deploying containerized microservices, managing CI/CD pipelines, and utilizing managed services to accelerate feature delivery without sacrificing reliability.",
    technologies: "Docker • Kubernetes • Firebase • AWS",
    span: "md:col-span-2",
    highlight: false
  }
];

const Skills: React.FC = () => {
  return (
    <section id="expertise" className="mb-20">
      <h2 className="text-sm font-bold uppercase tracking-widest text-[#ccd6f6] mb-6 lg:hidden">Areas of Expertise</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {expertiseAreas.map((area, idx) => (
          <div
            key={idx}
            className={`group relative p-5 rounded-xl border transition-all duration-300 ${area.highlight
                ? 'border-[#64ffda]/20 bg-[#64ffda]/[0.03] hover:bg-[#64ffda]/[0.08] hover:border-[#64ffda]/50'
                : 'border-white/5 bg-white/[0.02] hover:bg-[#64ffda]/5 hover:border-[#64ffda]/30'
              } ${area.span}`}
          >
            <div className="flex items-center gap-3 mb-2.5">
              <div className={`p-1.5 rounded-lg transition-transform duration-300 group-hover:scale-110 ${area.highlight ? 'bg-[#64ffda]/20' : 'bg-[#64ffda]/10'
                }`}>
                {area.icon}
              </div>
              <h3 className={`font-semibold text-base ${area.highlight ? 'text-[#64ffda]' : 'text-[#ccd6f6]'}`}>
                {area.title}
              </h3>
            </div>

            <p className="text-[13px] text-[#8892b0] leading-relaxed mb-3">
              {area.description}
            </p>

            <p className="text-[10px] font-mono text-[#64ffda]/60 uppercase tracking-widest">
              {area.technologies}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
