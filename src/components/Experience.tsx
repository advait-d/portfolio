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
      "Provide end-to-end software engineering solutions for retail banking systems, contributing to critical operational and functional improvements across digital banking, customer onboarding, and transaction processing platforms.",
    ],
    logo: "/company logos/capgemini.jpg",
    skills: [
      "Java",
      "Spring Boot",
      "Azure DevOps",
      "PostgreSQL",
      "GraphQL",
    ],
  },
  {
    title: "Senior Software Engineer",
    company: "World Vision Infotech Pvt Ltd",
    location: "Pune, India",
    period: "Jan 2024 - Feb 2025",
    description: [
      "Deliver full-stack engineering solutions to clients, including a custom Resource Management System (RMS), automate customer enquiries with AI-powered chatbot, streamline CI/CD pipelines, along with leading a team of software engineers with best Agile practices.",
    ],
    logo: "/company logos/WVIT.png",
    skills: [
      "Java",
      "Spring Boot",
      "Python",
      "NextJS",
      "Angular",
      "Ionic",
      "Flask",
      "OpenAI API",
      "Jenkins",
      "PostgreSQL",
      "Microsoft Power Platform",
    ],
  },
  {
    title: "Technical Consultant",
    company: "Perficient Inc",
    location: "Redmond, Washington, USA",
    period: "April 2022 - December 2023",
    description: [
      "Develop and maintain robust back-end systems for high-volume Data Processing APIs and Data Analytics applications within the Healthcare Industry. Partner with cross-functional teams to optimize legacy systems, automate testing and workflows, and improve system performance, ensuring scalability and high availability across diverse use cases.",
    ],
    logo: "/company logos/Perficient_Logo.png",
    skills: [
      "Java",
      "Spring Boot",
      "Oracle SQL Developer",
      "BFF",
      "Microservices",
      "Kafka",
      "Cucumber/Gherkin",
      "ServiceNow",
    ],
  },
  {
    title: "Software Development Engineer",
    company: "Amazon.com",
    location: "Seattle, Washington, USA",
    period: "June 2020 - March 2022",
    description: [
      "Build and maintain scalable solutions for internal risk mitigation services, including CAPTCHAs and challenges. Work closely with cross-functional teams, including developers, designers, and product managers, to implement and improve risk mitigation solutions.",
    ],
    logo: "/company logos/amazon-logo.png",
    skills: [
      "Java",
      "Spring MVC",
      "AWS",
      "Pub-Sub",
      "TypeScript",
      "Jupyter Notebooks",
      "Microservices",
    ],
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
