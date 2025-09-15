import React from 'react';

export const TermsPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-xl shadow-lg p-8 md:p-12">
          <h1 className="text-4xl font-bold text-gray-800 mb-8">Terms & Conditions</h1>
          <p className="text-gray-600 mb-8">Last updated: January 1, 2025</p>

          <div className="space-y-8">
            <section>
              <h2 className="text-2xl font-bold text-gray-800 mb-4">1. Introduction</h2>
              <p className="text-gray-600 leading-relaxed">
                Welcome to BiteBazar. These Terms and Conditions ("Terms", "Terms and Conditions") 
                govern your relationship with BiteBazar operated by BiteBazar Private Limited 
                ("us", "we", or "our"). Please read these Terms and Conditions carefully before using 
                our Service.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-800 mb-4">2. Acceptance of Terms</h2>
              <p className="text-gray-600 leading-relaxed">
                By accessing and using this service, you accept and agree to be bound by the terms 
                and provision of this agreement. If you do not agree to abide by the above, please 
                do not use this service.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-800 mb-4">3. Use License</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                Permission is granted to temporarily download one copy of the materials 
                (information or software) on BiteBazar for personal, non-commercial transitory viewing only.
              </p>
              <ul className="list-disc list-inside text-gray-600 space-y-2">
                <li>Modify or copy the materials</li>
                <li>Use the materials for any commercial purpose or for any public display</li>
                <li>Attempt to decompile or reverse engineer any software contained on the website</li>
                <li>Remove any copyright or other proprietary notations from the materials</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-800 mb-4">4. User Account</h2>
              <p className="text-gray-600 leading-relaxed">
                When you create an account with us, you must provide information that is accurate, 
                complete, and current at all times. You are responsible for safeguarding the password 
                and for maintaining the confidentiality of your account.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-800 mb-4">5. Orders and Payments</h2>
              <div className="space-y-4">
                <p className="text-gray-600 leading-relaxed">
                  All orders placed through our platform are subject to acceptance and availability. 
                  Prices are subject to change without notice.
                </p>
                <ul className="list-disc list-inside text-gray-600 space-y-2">
                  <li>Payment must be completed before order processing</li>
                  <li>We accept various payment methods including cards, wallets, and cash on delivery</li>
                  <li>Refunds will be processed according to our refund policy</li>
                </ul>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-800 mb-4">6. Delivery</h2>
              <p className="text-gray-600 leading-relaxed">
                Delivery times are estimates and may vary based on factors including weather, 
                traffic, and restaurant preparation time. We strive to deliver all orders 
                within the estimated time frame.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-800 mb-4">7. Cancellation and Refund</h2>
              <div className="space-y-4">
                <p className="text-gray-600 leading-relaxed">
                  Orders can be cancelled before the restaurant starts preparing your food. 
                  Refunds will be processed within 5-7 business days.
                </p>
                <ul className="list-disc list-inside text-gray-600 space-y-2">
                  <li>No cancellation after food preparation has started</li>
                  <li>Refunds for cancelled orders will be credited to the original payment method</li>
                  <li>Quality issues will be addressed with full refunds or reorders</li>
                </ul>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-800 mb-4">8. Disclaimer</h2>
              <p className="text-gray-600 leading-relaxed">
                The information on this web site is provided on an "as is" basis. To the fullest 
                extent permitted by law, this Company excludes all representations, warranties, 
                conditions and terms whether express or implied.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-800 mb-4">9. Contact Information</h2>
              <p className="text-gray-600 leading-relaxed">
                If you have any questions about these Terms and Conditions, please contact us at:
              </p>
              <div className="mt-4 space-y-2">
                <p className="text-gray-600">Email: legal@bitebazar.com</p>
                <p className="text-gray-600">Phone: +91 1800-123-4567</p>
                <p className="text-gray-600">Address: Brigade Road, MG Road, Bangalore, Karnataka 560001</p>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};