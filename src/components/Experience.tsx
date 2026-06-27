import React from "react";
import Image from "next/image";
import { ChipList } from "./Chips";

interface Job {
  title: string;
  company: string;
  location: string;
  period: string;
  description: string[];
  logo: string;
  skills: string[];
}

const experiences: Job[] = [
  {
    title: "Software Engineer (Consultant)",
    company: "Capgemini",
    location: "Bangalore, India",
    period: "Mar 2025 - Present",
    description: [
      "Architecting scalable, event-driven microservices for large-scale retail banking platforms. ",
      "Implementing robust messaging patterns to guarantee data consistency and leading major tech-stack modernizations across the core infrastructure."
    ],
    logo: "/company logos/capgemini.jpg",
    skills: ["Java", "Spring Boot", "Quarkus", "PostgreSQL", "Solace", "Microservices"],
  },
  {
    title: "Senior Software Engineer",
    company: "World Vision Infotech",
    location: "Pune, India",
    period: "Sep 2024 - Feb 2025",
    description: [
      "Architected and deployed production-grade LLM applications to automate complex customer service workflows. ",
      "Designed multi-turn context pipelines and robust fallback strategies, significantly improving operational efficiency and reducing support overhead."
    ],
    logo: "/company logos/WVIT.png",
    skills: ["Python", "FastAPI", "OpenAI API", "Prompt Engineering", "LLMs"],
  },
  {
    title: "Technical Consultant",
    company: "Perficient Inc",
    location: "Redmond, WA, USA",
    period: "Apr 2022 - Dec 2023",
    description: [
      "Engineered high-throughput REST APIs and backend services for the healthcare sector, optimizing critical data processing workflows. ",
      "Ensured system reliability and high availability for mission-critical applications handling sensitive pharmaceutical data."
    ],
    logo: "/company logos/Perficient_Logo.png",
    skills: ["Java", "Spring Boot", "Oracle SQL", "PostgreSQL", "JAX-RS", "Cucumber"],
  },
  {
    title: "Software Development Engineer",
    company: "Amazon",
    location: "Seattle, WA, USA",
    period: "June 2020 - Mar 2022",
    description: [
      "Owned the end-to-end design and delivery of large-scale risk mitigation systems, successfully reducing fraudulent activity across massive consumer surfaces. ",
      "Redesigned core validation architectures to significantly improve latency and system resilience at high scale."
    ],
    logo: "/company logos/amazon-logo.png",
    skills: ["Java", "AWS SQS/SNS", "AWS Lambda", "DynamoDB", "Microservices"],
  },
];

const Experience: React.FC = () => {
  return (
    <section id="experience" className="mb-16">
      <h2 className="text-sm font-bold uppercase tracking-widest text-[#ccd6f6] mb-8 lg:hidden">
        Experience
      </h2>
      <div className="space-y-2">
        {experiences.map((job, index) => (
          <a
            key={index}
            href="#"
            onClick={(e) => e.preventDefault()}
            className="spotlight-card block group"
          >
            <div className="flex flex-col sm:flex-row gap-4">
              {/* Date column */}
              <div className="sm:w-[140px] flex-shrink-0 pt-1">
                <p className="text-xs font-semibold uppercase tracking-wider text-[#8892b0]/70">
                  {job.period}
                </p>
              </div>

              {/* Content column */}
              <div className="flex-grow">
                <div className="flex items-start gap-3 mb-2">
                  <div className="bg-white rounded-md p-0.5 w-10 h-10 flex-shrink-0 overflow-hidden border border-[#233554]">
                    <div className="relative w-full h-full rounded-sm overflow-hidden">
                      <Image
                        src={job.logo}
                        alt={`${job.company} logo`}
                        fill
                        sizes="40px"
                        className="object-cover"
                        priority
                      />
                    </div>
                  </div>
                  <div>
                    <h3 className="card-title text-base font-semibold text-[#ccd6f6] transition-colors duration-300 flex items-center gap-1">
                      {job.title} · {job.company}
                      <span className="card-arrow inline-block text-[#8892b0] transition-transform duration-300 text-sm">↗</span>
                    </h3>
                    <p className="text-sm text-[#8892b0]">
                      {job.location}
                    </p>
                  </div>
                </div>

                <p className="text-sm text-[#8892b0] leading-relaxed mb-3">
                  {job.description}
                </p>

                <ChipList items={job.skills} category="frameworks" />
              </div>
            </div>
          </a>
        ))}
      </div>
      <div className="mt-8">
        <a
          href="/Advait Deshmukh Resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center text-[#ccd6f6] hover:text-[#64ffda] transition-colors duration-300 font-semibold group"
        >
          View Full Resume
          <span className="inline-block transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 ml-2 text-sm">
            ↗
          </span>
        </a>
      </div>
    </section>
  );
};

export default Experience;
