"use client";

import React, { useEffect, useRef, useState, useCallback } from "react";
import Header from "../components/Header";
import About from "../components/About";
import Skills from "../components/Skills";
import Experience from "../components/Experience";
import Projects from "../components/Projects";
import SocialLinks from "../components/SocialLinks";
import Education from "../components/Education";
import Footer from "../components/Footer";
import { motion } from "framer-motion";

const SECTIONS = ["about", "skills", "experience", "education", "projects"];

export default function Home() {
  const [activeSection, setActiveSection] = useState("about");

  // Mouse-following gradient
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      document.documentElement.style.setProperty("--mouse-x", `${e.clientX}px`);
      document.documentElement.style.setProperty("--mouse-y", `${e.clientY}px`);
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  // Scroll-based active section tracking
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const viewportHeight = window.innerHeight;
      let currentSection = SECTIONS[0];

      for (const id of SECTIONS) {
        const el = document.getElementById(id);
        if (!el) continue;
        const rect = el.getBoundingClientRect();
        // A section is "active" when its top is at or above ~40% of the viewport
        if (rect.top <= viewportHeight * 0.4) {
          currentSection = id;
        }
      }

      // If scrolled to the very bottom, activate the last section
      if (window.innerHeight + scrollY >= document.documentElement.scrollHeight - 50) {
        currentSection = SECTIONS[SECTIONS.length - 1];
      }

      setActiveSection(currentSection);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    // Run once on mount to set initial active section
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  const SectionNav = () => (
    <nav className="hidden lg:flex flex-col gap-3 mt-12">
      {SECTIONS.map((section) => (
        <a
          key={section}
          href={`#${section}`}
          className={`nav-link flex items-center gap-4 group py-1 ${
            activeSection === section ? "active" : ""
          }`}
        >
          <span className="nav-indicator" />
          <span
            className={`nav-text text-xs font-bold uppercase tracking-widest transition-colors duration-300 ${
              activeSection === section
                ? "text-[#ccd6f6]"
                : "text-[#8892b0] group-hover:text-[#ccd6f6]"
            }`}
          >
            {section}
          </span>
        </a>
      ))}
    </nav>
  );

  return (
    <div className="relative min-h-screen">
      {/* Mouse-following gradient */}
      <div className="mouse-gradient" />

      {/* Mobile Layout (visible below 1024px) */}
      <div className="lg:hidden relative z-10">
        <motion.main
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="p-6 max-w-screen-sm mx-auto"
        >
          <motion.div variants={itemVariants} className="mb-6">
            <Header />
            <div className="mt-6">
              <SocialLinks />
            </div>
          </motion.div>
          <motion.div variants={itemVariants}>
            <About />
          </motion.div>
          <motion.div variants={itemVariants}>
            <Skills />
          </motion.div>
          <motion.div variants={itemVariants}>
            <Experience />
          </motion.div>
          <motion.div variants={itemVariants}>
            <Education />
          </motion.div>
          <motion.div variants={itemVariants}>
            <Projects />
          </motion.div>
        </motion.main>
        <Footer />
      </div>

      {/* Desktop Layout (visible above 1024px) */}
      <div className="hidden lg:flex flex-row relative z-10">
        {/* Left Column — sticky sidebar */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="lg:fixed lg:w-2/5 h-screen p-8 lg:p-12 lg:pl-[10%] flex flex-col justify-between min-w-[300px] max-w-[800px]"
        >
          <div>
            <Header />
            <SectionNav />
          </div>
          <div className="pb-8">
            <SocialLinks />
          </div>
        </motion.div>

        {/* Right Column — scrollable content */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="lg:ml-[40%] w-full lg:w-3/5 min-h-screen min-w-[300px] max-w-[1200px] mx-auto"
        >
          <motion.main
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="p-8 lg:p-12 lg:pr-[10%]"
          >
            <motion.div variants={itemVariants}>
              <About />
            </motion.div>
            <motion.div variants={itemVariants}>
              <Skills />
            </motion.div>
            <motion.div variants={itemVariants}>
              <Experience />
            </motion.div>
            <motion.div variants={itemVariants}>
              <Education />
            </motion.div>
            <motion.div variants={itemVariants}>
              <Projects />
            </motion.div>
          </motion.main>
          <Footer />
        </motion.div>
      </div>
    </div>
  );
}
