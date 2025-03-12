import React from 'react';
import Link from 'next/link';

export const metadata = {
  title: 'Research | Mariel Povolny',
  description: 'Research projects by Mariel Povolny focusing on technology policy, AI impact on democratic systems, and red-teaming methodologies.',
};

export default function ResearchPage() {
  return (
    <div className="flex flex-col gap-12">
      <section>
        <h1 className="text-4xl font-bold mb-6">Research</h1>
        <p className="text-lg mb-8">
          My research explores the evolving landscape of technology policy, with a focus on three key areas: 
          the impact of AI on democratic systems, open-source tooling for policy analysis, and red-teaming 
          methodologies for assessing digital threats. Through rigorous methodology and interdisciplinary 
          collaboration, I aim to develop insights and frameworks that contribute to better technology governance.
        </p>
      </section>

      {/* Current Research Projects */}
      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-6 border-b pb-2">Current Research Projects</h2>
        
        <div className="mb-12">
          <div className="bg-blue-50 p-6 rounded-lg mb-6">
            <h3 className="text-2xl font-semibold mb-2">AI and Democratic Systems</h3>
            <p className="text-gray-700 mb-4">
              This research explores how artificial intelligence technologies impact democratic processes, 
              institutions, and values. I examine case studies across multiple democratic contexts to identify 
              patterns, challenges, and opportunities.
            </p>
            <div className="flex flex-col md:flex-row md:items-center gap-6">
              <div className="flex-1">
                <h4 className="font-medium mb-2">Key Research Questions:</h4>
                <ul className="list-disc list-inside space-y-1 mb-4">
                  <li>How do algorithmic decision systems influence civic participation?</li>
                  <li>What guardrails can be implemented to ensure AI enhances rather than undermines democratic values?</li>
                  <li>How can policymakers balance innovation with democratic oversight?</li>
                </ul>
                <h4 className="font-medium mb-2">Methodology:</h4>
                <p>Comparative case studies, stakeholder interviews, policy analysis, and quantitative assessment of AI system impacts.</p>
              </div>
              <div className="bg-blue-100 h-48 w-full md:w-80 rounded-lg flex items-center justify-center text-blue-500">
                Research Diagram
              </div>
            </div>
            <div className="mt-4">
              <Link 
                href="/research/ai-democracy" 
                className="text-blue-600 hover:underline font-medium"
              >
                View detailed research findings →
              </Link>
            </div>
          </div>
          
          <div className="bg-green-50 p-6 rounded-lg mb-6">
            <h3 className="text-2xl font-semibold mb-2">Open-Source Tooling for Policy Analysis</h3>
            <p className="text-gray-700 mb-4">
              This project focuses on developing and evaluating open-source tools that enhance 
              transparency, accountability, and effectiveness in technology policy analysis and implementation.
            </p>
            <div className="flex flex-col md:flex-row md:items-center gap-6">
              <div className="flex-1">
                <h4 className="font-medium mb-2">Key Research Questions:</h4>
                <ul className="list-disc list-inside space-y-1 mb-4">
                  <li>How can open-source tools improve policy transparency?</li>
                  <li>What design principles lead to more effective and accessible policy analysis tools?</li>
                  <li>How do open-source approaches compare to proprietary solutions in the policy space?</li>
                </ul>
                <h4 className="font-medium mb-2">Methodology:</h4>
                <p>Tool development, user testing, comparative analysis, and longitudinal assessment of tool adoption and impact.</p>
              </div>
              <div className="bg-green-100 h-48 w-full md:w-80 rounded-lg flex items-center justify-center text-green-500">
                Tool Framework Diagram
              </div>
            </div>
            <div className="mt-4">
              <Link 
                href="/research/open-source-tools" 
                className="text-blue-600 hover:underline font-medium"
              >
                View detailed research findings →
              </Link>
            </div>
          </div>
          
          <div className="bg-purple-50 p-6 rounded-lg">
            <h3 className="text-2xl font-semibold mb-2">Red-Teaming Methodologies</h3>
            <p className="text-gray-700 mb-4">
              This research explores adversarial testing approaches to identify vulnerabilities, 
              assess potential threats, and strengthen digital systems against manipulation.
            </p>
            <div className="flex flex-col md:flex-row md:items-center gap-6">
              <div className="flex-1">
                <h4 className="font-medium mb-2">Key Research Questions:</h4>
                <ul className="list-disc list-inside space-y-1 mb-4">
                  <li>How can red-teaming exercises be designed to discover non-obvious vulnerabilities?</li>
                  <li>What organizational structures and incentives optimize red-teaming effectiveness?</li>
                  <li>How can findings from red-teaming be effectively translated into policy and technical reforms?</li>
                </ul>
                <h4 className="font-medium mb-2">Methodology:</h4>
                <p>Experimental red-teaming exercises, comparative analysis of methodologies, and case studies of successful implementation.</p>
              </div>
              <div className="bg-purple-100 h-48 w-full md:w-80 rounded-lg flex items-center justify-center text-purple-500">
                Methodology Visualization
              </div>
            </div>
            <div className="mt-4">
              <Link 
                href="/research/red-teaming" 
                className="text-blue-600 hover:underline font-medium"
              >
                View detailed research findings →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Research Methodology */}
      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-6 border-b pb-2">Research Methodology</h2>
        <p className="mb-6">
          My research employs a mixed-methods approach that combines quantitative and qualitative techniques to develop 
          a comprehensive understanding of complex technology policy challenges. I prioritize methodological transparency, 
          reproducibility, and ethical considerations throughout the research process.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <div className="border p-5 rounded-lg hover:shadow-md transition-shadow">
            <h3 className="font-semibold text-xl mb-3">Qualitative Methods</h3>
            <ul className="list-disc list-inside space-y-2">
              <li>Semi-structured expert interviews</li>
              <li>Policy document analysis</li>
              <li>Case study development</li>
              <li>Participatory research approaches</li>
              <li>Ethnographic observation</li>
            </ul>
          </div>
          
          <div className="border p-5 rounded-lg hover:shadow-md transition-shadow">
            <h3 className="font-semibold text-xl mb-3">Quantitative Methods</h3>
            <ul className="list-disc list-inside space-y-2">
              <li>Impact assessment metrics</li>
              <li>Policy effectiveness measurement</li>
              <li>Computational analysis of policy text</li>
              <li>Statistical analysis of adoption patterns</li>
              <li>Network analysis of policy stakeholders</li>
            </ul>
          </div>
        </div>
        
        <div className="border p-5 rounded-lg hover:shadow-md transition-shadow">
          <h3 className="font-semibold text-xl mb-3">Research Ethics Framework</h3>
          <p className="mb-3">
            All research projects adhere to a comprehensive ethics framework that addresses:
          </p>
          <ul className="list-disc list-inside space-y-2">
            <li>Informed consent for research participants</li>
            <li>Responsible data collection and storage</li>
            <li>Consideration of disparate impacts across demographic groups</li>
            <li>Transparency about research limitations</li>
            <li>Commitment to open access publication when possible</li>
          </ul>
        </div>
      </section>

      {/* Research Collaborations */}
      <section>
        <h2 className="text-2xl font-bold mb-6 border-b pb-2">Research Collaborations</h2>
        <p className="mb-6">
          My research benefits from collaborations with academic institutions, policy organizations, and industry partners. 
          These partnerships enhance the rigor, relevance, and impact of the work.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="border p-5 rounded-lg text-center hover:shadow-md transition-shadow">
            <div className="w-16 h-16 mx-auto mb-4 bg-gray-200 rounded-full flex items-center justify-center">
              <span className="text-gray-500">Logo</span>
            </div>
            <h3 className="font-semibold text-lg mb-2">Columbia SIPA</h3>
            <p className="text-sm text-gray-600">
              Primary institutional affiliation supporting research on technology governance
            </p>
          </div>
          
          <div className="border p-5 rounded-lg text-center hover:shadow-md transition-shadow">
            <div className="w-16 h-16 mx-auto mb-4 bg-gray-200 rounded-full flex items-center justify-center">
              <span className="text-gray-500">Logo</span>
            </div>
            <h3 className="font-semibold text-lg mb-2">Tech Policy Press</h3>
            <p className="text-sm text-gray-600">
              Media partnership for disseminating research findings to policy audiences
            </p>
          </div>
          
          <div className="border p-5 rounded-lg text-center hover:shadow-md transition-shadow">
            <div className="w-16 h-16 mx-auto mb-4 bg-gray-200 rounded-full flex items-center justify-center">
              <span className="text-gray-500">Logo</span>
            </div>
            <h3 className="font-semibold text-lg mb-2">Global Policy Network</h3>
            <p className="text-sm text-gray-600">
              International collaboration on technology policy standards and frameworks
            </p>
          </div>
        </div>
      </section>
      
      <div className="flex justify-center mt-8">
        <Link 
          href="/publications" 
          className="px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
        >
          View Publications
        </Link>
      </div>
    </div>
  );
} 