import React from 'react';
import Link from 'next/link';

export const metadata = {
  title: 'Resume | Mariel Povolny',
  description: 'Professional resume of Mariel Povolny, researcher at Columbia SIPA Innovation Lab specializing in technology policy and digital governance.',
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
            <span>contact@marielpovolny.com</span>
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
              href="https://www.linkedin.com/in/mariel-povolny-b0b653178/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-primary hover:text-primary-dark"
            >
              linkedin.com/in/mariel-povolny
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
                <h3 className="text-xl font-semibold">Research Fellow</h3>
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-1 mb-3">
                  <div className="text-gray-700 font-medium">Columbia SIPA Innovation Lab</div>
                  <div className="text-gray-600 text-sm bg-gray-100 px-3 py-1 rounded-full">2023 - Present</div>
                </div>
                <ul className="list-disc list-outside ml-5 space-y-2 text-gray-700">
                  <li>Lead research on technology policy, digital governance, and AI ethics</li>
                  <li>Develop policy recommendations and open-source tools for responsible AI development</li>
                  <li>Conduct stakeholder interviews and policy analysis across multiple jurisdictions</li>
                  <li>Present research findings at academic conferences and policy forums</li>
                </ul>
              </div>
              
              <div className="relative pl-8 before:absolute before:left-0 before:top-1 before:bottom-0 before:w-0.5 before:bg-primary-light">
                <div className="absolute left-0 top-1 w-4 h-4 bg-primary rounded-full transform -translate-x-1/2"></div>
                <h3 className="text-xl font-semibold">Research Assistant</h3>
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-1 mb-3">
                  <div className="text-gray-700 font-medium">Columbia SIPA Innovation Lab</div>
                  <div className="text-gray-600 text-sm bg-gray-100 px-3 py-1 rounded-full">2021 - 2023</div>
                </div>
                <ul className="list-disc list-outside ml-5 space-y-2 text-gray-700">
                  <li>Conducted research on emerging technology regulations and data governance frameworks</li>
                  <li>Analyzed public-private partnerships in technology development</li>
                  <li>Authored policy briefs and reports for policymakers and industry stakeholders</li>
                  <li>Organized workshops on responsible technology deployment</li>
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
                <h3 className="text-xl font-semibold">Master of International Affairs</h3>
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-1 mb-2">
                  <div className="text-gray-700 font-medium">Columbia School of International and Public Affairs</div>
                  <div className="text-gray-600 text-sm bg-gray-100 px-3 py-1 rounded-full">2021</div>
                </div>
                <p className="text-gray-700">Specialization in Technology, Media, and Communications</p>
                <p className="italic text-gray-600 mt-1">Thesis: "Digital Governance Frameworks for Emerging Technologies"</p>
              </div>
              
              <div className="relative pl-8 before:absolute before:left-0 before:top-1 before:bottom-0 before:w-0.5 before:bg-primary-light">
                <div className="absolute left-0 top-1 w-4 h-4 bg-primary rounded-full transform -translate-x-1/2"></div>
                <h3 className="text-xl font-semibold">Bachelor of Arts in Political Science</h3>
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-1 mb-2">
                  <div className="text-gray-700 font-medium">University of Chicago</div>
                  <div className="text-gray-600 text-sm bg-gray-100 px-3 py-1 rounded-full">2019</div>
                </div>
                <p className="text-gray-700">Minor in Computer Science</p>
                <p className="italic text-gray-600 mt-1">Honors Program, Dean's List, 3.92/4.0 GPA</p>
              </div>
            </div>
          </section>
          
          <section aria-labelledby="publications-title">
            <h2 id="publications-title" className="text-2xl font-bold mb-6 pb-2 border-b border-gray-200 flex items-center gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
              </svg>
              Selected Publications
            </h2>
            
            <div className="space-y-4">
              <div>
                <h3 className="font-semibold">Digital Governance Framework for Emerging Technologies</h3>
                <p className="text-gray-600 text-sm">Tech Policy Press, May 2023</p>
              </div>
              
              <div>
                <h3 className="font-semibold">Ethical Considerations in AI Deployment</h3>
                <p className="text-gray-600 text-sm">Tech Policy Press, January 2023</p>
              </div>
              
              <div>
                <h3 className="font-semibold">Red-Teaming Strategies for Identifying AI System Vulnerabilities</h3>
                <p className="text-gray-600 text-sm">Journal of Technology Policy, Vol. 8(2), 2023</p>
              </div>
              
              <div className="mt-4">
                <Link 
                  href="/publications" 
                  className="text-primary hover:text-primary-dark flex items-center gap-1 text-sm"
                >
                  View all publications
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </Link>
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
                <h3 className="font-medium mb-2">Research & Analysis</h3>
                <div className="space-y-2">
                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="text-sm text-gray-700">Policy Analysis</span>
                      <span className="text-sm text-gray-600">Expert</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-1.5">
                      <div className="bg-primary h-1.5 rounded-full" style={{ width: '95%' }}></div>
                    </div>
                  </div>
                  
                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="text-sm text-gray-700">Qualitative Research</span>
                      <span className="text-sm text-gray-600">Expert</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-1.5">
                      <div className="bg-primary h-1.5 rounded-full" style={{ width: '90%' }}></div>
                    </div>
                  </div>
                  
                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="text-sm text-gray-700">Data Analysis</span>
                      <span className="text-sm text-gray-600">Advanced</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-1.5">
                      <div className="bg-primary h-1.5 rounded-full" style={{ width: '80%' }}></div>
                    </div>
                  </div>
                  
                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="text-sm text-gray-700">Red-Teaming Methods</span>
                      <span className="text-sm text-gray-600">Expert</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-1.5">
                      <div className="bg-primary h-1.5 rounded-full" style={{ width: '95%' }}></div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div>
                <h3 className="font-medium mb-2">Technical Skills</h3>
                <div className="space-y-2">
                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="text-sm text-gray-700">Python</span>
                      <span className="text-sm text-gray-600">Advanced</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-1.5">
                      <div className="bg-primary h-1.5 rounded-full" style={{ width: '85%' }}></div>
                    </div>
                  </div>
                  
                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="text-sm text-gray-700">R</span>
                      <span className="text-sm text-gray-600">Intermediate</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-1.5">
                      <div className="bg-primary h-1.5 rounded-full" style={{ width: '70%' }}></div>
                    </div>
                  </div>
                  
                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="text-sm text-gray-700">SQL</span>
                      <span className="text-sm text-gray-600">Intermediate</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-1.5">
                      <div className="bg-primary h-1.5 rounded-full" style={{ width: '70%' }}></div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div>
                <h3 className="font-medium mb-2">Communication & Leadership</h3>
                <ul className="list-disc list-inside space-y-1 text-sm text-gray-700">
                  <li>Research Presentation</li>
                  <li>Policy Brief Writing</li>
                  <li>Stakeholder Management</li>
                  <li>Cross-functional Team Leadership</li>
                  <li>Project Management</li>
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
            
            <div className="space-y-3">
              <div>
                <div className="flex justify-between mb-1">
                  <span className="text-sm text-gray-700">English</span>
                  <span className="text-sm text-gray-600">Native</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-1.5">
                  <div className="bg-primary h-1.5 rounded-full" style={{ width: '100%' }}></div>
                </div>
              </div>
              
              <div>
                <div className="flex justify-between mb-1">
                  <span className="text-sm text-gray-700">Spanish</span>
                  <span className="text-sm text-gray-600">Advanced</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-1.5">
                  <div className="bg-primary h-1.5 rounded-full" style={{ width: '90%' }}></div>
                </div>
              </div>
            </div>
          </section>
          
          <section aria-labelledby="awards-title" className="bg-gray-50 rounded-lg p-6 border border-gray-200">
            <h2 id="awards-title" className="text-xl font-bold mb-4 pb-2 border-b border-gray-200 flex items-center gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
              </svg>
              Awards & Honors
            </h2>
            
            <ul className="space-y-3 text-sm text-gray-700">
              <li className="flex items-start gap-2">
                <span className="text-primary">•</span>
                <div>
                  <p className="font-medium">Technology Policy Innovation Award</p>
                  <p className="text-gray-600">Columbia SIPA, 2022</p>
                </div>
              </li>
              
              <li className="flex items-start gap-2">
                <span className="text-primary">•</span>
                <div>
                  <p className="font-medium">Best Paper Award</p>
                  <p className="text-gray-600">Digital Policy Conference, 2021</p>
                </div>
              </li>
              
              <li className="flex items-start gap-2">
                <span className="text-primary">•</span>
                <div>
                  <p className="font-medium">SIPA Merit Fellowship</p>
                  <p className="text-gray-600">Columbia University, 2017-2019</p>
                </div>
              </li>
              
              <li className="flex items-start gap-2">
                <span className="text-primary">•</span>
                <div>
                  <p className="font-medium">Phi Beta Kappa</p>
                  <p className="text-gray-600">University of Chicago, 2017</p>
                </div>
              </li>
            </ul>
          </section>
        </div>
      </div>
    </div>
  );
} 