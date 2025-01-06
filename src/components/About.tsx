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
      <h2 className="text-3xl font-bold mb-6 text-gray-100">About Me</h2>
      <p className="text-gray-300 mb-4">
        Hi, I&#39;m Advait! ✋ <br /> <br />
        I&#39;m a software engineer with over 4 years of experience building web
        applications and backend systems that solve real-world problems.
      </p>
      <p className="text-gray-300 mb-4">
        I&#39;ve worked across industries like retail tech and healthcare, with
        stints at Amazon and Perficient, as well as startups, gaining hands-on
        experience in everything from designing scalable systems to delivering
        features that make a difference.
      </p>
      <p className="text-gray-300 mb-4">
        I enjoy working with tools across the entire stack, including Java,
        Python, Spring Boot, React, and Angular, and I&#39;m always excited to
        dive into new challenges—whether it&#39;s cloud technologies like AWS or
        exploring AI and distributed systems.
      </p>
      <p className="text-gray-300 mb-6">
        Outside of work, you&#39;ll find me chasing experiences, staying active,
        and finding creative ways to grow both personally and professionally.
      </p>
    </section>
  );
};

export default About;
