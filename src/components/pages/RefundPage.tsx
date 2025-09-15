import React from 'react';
import { RefreshCw, Clock, CreditCard, CheckCircle } from 'lucide-react';

export const RefundPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-xl shadow-lg p-8 md:p-12">
          <h1 className="text-4xl font-bold text-gray-800 mb-8">Refund Policy</h1>
          <p className="text-gray-600 mb-8">Last updated: January 1, 2025</p>

          <div className="space-y-8">
            <section>
              <h2 className="text-2xl font-bold text-gray-800 mb-4">1. Refund Eligibility</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                We want you to be completely satisfied with your order. You may be eligible for a refund in the following cases:
              </p>
              <ul className="list-disc list-inside text-gray-600 space-y-2">
                <li>Order was cancelled before preparation started</li>
                <li>Food quality issues (cold, stale, or incorrect items)</li>
                <li>Missing items from your order</li>
                <li>Significant delivery delays (over 60 minutes from estimated time)</li>
                <li>Restaurant was unable to fulfill the order</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-800 mb-4">2. Refund Process</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
                <div className="text-center p-4 bg-orange-50 rounded-lg">
                  <RefreshCw className="w-8 h-8 text-orange-600 mx-auto mb-2" />
                  <h3 className="font-bold text-gray-800 mb-1">Step 1</h3>
                  <p className="text-sm text-gray-600">Report Issue</p>
                </div>
                <div className="text-center p-4 bg-orange-50 rounded-lg">
                  <Clock className="w-8 h-8 text-orange-600 mx-auto mb-2" />
                  <h3 className="font-bold text-gray-800 mb-1">Step 2</h3>
                  <p className="text-sm text-gray-600">Review Process</p>
                </div>
                <div className="text-center p-4 bg-orange-50 rounded-lg">
                  <CreditCard className="w-8 h-8 text-orange-600 mx-auto mb-2" />
                  <h3 className="font-bold text-gray-800 mb-1">Step 3</h3>
                  <p className="text-sm text-gray-600">Refund Initiated</p>
                </div>
                <div className="text-center p-4 bg-orange-50 rounded-lg">
                  <CheckCircle className="w-8 h-8 text-orange-600 mx-auto mb-2" />
                  <h3 className="font-bold text-gray-800 mb-1">Step 4</h3>
                  <p className="text-sm text-gray-600">Money Credited</p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-800 mb-4">3. Refund Timeline</h2>
              <div className="bg-gray-50 p-6 rounded-lg">
                <ul className="space-y-3">
                  <li className="flex items-center">
                    <span className="w-3 h-3 bg-orange-600 rounded-full mr-3"></span>
                    <span className="text-gray-600"><strong>Credit/Debit Cards:</strong> 5-7 business days</span>
                  </li>
                  <li className="flex items-center">
                    <span className="w-3 h-3 bg-orange-600 rounded-full mr-3"></span>
                    <span className="text-gray-600"><strong>Digital Wallets:</strong> 1-3 business days</span>
                  </li>
                  <li className="flex items-center">
                    <span className="w-3 h-3 bg-orange-600 rounded-full mr-3"></span>
                    <span className="text-gray-600"><strong>UPI:</strong> Instant to 24 hours</span>
                  </li>
                  <li className="flex items-center">
                    <span className="w-3 h-3 bg-orange-600 rounded-full mr-3"></span>
                    <span className="text-gray-600"><strong>Net Banking:</strong> 3-5 business days</span>
                  </li>
                </ul>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-800 mb-4">4. Non-Refundable Items</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                The following items are generally not eligible for refunds:
              </p>
              <ul className="list-disc list-inside text-gray-600 space-y-2">
                <li>Orders that have been delivered and consumed</li>
                <li>Cancellations after food preparation has started</li>
                <li>Preference-based complaints (too spicy, not spicy enough)</li>
                <li>Orders cancelled due to customer unavailability</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-800 mb-4">5. How to Request a Refund</h2>
              <div className="space-y-4">
                <p className="text-gray-600 leading-relaxed">
                  To request a refund, you can:
                </p>
                <ul className="list-disc list-inside text-gray-600 space-y-2">
                  <li>Use the "Report Issue" option in your order history</li>
                  <li>Contact our customer support at +91 1800-123-4567</li>
                  <li>Email us at refunds@foodieexpress.com</li>
                  <li>Use the live chat feature in our app</li>
                </ul>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-800 mb-4">6. Partial Refunds</h2>
              <p className="text-gray-600 leading-relaxed">
                In cases where only part of your order has issues, we may offer partial refunds 
                for the affected items while you keep the rest of your order.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-800 mb-4">7. Contact for Refund Issues</h2>
              <div className="bg-orange-50 p-6 rounded-lg">
                <p className="text-gray-600 mb-4">
                  If you have any questions about our refund policy or need assistance with a refund request:
                </p>
                <div className="space-y-2">
                  <p className="text-gray-600">Email: refunds@bitebazar.com</p>
                  <p className="text-gray-600">Phone: +91 1800-123-4567</p>
                  <p className="text-gray-600">Support Hours: 24/7</p>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};