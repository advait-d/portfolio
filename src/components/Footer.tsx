import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="text-[#8892b0] py-8 mt-12 px-8 lg:px-12 lg:pr-[10%]">
      <div className="flex flex-col items-end justify-center">
        <p className="text-sm leading-relaxed max-w-md text-right">
          Designed and built by{' '}
          <span className="text-[#ccd6f6]">Advait Deshmukh</span>
        </p>
        <p className="text-xs mt-2 text-[#8892b0]/60">
          © {new Date().getFullYear()} All rights reserved
        </p>
      </div>
    </footer>
  );
};

export default Footer;
