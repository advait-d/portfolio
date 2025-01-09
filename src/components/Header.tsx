// Header.tsx
import React from "react";
import Image from "next/image";
import { ThemeToggle } from "@/app/ThemeToggle";

const Header: React.FC = () => {
  return (
    <header className="w-full py-4 transition-colors duration-200 dark:bg-[#111111] bg-white">
      <div className="flex flex-col">
        <div className="absolute top-4 left-4">
          <ThemeToggle />
        </div>
        
        <div className="mb-4 relative w-[150px] h-[150px] overflow-hidden rounded-full">
          <Image
            src="/profile-image.jpg"
            alt="Advait Deshmukh"
            layout="fill"
            objectFit="cover"
          />
        </div>
        
        <h1 className="text-4xl font-bold mb-2 dark:text-white text-black">
          Advait Deshmukh
        </h1>
        
        <h2 className="text-xl text-gray-600 dark:text-gray-400 mb-4">
          Senior Software Engineer
        </h2>
        
        <h3 className="text-lg text-gray-600 dark:text-gray-400 mb-4">
          📍 Mumbai, India
        </h3>
        
        <p className="text-gray-700 dark:text-gray-300 text-sm">
          Turning ideas into solutions that make a difference.
        </p>

        <a
          href="mailto:advait.deshmukh3@gmail.com"
          className="mt-4 relative block cursor-pointer group"
        >
          <div className="relative inline-block">
            <div className="absolute inset-0 bg-yellow-200 hover:bg-yellow-300 dark:bg-yellow-300 dark:hover:bg-red-400 transform -rotate-0 rounded-xl"></div>
            <div className="relative p-3">
            <p className="text-black dark:text-black text-medium font-semibold">
                Currently Seeking New Opportunities in the USA
                <span className="mx-1">🇺🇸</span>
                <span className="text-black dark:text-black">(Valid H-1B)</span>
              </p>
            </div>
          </div>
        </a>
      </div>
    </header>
  );
};

export default Header;