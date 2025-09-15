import React, { useState } from 'react';
import { Search, ChevronDown, ChevronRight } from 'lucide-react';

export const HelpPage: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);

  const faqs = [
    {
      id: 1,
      question: "How do I place an order?",
      answer: "Simply browse restaurants, select items from the menu, add them to cart, and proceed to checkout. You can pay online or choose cash on delivery."
    },
    {
      id: 2,
      question: "What are the delivery charges?",
      answer: "Delivery charges vary by location and distance. You can see the exact delivery fee before placing your order. We often have free delivery offers for orders above certain amounts."
    },
    {
      id: 3,
      question: "How can I track my order?",
      answer: "Once you place an order, you'll receive SMS updates. You can also track your order in real-time through our app or website in the 'My Orders' section."
    },
    {
      id: 4,
      question: "Can I cancel my order?",
      answer: "Yes, you can cancel your order before the restaurant starts preparing it. Once preparation begins, cancellation may not be possible. Refunds for cancelled orders are processed within 5-7 business days."
    },
    {
      id: 5,
      question: "What payment methods do you accept?",
      answer: "We accept credit/debit cards, UPI, digital wallets (Paytm, PhonePe, Google Pay), net banking, and cash on delivery."
    },
    {
      id: 6,
      question: "How do I get a refund?",
      answer: "If you're not satisfied with your order, contact our customer support. We'll investigate and provide a refund or reorder based on the situation."
    },
    {
      id: 7,
      question: "What if my food is cold or not as expected?",
      answer: "We're sorry to hear that! Please contact our support team immediately. We'll work with the restaurant to ensure you get a replacement or full refund."
    },
    {
      id: 8,
      question: "How can I become a restaurant partner?",
      answer: "Restaurants can partner with us by filling out our partner registration form. Our team will reach out to discuss terms, onboarding, and setup."
    }
  ];

  const filteredFaqs = faqs.filter(faq =>
    faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
    faq.answer.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-800 mb-6">Help & Support</h1>
          <p className="text-xl text-gray-600">
            Find answers to frequently asked questions or get in touch with our support team.
          </p>
        </div>

        {/* Search */}
        <div className="mb-12">
          <div className="relative max-w-lg mx-auto">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Search for help topics..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent text-lg"
            />
          </div>
        </div>

        {/* Quick Help Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <a
            href="tel:+911800123456"
            className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all hover:scale-105 cursor-pointer block"
          >
            <div className="bg-orange-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
              <span className="text-2xl">📱</span>
            </div>
            <h3 className="text-lg font-bold text-gray-800 mb-2">Call Support</h3>
            <p className="text-gray-600">Get instant help from our support team</p>
            <p className="text-orange-600 font-medium mt-2">+91 1800-123-456</p>
          </a>
          
          <a
            href="mailto:support@bitebazar.com"
            className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all hover:scale-105 cursor-pointer block"
          >
            <div className="bg-orange-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
              <span className="text-2xl">💳</span>
            </div>
            <h3 className="text-lg font-bold text-gray-800 mb-2">Email Support</h3>
            <p className="text-gray-600">Send us your queries via email</p>
            <p className="text-orange-600 font-medium mt-2">support@bitebazar.com</p>
          </a>
          
          <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all hover:scale-105 cursor-pointer">
            <div className="bg-orange-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
              <span className="text-2xl">🍽️</span>
            </div>
            <h3 className="text-lg font-bold text-gray-800 mb-2">Live Chat</h3>
            <p className="text-gray-600">Chat with our support agents</p>
            <p className="text-orange-600 font-medium mt-2">Available 24/7</p>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-12">
          <h2 className="text-2xl font-bold text-gray-800 mb-8 text-center">Quick Actions</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <button className="bg-orange-50 hover:bg-orange-100 p-4 rounded-lg text-center transition-colors">
              <div className="text-2xl mb-2">🚚</div>
              <p className="text-sm font-medium text-gray-800">Track Order</p>
            </button>
            <button className="bg-orange-50 hover:bg-orange-100 p-4 rounded-lg text-center transition-colors">
              <div className="text-2xl mb-2">💰</div>
              <p className="text-sm font-medium text-gray-800">Refund Status</p>
            </button>
            <button className="bg-orange-50 hover:bg-orange-100 p-4 rounded-lg text-center transition-colors">
              <div className="text-2xl mb-2">🏪</div>
              <p className="text-sm font-medium text-gray-800">Partner with Us</p>
            </button>
            <button className="bg-orange-50 hover:bg-orange-100 p-4 rounded-lg text-center transition-colors">
              <div className="text-2xl mb-2">📋</div>
              <p className="text-sm font-medium text-gray-800">Order History</p>
            </button>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="bg-white rounded-xl shadow-lg p-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-8">Frequently Asked Questions</h2>
          <div className="space-y-4">
            {filteredFaqs.map((faq) => (
              <div key={faq.id} className="border border-gray-200 rounded-lg">
                <button
                  onClick={() => setExpandedFaq(expandedFaq === faq.id ? null : faq.id)}
                  className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
                >
                  <span className="font-medium text-gray-800">{faq.question}</span>
                  {expandedFaq === faq.id ? (
                    <ChevronDown className="w-5 h-5 text-gray-500" />
                  ) : (
                    <ChevronRight className="w-5 h-5 text-gray-500" />
                  )}
                </button>
                {expandedFaq === faq.id && (
                  <div className="px-6 pb-4">
                    <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Contact Support */}
        <div className="mt-12 bg-orange-600 text-white rounded-xl p-8 text-center">
          <h2 className="text-2xl font-bold mb-4">Still Need Help?</h2>
          <p className="mb-6">Our customer support team is available 24/7 to assist you.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+911800123456"
              className="bg-white text-orange-600 px-6 py-3 rounded-lg font-bold hover:bg-gray-100 transition-colors"
            >
              Call Support
            </a>
            <a
              href="mailto:support@foodieexpress.com"
              className="border-2 border-white text-white px-6 py-3 rounded-lg font-bold hover:bg-white hover:text-orange-600 transition-colors"
            >
              Email Us
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};