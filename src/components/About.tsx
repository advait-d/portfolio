import { ThemeToggle } from "@/app/ThemeToggle";
import React from "react";

const calculateAge = (birthDate: Date): number => {
  const today = new Date();
  let age = today.getFullYear() - birthDate.getFullYear();
  const m = today.getMonth() - birthDate.getMonth();
  if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
    age--;
  }
  return age;
};

const About: React.FC = () => {
  const birthDate = new Date(1995, 11, 22); // June 12, 2002
  const age = calculateAge(birthDate);

  return (
    <section id="about" className="mb-8">
      <h2 className="text-3xl font-bold mb-6 text-black dark:text-gray-100  bg-white dark:bg-[#111111]">
        About Me
      </h2>
      <p className="mb-4 text-black dark:text-gray-300  bg-white dark:bg-[#111111]">
        Hi, I&#39;m Advait! ✋ <br /> <br />
        I&#39;m a software engineer with over 5 years of experience building Web
        Applications and Backend Systems that have solved practical challenges.
      </p>
      <p className="mb-4 text-black dark:text-gray-300  bg-white dark:bg-[#111111]">
        My experience spans retail tech, healthcare, travel, and banking, where
        I&#39;ve designed scalable systems and delivered impactful features.
      </p>
      <p className="mb-4 text-black dark:text-gray-300  bg-white dark:bg-[#111111]">
        I'm primarily a back-end developer, but I also enjoy working across the full stack with tools like Java, Python,
        Spring, React, and Next.js &#40;which I used to build this
        website&#41;. I&#39;m particularly excited by projects
        involving cloud technologies like AWS, AI, and Distributed Systems.
      </p>
      <p className="mb-6 text-black dark:text-gray-300 bg-white dark:bg-[#111111]">
        When I'm not coding, I&#39;m exploring new places and experiences, {' '}
        <a 
          href="https://www.strava.com/athletes/120094970" 
          target="_blank" 
          rel="noopener noreferrer"
          className="text-orange-500 hover:text-orange-600 dark:text-orange-400 dark:hover:text-orange-300 underline transition-colors duration-200"
        >
          staying active
        </a>
        , and pursuing growth both personally and professionally.
      </p>
    </section>
  );
};

export default About;
