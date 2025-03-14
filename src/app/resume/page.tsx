import React from 'react';
import Link from 'next/link';

export const metadata = {
  title: 'Resume | Mariel Povolny',
  description: 'Professional resume of Mariel Povolny, researcher and consultant specializing in technology policy, digital governance, and AI ethics.',
};

export default function ResumePage() {
  return (
    <div className="animate-fade-in">
      {/* Header section with download option */}
      <section className="mb-10">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-6">
          <div>
            <h1 className="text-4xl font-bold mb-2 bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">Resume</h1>
            <p className="text-lg text-gray-600 max-w-2xl text-pretty">
              My professional background in technology policy research, digital governance, and AI ethics.
            </p>
          </div>
          <a 
            href="#" 
            className="flex items-center gap-2 px-4 py-2 bg-primary text-white rounded-md hover:bg-primary-dark transition-colors focus:ring-2 focus:ring-primary focus:ring-offset-2"
            aria-label="Download resume as PDF"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
            Download PDF
          </a>
        </div>
        
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 text-gray-600 text-sm">
          <div className="flex items-center gap-2">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            <span>marielpovolny@columbia.edu</span>
          </div>
          <div className="flex items-center gap-2">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            <span>New York, NY</span>
          </div>
          <div className="flex items-center gap-2">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 015.656 0l4 4a4 4 0 01-5.656 5.656l-1.102-1.101" />
            </svg>
            <a 
              href="https://www.linkedin.com/in/marielpovolny" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-primary hover:text-primary-dark"
            >
              linkedin.com/in/marielpovolny
            </a>
          </div>
        </div>
      </section>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
        {/* Left column - Experience and Education */}
        <div className="lg:col-span-2 space-y-12">
          <section aria-labelledby="experience-title">
            <h2 id="experience-title" className="text-2xl font-bold mb-6 pb-2 border-b border-gray-200 flex items-center gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              Professional Experience
            </h2>
            
            <div className="space-y-8">
              <div className="relative pl-8 before:absolute before:left-0 before:top-1 before:bottom-0 before:w-0.5 before:bg-primary-light">
                <div className="absolute left-0 top-1 w-4 h-4 bg-primary rounded-full transform -translate-x-1/2"></div>
                <h3 className="text-xl font-semibold">Graduate Consultant</h3>
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-1 mb-3">
                  <div className="text-gray-700 font-medium">Ministry of Foreign Affairs of Estonia</div>
                  <div className="text-gray-600 text-sm bg-gray-100 px-3 py-1 rounded-full">December 2024 - Present</div>
                </div>
                <ul className="list-disc list-outside ml-5 space-y-2 text-gray-700">
                  <li>Supporting Estonia in its role as Chair of the Freedom Online Coalition for 2025</li>
                  <li>Conducting research and interviews for a project exploring international collaboration on Digital Public Infrastructure (DPI)</li>
                  <li>Assisting with policy development and multilateral engagement strategies to advance digital rights and internet freedom</li>
                </ul>
              </div>

              <div className="relative pl-8 before:absolute before:left-0 before:top-1 before:bottom-0 before:w-0.5 before:bg-primary-light">
                <div className="absolute left-0 top-1 w-4 h-4 bg-primary rounded-full transform -translate-x-1/2"></div>
                <h3 className="text-xl font-semibold">Researcher</h3>
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-1 mb-3">
                  <div className="text-gray-700 font-medium">T&S Tooling Consortium, Institute of Global Politics, Columbia SIPA</div>
                  <div className="text-gray-600 text-sm bg-gray-100 px-3 py-1 rounded-full">May 2024 - Present</div>
                </div>
                <ul className="list-disc list-outside ml-5 space-y-2 text-gray-700">
                  <li>Conducted 50+ interviews with Trust & Safety leaders on open-source tooling to promote transparency</li>
                  <li>Co-authored an upcoming chapter in the Journal of Online Trust and Safety on the state of Trust & Safety tooling</li>
                  <li>Contributed to research on openness in AI, red-teaming AI systems, and AI risk taxonomies</li>
                  <li>Worked on the research team that helped launch ROOST, now an independent nonprofit</li>
                </ul>
              </div>

              <div className="relative pl-8 before:absolute before:left-0 before:top-1 before:bottom-0 before:w-0.5 before:bg-primary-light">
                <div className="absolute left-0 top-1 w-4 h-4 bg-primary rounded-full transform -translate-x-1/2"></div>
                <h3 className="text-xl font-semibold">Cyber Risk Intern</h3>
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-1 mb-3">
                  <div className="text-gray-700 font-medium">Next Peak & Cyber Defense Assistance Collaborative (CDAC)</div>
                  <div className="text-gray-600 text-sm bg-gray-100 px-3 py-1 rounded-full">May 2024 - August 2024</div>
                </div>
                <ul className="list-disc list-outside ml-5 space-y-2 text-gray-700">
                  <li>Managed cyber risk consulting engagements, including proposal development and stakeholder coordination</li>
                  <li>Analyzed international cyber defense assistance provided to Ukraine via the CDAC</li>
                  <li>Supported the planning and implementation of SOC development strategies, integrating cybersecurity tools to safeguard Costa Rica's critical infrastructure</li>
                </ul>
              </div>

              <div className="relative pl-8 before:absolute before:left-0 before:top-1 before:bottom-0 before:w-0.5 before:bg-primary-light">
                <div className="absolute left-0 top-1 w-4 h-4 bg-primary rounded-full transform -translate-x-1/2"></div>
                <h3 className="text-xl font-semibold">Teaching Assistant</h3>
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-1 mb-3">
                  <div className="text-gray-700 font-medium">Columbia SIPA</div>
                  <div className="text-gray-600 text-sm bg-gray-100 px-3 py-1 rounded-full">January 2024 - May 2024</div>
                </div>
                <ul className="list-disc list-outside ml-5 space-y-2 text-gray-700">
                  <li>Assisted in the Spring 2024 Ethics in Technology, Media, and Design course by leading weekly discussions and designing curriculum</li>
                  <li>Co-authored a 100-page collection of case studies on ethical technology issues</li>
                </ul>
              </div>

              <div className="relative pl-8 before:absolute before:left-0 before:top-1 before:bottom-0 before:w-0.5 before:bg-primary-light">
                <div className="absolute left-0 top-1 w-4 h-4 bg-primary rounded-full transform -translate-x-1/2"></div>
                <h3 className="text-xl font-semibold">Research Associate, Technology Practice</h3>
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-1 mb-3">
                  <div className="text-gray-700 font-medium">Oxford Economics</div>
                  <div className="text-gray-600 text-sm bg-gray-100 px-3 py-1 rounded-full">October 2022 - September 2023</div>
                </div>
                <ul className="list-disc list-outside ml-5 space-y-2 text-gray-700">
                  <li>Designed and fielded original surveys on topics including cybersecurity, digital transformation, and data interoperability</li>
                  <li>Developed briefing papers, case studies, and analysis presentations for global clients</li>
                  <li>Created data-driven insights on technology trends for Fortune 500 companies</li>
                </ul>
              </div>
            </div>
          </section>
          
          <section aria-labelledby="education-title">
            <h2 id="education-title" className="text-2xl font-bold mb-6 pb-2 border-b border-gray-200 flex items-center gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path d="M12 14l9-5-9-5-9 5 9 5z" />
                <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" />
              </svg>
              Education
            </h2>
            
            <div className="space-y-6">
              <div className="relative pl-8 before:absolute before:left-0 before:top-1 before:bottom-0 before:w-0.5 before:bg-primary-light">
                <div className="absolute left-0 top-1 w-4 h-4 bg-primary rounded-full transform -translate-x-1/2"></div>
                <h3 className="text-xl font-semibold">Master of International Affairs in Technology Policy and Innovation</h3>
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-1 mb-2">
                  <div className="text-gray-700 font-medium">Columbia University</div>
                  <div className="text-gray-600 text-sm bg-gray-100 px-3 py-1 rounded-full">September 2023 - June 2025</div>
                </div>
                <p className="text-gray-700">President, Digital & Cyber Group (2023-2024)</p>
              </div>
              
              <div className="relative pl-8 before:absolute before:left-0 before:top-1 before:bottom-0 before:w-0.5 before:bg-primary-light">
                <div className="absolute left-0 top-1 w-4 h-4 bg-primary rounded-full transform -translate-x-1/2"></div>
                <h3 className="text-xl font-semibold">Bachelor of Arts in International Development, Arabic</h3>
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-1 mb-2">
                  <div className="text-gray-700 font-medium">McGill University</div>
                  <div className="text-gray-600 text-sm bg-gray-100 px-3 py-1 rounded-full">September 2017 - June 2021</div>
                </div>
                <p className="text-gray-700">First Class Honors in International Development</p>
                <p className="italic text-gray-600 mt-1">Exchange semester at the American University of Beirut (Fall 2019), Intensive Arabic Program at the American University in Cairo (Spring 2020)</p>
              </div>
            </div>
          </section>
        </div>
        
        {/* Right column - Skills, Languages, etc. */}
        <div className="space-y-10">
          <section aria-labelledby="skills-title" className="bg-gray-50 rounded-lg p-6 border border-gray-200">
            <h2 id="skills-title" className="text-xl font-bold mb-4 pb-2 border-b border-gray-200 flex items-center gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
              Core Skills
            </h2>
            
            <div className="space-y-4">
              <div>
                <h3 className="font-medium mb-2">Research & Policy Analysis</h3>
                <ul className="list-disc list-outside ml-5 space-y-1 text-gray-700">
                  <li>Policy Writing</li>
                  <li>Qualitative & Quantitative Research</li>
                  <li>Stakeholder Engagement</li>
                </ul>
              </div>
              
              <div>
                <h3 className="font-medium mb-2">Cyber & Digital Governance</h3>
                <ul className="list-disc list-outside ml-5 space-y-1 text-gray-700">
                  <li>AI Risk Assessment</li>
                  <li>Cybersecurity Frameworks</li>
                  <li>Trust & Safety</li>
                </ul>
              </div>
            </div>
          </section>

          <section aria-labelledby="languages-title" className="bg-gray-50 rounded-lg p-6 border border-gray-200">
            <h2 id="languages-title" className="text-xl font-bold mb-4 pb-2 border-b border-gray-200 flex items-center gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129" />
              </svg>
              Languages
            </h2>
            
            <ul className="list-disc list-outside ml-5 space-y-2 text-gray-700">
              <li>Arabic (Working Proficiency)</li>
              <li>English (Native)</li>
            </ul>
          </section>

          <section aria-labelledby="awards-title" className="bg-gray-50 rounded-lg p-6 border border-gray-200">
            <h2 id="awards-title" className="text-xl font-bold mb-4 pb-2 border-b border-gray-200 flex items-center gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              Awards & Scholarships
            </h2>
            
            <ul className="list-disc list-outside ml-5 space-y-2 text-gray-700">
              <li>Foreign Language Area Scholarship, Middle East Department of Education (September 2023)</li>
            </ul>
          </section>
        </div>
      </div>
    </div>
  );
} 