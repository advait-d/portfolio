import React from 'react';

const expertiseAreas = [
  {
    category: "Backend",
    technologies: "Java, Python, Spring Boot, Quarkus, FastAPI, PostgreSQL",
    description: "Architecting high-throughput REST APIs and state-driven workflows handling $50B+ in transaction exposure."
  },
  {
    category: "Distributed",
    technologies: "Apache Kafka, Solace, AWS SQS/SNS, Microservices",
    description: "Designing event-driven architectures and atomic state patterns (transactional outbox) for reliable, large-scale systems."
  },
  {
    category: "Cloud & DevOps",
    technologies: "AWS, Docker, Kubernetes, Jenkins, Grafana, Splunk",
    description: "Deploying and observing high-availability microservices to maintain 99.99% uptime across enterprise cloud environments."
  },
  {
    category: "AI / ML",
    technologies: "LLMs, OpenAI API, Claude API, RAG, Prompt Engineering",
    description: "Engineering production-grade LLM agents and multi-turn context pipelines to automate complex workflows."
  }
];

const Skills: React.FC = () => {
  return (
    <section id="expertise" className="mb-20">
      <h2 className="text-sm font-bold uppercase tracking-widest text-[#ccd6f6] mb-8 lg:hidden">Areas of Expertise</h2>

      <ul className="space-y-6">
        {expertiseAreas.map((area, idx) => (
          <li key={idx} className="grid grid-cols-1 sm:grid-cols-[140px_1fr] gap-2 sm:gap-6 items-start group">
            <h3 className="text-sm font-semibold text-[#ccd6f6] uppercase tracking-wider mt-1 opacity-90 group-hover:text-[#64ffda] transition-colors duration-300">
              {area.category}
            </h3>
            <div>
              <div className="text-[#64ffda] text-[13px] font-mono mb-2 opacity-90">
                {area.technologies}
              </div>
              <div className="text-[#8892b0] text-sm leading-relaxed">
                {area.description}
              </div>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Skills;
