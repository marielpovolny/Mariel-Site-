import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import { ReactNode } from "react";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Mariel Povolny | Technology Policy Researcher",
  description: "Personal website of Mariel Povolny, researcher at Columbia SIPA Innovation Lab focusing on technology policy, digital governance, and AI impact research.",
  authors: [{ name: "Mariel Povolny" }],
  keywords: ["technology policy", "digital governance", "AI impact", "research", "SIPA", "Columbia University"],
};

interface NavLinkProps {
  href: string;
  children: ReactNode;
  className?: string;
}

const NavLink = ({ href, children, className = "" }: NavLinkProps) => {
  return (
    <Link 
      href={href} 
      className={`relative px-3 py-2 text-gray-800 font-medium hover:text-primary transition-colors duration-200 
      after:content-[''] after:absolute after:w-0 after:h-0.5 after:bg-primary after:left-0 after:right-0 
      after:bottom-0 after:mx-auto after:transition-all after:duration-300 hover:after:w-full ${className}`}
    >
      {children}
    </Link>
  );
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const currentYear = new Date().getFullYear();
  
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
      <body className="antialiased min-h-screen flex flex-col bg-white text-gray-900">
        {/* Skip to content link for accessibility */}
        <a href="#main-content" className="skip-to-content">
          Skip to content
        </a>
        
        <header className="sticky top-0 z-10 border-b bg-white shadow-sm">
          <div className="max-w-7xl mx-auto flex items-center justify-between p-4">
            <Link 
              href="/" 
              className="text-xl font-semibold text-gray-900 hover:text-primary transition-colors"
              aria-label="Mariel Povolny - Home"
            >
              Mariel Povolny
            </Link>
            
            {/* Mobile menu button - would need JS implementation in a real site */}
            <button 
              className="md:hidden p-2 text-gray-700 hover:text-primary focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 rounded-md"
              aria-label="Toggle menu"
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
            
            {/* Desktop navigation */}
            <nav className="hidden md:block">
              <ul className="flex space-x-1">
                <li><NavLink href="/">Home</NavLink></li>
                <li><NavLink href="/about">About</NavLink></li>
                <li><NavLink href="/research">Research</NavLink></li>
                <li><NavLink href="/publications">Publications</NavLink></li>
                <li><NavLink href="/blog">Blog</NavLink></li>
                <li><NavLink href="/resume">Resume</NavLink></li>
                <li>
                  <Link
                    href="/contact"
                    className="ml-2 px-4 py-2 bg-primary text-white rounded-md hover:bg-primary-dark transition-colors focus:outline-none focus:ring-2 focus:ring-primary-dark focus:ring-offset-2"
                  >
                    Contact
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        </header>
        
        <main id="main-content" className="flex-grow animate-fade-in">
          <div className="max-w-7xl mx-auto p-4 md:p-6 lg:p-8">
            {children}
          </div>
        </main>
        
        <footer className="border-t bg-gray-50 mt-16">
          <div className="max-w-7xl mx-auto p-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
              <div>
                <h3 className="text-lg font-semibold mb-4 text-gray-800">Mariel Povolny</h3>
                <p className="text-gray-700 mb-4">
                  Researcher at Columbia SIPA Innovation Lab exploring the intersection of technology, policy, and digital governance.
                </p>
                <div className="flex space-x-4">
                  <a 
                    href="https://www.linkedin.com/in/mariel-povolny-b0b653178/" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="text-gray-700 hover:text-primary transition-colors"
                    aria-label="LinkedIn Profile"
                  >
                    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                    </svg>
                  </a>
                </div>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold mb-4 text-gray-800">Quick Links</h3>
                <ul className="space-y-2">
                  <li><Link href="/about" className="text-gray-700 hover:text-primary transition-colors">About</Link></li>
                  <li><Link href="/research" className="text-gray-700 hover:text-primary transition-colors">Research</Link></li>
                  <li><Link href="/publications" className="text-gray-700 hover:text-primary transition-colors">Publications</Link></li>
                  <li><Link href="/blog" className="text-gray-700 hover:text-primary transition-colors">Blog</Link></li>
                  <li><Link href="/resume" className="text-gray-700 hover:text-primary transition-colors">Resume</Link></li>
                  <li><Link href="/contact" className="text-gray-700 hover:text-primary transition-colors">Contact</Link></li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold mb-4 text-gray-800">Contact</h3>
                <p className="text-gray-700 mb-2">Columbia SIPA Innovation Lab</p>
                <p className="text-gray-700 mb-4">New York, NY</p>
                <a 
                  href="mailto:contact@marielpovolny.com" 
                  className="text-primary hover:text-primary-dark transition-colors font-medium"
                >
                  contact@marielpovolny.com
                </a>
              </div>
            </div>
            
            <div className="pt-8 border-t border-gray-200 flex flex-col md:flex-row items-center justify-between gap-4 text-sm">
              <p className="text-gray-700">© {currentYear} Mariel Povolny. All rights reserved.</p>
              <div className="flex space-x-6">
                <a href="#" className="text-gray-700 hover:text-primary transition-colors">Privacy Policy</a>
                <a href="#" className="text-gray-700 hover:text-primary transition-colors">Terms of Service</a>
                <a href="#" className="text-gray-700 hover:text-primary transition-colors">Accessibility</a>
              </div>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
