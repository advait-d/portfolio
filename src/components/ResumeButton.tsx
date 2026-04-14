// ResumeButton.tsx
"use client";

import React from "react";
import { FaFileDownload } from "react-icons/fa";

const ResumeButton: React.FC = () => {
  return (
    <a
      href="/Advait Resume.pdf"
      download
      className="flex items-center border border-[#64ffda] text-[#64ffda] hover:bg-[#64ffda]/10 px-3 py-1.5 rounded text-sm transition duration-300"
    >
      <FaFileDownload size={14} className="mr-2" />
      Resume
    </a>
  );
};

export default ResumeButton;
