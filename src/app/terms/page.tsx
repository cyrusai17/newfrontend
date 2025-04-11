import Link from 'next/link';

export default function Terms() {
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
              Terms of Service
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
              Welcome to Lumadao. These Terms of Service ("Terms") govern your access to and use of the Lumadao platform, including our website, services, and any other content or functionality offered on or through our platform (collectively, the "Services").
            </p>
            <p className="text-blue-100 leading-relaxed mb-4">
              By accessing or using our Services, you agree to be bound by these Terms. If you do not agree to these Terms, you may not access or use our Services.
            </p>
          </section>

          <section className="bg-blue-900/50 backdrop-blur-lg rounded-2xl p-8 border border-white/10 shadow-xl">
            <h2 className="text-2xl md:text-3xl font-bold mb-6 text-white">2. Definitions</h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-xl font-bold mb-2 text-white">2.1 "Platform"</h3>
                <p className="text-blue-100 leading-relaxed">
                  Refers to the Lumadao decentralized autonomous organization, including its website, applications, and services.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2 text-white">2.2 "User"</h3>
                <p className="text-blue-100 leading-relaxed">
                  Refers to any individual or entity that accesses or uses the Platform.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2 text-white">2.3 "Content"</h3>
                <p className="text-blue-100 leading-relaxed">
                  Refers to any information, text, graphics, photos, or other materials uploaded, downloaded, or appearing on the Platform.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2 text-white">2.4 "Contributions"</h3>
                <p className="text-blue-100 leading-relaxed">
                  Refers to any work, ideas, or resources provided by Users to the Platform, including but not limited to code, designs, research, and documentation.
                </p>
              </div>
            </div>
          </section>

          <section className="bg-blue-900/50 backdrop-blur-lg rounded-2xl p-8 border border-white/10 shadow-xl">
            <h2 className="text-2xl md:text-3xl font-bold mb-6 text-white">3. User Responsibilities</h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-xl font-bold mb-2 text-white">3.1 Account Registration</h3>
                <p className="text-blue-100 leading-relaxed">
                  To access certain features of the Platform, you may be required to register for an account. You agree to provide accurate, current, and complete information during the registration process and to update such information to keep it accurate, current, and complete.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2 text-white">3.2 Account Security</h3>
                <p className="text-blue-100 leading-relaxed">
                  You are responsible for safeguarding the password that you use to access the Platform and for any activities or actions under your password. You agree to notify us immediately of any unauthorized use of your account.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2 text-white">3.3 Prohibited Activities</h3>
                <p className="text-blue-100 leading-relaxed">
                  You agree not to engage in any of the following prohibited activities:
                </p>
                <ul className="list-disc pl-6 mt-2 text-blue-100 space-y-2">
                  <li>Violating any laws or regulations</li>
                  <li>Impersonating another person or entity</li>
                  <li>Interfering with or disrupting the Platform or servers</li>
                  <li>Attempting to gain unauthorized access to the Platform</li>
                  <li>Using the Platform for any illegal or unauthorized purpose</li>
                  <li>Transmitting any viruses, worms, or other malicious code</li>
                </ul>
              </div>
            </div>
          </section>

          <section className="bg-blue-900/50 backdrop-blur-lg rounded-2xl p-8 border border-white/10 shadow-xl">
            <h2 className="text-2xl md:text-3xl font-bold mb-6 text-white">4. Intellectual Property</h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-xl font-bold mb-2 text-white">4.1 Platform Content</h3>
                <p className="text-blue-100 leading-relaxed">
                  The Platform and its original content, features, and functionality are owned by Lumadao and are protected by international copyright, trademark, patent, trade secret, and other intellectual property laws.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2 text-white">4.2 User Contributions</h3>
                <p className="text-blue-100 leading-relaxed">
                  By submitting Contributions to the Platform, you grant Lumadao a worldwide, non-exclusive, royalty-free license to use, reproduce, modify, adapt, publish, translate, and distribute your Contributions in any medium and format.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2 text-white">4.3 Open Source</h3>
                <p className="text-blue-100 leading-relaxed">
                  Many components of the Platform are released under open source licenses. You agree to comply with the terms of these licenses when using such components.
                </p>
              </div>
            </div>
          </section>

          <section className="bg-blue-900/50 backdrop-blur-lg rounded-2xl p-8 border border-white/10 shadow-xl">
            <h2 className="text-2xl md:text-3xl font-bold mb-6 text-white">5. Privacy</h2>
            <p className="text-blue-100 leading-relaxed mb-4">
              Your privacy is important to us. Our Privacy Policy explains how we collect, use, and protect your personal information. By using the Platform, you agree to the collection and use of information in accordance with our Privacy Policy.
            </p>
            <p className="text-blue-100 leading-relaxed">
              For more information, please review our <Link href="/privacy" className="text-blue-300 hover:text-blue-200 underline">Privacy Policy</Link>.
            </p>
          </section>

          <section className="bg-blue-900/50 backdrop-blur-lg rounded-2xl p-8 border border-white/10 shadow-xl">
            <h2 className="text-2xl md:text-3xl font-bold mb-6 text-white">6. Disclaimer of Warranties</h2>
            <p className="text-blue-100 leading-relaxed mb-4">
              THE PLATFORM IS PROVIDED "AS IS" AND "AS AVAILABLE" WITHOUT WARRANTIES OF ANY KIND, EITHER EXPRESS OR IMPLIED, INCLUDING, BUT NOT LIMITED TO, IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, TITLE, AND NON-INFRINGEMENT.
            </p>
            <p className="text-blue-100 leading-relaxed">
              WE DO NOT WARRANT THAT THE PLATFORM WILL BE UNINTERRUPTED OR ERROR-FREE, THAT DEFECTS WILL BE CORRECTED, OR THAT THE PLATFORM OR THE SERVERS THAT MAKE IT AVAILABLE ARE FREE OF VIRUSES OR OTHER HARMFUL COMPONENTS.
            </p>
          </section>

          <section className="bg-blue-900/50 backdrop-blur-lg rounded-2xl p-8 border border-white/10 shadow-xl">
            <h2 className="text-2xl md:text-3xl font-bold mb-6 text-white">7. Limitation of Liability</h2>
            <p className="text-blue-100 leading-relaxed mb-4">
              IN NO EVENT SHALL LUMADAO, ITS DIRECTORS, EMPLOYEES, PARTNERS, AGENTS, SUPPLIERS, OR AFFILIATES BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, INCLUDING WITHOUT LIMITATION, LOSS OF PROFITS, DATA, USE, GOODWILL, OR OTHER INTANGIBLE LOSSES, RESULTING FROM YOUR ACCESS TO OR USE OF OR INABILITY TO ACCESS OR USE THE PLATFORM.
            </p>
          </section>

          <section className="bg-blue-900/50 backdrop-blur-lg rounded-2xl p-8 border border-white/10 shadow-xl">
            <h2 className="text-2xl md:text-3xl font-bold mb-6 text-white">8. Changes to Terms</h2>
            <p className="text-blue-100 leading-relaxed mb-4">
              We reserve the right to modify or replace these Terms at any time. If a revision is material, we will provide at least 30 days' notice prior to any new terms taking effect. What constitutes a material change will be determined at our sole discretion.
            </p>
            <p className="text-blue-100 leading-relaxed">
              By continuing to access or use our Platform after any revisions become effective, you agree to be bound by the revised terms. If you do not agree to the new terms, you are no longer authorized to use the Platform.
            </p>
          </section>

          <section className="bg-blue-900/50 backdrop-blur-lg rounded-2xl p-8 border border-white/10 shadow-xl">
            <h2 className="text-2xl md:text-3xl font-bold mb-6 text-white">9. Contact Us</h2>
            <p className="text-blue-100 leading-relaxed">
              If you have any questions about these Terms, please contact us at <a href="mailto:legal@lumadao.org" className="text-blue-300 hover:text-blue-200 underline">legal@lumadao.org</a>.
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