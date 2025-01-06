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
    location: "Remote, India",
    period: "Jan 2024 - Present",
    description: [
      "Developed a Custom Resource Management System (RMS) with Java, Spring Boot, Angular, Ionic, PostgreSQL, reducing external processing costs by 30%.",
      "Optimized CI/CD Jenkins pipelines by implementing parallel test execution, dependency caching, and reducing test redundancies, cutting deployment time by 70%.",
      "Architected and implemented an AI-powered customer service chatbot using Python, OpenAI API, and Flask, incorporating prompt engineering and context management to achieve 65% automation of customer inquiries.",
      "Directed initiatives to improve documentation across team services, increasing visibility and knowledge sharing.",
      "Implemented Agile Scrum processes, including Daily Scrum calls, Sprint Planning and Retrospectives, reducing task estimate overruns by 20%.",
      "Mentor a team of 5 engineers on coding standards, architectural design, and Agile best practices.",
    ],
    logo: "/WVIT.png",
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
      "Optimized Insurance Claims API processing, writing Adapters and REST service calls, using Java, Spring Boot, Oracle SQL DB, and JAX-RS, increasing automation levels from 88% to 93%, for 12,000+ daily pharmacy orders.",
      "Engineered the back-end of a research analytics web application, handling 15,000 transactions per minute using Spring Boot and PostgreSQL, improving data processing and CRUD functionality.",
      "Refactored legacy Java/Spring systems, optimizing batch jobs and API calls, reducing server costs by 40%.",
      "Improved the Regression Testing suite by 24% through implementation of Cucumber verification steps.",
      "Proactively identified and resolved over 250 production issues and security vulnerabilities, ensuring system integrity and maintaining 99.99% uptime.",
    ],
    logo: "/Perficient_Logo.png",
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
      "Designed and implemented features and solutions for the Account Integrity team, improving functional and operational aspects of internal CAPTCHA and risk mitigation services in an Agile Kanban environment.",
      "Developed automated workflows for AWS services- DynamoDB, SQS, SNS, Lambda, Redshift, reducing manual tasks by 80%.",
      "Led the design and implementation of a browser-based bot challenge system, utilizing TypeScript, JSX, Java, and Spring MVC, reducing bot sign-ups and sign-ins by 26%.",
      "Optimized CAPTCHA service code by improving service design and implementing asynchronous processing in Java to reduce processing time from 650ms to 560ms, boosting performance by 14%.",
      "Led the deprecation of an internal service, leveraging data analytics insights through Jupyter notebooks and collaborating with cross-functional teams, resulting in a 20% reduction in operational costs.",
    ],
    logo: "/amazon-logo.png",
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
      <h2 className="text-3xl font-bold mb-6 text-gray-100">Experience</h2>
      <div className="space-y-6">
        {experiences.map((job, index) => (
          <div
            key={index}
            className="relative pl-8 before:content-[''] before:absolute before:left-0 before:top-0 before:bottom-0 before:w-0.5 before:bg-gray-600"
          >
            <div className="flex items-start mb-2">
              <div className="bg-white rounded-full p-2 mr-4 w-24 h-24 flex-shrink-0">
                <div className="relative w-full h-full rounded-full overflow-hidden">
                  {" "}
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
                <h3 className="text-2xl font-semibold text-gray-100">
                  {job.title}
                </h3>
                <p className="text-lg text-gray-300">
                  {job.company}, {job.location}
                </p>
                <p className="text-gray-400">{job.period}</p>
              </div>
            </div>
            <ul className="space-y-2 text-gray-300 mb-4">
              {job.description.map((point, pointIndex) => (
                <li key={pointIndex} className="flex items-start">
                  <span className="mr-2 mt-1.5 text-gray-500">•</span>
                  <span>{point}</span>
                </li>
              ))}
            </ul>
            <ChipList items={job.skills} category="frameworks" />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
