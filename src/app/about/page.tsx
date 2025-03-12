import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

export const metadata = {
  title: 'About | Mariel Povolny',
  description: 'About Mariel Povolny - researcher at Columbia SIPA Innovation Lab focusing on technology policy, digital governance, and AI impact.',
};

export default function AboutPage() {
  return (
    <div className="flex flex-col gap-12">
      <section className="mb-8">
        <h1 className="text-4xl font-bold mb-6">About Me</h1>
        <div className="flex flex-col md:flex-row gap-8 items-start">
          <div className="w-full md:w-1/3 aspect-square bg-gray-200 rounded-lg flex items-center justify-center">
            {/* Placeholder for Mariel's photo */}
            <span className="text-gray-500">Profile Photo</span>
          </div>
          <div className="w-full md:w-2/3">
            <p className="text-lg mb-4">
              I'm Mariel Povolny, a researcher at the Innovation Lab, part of the Columbia SIPA Institute of Global Politics. 
              My work explores the complex intersection of technology, policy, and digital governance in our rapidly evolving digital landscape.
            </p>
            <p className="text-lg mb-4">
              With a passion for understanding how technology shapes society and governance, I focus on developing open-source tooling, 
              analyzing the impact of artificial intelligence on democratic systems, and implementing red-teaming methodologies to 
              assess online threats.
            </p>
            <p className="text-lg">
              Through my research and writing for publications like Tech Policy Press, I aim to contribute to more informed, 
              equitable, and forward-thinking technology policy that addresses both current challenges and anticipates future developments.
            </p>
          </div>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-6 border-b pb-2">Research Focus Areas</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 bg-blue-50 rounded-lg">
            <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-2">Open-Source Tooling</h3>
            <p>
              Developing and evaluating accessible tools that enhance transparency, accountability, 
              and effectiveness in technology policy analysis and implementation.
            </p>
          </div>
          
          <div className="p-6 bg-green-50 rounded-lg">
            <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-2">AI & Democratic Systems</h3>
            <p>
              Investigating how artificial intelligence technologies influence, challenge, and potentially strengthen 
              democratic processes, institutions, and values.
            </p>
          </div>
          
          <div className="p-6 bg-red-50 rounded-lg">
            <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-2">Red-Teaming Methodologies</h3>
            <p>
              Exploring and implementing adversarial testing approaches to identify vulnerabilities, 
              assess potential threats, and strengthen digital systems against manipulation.
            </p>
          </div>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-6 border-b pb-2">Professional Background</h2>
        <div className="space-y-6">
          <div className="flex gap-4">
            <div className="w-1 bg-blue-600"></div>
            <div>
              <h3 className="text-xl font-semibold">Researcher</h3>
              <p className="text-gray-600 mb-2">Columbia SIPA Innovation Lab | 2021 - Present</p>
              <p>
                Leading research initiatives on technology policy, digital governance, and AI ethics. 
                Collaborating with interdisciplinary teams to develop policy recommendations and open-source tools.
              </p>
            </div>
          </div>
          
          <div className="flex gap-4">
            <div className="w-1 bg-blue-600"></div>
            <div>
              <h3 className="text-xl font-semibold">Technology Policy Fellow</h3>
              <p className="text-gray-600 mb-2">Tech Policy Institute | 2019 - 2021</p>
              <p>
                Conducted research on emerging technology regulations, data governance frameworks, 
                and public-private partnerships in technology development.
              </p>
            </div>
          </div>
          
          <div className="flex gap-4">
            <div className="w-1 bg-blue-600"></div>
            <div>
              <h3 className="text-xl font-semibold">Graduate Research Assistant</h3>
              <p className="text-gray-600 mb-2">Columbia University | 2017 - 2019</p>
              <p>
                Assisted with research projects examining technology policy formation, digital rights, 
                and the societal impacts of algorithmic decision-making.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-bold mb-6 border-b pb-2">Education</h2>
        <div className="space-y-4">
          <div>
            <h3 className="text-xl font-semibold">Master of International Affairs</h3>
            <p className="text-gray-600">Columbia School of International and Public Affairs | 2019</p>
            <p>Specialization in Technology, Media, and Communications</p>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold">Bachelor of Arts in Political Science</h3>
            <p className="text-gray-600">University of Chicago | 2017</p>
            <p>Minor in Computer Science</p>
          </div>
        </div>
      </section>
      
      <div className="flex justify-center mt-8">
        <Link 
          href="/contact" 
          className="px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
        >
          Get in Touch
        </Link>
      </div>
    </div>
  );
} 