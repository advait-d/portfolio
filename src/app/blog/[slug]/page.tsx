import { getAllPosts, getPostBySlug } from "@/lib/mdx";
import { serialize } from "next-mdx-remote/serialize";
import { notFound } from "next/navigation";
import { format } from "date-fns";
import Image from "next/image";
import Link from "next/link";
import MDXContent from "@/components/MDXContent";
import BlogFooterNavigation from "@/components/BlogFooterNavigation";
import type { BlogPostType } from "@/types/blog";

// Skip static prerendering — next-mdx-remote v6 client MDXRemote uses hooks
// that conflict with Next.js 15's static prerender worker.
// Dynamic rendering also ensures blog content is always fresh from the API.
export const dynamic = 'force-dynamic';

interface PageProps {
  params: Promise<{ slug: string }>;
}

export default async function BlogPost({ params }: PageProps) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  const mdxSource = await serialize(post.content || "");

  return (
    <div className="relative min-h-screen">
        <div className="max-w-4xl mx-auto px-4 py-8 relative">
          {/* Navigation */}
          <div className="flex items-center justify-between mb-12 sticky top-0 bg-[#0a192f] z-10 py-4">
            <Link
              href="/blog"
              className="text-[#8892b0] hover:text-[#64ffda] transition-colors duration-200"
            >
              ← Blog Posts
            </Link>
          </div>

          {/* Article */}
          <article className="prose prose-invert prose-lg max-w-none">
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
                <div className="flex items-center gap-4 text-sm text-[#8892b0]">
                  <span>{post.category}</span>
                  <span>•</span>
                  <span>{format(new Date(post.date), "MMMM d, yyyy")}</span>
                  <span>•</span>
                  <span>{post.readTime}</span>
                </div>

                <h1 className="text-4xl font-bold text-[#ccd6f6]">{post.title}</h1>
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
  );
}

export async function generateStaticParams() {
  const posts = await getAllPosts()
  return posts.map((post) => ({
    slug: post.slug,
  }))
}

export async function generateMetadata({ params }: PageProps) {
    const { slug } = await params
    const post = await getPostBySlug(slug)
    if (!post) {
      return { title: "Not Found" }
    }
    return {
      title: post.title,
      description: post.excerpt,
    }
  }