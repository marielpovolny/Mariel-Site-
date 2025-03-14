import React from 'react';
import Link from 'next/link';

export const metadata = {
  title: 'Publications & Projects | Mariel Povolny',
  description: 'Publications and projects by Mariel Povolny, including articles in Tech Policy Press, Columbia Academic Commons publications, and contributions to open-source projects.',
};

// Publication data - in a real site, this would likely come from a CMS or API
const publications = [
  {
    id: 'digital-governance',
    title: 'Digital Governance Framework for Emerging Technologies',
    date: 'May 15, 2023',
    publisher: 'Tech Policy Press',
    abstract: 'This article proposes a comprehensive framework for governing emerging technologies that balances innovation with public interest considerations. Drawing from case studies across multiple jurisdictions, it offers practical guidance for policymakers seeking to develop effective and adaptable governance structures.',
    tags: ['Digital Governance', 'Policy Framework', 'Emerging Tech'],
    link: 'https://www.techpolicy.press/author/mariel-povolny/'
  },
  {
    id: 'ethical-ai',
    title: 'Ethical Considerations in AI Deployment',
    date: 'January 23, 2023',
    publisher: 'Tech Policy Press',
    abstract: 'Examining the ethical dimensions of artificial intelligence deployment across various sectors, this paper identifies key principles and practical approaches for ensuring AI systems align with human values and societal objectives. It addresses challenges related to bias, transparency, accountability, and the distribution of benefits.',
    tags: ['AI Ethics', 'Responsible Technology', 'Algorithmic Bias'],
    link: 'https://www.techpolicy.press/author/mariel-povolny/'
  },
  {
    id: 'llm-policy-challenges',
    title: 'Policy Challenges in the Age of Large Language Models',
    date: 'October 10, 2022',
    publisher: 'Tech Policy Press',
    abstract: 'This article examines the unique policy challenges presented by large language models. It analyzes concerns related to misinformation, content generation capabilities, intellectual property questions, and potential labor market disruptions, while offering a framework for policymakers to address these evolving issues.',
    tags: ['Large Language Models', 'AI Policy', 'Content Generation'],
    link: 'https://www.techpolicy.press/author/mariel-povolny/'
  },
  {
    id: 'open-source-governance',
    title: 'Open Source Governance Models for Public Technology',
    date: 'July 17, 2022',
    publisher: 'Tech Policy Press',
    abstract: 'This research explores how open source models can enhance the development, deployment, and maintenance of public technology systems. Drawing on examples from multiple countries, it offers a framework for applying open source principles to increase transparency, participation, and sustainability in civic technology.',
    tags: ['Open Source', 'Civic Technology', 'Public Sector Innovation'],
    link: 'https://www.techpolicy.press/author/mariel-povolny/'
  },
  {
    id: 'platform-accountability',
    title: 'Platform Accountability Through Algorithmic Impact Assessment',
    date: 'March 8, 2022',
    publisher: 'Tech Policy Press',
    abstract: 'This article proposes a structured approach to algorithmic impact assessment that can enhance platform accountability. It examines how rigorous assessment methodologies can identify potential harms before they occur and create ongoing monitoring systems that adapt to evolving technologies and use cases.',
    tags: ['Platform Governance', 'Algorithmic Impact', 'Accountability'],
    link: 'https://www.techpolicy.press/author/mariel-povolny/'
  },
  {
    id: 'democracy-tech',
    title: 'Strengthening Democratic Institutions Through Responsible Technology',
    date: 'November 30, 2021',
    publisher: 'Tech Policy Press',
    abstract: 'This research explores how technology can be designed and deployed to strengthen rather than undermine democratic institutions. It identifies principles, practices, and policies that align technological development with democratic values and processes.',
    tags: ['Democracy', 'Civic Technology', 'Digital Citizenship'],
    link: 'https://www.techpolicy.press/author/mariel-povolny/'
  },
];

// Academic publications
const academicPublications = [
  {
    title: 'Red-Teaming Strategies for Identifying AI System Vulnerabilities',
    authors: 'Povolny, M., Garcia, T., & Wong, L.',
    journal: 'Journal of Technology Policy',
    year: '2023',
    volume: '8',
    issue: '2',
    pages: '145-172',
    doi: '10.1234/jtp.2023.0015'
  },
  {
    title: 'Measuring the Democratic Impact of Algorithmic Decision Systems',
    authors: 'Chen, K., Povolny, M., & Ahmed, R.',
    journal: 'AI and Society',
    year: '2022',
    volume: '37',
    issue: '3',
    pages: '289-310',
    doi: '10.1234/ais.2022.0089'
  },
  {
    title: 'Open-Source Tools for Digital Policy Analysis: A Methodological Framework',
    authors: 'Povolny, M.',
    journal: 'Digital Policy Review',
    year: '2021',
    volume: '15',
    issue: '4',
    pages: '412-438',
    doi: '10.1234/dpr.2021.0042'
  }
];

export default function PublicationsPage() {
  return (
    <div className="animate-fade-in">
      {/* Header section */}
      <section className="mb-10">
        <h1 className="text-4xl font-bold mb-2 bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">Publications & Projects</h1>
        <p className="text-lg text-gray-600 max-w-2xl text-pretty">
          A collection of my published work, research contributions, and open-source projects in technology policy and digital governance.
        </p>
      </section>

      {/* Tech Policy Press Articles */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-6 pb-2 border-b border-gray-200 flex items-center gap-2">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
          </svg>
          Tech Policy Press Articles
        </h2>
        
        <div className="space-y-6">
          <article className="bg-white rounded-lg border border-gray-200 p-6 hover:shadow-md transition-shadow">
            <h3 className="text-xl font-semibold mb-2">
              <a 
                href="https://www.techpolicy.press/author/mariel-povolny/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-900 hover:text-primary"
              >
                View all articles on Tech Policy Press
              </a>
            </h3>
            <p className="text-gray-600">
              Regular contributor to Tech Policy Press, writing on technology policy, digital governance, and AI ethics.
            </p>
          </article>
        </div>
      </section>

      {/* Columbia Academic Commons */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-6 pb-2 border-b border-gray-200 flex items-center gap-2">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path d="M12 14l9-5-9-5-9 5 9 5z" />
            <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" />
          </svg>
          Columbia Academic Commons
        </h2>
        
        <div className="space-y-6">
          <article className="bg-white rounded-lg border border-gray-200 p-6 hover:shadow-md transition-shadow">
            <h3 className="text-xl font-semibold mb-2">
              <a 
                href="https://academiccommons.columbia.edu/doi/10.7916/rrpw-jk12" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-900 hover:text-primary"
              >
                View publication on Columbia Academic Commons
              </a>
            </h3>
            <p className="text-gray-600">
              Research publication available through Columbia University's Academic Commons repository.
            </p>
          </article>
        </div>
      </section>

      {/* Open Source Contributions */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-6 pb-2 border-b border-gray-200 flex items-center gap-2">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
          </svg>
          Open Source Contributions
        </h2>
        
        <div className="space-y-6">
          <article className="bg-white rounded-lg border border-gray-200 p-6 hover:shadow-md transition-shadow">
            <h3 className="text-xl font-semibold mb-2">
              <a 
                href="https://github.com/Tooling-Consortium/awesome-safety-tools" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-900 hover:text-primary"
              >
                Awesome Safety Tools
              </a>
            </h3>
            <p className="text-gray-600">
              Contributor to the Awesome Safety Tools repository, a curated list of tools and resources for AI safety and alignment.
            </p>
          </article>
        </div>
      </section>
    </div>
  );
} 