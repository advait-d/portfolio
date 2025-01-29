"use client";

import React from "react";
import BlogComponent from "@/components/blog/BlogComponent";
import { motion } from "framer-motion";
import { ThemeToggle } from "../ThemeToggle";

export default function BlogPage() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
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

  return (
    <div className="relative min-h-screen bg-white text-black dark:bg-[#111111] dark:text-white">
      <div className="absolute inset-0 overflow-auto">
        {/* Mobile Layout (visible below 1024px) */}
        <div className="lg:hidden">
          <motion.main
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="p-6 max-w-screen-sm mx-auto"
          >
            <motion.div variants={itemVariants}>
              <BlogComponent />
            </motion.div>
          </motion.main>
        </div>

        {/* Desktop Layout (visible above 1024px) */}
        <div className="hidden lg:block">
          <motion.main
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="p-8 lg:p-12"
          >
            <motion.div variants={itemVariants}>
              <BlogComponent />
            </motion.div>
          </motion.main>
        </div>
      </div>
      <div className="fixed top-4 right-4 lg:top-8 lg:right-8 z-50">
        <ThemeToggle />
      </div>
    </div>
  );
}
