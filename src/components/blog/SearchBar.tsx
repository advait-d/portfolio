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
        className="w-full px-4 py-2 rounded-lg border border-gray-300 
                 dark:border-gray-700 bg-white dark:bg-[#1A1A1A]
                 text-gray-900 dark:text-white focus:ring-2 
                 focus:ring-blue-500 focus:border-blue-500
                 transition-colors duration-200"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />
    </motion.div>
  );
}
