import Link from 'next/link';

export default function JoinDAO() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-blue-900 via-blue-800 to-blue-700 text-white p-4 md:p-8">
      <div className="max-w-4xl mx-auto">
        <div className="flex justify-between items-center mb-12">
          <div>
            <Link 
              href="/"
              className="text-blue-200 hover:text-white mb-4 inline-block font-medium"
            >
              ← Back to Home
            </Link>
            <h1 className="text-4xl md:text-5xl font-bold text-white">
              Join Lumadao
            </h1>
          </div>
          <div className="flex gap-2">
            <span className="bg-blue-500/30 text-blue-100 text-sm px-3 py-1 rounded-full font-medium">Beta Access</span>
            <span className="bg-purple-500/30 text-purple-100 text-sm px-3 py-1 rounded-full font-medium">Early Member</span>
          </div>
        </div>

        <div className="space-y-12">
          {/* Welcome Section */}
          <section className="bg-blue-900/50 backdrop-blur-lg rounded-2xl p-8 border border-white/10 shadow-xl">
            <h2 className="text-2xl md:text-3xl font-bold mb-6 text-white">Welcome to the Future of Collaboration</h2>
            <div className="bg-blue-800/50 p-6 rounded-xl border border-white/5">
              <p className="text-blue-100 leading-relaxed mb-4">
                Join a global community of innovators, problem-solvers, and change-makers. As a DAO member, you'll have the power to propose solutions, vote on initiatives, and earn rewards for your contributions.
              </p>
              <div className="grid md:grid-cols-3 gap-4 mt-6">
                <div className="bg-blue-700/50 p-4 rounded-lg border border-white/5">
                  <h4 className="font-semibold mb-2 text-white">5,000+</h4>
                  <p className="text-sm text-blue-100">Active Members</p>
                </div>
                <div className="bg-blue-700/50 p-4 rounded-lg border border-white/5">
                  <h4 className="font-semibold mb-2 text-white">$2M+</h4>
                  <p className="text-sm text-blue-100">In Rewards Distributed</p>
                </div>
                <div className="bg-blue-700/50 p-4 rounded-lg border border-white/5">
                  <h4 className="font-semibold mb-2 text-white">50+</h4>
                  <p className="text-sm text-blue-100">Active Projects</p>
                </div>
              </div>
            </div>
          </section>

          {/* Membership Benefits */}
          <section className="bg-blue-900/50 backdrop-blur-lg rounded-2xl p-8 border border-white/10 shadow-xl">
            <h2 className="text-2xl md:text-3xl font-bold mb-6 text-white">Membership Benefits</h2>
            <div className="grid gap-6">
              <div className="bg-blue-800/50 p-6 rounded-xl border border-white/5">
                <h3 className="text-xl font-bold mb-3 text-white">Governance Rights</h3>
                <ul className="text-blue-100 leading-relaxed space-y-2">
                  <li>• Vote on project funding and resource allocation</li>
                  <li>• Participate in strategic decisions</li>
                  <li>• Shape the future of global initiatives</li>
                  <li>• Propose new solutions and challenges</li>
                </ul>
              </div>
              <div className="bg-blue-800/50 p-6 rounded-xl border border-white/5">
                <h3 className="text-xl font-bold mb-3 text-white">Token Rewards</h3>
                <ul className="text-blue-100 leading-relaxed space-y-2">
                  <li>• Earn tokens for valuable contributions</li>
                  <li>• Stake tokens for enhanced voting power</li>
                  <li>• Access exclusive resources and tools</li>
                  <li>• Participate in reward pools</li>
                </ul>
              </div>
              <div className="bg-blue-800/50 p-6 rounded-xl border border-white/5">
                <h3 className="text-xl font-bold mb-3 text-white">Community Access</h3>
                <ul className="text-blue-100 leading-relaxed space-y-2">
                  <li>• Connect with global innovators</li>
                  <li>• Join expert working groups</li>
                  <li>• Access mentorship opportunities</li>
                  <li>• Attend virtual events and workshops</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Getting Started */}
          <section className="bg-blue-900/50 backdrop-blur-lg rounded-2xl p-8 border border-white/10 shadow-xl">
            <h2 className="text-2xl md:text-3xl font-bold mb-6 text-white">Getting Started</h2>
            <div className="grid gap-6">
              <div className="bg-blue-800/50 p-6 rounded-xl border border-white/5">
                <h3 className="text-xl font-bold mb-3 text-white">1. Create Your Account</h3>
                <p className="text-blue-100 leading-relaxed mb-4">
                  Set up your secure account with email verification. Choose your username and set up two-factor authentication for added security.
                </p>
                <div className="flex gap-2">
                  <span className="bg-blue-500/30 text-blue-100 text-sm px-3 py-1 rounded-full font-medium">5 minutes</span>
                </div>
              </div>
              <div className="bg-blue-800/50 p-6 rounded-xl border border-white/5">
                <h3 className="text-xl font-bold mb-3 text-white">2. Complete Verification</h3>
                <p className="text-blue-100 leading-relaxed mb-4">
                  Complete our simple verification process to ensure the security and integrity of our community. This helps maintain trust and quality.
                </p>
                <div className="flex gap-2">
                  <span className="bg-blue-500/30 text-blue-100 text-sm px-3 py-1 rounded-full font-medium">10 minutes</span>
                </div>
              </div>
              <div className="bg-blue-800/50 p-6 rounded-xl border border-white/5">
                <h3 className="text-xl font-bold mb-3 text-white">3. Set Up Your Wallet</h3>
                <p className="text-blue-100 leading-relaxed mb-4">
                  Connect your Web3 wallet to receive rewards and participate in governance. Don't have one? We'll guide you through setting it up.
                </p>
                <div className="flex gap-2">
                  <span className="bg-blue-500/30 text-blue-100 text-sm px-3 py-1 rounded-full font-medium">15 minutes</span>
                </div>
              </div>
            </div>
          </section>
        </div>

        <div className="mt-12 text-center">
          <Link 
            href="/join/application" 
            className="inline-block bg-blue-500 hover:bg-blue-600 text-white px-12 py-4 rounded-full font-semibold transition-all shadow-lg hover:shadow-xl text-lg"
          >
            Start Your Application
          </Link>
          <p className="mt-4 text-blue-200 text-sm font-medium">
            Early members receive additional rewards and benefits
          </p>
        </div>
      </div>
    </main>
  );
} 