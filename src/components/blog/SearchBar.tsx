"use client";

import { motion } from "framer-motion";

interface SearchBarProps {
  searchQuery: string;
  setSearchQuery: (query: string) => void;
}

export default function SearchBar({ searchQuery, setSearchQuery }: SearchBarProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      className="w-full max-w-md mx-auto"
    >
      <input
        type="text"
        placeholder="Search posts..."
        className="w-full px-4 py-2 rounded-lg border border-[#233554]
                 bg-[#112240] text-[#ccd6f6] placeholder-[#8892b0]
                 focus:ring-2 focus:ring-[#64ffda]/50 focus:border-[#64ffda]/50
                 transition-colors duration-200 outline-none"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />
    </motion.div>
  );
}
