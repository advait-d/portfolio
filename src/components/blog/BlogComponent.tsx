"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import BlogPost from "./BlogPost";
import SearchBar from "./SearchBar";
import type { BlogPostType } from "@/types/blog";
import Link from "next/link";
import { getAllPosts } from "@/lib/mdx";

export default function BlogComponent() {
  const [posts, setPosts] = useState<BlogPostType[]>([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchPosts() {
      try {
        setIsLoading(true);
        const fetchedPosts = await getAllPosts();
        setPosts(fetchedPosts);
        setPosts(fetchedPosts);
        setError(null);
      } catch (err) {
        console.error("Error fetching posts:", err);
        setError("Failed to load posts. Please try again later.");
      } finally {
        setIsLoading(false);
      }
    }
    fetchPosts();
  }, []);

  const filteredPosts = posts.filter(
    (post) =>
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.category.toLowerCase().includes(searchQuery.toLowerCase())
  );

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <section className="w-full">
      <div className="flex items-center justify-between mb-12">
        <Link
          href="/"
          className="text-gray-600 dark:text-gray-300 hover:text-gray-900 
                   dark:hover:text-white transition-colors duration-200"
        >
          ← Back to Portfolio
        </Link>
      </div>

      <div className="space-y-8">
        {/* Title and Search Bar in same line */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <h1 className="text-4xl font-bold">Blog</h1>
          <div className="w-full sm:w-auto max-w-md">
            <SearchBar
              searchQuery={searchQuery}
              setSearchQuery={setSearchQuery}
            />
          </div>
        </div>

        <motion.div
          className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 mt-8"
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: { staggerChildren: 0.1 },
            },
          }}
          initial="hidden"
          animate="visible"
        >
          {filteredPosts.map((post) => (
            <BlogPost key={post.slug} post={post} />
          ))}
        </motion.div>

        {filteredPosts.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center text-gray-600 dark:text-gray-400 mt-8"
          >
            No posts found matching your search.
          </motion.div>
        )}
      </div>
    </section>
  );
}
