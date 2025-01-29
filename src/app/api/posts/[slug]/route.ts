// src/app/api/posts/[slug]/route.ts
import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { notFound } from "next/navigation";

export async function GET(
  request: Request,
  context: { params: { slug: string } }
  //{ params }: { params: { slug: string } }
) {
  try {
    const resolvedParams = await Promise.resolve(context.params);
    const slug = resolvedParams.slug;
    const postsDirectory = path.join(
      process.cwd(),
      "src",
      "app",
      "blog",
      "posts"
    );
    if (!slug) {
      return new NextResponse(null, { status: 400 });
    }
    const filePath = path.join(postsDirectory, `${slug}.mdx`);

    if (!fs.existsSync(filePath)) {
      return new NextResponse(null, { status: 404 });
    }

    const fileContents = fs.readFileSync(filePath, "utf8");
    const { data, content } = matter(fileContents);

    const post = {
      slug,
      ...data,
      content,
    };

    return NextResponse.json(post);
  } catch (err) {
    console.error("Error in GET /api/posts/[slug]:", err);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
