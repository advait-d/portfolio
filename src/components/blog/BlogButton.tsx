// BlogButton.tsx
"use client";

import React from "react";
import Link from "next/link";
import { LucideClipboardPen } from "lucide-react";

const BlogButton: React.FC = () => {
  return (
    <Link
      href="/blog"
      className="flex items-center border border-[#64ffda] text-[#64ffda] hover:bg-[#64ffda]/10 px-3 py-1.5 rounded text-sm transition duration-300"
    >
      <LucideClipboardPen size={14} className="mr-1.5" />
      Blog
    </Link>
  );
};

export default BlogButton;
