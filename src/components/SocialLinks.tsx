// SocialLinks.tsx
import React from "react";
import { FaGithub, FaEnvelope, FaLinkedin } from "react-icons/fa";
import ResumeButton from "../components/ResumeButton";
import BlogButton from "./blog/BlogButton";

const SocialLinks: React.FC = () => {
  return (
    <div className="flex gap-4 items-center">
      <div className="flex items-center gap-3">
        <ResumeButton />
        <BlogButton />
      </div>
      <a
        href="https://github.com/advait-d"
        target="_blank"
        rel="noopener noreferrer"
        className="text-[#8892b0] hover:text-[#64ffda] transition-colors duration-200"
      >
        <FaGithub size={22} />
      </a>
      <a
        href="mailto:advait.deshmukh3@gmail.com"
        className="text-[#8892b0] hover:text-[#64ffda] transition-colors duration-200"
      >
        <FaEnvelope size={22} />
      </a>
      <a
        href="https://www.linkedin.com/in/advaitdeshmukh/"
        target="_blank"
        rel="noopener noreferrer"
        className="text-[#8892b0] hover:text-[#64ffda] transition-colors duration-200"
      >
        <FaLinkedin size={22} />
      </a>
    </div>
  );
};

export default SocialLinks;
