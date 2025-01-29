// src/types/blog.ts
export interface BlogPostType {
  slug: string;
  title: string;
  author: string;
  excerpt: string;
  date: string;
  readTime: string;
  category: string;
  imageUrl?: string;
  content?: string;
}
