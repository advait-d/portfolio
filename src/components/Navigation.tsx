import React from 'react';
import Link from 'next/link';

const Navigation: React.FC = () => {
  return (
    <nav className="flex flex-col gap-3">
      {['about', 'skills', 'experience', 'education', 'projects'].map((section) => (
        <Link
          key={section}
          href={`#${section}`}
          className="nav-link flex items-center gap-4 group py-1"
        >
          <span className="nav-indicator" />
          <span className="nav-text text-xs font-bold uppercase tracking-widest text-[#8892b0] group-hover:text-[#ccd6f6] transition-colors duration-300">
            {section}
          </span>
        </Link>
      ))}
    </nav>
  );
};

export default Navigation;