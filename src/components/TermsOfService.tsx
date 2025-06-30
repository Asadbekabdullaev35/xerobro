import React, { useEffect } from 'react';
import PageHeader from './PageHeader';

const TermsOfService = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-black text-white relative overflow-hidden">
      <PageHeader title="Terms of Service" />
      <div className="pt-32 pb-24">
        <div className="absolute inset-0 bg-black">
          <div className="absolute inset-0"
            style={{
              background: `
                radial-gradient(1px 1px at 20% 30%, rgba(255, 255, 255, 0.8) 0%, transparent 100%),
                radial-gradient(1px 1px at 40% 70%, rgba(255, 255, 255, 0.7) 0%, transparent 100%),
                radial-gradient(1px 1px at 60% 40%, rgba(255, 255, 255, 0.9) 0%, transparent 100%),
                radial-gradient(2px 2px at 70% 90%, rgba(255, 255, 255, 0.6) 0%, transparent 100%),
                radial-gradient(2px 2px at 90% 20%, rgba(255, 255, 255, 0.8) 0%, transparent 100%)
              `,
              backgroundSize: '250px 250px',
              animation: 'twinkle 8s ease-in-out infinite alternate',
            }}
          />
          
          <div className="absolute inset-0"
            style={{
              background: `
                radial-gradient(circle at 50% 50%, rgba(76, 0, 255, 0.1) 0%, transparent 50%),
                radial-gradient(circle at 20% 30%, rgba(0, 183, 255, 0.1) 0%, transparent 40%),
                radial-gradient(circle at 80% 70%, rgba(255, 0, 221, 0.1) 0%, transparent 40%)
              `,
              filter: 'blur(20px)',
              animation: 'nebulaPulse 15s ease-in-out infinite',
            }}
          />
        </div>
        <div className="grid-animation absolute inset-0" />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="prose prose-invert">
            <h1 className="text-4xl font-bold mb-8 font-mono">Terms of Service</h1>
            <p className="text-gray-300 mb-4">Effective Date: {new Date().toLocaleDateString()}</p>
            
            <p className="text-gray-300 mb-8">
              These Terms of Service ("Terms") govern the business relationship between GermanPath ("we", "us" or "GermanPath"), and users of our services ("Customer" or "you"). These Terms apply to all orders and agreements made through our website and services. We offer German language learning and university consulting services.
            </p>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4">1. Scope of Application</h2>
              <p className="text-gray-300 mb-4">1.1. These Terms apply to all service orders made through GermanPath and cover both customers within and outside Uzbekistan.</p>
              <p className="text-gray-300 mb-4">1.2. These Terms are part of the agreement between GermanPath and the Customer, regardless of whether the Customer is a consumer or a business.</p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4">2. Contract Formation</h2>
              <p className="text-gray-300 mb-4">2.1. A contract between GermanPath and the Customer is formed when the Customer places an order and GermanPath accepts the order. Registration is not required.</p>
              <p className="text-gray-300 mb-4">2.2. The order is accepted by providing the service or through explicit confirmation from GermanPath.</p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4">3. Services</h2>
              <p className="text-gray-300 mb-4">3.1. GermanPath offers German language learning and university consulting services, including:</p>
              <ul className="list-disc pl-6 mb-4 text-gray-300">
                <li>German language courses (A1-C1)</li>
                <li>Studienkolleg C-Test preparation</li>
                <li>University application support</li>
                <li>Visa and accommodation assistance</li>
                <li>Ongoing support in Germany and Uzbekistan</li>
              </ul>
              <p className="text-gray-300 mb-4">3.2. All services are customized individually according to the Customer's needs. Success depends on the Customer's usage and implementation.</p>
              <p className="text-gray-300 mb-4">3.3. No guarantee of success is given, as results depend on how the Customer uses the provided educational tools and guidance.</p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4">4. Pricing and Payment</h2>
              <p className="text-gray-300 mb-4">4.1. Prices are specified during consultation and are quoted in US Dollars (USD), excluding VAT unless otherwise stated.</p>
              <p className="text-gray-300 mb-4">4.2. Payment is made through GermanPath's approved payment methods. The Customer commits to paying the full amount upon order confirmation.</p>
              <p className="text-gray-300 mb-4">4.3. Payment for one-time services must be made in full upon ordering.</p>
              <p className="text-gray-300 mb-4">4.4. For ongoing services, the Customer must cancel the agreement at least one week before the end of the billing period to avoid automatic renewal.</p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4">5. Right of Withdrawal and Refunds</h2>
              <p className="text-gray-300 mb-4">5.1. Since services are educational and customized, no statutory right of withdrawal applies. Refunds are only made in case of errors by GermanPath.</p>
              <p className="text-gray-300 mb-4">5.2. In case of errors by GermanPath, either a free correction or refund is offered.</p>
              <p className="text-gray-300 mb-4">5.3. Ongoing agreements can only be cancelled before the end of the billing period. Cancellation must be made at least one week before the period ends.</p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4">6. Contact Information</h2>
              <p className="text-gray-300 mb-4">
                For questions regarding these Terms of Service, please contact us at:
              </p>
              <p className="text-gray-300">
                📧 info@germanpath.com
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TermsOfService;