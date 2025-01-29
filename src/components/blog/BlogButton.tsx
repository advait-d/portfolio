// ResumeButton.tsx
"use client";

import React from "react";
import Link from "next/link";
import { LucideClipboardPen } from "lucide-react";

const BlogButton: React.FC = () => {
  return (
    <Link
      href="/blog"
      className="flex items-center bg-white dark:bg-black hover:bg-black dark:hover:bg-white text-black dark:text-white hover:text-white dark:hover:text-black px-3 py-1 rounded transition duration-300"
    >
      <LucideClipboardPen size={18} />
        &nbsp;Blog
    </Link>
  );
};

export default BlogButton;
