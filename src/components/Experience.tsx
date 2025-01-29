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
    title: "Senior Software Engineer",
    company: "World Vision Infotech Pvt Ltd",
    location: "Pune, India",
    period: "Jan 2024 - Present",
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
    <section id="experience" className="mb-12">
      <h2 className="text-3xl font-bold mb-6 text-black dark:text-gray-100  bg-white dark:bg-[#111111]">Experience</h2>
      <div className="space-y-6">
        {experiences.map((job, index) => (
          <div
            key={index}
            className="relative pl-8 before:content-[''] before:absolute before:left-0 before:top-0 before:bottom-0 before:w-0.5 before:bg-gray-600"
          >
            <div className="flex items-start mb-2">
              <div className="bg-white rounded-full p-2 mr-4 w-24 h-24 border border-gray dark:border-gray-200 flex-shrink-0">
                <div className="relative w-full h-full rounded-full overflow-hidden">
                  <Image
                    src={job.logo}
                    alt={`${job.company} logo`}
                    fill
                    sizes="(max-width: 96px) 100vw"
                    className="object-cover"
                    priority
                  />
                </div>
              </div>
              <div className="flex-grow">
                <h3 className="text-2xl font-semibold text-black dark:text-gray-100  bg-white dark:bg-[#111111]">
                  {job.title}
                </h3>
                <p className="text-lg text-black dark:text-gray-300  bg-white dark:bg-[#111111]">
                  {job.company} - {job.location}
                </p>
                <p className="text-black dark:text-gray-400  bg-white dark:bg-[#111111]">{job.period}</p>
              </div>
            </div>
            <ul className="space-y-2 text:black dark:text-gray-300 mb-4">
              {job.description}
              {/*{job.description.map((point, pointIndex) => (
                <li key={pointIndex} className="flex items-start">
                  <span className="mr-2 mt-1.5 text-gray-500">•</span>
                  <span>{point}</span>
                </li>
              ))} */}
            </ul>
            <ChipList items={job.skills} category="frameworks" />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
