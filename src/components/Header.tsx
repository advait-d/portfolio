// Header.tsx
import React from "react";

const Header: React.FC = () => {
  return (
    <header className="w-full py-4">
      <div className="flex flex-col">
        <h1 className="text-4xl sm:text-5xl font-bold mb-2 text-[#ccd6f6] tracking-tight">
          Advait Deshmukh
        </h1>

        <h2 className="text-lg sm:text-xl text-[#ccd6f6] font-medium mb-4">
          Backend Software &amp; AI Engineer
        </h2>

        <p className="text-[#8892b0] text-base max-w-xs leading-relaxed">
          Turning ideas into solutions that make a difference.
        </p>

        <h3 className="text-sm text-[#8892b0] mt-4 mb-2">
          📍 Bangalore, India 🇮🇳
        </h3>
      </div>
    </header>
  );
};

export default Header;
