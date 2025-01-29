import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";
import matter from "gray-matter";

export async function GET() {
  const postsDirectory = path.join(
    process.cwd(),
    "src",
    "app",
    "blog",
    "posts"
  );

  if (!fs.existsSync(postsDirectory)) {
    console.error(`Directory not found: ${postsDirectory}`);
    return NextResponse.json(
      { error: "Posts directory not found" },
      { status: 404 }
    );
  }
  const filenames = fs.readdirSync(postsDirectory);

  const posts = filenames.map((filename) => {
    const filePath = path.join(postsDirectory, filename);
    const fileContents = fs.readFileSync(filePath, "utf8");
    const { data, content } = matter(fileContents);

    return {
      slug: filename.replace(/\.mdx$/, ""),
      ...data,
      content: content // Only return a preview of the content
    };
  });

  return NextResponse.json(posts);
}
