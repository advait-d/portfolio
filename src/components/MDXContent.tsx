"use client"

import { MDXRemote, type MDXRemoteSerializeResult } from "next-mdx-remote"
import React from 'react';

const components = {
    // Add any custom components you want to use in MDX here
    h1: (props: any) => <h1 className="text-3xl font-bold mt-8 mb-4" {...props} />,
    h2: (props: any) => <h2 className="text-2xl font-bold mt-6 mb-3" {...props} />,
    h3: (props: any) => <h3 className="text-xl font-bold mt-4 mb-2" {...props} />,
    p: (props: any) => <p className="my-4" {...props} />,
    ul: (props: any) => <ul className="list-disc list-inside my-4" {...props} />,
    ol: (props: any) => <ol className="list-decimal list-inside my-4" {...props} />,
    code: (props: any) => (
      <code className="bg-[#112240] text-[#64ffda] rounded px-1" {...props} />
    ),
    pre: (props: any) => (
      <pre className="bg-[#112240] rounded p-4 my-4 overflow-x-auto overflow-y-auto" {...props} />
    ),
  };

interface MDXContentProps {
  source: any;
}

const MDXContent: React.FC<MDXContentProps> = ({ source }) => {
    return (
      <div className="prose prose-invert prose-lg max-w-none">
        <MDXRemote {...source} components={components} />
      </div>
    );
  };
  

  export default MDXContent;