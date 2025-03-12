import React from 'react';
import Link from 'next/link';

export const metadata = {
  title: 'Publications | Mariel Povolny',
  description: 'Articles and publications by Mariel Povolny on technology policy, digital governance, and AI impact research.',
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
    <div className="flex flex-col gap-12">
      <section>
        <h1 className="text-4xl font-bold mb-6">Publications</h1>
        <p className="text-lg mb-8">
          As a researcher focused on technology policy, I regularly publish articles, papers, and analyses 
          that explore the intersection of technology, governance, and society. My writing aims to bridge 
          academic rigor with practical policy insights.
        </p>
      </section>

      {/* Featured Publication */}
      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-6 border-b pb-2">Featured Publication</h2>
        <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-6 rounded-lg border border-blue-100">
          <div className="flex flex-col md:flex-row gap-8">
            <div className="flex-1">
              <span className="text-blue-600 font-medium">Tech Policy Press • May 2023</span>
              <h3 className="text-2xl font-bold my-2">Digital Governance Framework for Emerging Technologies</h3>
              <p className="mb-4 text-gray-700">
                This article proposes a comprehensive framework for governing emerging technologies that balances 
                innovation with public interest considerations. Drawing from case studies across multiple jurisdictions, 
                it offers practical guidance for policymakers seeking to develop effective and adaptable governance structures.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">Digital Governance</span>
                <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">Policy Framework</span>
                <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">Emerging Tech</span>
              </div>
              <a 
                href="https://www.techpolicy.press/author/mariel-povolny/"
                target="_blank"
                rel="noopener noreferrer" 
                className="inline-block px-5 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
              >
                Read Full Article
              </a>
            </div>
            <div className="w-full md:w-1/3 bg-white p-4 rounded-lg shadow-sm">
              <div className="h-48 bg-blue-100 rounded mb-4 flex items-center justify-center">
                <span className="text-blue-500">Publication Cover</span>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <div className="w-8 h-8 bg-gray-200 rounded-full mr-2 flex items-center justify-center">
                    <span className="text-xs text-gray-500">TP</span>
                  </div>
                  <span className="text-gray-600 text-sm">Tech Policy Press</span>
                </div>
                <span className="text-gray-500 text-sm">May 15, 2023</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Articles */}
      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-6 border-b pb-2">Articles & Essays</h2>
        <div className="space-y-6">
          {publications.map((pub) => (
            <div key={pub.id} className="border-b pb-6">
              <div className="flex justify-between items-start mb-2">
                <h3 className="text-xl font-semibold">{pub.title}</h3>
                <span className="text-gray-500 text-sm whitespace-nowrap ml-4">{pub.date}</span>
              </div>
              <p className="text-gray-600 mb-2">Published in <span className="font-medium">{pub.publisher}</span></p>
              <p className="text-gray-700 mb-3">{pub.abstract}</p>
              <div className="flex flex-wrap gap-2 mb-3">
                {pub.tags.map((tag, index) => (
                  <span key={index} className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm">
                    {tag}
                  </span>
                ))}
              </div>
              <a 
                href={pub.link} 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline inline-flex items-center"
              >
                Read article
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* Academic Publications */}
      <section>
        <h2 className="text-2xl font-bold mb-6 border-b pb-2">Academic Publications</h2>
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Publication
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Journal
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Year
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {academicPublications.map((pub, index) => (
                <tr key={index} className="hover:bg-gray-50">
                  <td className="px-6 py-4">
                    <div className="text-sm font-medium text-gray-900">{pub.title}</div>
                    <div className="text-sm text-gray-500">{pub.authors}</div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="text-sm text-gray-900">{pub.journal}</div>
                    <div className="text-sm text-gray-500">Vol. {pub.volume}, Issue {pub.issue}, pp. {pub.pages}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {pub.year}
                    <div>
                      <a 
                        href={`https://doi.org/${pub.doi}`} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-blue-600 hover:underline text-xs"
                      >
                        DOI: {pub.doi}
                      </a>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <div className="flex justify-center mt-8">
        <a 
          href="https://www.techpolicy.press/author/mariel-povolny/"
          target="_blank"
          rel="noopener noreferrer" 
          className="px-6 py-3 border border-blue-600 text-blue-600 rounded-md hover:bg-blue-50 transition-colors"
        >
          View all articles on Tech Policy Press
        </a>
      </div>
    </div>
  );
} 