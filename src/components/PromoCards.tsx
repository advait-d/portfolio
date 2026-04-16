import React from "react";

const PromoCards: React.FC = () => {
  return (
    <div className="flex flex-col gap-3 mt-4">
      <a
        href="mailto:advait.deshmukh3@gmail.com"
        className="relative block cursor-pointer group"
      >
        <div className="relative rounded-lg overflow-hidden transition-all duration-300">
          <div className="absolute inset-0 bg-gradient-to-r from-[#64ffda]/5 to-[#64ffda]/[0.02]"></div>
          <div className="relative p-4 border border-[#233554] group-hover:border-[#64ffda]/30 transition-colors duration-300 rounded-lg">
            <div className="flex justify-between items-center">
              <div>
                <p className="text-[#ccd6f6] font-semibold">
                  Reach Out!
                </p>
                <p className="text-[#8892b0] text-sm mt-1">
                  Looking for Back-end Engineering, AI Roles <br /> Open to Bangalore/Mumbai/Pune or Remote
                </p>
              </div>
              <span className="text-[#64ffda] group-hover:translate-x-1 transition-transform duration-300">→</span>
            </div>
          </div>
        </div>
      </a>
      <a
        href="https://v0-system-design-mastery.vercel.app/"
        target="_blank"
        rel="noopener noreferrer"
        className="relative block cursor-pointer group"
      >
        <div className="relative rounded-lg overflow-hidden transition-all duration-300">
          <div className="absolute inset-0 bg-gradient-to-r from-[#64ffda]/5 to-[#64ffda]/[0.02]"></div>
          <div className="relative p-4 border border-[#233554] group-hover:border-[#64ffda]/30 transition-colors duration-300 rounded-lg">
            <div className="flex justify-between items-center">
              <div>
                <p className="text-[#ccd6f6] font-semibold">
                  🎓  System Design Guide
                </p>
                <p className="text-[#8892b0] text-sm mt-1">
                  Deep dive into scalability &amp; distributed systems
                </p>
              </div>
              <span className="text-[#64ffda] group-hover:translate-x-1 transition-transform duration-300">→</span>
            </div>
          </div>
        </div>
      </a>
    </div>
  );
};

export default PromoCards;
