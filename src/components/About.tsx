import React from "react";

const About: React.FC = () => {
  return (
    <section id="about" className="mb-16">
      <h2 className="text-sm font-bold uppercase tracking-widest text-[#ccd6f6] mb-6 lg:hidden">
        About Me
      </h2>
      <p className="mb-4 text-[#8892b0] leading-relaxed">
        Hi, I&#39;m Advait! ✋ <br /> <br />
        I&#39;m a software engineer with over 5 years of experience architecting scalable backend systems and intelligent, AI-driven applications.
      </p>
      <p className="mb-4 text-[#8892b0] leading-relaxed">
        My experience spans retail tech, healthcare, travel, and banking, where
        I&#39;ve designed robust architectures and delivered impactful features. While my core expertise lies in backend systems using{" "}
        <span className="text-[#ccd6f6]">Java</span>,{" "}
        <span className="text-[#ccd6f6]">Python</span>, and{" "}
        <span className="text-[#ccd6f6]">Spring</span>, I also enjoy building seamless full-stack experiences with{" "}
        <span className="text-[#ccd6f6]">React</span> and{" "}
        <span className="text-[#ccd6f6]">Next.js</span>.
      </p>
      <p className="mb-4 text-[#8892b0] leading-relaxed">
        Recently, I've focused heavily on{" "}
        <span className="text-[#ccd6f6]">Applied AI</span>. Building upon a strong academic foundation in Machine Learning, Deep Learning, and Computer Vision, I now engineer production-ready LLM solutions. This includes deploying a custom System Design Learning assistant for my educational platform and building intelligent chatbots.
      </p>
      <p className="mb-6 text-[#8892b0] leading-relaxed">
        When I'm not coding, I&#39;m exploring new places and experiences,{' '}
        <a 
          href="https://www.strava.com/athletes/120094970" 
          target="_blank" 
          rel="noopener noreferrer"
          className="text-[#64ffda] hover:underline transition-colors duration-200"
        >
          staying active
        </a>
        , and pursuing growth both personally and professionally.
      </p>
    </section>
  );
};

export default About;
