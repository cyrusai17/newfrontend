import Link from 'next/link';

export default function HowItWorks() {
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
              How Lumadao Works
            </h1>
          </div>
          <div className="flex gap-2">
            <span className="bg-blue-500/30 text-blue-100 text-sm px-3 py-1 rounded-full font-medium">Decentralized</span>
          </div>
        </div>

        <div className="space-y-12">
          {/* Overview Section */}
          <section className="bg-blue-900/50 backdrop-blur-lg rounded-2xl p-8 border border-white/10 shadow-xl">
            <h2 className="text-2xl md:text-3xl font-bold mb-6 text-white">Overview</h2>
            <p className="text-blue-100 leading-relaxed mb-4">
              Lumadao is a decentralized autonomous organization (DAO) focused on solving global challenges through collective intelligence and blockchain technology. Our platform enables anonymous collaboration, democratic governance, and fair reward distribution.
            </p>
            <p className="text-blue-100 leading-relaxed">
              By combining the power of community with blockchain technology, we create a transparent, efficient, and inclusive system for addressing humanity's greatest challenges.
            </p>
          </section>

          {/* Anonymous Participation Section */}
          <section className="bg-blue-900/50 backdrop-blur-lg rounded-2xl p-8 border border-white/10 shadow-xl">
            <h2 className="text-2xl md:text-3xl font-bold mb-6 text-white">Anonymous Participation</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-blue-800/50 p-6 rounded-xl border border-white/5">
                <h3 className="text-xl font-bold mb-3 text-white">Privacy-First Approach</h3>
                <p className="text-blue-100 leading-relaxed">
                  Participate in global problem-solving without revealing your identity. We use zero-knowledge proofs to verify contributions while maintaining anonymity.
                </p>
              </div>
              <div className="bg-blue-800/50 p-6 rounded-xl border border-white/5">
                <h3 className="text-xl font-bold mb-3 text-white">Secure Contribution</h3>
                <p className="text-blue-100 leading-relaxed">
                  Your ideas and solutions are cryptographically signed, ensuring authenticity while preserving your privacy.
                </p>
              </div>
            </div>
          </section>

          {/* Democratic Control Section */}
          <section className="bg-blue-900/50 backdrop-blur-lg rounded-2xl p-8 border border-white/10 shadow-xl">
            <h2 className="text-2xl md:text-3xl font-bold mb-6 text-white">Democratic Control</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-blue-800/50 p-6 rounded-xl border border-white/5">
                <h3 className="text-xl font-bold mb-3 text-white">Voting Power</h3>
                <p className="text-blue-100 leading-relaxed">
                  Earn voting power through meaningful contributions. The more you help solve problems, the more influence you have in steering the DAO's direction.
                </p>
              </div>
              <div className="bg-blue-800/50 p-6 rounded-xl border border-white/5">
                <h3 className="text-xl font-bold mb-3 text-white">Proposal System</h3>
                <p className="text-blue-100 leading-relaxed">
                  Any member can submit proposals for new initiatives, changes to governance, or resource allocation. All proposals are voted on by the community.
                </p>
              </div>
            </div>
          </section>

          {/* Governance Process Section */}
          <section className="bg-blue-900/50 backdrop-blur-lg rounded-2xl p-8 border border-white/10 shadow-xl">
            <h2 className="text-2xl md:text-3xl font-bold mb-6 text-white">Governance Process</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-blue-800/50 p-6 rounded-xl border border-white/5">
                <h3 className="text-xl font-bold mb-3 text-white">Decision Making</h3>
                <ul className="text-blue-100 leading-relaxed space-y-3">
                  <li className="flex items-start">
                    <span className="bg-blue-500/30 text-blue-100 text-sm px-2 py-1 rounded-full mr-2 mt-1">1</span>
                    <span>Community members submit proposals</span>
                  </li>
                  <li className="flex items-start">
                    <span className="bg-blue-500/30 text-blue-100 text-sm px-2 py-1 rounded-full mr-2 mt-1">2</span>
                    <span>7-day discussion period for debate and refinement</span>
                  </li>
                  <li className="flex items-start">
                    <span className="bg-blue-500/30 text-blue-100 text-sm px-2 py-1 rounded-full mr-2 mt-1">3</span>
                    <span>3-day voting period with quadratic voting</span>
                  </li>
                  <li className="flex items-start">
                    <span className="bg-blue-500/30 text-blue-100 text-sm px-2 py-1 rounded-full mr-2 mt-1">4</span>
                    <span>Automatic execution of approved proposals</span>
                  </li>
                </ul>
              </div>
              <div className="bg-blue-800/50 p-6 rounded-xl border border-white/5">
                <h3 className="text-xl font-bold mb-3 text-white">Resource Allocation</h3>
                <p className="text-blue-100 leading-relaxed">
                  Resources are distributed based on community voting, ensuring funds and effort are directed to the most impactful solutions.
                </p>
              </div>
            </div>
          </section>

          {/* Financial Contributions Section */}
          <section className="bg-blue-900/50 backdrop-blur-lg rounded-2xl p-8 border border-white/10 shadow-xl">
            <h2 className="text-2xl md:text-3xl font-bold mb-6 text-white">Financial Contributions</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-blue-800/50 p-6 rounded-xl border border-white/5">
                <h3 className="text-xl font-bold mb-3 text-white">How to Contribute Funds</h3>
                <p className="text-blue-100 leading-relaxed mb-4">
                  You can contribute funds to Lumadao in several ways:
                </p>
                <ul className="text-blue-100 leading-relaxed space-y-3">
                  <li className="flex items-start">
                    <span className="bg-blue-500/30 text-blue-100 text-sm px-2 py-1 rounded-full mr-2 mt-1">1</span>
                    <span>Direct token purchase through our platform</span>
                  </li>
                  <li className="flex items-start">
                    <span className="bg-blue-500/30 text-blue-100 text-sm px-2 py-1 rounded-full mr-2 mt-1">2</span>
                    <span>Participate in token sales and fundraising events</span>
                  </li>
                  <li className="flex items-start">
                    <span className="bg-blue-500/30 text-blue-100 text-sm px-2 py-1 rounded-full mr-2 mt-1">3</span>
                    <span>Contribute to specific project funding rounds</span>
                  </li>
                  <li className="flex items-start">
                    <span className="bg-blue-500/30 text-blue-100 text-sm px-2 py-1 rounded-full mr-2 mt-1">4</span>
                    <span>Set up recurring contributions through smart contracts</span>
                  </li>
                </ul>
              </div>
              <div className="bg-blue-800/50 p-6 rounded-xl border border-white/5">
                <h3 className="text-xl font-bold mb-3 text-white">Benefits of Financial Contributions</h3>
                <p className="text-blue-100 leading-relaxed mb-4">
                  Contributing funds to Lumadao offers several advantages:
                </p>
                <ul className="text-blue-100 leading-relaxed space-y-2">
                  <li className="flex items-start">
                    <span className="text-blue-300 mr-2">•</span>
                    <span>Immediate access to governance rights</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-300 mr-2">•</span>
                    <span>Bonus tokens for early supporters</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-300 mr-2">•</span>
                    <span>Access to exclusive investment opportunities</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-300 mr-2">•</span>
                    <span>Potential for token value appreciation</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-300 mr-2">•</span>
                    <span>Tax benefits in certain jurisdictions</span>
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* Cryptocurrency & Rewards Section */}
          <section className="bg-blue-900/50 backdrop-blur-lg rounded-2xl p-8 border border-white/10 shadow-xl">
            <h2 className="text-2xl md:text-3xl font-bold mb-6 text-white">Cryptocurrency & Rewards</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-blue-800/50 p-6 rounded-xl border border-white/5">
                <h3 className="text-xl font-bold mb-3 text-white">LUM Token</h3>
                <p className="text-blue-100 leading-relaxed mb-4">
                  Lumadao uses the LUM token as its native cryptocurrency. This token serves multiple purposes:
                </p>
                <ul className="text-blue-100 leading-relaxed space-y-2">
                  <li className="flex items-start">
                    <span className="text-blue-300 mr-2">•</span>
                    <span>Governance voting power</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-300 mr-2">•</span>
                    <span>Reward for contributions</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-300 mr-2">•</span>
                    <span>Access to premium features</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-300 mr-2">•</span>
                    <span>Staking for additional benefits</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-300 mr-2">•</span>
                    <span>Exchangeable for other cryptocurrencies</span>
                  </li>
                </ul>
              </div>
              <div className="bg-blue-800/50 p-6 rounded-xl border border-white/5">
                <h3 className="text-xl font-bold mb-3 text-white">Earning Opportunities</h3>
                <p className="text-blue-100 leading-relaxed mb-4">
                  There are multiple ways to earn LUM tokens on our platform:
                </p>
                <ul className="text-blue-100 leading-relaxed space-y-2">
                  <li className="flex items-start">
                    <span className="text-blue-300 mr-2">•</span>
                    <span>Contributing solutions to challenges</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-300 mr-2">•</span>
                    <span>Reviewing and providing feedback on proposals</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-300 mr-2">•</span>
                    <span>Participating in community governance</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-300 mr-2">•</span>
                    <span>Staking tokens to support projects</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-300 mr-2">•</span>
                    <span>Purchasing tokens directly</span>
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* Token Economics Section */}
          <section className="bg-blue-900/50 backdrop-blur-lg rounded-2xl p-8 border border-white/10 shadow-xl">
            <h2 className="text-2xl md:text-3xl font-bold mb-6 text-white">Token Economics</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-blue-800/50 p-6 rounded-xl border border-white/5">
                <h3 className="text-xl font-bold mb-3 text-white">Token Utility</h3>
                <p className="text-blue-100 leading-relaxed mb-4">
                  LUM tokens have multiple utilities within the ecosystem:
                </p>
                <ul className="text-blue-100 leading-relaxed space-y-2">
                  <li className="flex items-start">
                    <span className="text-blue-300 mr-2">•</span>
                    <span>Governance: Vote on proposals and decisions</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-300 mr-2">•</span>
                    <span>Staking: Lock tokens to earn rewards and increase voting power</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-300 mr-2">•</span>
                    <span>Access: Unlock premium features and exclusive content</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-300 mr-2">•</span>
                    <span>Exchange: Convert to other cryptocurrencies or fiat currency</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-300 mr-2">•</span>
                    <span>Rewards: Earn additional tokens through various activities</span>
                  </li>
                </ul>
              </div>
              <div className="bg-blue-800/50 p-6 rounded-xl border border-white/5">
                <h3 className="text-xl font-bold mb-3 text-white">Token Value</h3>
                <p className="text-blue-100 leading-relaxed mb-4">
                  The value of LUM tokens is derived from:
                </p>
                <ul className="text-blue-100 leading-relaxed space-y-2">
                  <li className="flex items-start">
                    <span className="text-blue-300 mr-2">•</span>
                    <span>Utility within the Lumadao ecosystem</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-300 mr-2">•</span>
                    <span>Supply and demand dynamics</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-300 mr-2">•</span>
                    <span>Success of funded projects and solutions</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-300 mr-2">•</span>
                    <span>Community growth and adoption</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-300 mr-2">•</span>
                    <span>Market conditions and crypto trends</span>
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* Contribution Process Section */}
          <section className="bg-blue-900/50 backdrop-blur-lg rounded-2xl p-8 border border-white/10 shadow-xl">
            <h2 className="text-2xl md:text-3xl font-bold mb-6 text-white">Contribution Process</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-blue-800/50 p-6 rounded-xl border border-white/5">
                <h3 className="text-xl font-bold mb-3 text-white">How to Contribute</h3>
                <ul className="text-blue-100 leading-relaxed space-y-3">
                  <li className="flex items-start">
                    <span className="bg-blue-500/30 text-blue-100 text-sm px-2 py-1 rounded-full mr-2 mt-1">1</span>
                    <span>Join the DAO and create your anonymous profile</span>
                  </li>
                  <li className="flex items-start">
                    <span className="bg-blue-500/30 text-blue-100 text-sm px-2 py-1 rounded-full mr-2 mt-1">2</span>
                    <span>Browse challenges that align with your expertise</span>
                  </li>
                  <li className="flex items-start">
                    <span className="bg-blue-500/30 text-blue-100 text-sm px-2 py-1 rounded-full mr-2 mt-1">3</span>
                    <span>Submit your solution or contribute to existing ones</span>
                  </li>
                  <li className="flex items-start">
                    <span className="bg-blue-500/30 text-blue-100 text-sm px-2 py-1 rounded-full mr-2 mt-1">4</span>
                    <span>Receive community feedback and iterate</span>
                  </li>
                  <li className="flex items-start">
                    <span className="bg-blue-500/30 text-blue-100 text-sm px-2 py-1 rounded-full mr-2 mt-1">5</span>
                    <span>Earn LUM tokens based on contribution value</span>
                  </li>
                </ul>
              </div>
              <div className="bg-blue-800/50 p-6 rounded-xl border border-white/5">
                <h3 className="text-xl font-bold mb-3 text-white">Reward Distribution</h3>
                <p className="text-blue-100 leading-relaxed mb-4">
                  Rewards are distributed based on:
                </p>
                <ul className="text-blue-100 leading-relaxed space-y-2">
                  <li className="flex items-start">
                    <span className="text-blue-300 mr-2">•</span>
                    <span>Impact of your contribution</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-300 mr-2">•</span>
                    <span>Community voting on solution quality</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-300 mr-2">•</span>
                    <span>Implementation success metrics</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-300 mr-2">•</span>
                    <span>Time and effort invested</span>
                  </li>
                </ul>
              </div>
            </div>
          </section>
        </div>

        <div className="mt-12 flex flex-col md:flex-row justify-center gap-4">
          <Link 
            href="/challenges" 
            className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-3 rounded-full font-semibold transition-all shadow-lg hover:shadow-xl text-center"
          >
            Explore Challenges
          </Link>
          <Link 
            href="/join" 
            className="bg-white/10 hover:bg-white/20 text-white px-8 py-3 rounded-full font-semibold transition-all shadow-lg hover:shadow-xl text-center"
          >
            Join the DAO
          </Link>
          <Link 
            href="/tokenomics" 
            className="bg-white/10 hover:bg-white/20 text-white px-8 py-3 rounded-full font-semibold transition-all shadow-lg hover:shadow-xl text-center"
          >
            Learn About Tokenomics
          </Link>
        </div>
      </div>
    </main>
  );
} 