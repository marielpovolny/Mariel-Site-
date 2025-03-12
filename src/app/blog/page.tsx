import React from 'react';
import Link from 'next/link';

export const metadata = {
  title: 'Blog | Mariel Povolny',
  description: 'Latest insights, reflections, and updates on technology policy research by Mariel Povolny.',
};

// Blog post data - in a real site, this would likely come from a CMS
const blogPosts = [
  {
    slug: 'new-frameworks-ai-governance',
    title: 'New Frameworks for AI Governance',
    date: 'June 15, 2023',
    excerpt: 'Recent developments in AI capabilities have outpaced our governance mechanisms. This post explores emerging frameworks being developed across jurisdictions to address the unique challenges of general-purpose AI systems.',
    category: 'AI Policy',
    readTime: '8 min read'
  },
  {
    slug: 'lessons-from-red-teaming-exercises',
    title: 'Five Lessons from Recent Red-Teaming Exercises',
    date: 'May 2, 2023',
    excerpt: 'Red-teaming has emerged as a critical methodology for assessing AI system vulnerabilities. This post shares key insights from recent red-teaming exercises conducted with cross-functional teams.',
    category: 'Research Methods',
    readTime: '6 min read'
  },
  {
    slug: 'policy-research-tools',
    title: 'Open-Source Tools for Better Policy Research',
    date: 'April 18, 2023',
    excerpt: 'The quality of technology policy depends on the tools used to develop it. This post examines how open-source research tools can enhance transparency, reproducibility, and collaborative development.',
    category: 'Open Source',
    readTime: '5 min read'
  },
  {
    slug: 'democratic-values-tech-design',
    title: 'Embedding Democratic Values in Technology Design',
    date: 'March 10, 2023',
    excerpt: 'How can we ensure that the technologies shaping our civic life reflect democratic values? This post proposes a framework for values-based technology design and evaluation.',
    category: 'Democracy & Tech',
    readTime: '7 min read'
  },
  {
    slug: 'challenges-platform-governance',
    title: 'Emerging Challenges in Platform Governance',
    date: 'February 25, 2023',
    excerpt: 'Digital platforms continue to evolve in complexity and influence. This post identifies key governance challenges that have emerged in recent months and potential approaches to address them.',
    category: 'Platform Governance',
    readTime: '9 min read'
  },
  {
    slug: 'collaboration-technology-policy',
    title: 'The Power of Cross-Sector Collaboration in Technology Policy',
    date: 'January 30, 2023',
    excerpt: 'Effective technology policy requires input from diverse stakeholders. This post examines successful models of collaboration between government, industry, civil society, and academia.',
    category: 'Policy Development',
    readTime: '6 min read'
  }
];

export default function BlogPage() {
  return (
    <div className="flex flex-col gap-12">
      <section>
        <h1 className="text-4xl font-bold mb-6">Blog</h1>
        <p className="text-lg mb-8">
          Welcome to my blog, where I share insights, reflections, and updates on my research in technology policy, 
          digital governance, and AI ethics. These posts aim to bridge academic rigor with accessible analysis 
          for policymakers, technologists, and engaged citizens.
        </p>
      </section>

      {/* Featured Post */}
      <section className="mb-8">
        <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl overflow-hidden border border-blue-100">
          <div className="flex flex-col md:flex-row">
            <div className="md:w-1/2 p-8">
              <span className="inline-block px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium mb-4">
                Featured Post
              </span>
              <h2 className="text-2xl font-bold mb-4">{blogPosts[0].title}</h2>
              <p className="text-gray-600 mb-2">{blogPosts[0].date} • {blogPosts[0].readTime}</p>
              <p className="mb-6">{blogPosts[0].excerpt}</p>
              <Link 
                href={`/blog/${blogPosts[0].slug}`}
                className="inline-block px-5 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
              >
                Read Full Post
              </Link>
            </div>
            <div className="md:w-1/2 bg-blue-100 h-64 md:h-auto flex items-center justify-center">
              <span className="text-blue-600 font-medium">Featured Post Image</span>
            </div>
          </div>
        </div>
      </section>

      {/* Recent Posts */}
      <section>
        <h2 className="text-2xl font-bold mb-6 border-b pb-2">Recent Posts</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.slice(1).map((post) => (
            <div key={post.slug} className="border rounded-lg overflow-hidden hover:shadow-md transition-shadow">
              <div className="h-48 bg-gray-100 flex items-center justify-center">
                <span className="text-gray-500">Post Image</span>
              </div>
              <div className="p-5">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm font-medium text-blue-600">{post.category}</span>
                  <span className="text-xs text-gray-500">{post.date}</span>
                </div>
                <h3 className="font-bold text-xl mb-2">{post.title}</h3>
                <p className="text-gray-600 mb-4 line-clamp-3">{post.excerpt}</p>
                <div className="flex justify-between items-center">
                  <Link 
                    href={`/blog/${post.slug}`}
                    className="text-blue-600 hover:underline font-medium"
                  >
                    Read more →
                  </Link>
                  <span className="text-xs text-gray-500">{post.readTime}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Blog Categories */}
      <section>
        <h2 className="text-2xl font-bold mb-6 border-b pb-2">Categories</h2>
        <div className="flex flex-wrap gap-3">
          <Link 
            href="/blog/category/ai-policy"
            className="px-4 py-2 bg-blue-50 text-blue-800 rounded-md hover:bg-blue-100 transition-colors"
          >
            AI Policy
          </Link>
          <Link 
            href="/blog/category/research-methods"
            className="px-4 py-2 bg-green-50 text-green-800 rounded-md hover:bg-green-100 transition-colors"
          >
            Research Methods
          </Link>
          <Link 
            href="/blog/category/open-source"
            className="px-4 py-2 bg-purple-50 text-purple-800 rounded-md hover:bg-purple-100 transition-colors"
          >
            Open Source
          </Link>
          <Link 
            href="/blog/category/democracy-tech"
            className="px-4 py-2 bg-yellow-50 text-yellow-800 rounded-md hover:bg-yellow-100 transition-colors"
          >
            Democracy & Tech
          </Link>
          <Link 
            href="/blog/category/platform-governance"
            className="px-4 py-2 bg-red-50 text-red-800 rounded-md hover:bg-red-100 transition-colors"
          >
            Platform Governance
          </Link>
          <Link 
            href="/blog/category/policy-development"
            className="px-4 py-2 bg-indigo-50 text-indigo-800 rounded-md hover:bg-indigo-100 transition-colors"
          >
            Policy Development
          </Link>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="bg-gray-50 p-8 rounded-lg">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="md:w-2/3">
            <h2 className="text-2xl font-bold mb-2">Subscribe to the Newsletter</h2>
            <p className="text-gray-600">
              Stay updated with my latest research, publications, and insights on technology policy. 
              I send updates approximately once a month.
            </p>
          </div>
          <div className="md:w-1/3 w-full">
            <form className="flex flex-col sm:flex-row gap-2">
              <input 
                type="email" 
                placeholder="Your email address" 
                className="flex-grow px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
              <button 
                type="submit"
                className="whitespace-nowrap px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
} 