import React from 'react';
import { TrendingUp, DollarSign, Users, Globe } from 'lucide-react';

export const InvestorPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-800 mb-6">Investor Relations</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Learn about FoodieExpress's growth story, financial performance, and investment opportunities.
          </p>
        </div>

        {/* Key Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          <div className="bg-white p-8 rounded-xl shadow-lg text-center">
            <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <TrendingUp className="w-8 h-8 text-orange-600" />
            </div>
            <h3 className="text-3xl font-bold text-gray-800 mb-2">₹2,500Cr</h3>
            <p className="text-gray-600">Annual Revenue</p>
          </div>
          
          <div className="bg-white p-8 rounded-xl shadow-lg text-center">
            <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Users className="w-8 h-8 text-orange-600" />
            </div>
            <h3 className="text-3xl font-bold text-gray-800 mb-2">50M+</h3>
            <p className="text-gray-600">Active Users</p>
          </div>
          
          <div className="bg-white p-8 rounded-xl shadow-lg text-center">
            <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Globe className="w-8 h-8 text-orange-600" />
            </div>
            <h3 className="text-3xl font-bold text-gray-800 mb-2">100+</h3>
            <p className="text-gray-600">Cities</p>
          </div>
          
          <div className="bg-white p-8 rounded-xl shadow-lg text-center">
            <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <DollarSign className="w-8 h-8 text-orange-600" />
            </div>
            <h3 className="text-3xl font-bold text-gray-800 mb-2">₹5,000Cr</h3>
            <p className="text-gray-600">Company Valuation</p>
          </div>
        </div>

        {/* Investment Highlights */}
        <div className="bg-white rounded-xl shadow-lg p-8 md:p-12 mb-16">
          <h2 className="text-3xl font-bold text-gray-800 text-center mb-12">Investment Highlights</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h3 className="text-xl font-bold text-gray-800 mb-6">Market Leadership</h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-orange-600 rounded-full mt-2"></div>
                  <span className="text-gray-600">Leading market share in food delivery segment</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-orange-600 rounded-full mt-2"></div>
                  <span className="text-gray-600">Strong brand recognition and customer loyalty</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-orange-600 rounded-full mt-2"></div>
                  <span className="text-gray-600">Expanding into new verticals and services</span>
                </li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-xl font-bold text-gray-800 mb-6">Financial Performance</h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-orange-600 rounded-full mt-2"></div>
                  <span className="text-gray-600">Consistent revenue growth of 40% YoY</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-orange-600 rounded-full mt-2"></div>
                  <span className="text-gray-600">Path to profitability with improving unit economics</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-orange-600 rounded-full mt-2"></div>
                  <span className="text-gray-600">Strong cash position and funding runway</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Financial Reports */}
        <div className="bg-white rounded-xl shadow-lg p-8 md:p-12 mb-16">
          <h2 className="text-3xl font-bold text-gray-800 text-center mb-12">Financial Reports</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="border border-gray-200 rounded-lg p-6 hover:shadow-md transition-all hover:border-orange-300">
              <h3 className="font-bold text-gray-800 mb-2">Q4 2024 Results</h3>
              <p className="text-gray-600 text-sm mb-4">Quarterly financial performance and key metrics</p>
              <a
                href="/reports/q4-2024-results.pdf"
                download="BiteBazar-Q4-2024-Results.pdf"
                className="inline-flex items-center text-orange-600 hover:text-orange-700 font-medium transition-colors"
              >
                <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                Download PDF
              </a>
            </div>
            
            <div className="border border-gray-200 rounded-lg p-6 hover:shadow-md transition-all hover:border-orange-300">
              <h3 className="font-bold text-gray-800 mb-2">Annual Report 2024</h3>
              <p className="text-gray-600 text-sm mb-4">Complete annual financial and business review</p>
              <a
                href="/reports/annual-report-2024.pdf"
                download="BiteBazar-Annual-Report-2024.pdf"
                className="inline-flex items-center text-orange-600 hover:text-orange-700 font-medium transition-colors"
              >
                <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                Download PDF
              </a>
            </div>
            
            <div className="border border-gray-200 rounded-lg p-6 hover:shadow-md transition-all hover:border-orange-300">
              <h3 className="font-bold text-gray-800 mb-2">Investor Presentation</h3>
              <p className="text-gray-600 text-sm mb-4">Latest investor deck and company overview</p>
              <a
                href="/reports/investor-presentation-2024.pdf"
                download="BiteBazar-Investor-Presentation-2024.pdf"
                className="inline-flex items-center text-orange-600 hover:text-orange-700 font-medium transition-colors"
              >
                <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                Download PDF
              </a>
            </div>
          </div>
          
          <div className="mt-8 text-center">
            <p className="text-gray-600 mb-4">
              All financial reports are available in PDF format. For additional reports or investor inquiries, 
              please contact our investor relations team.
            </p>
          </div>
        </div>

        {/* Contact Investor Relations */}
        <div className="bg-orange-600 text-white rounded-xl p-8 text-center">
          <h2 className="text-2xl font-bold mb-4">Investor Relations Contact</h2>
          <p className="mb-6">For investor inquiries, financial information, or partnership opportunities</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="mailto:investors@bitebazar.com"
            >
              Email Investor Relations
            </a>
            <a
              href="tel:+911800123456"
              className="border-2 border-white text-white px-6 py-3 rounded-lg font-bold hover:bg-white hover:text-orange-600 transition-colors"
            >
              Call Us
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};