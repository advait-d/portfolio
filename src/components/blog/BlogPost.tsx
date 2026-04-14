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
      className="bg-[#112240] rounded-lg overflow-hidden border border-[#233554] 
                 hover:border-[#64ffda]/30 transition-all duration-300 group"
    >
      {post.imageUrl && (
        <div className="relative h-48 w-full">
          <Image
            src={post.imageUrl}
            alt={post.title}
            fill
            className="object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-300"
          />
        </div>
      )}
      <div className="p-6">
        <div className="flex items-center justify-between mb-3">
          <span className="text-sm text-[#64ffda] font-medium">
            {post.category}
          </span>
          <span className="text-sm text-[#8892b0]">
            {post.date}
          </span>
        </div>
        <h2 className="text-xl font-semibold text-[#ccd6f6] mb-2 group-hover:text-[#64ffda] transition-colors duration-300">{post.title}</h2>
        <p className="text-[#8892b0] mb-4">{post.excerpt}</p>
        <div className="flex items-center justify-between">
          <Link
            href={`/blog/${post.slug}`}
            className="text-[#64ffda] hover:underline font-medium transition-colors duration-200"
          >
            Read more →
          </Link>
          <span className="text-sm text-[#8892b0]">
            {post.readTime}
          </span>
        </div>
      </div>
    </motion.article>
  );
}
