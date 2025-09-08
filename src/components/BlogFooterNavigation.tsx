"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ArrowUp } from "lucide-react";
import { useEffect, useState } from "react";

export default function BlogFooterNavigation() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY || document.documentElement.scrollTop;
      setIsVisible(scrolled > 300);
    };

    // Immediate check
    handleScroll();

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });

    // Fallback for Safari < 14
    if (typeof window.scrollTo !== "function") {
      document.documentElement.scrollTop = 0;
    }
  };

  return (
    <footer className="mt-12 pt-6 border-t border-gray-200 dark:border-gray-800">
      <div className="container mx-auto px-4">
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
          <Link
            href="/blog"
            className="flex items-center text-primary hover:text-primary/80 transition-colors duration-200"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to all posts
          </Link>
          {/* Conditionally render the button based on isVisible state */}
          {isVisible && (
            <Button
              variant="outline"
              size="sm"
              onClick={scrollToTop}
              className="flex items-center shadow-lg dark:shadow-gray-800/50"
            >
              <ArrowUp className="mr-2 h-4 w-4" />
              Back to top
            </Button>
          )}
        </div>
      </div>
    </footer>
  );
}
