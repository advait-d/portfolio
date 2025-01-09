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
        I&#39;m a software engineer with over 4 years of experience building web
        applications and backend systems that solve real-world problems.
      </p>
      <p className="mb-4 text-black dark:text-gray-300  bg-white dark:bg-[#111111]">
        I&#39;ve worked across industries like retail tech, healthcare, along
        with startups, gaining hands-on experience in everything from designing
        scalable systems to delivering features that make a difference.
      </p>
      <p className="mb-4 text-black dark:text-gray-300  bg-white dark:bg-[#111111]">
        I enjoy working with tools across the Full Stack, including Java,
        Python, Spring Boot, Angular, React, and NextJS &#40;that I used to build
        this website&#41;. I&#39;m always excited to work on projects that involve
        working with cloud technologies like AWS, exploring AI, and Distributed
        Systems.
      </p>
      <p className="mb-6 text-black dark:text-gray-300  bg-white dark:bg-[#111111]">
        Outside of work, you&#39;ll find me chasing experiences, staying active,
        and finding creative ways to grow both personally and professionally.
      </p>
    </section>
  );
};

export default About;
