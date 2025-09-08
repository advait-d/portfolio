// ResumeButton.tsx
"use client";

import React from "react";
import { FaFileDownload } from "react-icons/fa";

const ResumeButton: React.FC = () => {
  return (
    <a
      href="/Advait Resume.pdf"
      download
      className="flex items-center bg-white dark:bg-black hover:bg-black dark:hover:bg-white text-black dark:text-white hover:text-white dark:hover:text-black px-3 py-1 rounded transition duration-300 mr-4 border border-black dark:border-white"
    >
      <FaFileDownload size={18} className="mr-2" />
      Resume
    </a>
  );
};

export default ResumeButton;
