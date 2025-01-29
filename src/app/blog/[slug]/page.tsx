//src/app/blog/[slug]/page.tsx
import { getPostBySlug } from "@/lib/mdx";
import { MDXRemote } from "next-mdx-remote";
import { serialize } from "next-mdx-remote/serialize";
import { notFound } from "next/navigation";
import { format } from "date-fns";
import Image from "next/image";
import Link from "next/link";
import { ThemeToggle } from "@/app/ThemeToggle";
import MDXContent from "@/components/MDXContent";
import BlogFooterNavigation from "@/components/BlogFooterNavigation";

export async function generateStaticParams() {
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/posts`);
  const posts = await response.json();
  return posts.map((post: { slug: string }) => ({
    slug: post.slug,
  }));
}

export default async function BlogPost({
  params,
}: {
  params: { slug: string };
}) {
  const resolvedParams = await Promise.resolve(params);

  if (!resolvedParams?.slug) {
    notFound();
  }

  const slug = resolvedParams.slug;

  const post = await getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  const mdxSource = await serialize(post.content || "");

  return (
    <div className="relative min-h-screen bg-white dark:bg-[#111111] text-black dark:text-white">
      <div className="absolute inset-0 overflow-auto">
        <div className="max-w-4xl mx-auto px-4 py-8 relative">
          {/* Navigation */}
          <div className="flex items-center justify-between mb-12 sticky top-0 bg-white dark:bg-[#111111] z-10 py-4">
            <Link
              href="/blog"
              className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors duration-200"
            >
              ← Blog Posts
            </Link>
            <ThemeToggle />
          </div>

          {/* Article */}
          <article className="prose dark:prose-invert prose-lg max-w-none">
            {/* Header */}
            <header className="mb-8">
              {post.imageUrl && (
                <div className="relative w-full h-[400px] mb-6 rounded-lg overflow-hidden">
                  <Image
                    src={post.imageUrl || "/placeholder.svg"}
                    alt={post.title}
                    fill
                    className="object-cover"
                    priority
                  />
                </div>
              )}

              <div className="space-y-4">
                <div className="flex items-center gap-4 text-sm text-gray-600 dark:text-gray-400">
                  <span>{post.category}</span>
                  <span>•</span>
                  <span>{format(new Date(post.date), "MMMM d, yyyy")}</span>
                  <span>•</span>
                  <span>{post.readTime}</span>
                </div>

                <h1 className="text-4xl font-bold mb-4">{post.title}</h1>
                {/*
              <div className="flex items-center gap-3">
                <div className="relative w-10 h-10 rounded-full overflow-hidden">
                  <Image
                    src="/profile-image.jpg"
                    alt={post.author || "Author"}
                    fill
                    className="object-cover"
                  />
                </div>
                <span className="font-medium">{post.author || "Author"}</span>
              </div>
              */}
              </div>
            </header>

            {/* MDX Content */}
            <div className="markdown-content">
              <MDXContent source={mdxSource} />
            </div>
          </article>

          {/* Footer Navigation */}
          <BlogFooterNavigation />

        </div>
      </div>
    </div>
  );
}
