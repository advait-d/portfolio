// src/app/api/posts/[slug]/route.ts
import { NextRequest } from "next/server";
import fs from "fs";
import path from "path";
import matter from "gray-matter";

export async function GET(
  request: NextRequest,
) {
  try {
    const url = new URL(request.url)
    const slug = url.pathname.split("/").pop()

    if (!slug) {
      return new Response("Slug is required", { status: 400 })
    }
    if (!slug) {
      return new Response("Slug is required", { status: 400 });
    }

    const postsDirectory = path.join(
      process.cwd(),
      "src",
      "app",
      "blog",
      "posts"
    );

    const filePath = path.join(postsDirectory, `${slug}.mdx`);

    if (!fs.existsSync(filePath)) {
      return new Response("Post not found", { status: 404 });
    }

    const fileContents = fs.readFileSync(filePath, "utf8");
    const { data, content } = matter(fileContents);

    const post = {
      slug,
      ...data,
      content,
    };

    return new Response(JSON.stringify(post), {
      headers: { "Content-Type": "application/json" },
    });
  } catch (err) {
    console.error("Error in GET /api/posts/[slug]:", err);
    return new Response("Internal Server Error", { status: 500 });
  }
}
