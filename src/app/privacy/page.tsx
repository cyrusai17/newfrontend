import Link from 'next/link';

export default function Privacy() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-blue-900 via-blue-800 to-blue-700 text-white p-4 md:p-8">
      <div className="max-w-4xl mx-auto">
        <div className="flex justify-between items-center mb-12">
          <div>
            <Link 
              href="/join/application"
              className="text-blue-200 hover:text-white mb-4 inline-block font-medium"
            >
              ← Back to Application
            </Link>
            <h1 className="text-4xl md:text-5xl font-bold text-white">
              Privacy Policy
            </h1>
          </div>
          <div className="flex gap-2">
            <span className="bg-blue-500/30 text-blue-100 text-sm px-3 py-1 rounded-full font-medium">Last Updated: June 2023</span>
          </div>
        </div>

        <div className="space-y-12">
          <section className="bg-blue-900/50 backdrop-blur-lg rounded-2xl p-8 border border-white/10 shadow-xl">
            <h2 className="text-2xl md:text-3xl font-bold mb-6 text-white">1. Introduction</h2>
            <p className="text-blue-100 leading-relaxed mb-4">
              At Lumadao, we take your privacy seriously. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our platform, including our website, services, and any other content or functionality offered on or through our platform (collectively, the "Services").
            </p>
            <p className="text-blue-100 leading-relaxed">
              Please read this Privacy Policy carefully. By accessing or using our Services, you acknowledge that you have read, understood, and agree to be bound by all the terms of this Privacy Policy. If you do not agree with our policies and practices, please do not use our Services.
            </p>
          </section>

          <section className="bg-blue-900/50 backdrop-blur-lg rounded-2xl p-8 border border-white/10 shadow-xl">
            <h2 className="text-2xl md:text-3xl font-bold mb-6 text-white">2. Information We Collect</h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-xl font-bold mb-2 text-white">2.1 Personal Information</h3>
                <p className="text-blue-100 leading-relaxed">
                  We may collect personal information that you voluntarily provide to us when you register on the Platform, express interest in obtaining information about us or our products and Services, or otherwise when you contact us. This may include:
                </p>
                <ul className="list-disc pl-6 mt-2 text-blue-100 space-y-2">
                  <li>Username or pseudonym</li>
                  <li>Email address</li>
                  <li>Profile information</li>
                  <li>Skills and expertise</li>
                  <li>Areas of interest</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2 text-white">2.2 Usage Information</h3>
                <p className="text-blue-100 leading-relaxed">
                  We may automatically collect certain information when you visit, use, or navigate the Platform. This information may include:
                </p>
                <ul className="list-disc pl-6 mt-2 text-blue-100 space-y-2">
                  <li>Device and usage information</li>
                  <li>Log and usage data</li>
                  <li>Location information</li>
                  <li>Information about how you interact with the Platform</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2 text-white">2.3 Blockchain Data</h3>
                <p className="text-blue-100 leading-relaxed">
                  As a decentralized platform, some of your activities on the Platform may be recorded on the blockchain. This may include:
                </p>
                <ul className="list-disc pl-6 mt-2 text-blue-100 space-y-2">
                  <li>Contributions to projects</li>
                  <li>Voting records</li>
                  <li>Token transactions</li>
                  <li>Governance participation</li>
                </ul>
                <p className="text-blue-100 leading-relaxed mt-2">
                  Please note that blockchain data is immutable and publicly visible.
                </p>
              </div>
            </div>
          </section>

          <section className="bg-blue-900/50 backdrop-blur-lg rounded-2xl p-8 border border-white/10 shadow-xl">
            <h2 className="text-2xl md:text-3xl font-bold mb-6 text-white">3. How We Use Your Information</h2>
            <p className="text-blue-100 leading-relaxed mb-4">
              We may use the information we collect for various purposes, including to:
            </p>
            <ul className="list-disc pl-6 text-blue-100 space-y-2">
              <li>Provide, operate, and maintain our Platform</li>
              <li>Improve, personalize, and expand our Platform</li>
              <li>Understand and analyze how you use our Platform</li>
              <li>Develop new products, services, features, and functionality</li>
              <li>Communicate with you about updates, security alerts, and support</li>
              <li>Monitor and analyze trends and usage</li>
              <li>Detect, investigate, and prevent fraudulent transactions and other illegal activities</li>
            </ul>
          </section>

          <section className="bg-blue-900/50 backdrop-blur-lg rounded-2xl p-8 border border-white/10 shadow-xl">
            <h2 className="text-2xl md:text-3xl font-bold mb-6 text-white">4. Anonymity and Privacy</h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-xl font-bold mb-2 text-white">4.1 Pseudonymous Participation</h3>
                <p className="text-blue-100 leading-relaxed">
                  The Platform is designed to allow pseudonymous participation. You are not required to use your real identity when using the Platform. You can choose a username or pseudonym that does not reveal your real identity.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2 text-white">4.2 Email Verification</h3>
                <p className="text-blue-100 leading-relaxed">
                  While we require email verification for certain features, we encourage you to use an anonymous email service. We do not share your email address with other users or third parties without your consent.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2 text-white">4.3 Data Minimization</h3>
                <p className="text-blue-100 leading-relaxed">
                  We collect only the information necessary to provide and improve our Services. We do not collect or store unnecessary personal information.
                </p>
              </div>
            </div>
          </section>

          <section className="bg-blue-900/50 backdrop-blur-lg rounded-2xl p-8 border border-white/10 shadow-xl">
            <h2 className="text-2xl md:text-3xl font-bold mb-6 text-white">5. Information Sharing and Disclosure</h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-xl font-bold mb-2 text-white">5.1 With Your Consent</h3>
                <p className="text-blue-100 leading-relaxed">
                  We may share your information with third parties when you give us consent to do so.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2 text-white">5.2 Service Providers</h3>
                <p className="text-blue-100 leading-relaxed">
                  We may share your information with third-party vendors, service providers, contractors, or agents who perform services on our behalf and need access to such information to carry out their work.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2 text-white">5.3 Legal Requirements</h3>
                <p className="text-blue-100 leading-relaxed">
                  We may disclose your information if required to do so by law or in response to valid requests by public authorities (e.g., a court or a government agency).
                </p>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2 text-white">5.4 Business Transfers</h3>
                <p className="text-blue-100 leading-relaxed">
                  If we are involved in a merger, acquisition, or sale of all or a portion of our assets, your information may be transferred as part of that transaction.
                </p>
              </div>
            </div>
          </section>

          <section className="bg-blue-900/50 backdrop-blur-lg rounded-2xl p-8 border border-white/10 shadow-xl">
            <h2 className="text-2xl md:text-3xl font-bold mb-6 text-white">6. Data Security</h2>
            <p className="text-blue-100 leading-relaxed mb-4">
              We have implemented appropriate technical and organizational security measures designed to protect the security of any personal information we process. However, please also remember that we cannot guarantee that the internet itself is 100% secure.
            </p>
            <p className="text-blue-100 leading-relaxed">
              Although we will do our best to protect your personal information, transmission of personal information to and from our Platform is at your own risk. You should only access the Services within a secure environment.
            </p>
          </section>

          <section className="bg-blue-900/50 backdrop-blur-lg rounded-2xl p-8 border border-white/10 shadow-xl">
            <h2 className="text-2xl md:text-3xl font-bold mb-6 text-white">7. Your Data Protection Rights</h2>
            <p className="text-blue-100 leading-relaxed mb-4">
              Depending on your location, you may have certain data protection rights. These may include the right to:
            </p>
            <ul className="list-disc pl-6 text-blue-100 space-y-2">
              <li>Access the personal information we hold about you</li>
              <li>Request correction of the personal information we hold about you</li>
              <li>Request deletion of your personal information</li>
              <li>Object to processing of your personal information</li>
              <li>Request restriction of processing your personal information</li>
              <li>Request transfer of your personal information</li>
              <li>Withdraw consent at any time where we rely on consent to process your personal information</li>
            </ul>
          </section>

          <section className="bg-blue-900/50 backdrop-blur-lg rounded-2xl p-8 border border-white/10 shadow-xl">
            <h2 className="text-2xl md:text-3xl font-bold mb-6 text-white">8. Children's Privacy</h2>
            <p className="text-blue-100 leading-relaxed">
              Our Services are not intended for use by children under the age of 16. We do not knowingly collect personal information from children under 16. If you become aware that a child has provided us with personal information, please contact us, and we will take steps to delete such information.
            </p>
          </section>

          <section className="bg-blue-900/50 backdrop-blur-lg rounded-2xl p-8 border border-white/10 shadow-xl">
            <h2 className="text-2xl md:text-3xl font-bold mb-6 text-white">9. Changes to This Privacy Policy</h2>
            <p className="text-blue-100 leading-relaxed mb-4">
              We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last Updated" date at the top of this Privacy Policy.
            </p>
            <p className="text-blue-100 leading-relaxed">
              You are advised to review this Privacy Policy periodically for any changes. Changes to this Privacy Policy are effective when they are posted on this page.
            </p>
          </section>

          <section className="bg-blue-900/50 backdrop-blur-lg rounded-2xl p-8 border border-white/10 shadow-xl">
            <h2 className="text-2xl md:text-3xl font-bold mb-6 text-white">10. Contact Us</h2>
            <p className="text-blue-100 leading-relaxed">
              If you have any questions about this Privacy Policy, please contact us at <a href="mailto:privacy@lumadao.org" className="text-blue-300 hover:text-blue-200 underline">privacy@lumadao.org</a>.
            </p>
          </section>

          <div className="flex justify-center pt-4">
            <Link 
              href="/join/application"
              className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-3 rounded-full font-semibold transition-all shadow-lg hover:shadow-xl"
            >
              Return to Application
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
} 