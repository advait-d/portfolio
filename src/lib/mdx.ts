import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { serialize } from "next-mdx-remote/serialize";
import { BlogPostType } from "@/types/blog";

export interface BlogFrontmatter {
  title: string;
  date: string;
  author: string;
  category: string;
  excerpt: string;
  readTime: string;
  imageUrl?: string;
}

const postsDirectory = path.join(process.cwd(), "src", "app", "blog", "posts");

export async function getPostBySlug(
  slug: string
): Promise<BlogPostType | null> {
  try {
    const endpoint = `${process.env.NEXT_PUBLIC_API_URL}/api/posts/${slug}`;
    console.log("Fetching Posts from endpoint: ", endpoint);
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/api/posts/${slug}`
    );
    if (!response.ok) {
      if (response.status === 404) {
        return null;
      }
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const post = await response.json();
    return post;
  } catch (error) {
    console.error(`Error fetching post with slug ${slug}:`, error);
    return null;
  }
}

export async function getAllPosts(): Promise<BlogPostType[]> {
  try {
    const endpoint = `${process.env.NEXT_PUBLIC_API_URL}/api/posts`;
    console.log("Fetching Posts from endpoint: ", endpoint);
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/api/posts`
    );
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const posts = await response.json();
    return posts;
  } catch (error) {
    console.error("Error fetching posts:", error);
    return [];
  }
}
