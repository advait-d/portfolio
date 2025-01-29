import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { BlogPostType } from "@/types/blog";

interface BlogPostProps {
  post: BlogPostType;
}

export default function BlogPost({ post }: BlogPostProps) {
  return (
    <motion.article
      variants={{
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 }
      }}
      className="bg-white dark:bg-[#1A1A1A] rounded-lg shadow-md overflow-hidden 
                 hover:shadow-lg transition-shadow duration-300"
    >
      {post.imageUrl && (
        <div className="relative h-48 w-full">
          <Image
            src={post.imageUrl}
            alt={post.title}
            fill
            className="object-cover"
          />
        </div>
      )}
      <div className="p-6">
        <div className="flex items-center justify-between mb-3">
          <span className="text-sm text-blue-600 dark:text-blue-400 font-medium">
            {post.category}
          </span>
          <span className="text-sm text-gray-500 dark:text-gray-400">
            {post.date}
          </span>
        </div>
        <h2 className="text-xl font-semibold mb-2">{post.title}</h2>
        <p className="text-gray-600 dark:text-gray-300 mb-4">{post.excerpt}</p>
        <div className="flex items-center justify-between">
          <Link
            href={`/blog/${post.slug}`}
            className="text-blue-600 dark:text-blue-400 hover:text-blue-800 
                     dark:hover:text-blue-300 font-medium transition-colors duration-200"
          >
            Read more →
          </Link>
          <span className="text-sm text-gray-500 dark:text-gray-400">
            {post.readTime}
          </span>
        </div>
      </div>
    </motion.article>
  );
}
