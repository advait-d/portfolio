// Header.tsx
import React from "react";
import Image from "next/image";
import { ThemeToggle } from "@/app/ThemeToggle";

const Header: React.FC = () => {
  return (
    <header className="w-full py-4 transition-colors duration-200 dark:bg-[#111111] bg-white">
      <div className="flex flex-col">
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
          Software Engineer
        </h2>
        
        <p className="text-gray-700 dark:text-gray-300 text-sm">
          Turning ideas into solutions that make a difference.
        </p>

        <h3 className="text-md text-gray-600 dark:text-gray-400 mt-4 mb-2">
          📍 Bangalore, India 🇮🇳
        </h3>

        <a
          href="mailto:advait.deshmukh3@gmail.com"
          className="mt-3 relative block cursor-pointer group"
        >
          <div className="relative rounded-lg overflow-hidden transition-all duration-300">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-cyan-500/10 dark:from-blue-400/5 dark:to-cyan-400/5"></div>
            <div className="relative p-4 border border-blue-200 dark:border-blue-900/30 group-hover:border-blue-400 dark:group-hover:border-blue-700 transition-colors duration-300">
              <div className="flex justify-between items-center">
                <div>
                  <p className="text-gray-900 dark:text-white font-semibold">
                    Reach Out!
                  </p>
                  <p className="text-gray-600 dark:text-gray-400 text-sm mt-1">
                    Looking for Back-end Engineering, AI Roles <br></br> Open to Bangalore/Mumbai/Pune or Remote
                  </p>
                </div>
                <span className="text-blue-500 dark:text-blue-400 group-hover:translate-x-1 transition-transform duration-300">→</span>
              </div>
            </div>
          </div>
        </a>
               <a
          href="https://v0-system-design-mastery.vercel.app/"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-3 relative block cursor-pointer group"
        >
          <div className="relative rounded-lg overflow-hidden transition-all duration-300">
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-violet-500/10 dark:from-purple-400/5 dark:to-violet-400/5"></div>
            <div className="relative p-4 border border-purple-200 dark:border-purple-900/30 group-hover:border-purple-400 dark:group-hover:border-purple-700 transition-colors duration-300">
              <div className="flex justify-between items-center">
                <div>
                  <p className="text-gray-900 dark:text-white font-semibold">
                    🎓  System Design Guide
                  </p>
                  <p className="text-gray-600 dark:text-gray-400 text-sm mt-1">
                    Deep dive into scalability & distributed systems
                  </p>
                </div>
                <span className="text-purple-500 dark:text-purple-400 group-hover:translate-x-1 transition-transform duration-300">→</span>
              </div>
            </div>
          </div>
        </a>
      </div>
    </header>
  );
};

export default Header;
