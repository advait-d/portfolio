import React from "react";
import Image from "next/image";

const Header: React.FC = () => {
  return (
    <header>
      <div className="mb-4 relative w-[150px] h-[150px] overflow-hidden rounded-full">
        <Image
          src="/profile-image.jpg" // Replace with the actual path to your image
          alt="Advait Deshmukh"
          layout="fill"
          objectFit="cover"
        />
      </div>
      <h1 className="text-4xl font-bold mb-2">Advait Deshmukh</h1>
      <h2 className="text-xl text-gray-400 mb-4">Senior Software Engineer</h2>
      <h3 className="text-lg text-gray-400 mb-4">📍 Mumbai, India</h3>
      <p className="text-gray-300 text-sm">
        Turning ideas into solutions that make a difference. <br /> <br />
      </p>

      <div className="relative inline-block">
        <div className="absolute inset-0 bg-yellow-100 transform -rotate-0 rounded-xl"></div>
        <div className="relative p-3">
          <p className="text-gray-800 text-medium font-semibold">
            Currently Seeking New Opportunities in India
            <span className="mx-1">🇮🇳</span>
            and the USA
            <span className="mx-1">🇺🇸</span>
            <span className="text-gray-700">(Valid H-1B)</span>
          </p>
        </div>
      </div>
    </header>
  );
};

export default Header;
