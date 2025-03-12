import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col gap-16">
      {/* Hero section */}
      <section className="relative flex flex-col-reverse md:flex-row gap-10 items-center py-10 md:py-16 overflow-hidden animate-fade-in bg-gradient-to-br from-white to-gray-50 rounded-xl border border-gray-100 shadow-sm">
        {/* Background decoration */}
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-primary-light rounded-full opacity-20 blur-3xl"></div>
        <div className="absolute -bottom-12 -left-12 w-64 h-64 bg-secondary-light rounded-full opacity-20 blur-3xl"></div>
        
        <div className="flex-1 z-10 px-6 md:px-10">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-gray-900 animate-slide-up">
            Mariel Povolny
          </h1>
          <h2 className="text-xl md:text-2xl text-gray-700 mb-6 animate-slide-up" style={{ animationDelay: '0.1s' }}>
            Researcher at Columbia SIPA Innovation Lab
          </h2>
          <p className="text-lg text-gray-700 mb-8 max-w-2xl text-pretty animate-slide-up" style={{ animationDelay: '0.2s' }}>
            Exploring the intersection of technology, policy, and digital governance with a focus on
            open-source tooling, AI impact on democratic systems, and red-teaming methodologies.
          </p>
          <div className="flex flex-wrap gap-4 animate-slide-up" style={{ animationDelay: '0.3s' }}>
            <Link 
              href="/research" 
              className="px-6 py-3 bg-primary text-white rounded-md hover:bg-primary-dark transition-colors focus:outline-none focus:ring-2 focus:ring-primary-dark focus:ring-offset-2 shadow-sm"
            >
              View Research
            </Link>
            <Link
              href="/resume"
              className="px-6 py-3 border-2 border-primary text-primary font-medium rounded-md hover:bg-primary-light/30 transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 shadow-sm"
            >
              Resume
            </Link>
            <Link
              href="/contact"
              className="px-6 py-3 border border-gray-300 text-gray-700 rounded-md hover:bg-gray-50 transition-colors focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2 shadow-sm"
            >
              Get in Touch
            </Link>
          </div>
        </div>
        
        <div className="w-64 h-64 md:w-80 md:h-80 bg-gradient-to-br from-blue-100 via-white to-purple-100 rounded-full relative shadow-lg animate-slide-up mx-6 md:mx-10" style={{ animationDelay: '0.2s' }}>
          {/* Placeholder for Mariel's photo */}
          <div className="absolute inset-0 flex items-center justify-center text-gray-600 font-medium">
            Profile Photo
          </div>
        </div>
      </section>

      {/* Featured Research */}
      <section className="py-8 md:py-12 animate-fade-in">
        <h2 className="text-2xl md:text-3xl font-bold mb-8 pb-2 border-b border-gray-200 flex items-center gap-2 text-gray-900">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
          </svg>
          Featured Research
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="border rounded-lg overflow-hidden hover:shadow-lg transition-all group bg-white">
            <div className="h-48 bg-gradient-to-r from-blue-100 to-blue-50 flex items-center justify-center group-hover:opacity-90 transition-opacity">
              <span className="text-blue-600 font-medium">Research Image</span>
            </div>
            <div className="p-6">
              <h3 className="font-semibold text-xl mb-3 group-hover:text-primary transition-colors text-gray-800">Impact of AI on Democratic Systems</h3>
              <p className="text-gray-600 mb-4 text-pretty">
                Analyzing how artificial intelligence technologies influence and potentially 
                transform democratic processes and institutions.
              </p>
              <Link href="/research/ai-democracy" className="text-primary hover:text-primary-dark group-hover:underline transition-colors flex items-center gap-1 font-medium">
                Read more
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          </div>
          
          <div className="border rounded-lg overflow-hidden hover:shadow-lg transition-all group">
            <div className="h-48 bg-gradient-to-r from-green-100 to-green-50 flex items-center justify-center group-hover:opacity-90 transition-opacity">
              <span className="text-green-500 font-medium">Research Image</span>
            </div>
            <div className="p-6">
              <h3 className="font-semibold text-xl mb-3 group-hover:text-primary transition-colors">Open-Source Tooling for Policy Analysis</h3>
              <p className="text-gray-600 mb-4 text-pretty">
                Developing and evaluating open-source tools to enhance transparency and 
                effectiveness in technology policy analysis.
              </p>
              <Link href="/research/open-source-tools" className="text-primary hover:text-primary-dark group-hover:underline transition-colors flex items-center gap-1">
                Read more
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          </div>
          
          <div className="border rounded-lg overflow-hidden hover:shadow-lg transition-all group">
            <div className="h-48 bg-gradient-to-r from-purple-100 to-purple-50 flex items-center justify-center group-hover:opacity-90 transition-opacity">
              <span className="text-purple-500 font-medium">Research Image</span>
            </div>
            <div className="p-6">
              <h3 className="font-semibold text-xl mb-3 group-hover:text-primary transition-colors">Red-Teaming Methodologies</h3>
              <p className="text-gray-600 mb-4 text-pretty">
                Exploring and implementing red-teaming approaches to assess and mitigate 
                online threats to digital infrastructure.
              </p>
              <Link href="/research/red-teaming" className="text-primary hover:text-primary-dark group-hover:underline transition-colors flex items-center gap-1">
                Read more
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Latest Publications */}
      <section className="py-8 md:py-12 animate-fade-in">
        <h2 className="text-2xl md:text-3xl font-bold mb-8 pb-2 border-b border-gray-200 flex items-center gap-2">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
          </svg>
          Latest Publications
        </h2>
        
        <div className="space-y-6">
          <div className="border-l-4 border-primary pl-6 py-3 hover:bg-gray-50 transition-colors rounded-r-md group">
            <h3 className="font-semibold text-lg group-hover:text-primary transition-colors">Digital Governance Framework for Emerging Technologies</h3>
            <p className="text-gray-500 mb-2">Published in Tech Policy Press, May 2023</p>
            <p className="text-gray-600 mb-3 text-pretty">
              A comprehensive framework for balancing innovation with public interest in emerging technology governance.
            </p>
            <Link href="/publications/digital-governance" className="text-primary hover:text-primary-dark group-hover:underline transition-colors flex items-center gap-1">
              Read publication
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
          
          <div className="border-l-4 border-primary pl-6 py-3 hover:bg-gray-50 transition-colors rounded-r-md group">
            <h3 className="font-semibold text-lg group-hover:text-primary transition-colors">Ethical Considerations in AI Deployment</h3>
            <p className="text-gray-500 mb-2">Published in Tech Policy Press, January 2023</p>
            <p className="text-gray-600 mb-3 text-pretty">
              Key principles and approaches for ensuring AI systems align with human values and societal objectives.
            </p>
            <Link href="/publications/ethical-ai" className="text-primary hover:text-primary-dark group-hover:underline transition-colors flex items-center gap-1">
              Read publication
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
          
          <div className="border-l-4 border-primary pl-6 py-3 hover:bg-gray-50 transition-colors rounded-r-md group">
            <h3 className="font-semibold text-lg group-hover:text-primary transition-colors">Policy Challenges in the Age of Large Language Models</h3>
            <p className="text-gray-500 mb-2">Published in Tech Policy Press, October 2022</p>
            <p className="text-gray-600 mb-3 text-pretty">
              Analysis of misinformation, content generation, intellectual property, and labor market impacts of LLMs.
            </p>
            <Link href="/publications/llm-policy-challenges" className="text-primary hover:text-primary-dark group-hover:underline transition-colors flex items-center gap-1">
              Read publication
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>
        
        <div className="mt-10 text-center">
          <Link 
            href="/publications" 
            className="inline-flex items-center gap-2 px-6 py-3 border border-gray-300 rounded-md hover:bg-gray-50 transition-colors focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2"
          >
            View all publications
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </Link>
        </div>
      </section>
      
      {/* Newsletter/Contact CTA */}
      <section className="my-8 py-12 px-8 bg-gradient-to-r from-primary-light to-secondary-light rounded-xl animate-fade-in">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">Stay Updated on My Research</h2>
          <p className="text-lg mb-8">
            Join my newsletter for the latest insights on technology policy, AI governance, and digital ethics.
          </p>
          <Link 
            href="/contact" 
            className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-white rounded-md hover:bg-primary-dark transition-colors focus:outline-none focus:ring-2 focus:ring-primary-dark focus:ring-offset-2"
          >
            Get in Touch
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </Link>
        </div>
      </section>
    </div>
  );
}
