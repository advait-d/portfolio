"use client"

import Link from "next/link"

export default function BlogFooterNavigation() {
  return (
    <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-800">
      <div className="flex justify-between items-center">
        <Link
          href="/blog"
          className="text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 transition-colors duration-200"
        >
          ← Back to all posts
        </Link>
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="fixed bottom-8 right-8 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors duration-200"
        >
          Back to top ↑
        </button>
      </div>
    </div>
  )
}
