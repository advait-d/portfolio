import React from "react";

const PromoCards: React.FC = () => {
  return (
    <div className="flex flex-col gap-6 mt-12 w-full">
      <a
        href="mailto:advait.deshmukh3@gmail.com"
        className="group block"
      >
        <h3 className="text-base font-semibold text-[#ccd6f6] group-hover:text-[#64ffda] transition-colors duration-300 flex items-center gap-1 mb-2">
          Reach Out!
          <span className="inline-block transition-transform duration-300 text-sm group-hover:translate-x-1 group-hover:-translate-y-1">↗</span>
        </h3>
        <p className="text-[#8892b0] text-sm leading-relaxed">
          Looking for Back-end Engineering, AI Roles <br /> Open to Bangalore/Mumbai/Pune or Remote
        </p>
      </a>
    </div>
  );
};

export default PromoCards;
