import React, { useEffect } from 'react';
import PageHeader from './PageHeader';

const PrivacyPolicy = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-black text-white relative overflow-hidden">
      <PageHeader title="Privacy Policy" />
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
            <h1 className="text-4xl font-bold mb-8 font-mono">Privacy Policy</h1>
            
            <p className="text-gray-300 mb-8">
              GermanPath ("we", "us" or "our") is committed to protecting your personal data privacy and security. This privacy policy explains how we collect, use and process your information when you use our services.
            </p>

            <p className="text-gray-300 mb-8">
              We process your personal data in accordance with the General Data Protection Regulation (GDPR) (EU) 2016/679 and other applicable data protection laws.
            </p>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4">1. Data Controller</h2>
              <p className="text-gray-300 mb-4">
                The data controller for the processing of your personal data is:
              </p>
              <p className="text-gray-300 mb-4">
                GermanPath<br />
                Tashkent, Uzbekistan
              </p>
              <p className="text-gray-300 mb-4">
                📧 Email: info@germanpath.com
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4">2. Information We Collect</h2>
              
              <h3 className="text-xl font-semibold mb-2">2.1. Personal Data</h3>
              <p className="text-gray-300 mb-4">
                We collect and process the following personal data when you use our services:
              </p>
              <ul className="list-disc pl-6 mb-4 text-gray-300">
                <li>Contact information: Name, email address, phone number</li>
                <li>Educational information: Current language level, academic goals</li>
                <li>Service information: Information about the services you request</li>
                <li>Communication data: Messages and correspondence with our team</li>
              </ul>

              <h3 className="text-xl font-semibold mb-2">2.2. Legal Basis for Processing</h3>
              <p className="text-gray-300 mb-4">
                We process your personal data based on the following legal grounds under Article 6 of GDPR:
              </p>
              <ul className="list-disc pl-6 mb-4 text-gray-300">
                <li>Performance of contract (Art. 6(1)(b) GDPR) – Processing is necessary to fulfill your service request</li>
                <li>Legitimate interests (Art. 6(1)(f) GDPR) – To ensure our services function properly</li>
                <li>Legal obligations (Art. 6(1)(c) GDPR) – To comply with applicable laws and regulations</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4">3. How We Use Your Information</h2>
              <p className="text-gray-300 mb-4">
                We use the collected data for the following purposes:
              </p>
              <ul className="list-disc pl-6 mb-4 text-gray-300">
                <li>To provide language learning and consulting services</li>
                <li>To communicate with you about your progress and services</li>
                <li>To improve our services and educational programs</li>
                <li>To comply with legal requirements</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4">4. Data Storage and Deletion</h2>
              <p className="text-gray-300 mb-4">We store your data only as long as necessary:</p>
              <ul className="list-disc pl-6 mb-4 text-gray-300">
                <li>Service data: Stored for the duration of our service relationship</li>
                <li>Communication data: Deleted after the matter has been resolved, unless required by law</li>
                <li>Marketing data: Stored until you withdraw consent</li>
              </ul>
              <p className="text-gray-300 mb-4">
                You can request deletion of your data at any time (see section 5).
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4">5. Your Rights Under GDPR</h2>
              <p className="text-gray-300 mb-4">
                Under the General Data Protection Regulation (GDPR), you have the following rights regarding your personal data:
              </p>
              <ul className="list-disc pl-6 mb-4 text-gray-300">
                <li>Right of access – Request a copy of the personal data we store about you</li>
                <li>Right to rectification – Request correction of inaccurate or incomplete data</li>
                <li>Right to erasure ("right to be forgotten") – Request deletion of your personal data</li>
                <li>Right to restrict processing – Request that we limit how we use your data</li>
                <li>Right to data portability – Receive your data in a structured format</li>
                <li>Right to object – Object to processing based on legitimate interests</li>
                <li>Right to withdraw consent – If processing is based on consent, you can withdraw it at any time</li>
              </ul>

              <h3 className="text-xl font-semibold mb-2">How to Exercise Your Rights</h3>
              <p className="text-gray-300 mb-4">
                To exercise any of these rights, please contact us at:
              </p>
              <p className="text-gray-300 mb-4">
                📧 info@germanpath.com
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4">6. Contact Information</h2>
              <p className="text-gray-300 mb-4">
                For questions or concerns regarding this privacy policy, please contact us at:
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

export default PrivacyPolicy;