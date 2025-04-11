import Link from 'next/link';

export default function Tokenomics() {
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
              Financial Rewards
            </h1>
          </div>
          <div className="flex gap-2">
            <span className="bg-blue-500/30 text-blue-100 text-sm px-3 py-1 rounded-full font-medium">Token Economics</span>
          </div>
        </div>

        <div className="space-y-12">
          {/* Overview Section */}
          <section className="bg-blue-900/50 backdrop-blur-lg rounded-2xl p-8 border border-white/10 shadow-xl">
            <h2 className="text-2xl md:text-3xl font-bold mb-6 text-white">Overview</h2>
            <p className="text-blue-100 leading-relaxed mb-6">
              Lumadao's financial rewards system is designed to incentivize meaningful contributions to solving global challenges. Through our token economics, we create a sustainable ecosystem where contributors are fairly rewarded for their efforts while ensuring the long-term viability of the platform.
            </p>
            <div className="grid md:grid-cols-3 gap-4">
              <div className="bg-blue-800/50 p-4 rounded-xl border border-white/5 text-center">
                <div className="text-3xl font-bold text-blue-300 mb-2">40%</div>
                <div className="text-blue-100 font-medium">Community Rewards</div>
              </div>
              <div className="bg-blue-800/50 p-4 rounded-xl border border-white/5 text-center">
                <div className="text-3xl font-bold text-blue-300 mb-2">30%</div>
                <div className="text-blue-100 font-medium">DAO Treasury</div>
              </div>
              <div className="bg-blue-800/50 p-4 rounded-xl border border-white/5 text-center">
                <div className="text-3xl font-bold text-blue-300 mb-2">30%</div>
                <div className="text-blue-100 font-medium">Development & Liquidity</div>
              </div>
            </div>
          </section>

          {/* Token Overview Section */}
          <section className="bg-blue-900/50 backdrop-blur-lg rounded-2xl p-8 border border-white/10 shadow-xl">
            <h2 className="text-2xl md:text-3xl font-bold mb-6 text-white">LUM Token</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-blue-800/50 p-6 rounded-xl border border-white/5">
                <h3 className="text-xl font-bold mb-3 text-white">What is LUM?</h3>
                <p className="text-blue-100 leading-relaxed">
                  LUM is the native cryptocurrency of Lumadao, representing both governance rights and economic value within the ecosystem. Each token represents partial ownership of the DAO and its treasury, giving holders a say in how resources are allocated and which projects are funded.
                </p>
              </div>
              <div className="bg-blue-800/50 p-6 rounded-xl border border-white/5">
                <h3 className="text-xl font-bold mb-3 text-white">Token Distribution</h3>
                <ul className="text-blue-100 leading-relaxed space-y-3">
                  <li className="flex items-start">
                    <span className="bg-blue-500/30 text-blue-100 text-sm px-2 py-1 rounded-full mr-2 mt-1">40%</span>
                    <span>Community rewards for problem-solving</span>
                  </li>
                  <li className="flex items-start">
                    <span className="bg-blue-500/30 text-blue-100 text-sm px-2 py-1 rounded-full mr-2 mt-1">30%</span>
                    <span>DAO treasury for funding solutions</span>
                  </li>
                  <li className="flex items-start">
                    <span className="bg-blue-500/30 text-blue-100 text-sm px-2 py-1 rounded-full mr-2 mt-1">20%</span>
                    <span>Early contributors and development</span>
                  </li>
                  <li className="flex items-start">
                    <span className="bg-blue-500/30 text-blue-100 text-sm px-2 py-1 rounded-full mr-2 mt-1">10%</span>
                    <span>Liquidity provision and partnerships</span>
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* Earning Opportunities Section */}
          <section className="bg-blue-900/50 backdrop-blur-lg rounded-2xl p-8 border border-white/10 shadow-xl">
            <h2 className="text-2xl md:text-3xl font-bold mb-6 text-white">Ways to Earn</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-blue-800/50 p-6 rounded-xl border border-white/5">
                <div className="bg-blue-500/30 text-blue-100 text-sm px-3 py-1 rounded-full font-medium mb-4 inline-block">Primary</div>
                <h3 className="text-xl font-bold mb-3 text-white">Problem Solving</h3>
                <p className="text-blue-100 leading-relaxed">
                  Earn LUM tokens by contributing solutions to global challenges. Rewards are distributed based on community validation and impact assessment of your contributions.
                </p>
              </div>
              <div className="bg-blue-800/50 p-6 rounded-xl border border-white/5">
                <div className="bg-blue-500/30 text-blue-100 text-sm px-3 py-1 rounded-full font-medium mb-4 inline-block">Support</div>
                <h3 className="text-xl font-bold mb-3 text-white">Solution Validation</h3>
                <p className="text-blue-100 leading-relaxed">
                  Participate in reviewing and validating proposed solutions. Earn tokens for helping maintain the quality and effectiveness of contributions.
                </p>
              </div>
              <div className="bg-blue-800/50 p-6 rounded-xl border border-white/5">
                <div className="bg-blue-500/30 text-blue-100 text-sm px-3 py-1 rounded-full font-medium mb-4 inline-block">Governance</div>
                <h3 className="text-xl font-bold mb-3 text-white">Governance Participation</h3>
                <p className="text-blue-100 leading-relaxed">
                  Earn additional rewards by actively participating in governance decisions and helping guide the DAO's direction.
                </p>
              </div>
              <div className="bg-blue-800/50 p-6 rounded-xl border border-white/5">
                <div className="bg-blue-500/30 text-blue-100 text-sm px-3 py-1 rounded-full font-medium mb-4 inline-block">Financial</div>
                <h3 className="text-xl font-bold mb-3 text-white">Token Purchase</h3>
                <p className="text-blue-100 leading-relaxed">
                  Buy LUM tokens directly through our platform. Early supporters may receive bonus tokens and exclusive benefits.
                </p>
              </div>
              <div className="bg-blue-800/50 p-6 rounded-xl border border-white/5">
                <div className="bg-blue-500/30 text-blue-100 text-sm px-3 py-1 rounded-full font-medium mb-4 inline-block">Investment</div>
                <h3 className="text-xl font-bold mb-3 text-white">Staking</h3>
                <p className="text-blue-100 leading-relaxed">
                  Lock up your tokens for a period to earn additional rewards and increase your voting power in governance decisions.
                </p>
              </div>
              <div className="bg-blue-800/50 p-6 rounded-xl border border-white/5">
                <div className="bg-blue-500/30 text-blue-100 text-sm px-3 py-1 rounded-full font-medium mb-4 inline-block">Implementation</div>
                <h3 className="text-xl font-bold mb-3 text-white">Project Implementation</h3>
                <p className="text-blue-100 leading-relaxed">
                  Help implement approved solutions and earn tokens based on your contribution to the project's success.
                </p>
              </div>
            </div>
          </section>

          {/* Value Accrual Section */}
          <section className="bg-blue-900/50 backdrop-blur-lg rounded-2xl p-8 border border-white/10 shadow-xl">
            <h2 className="text-2xl md:text-3xl font-bold mb-6 text-white">Value Growth</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-blue-800/50 p-6 rounded-xl border border-white/5">
                <h3 className="text-xl font-bold mb-3 text-white">Treasury Growth</h3>
                <p className="text-blue-100 leading-relaxed">
                  As solutions generate real-world value, a portion of the returns flows back to the DAO treasury, increasing the value backing each LUM token. This creates a positive feedback loop where successful solutions increase token value, attracting more contributors.
                </p>
              </div>
              <div className="bg-blue-800/50 p-6 rounded-xl border border-white/5">
                <h3 className="text-xl font-bold mb-3 text-white">Solution Revenue Share</h3>
                <p className="text-blue-100 leading-relaxed">
                  When solutions are monetized or generate revenue, contributors receive a share of the returns proportional to their contribution, paid in LUM tokens. This ensures that those who contribute to successful solutions are fairly rewarded.
                </p>
              </div>
              <div className="bg-blue-800/50 p-6 rounded-xl border border-white/5">
                <h3 className="text-xl font-bold mb-3 text-white">Market Dynamics</h3>
                <p className="text-blue-100 leading-relaxed">
                  The value of LUM tokens is influenced by supply and demand dynamics. As more people join the platform and contribute to solutions, demand for tokens increases, potentially driving up their value.
                </p>
              </div>
              <div className="bg-blue-800/50 p-6 rounded-xl border border-white/5">
                <h3 className="text-xl font-bold mb-3 text-white">Community Growth</h3>
                <p className="text-blue-100 leading-relaxed">
                  As the Lumadao community grows and more successful solutions are implemented, the overall value of the ecosystem increases, benefiting all token holders through increased utility and potential appreciation.
                </p>
              </div>
            </div>
          </section>

          {/* Token Utility Section */}
          <section className="bg-blue-900/50 backdrop-blur-lg rounded-2xl p-8 border border-white/10 shadow-xl">
            <h2 className="text-2xl md:text-3xl font-bold mb-6 text-white">Token Utility</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-blue-800/50 p-6 rounded-xl border border-white/5">
                <h3 className="text-xl font-bold mb-3 text-white">Governance</h3>
                <p className="text-blue-100 leading-relaxed">
                  Use your LUM tokens to vote on proposals, shape the direction of the DAO, and influence which projects receive funding.
                </p>
              </div>
              <div className="bg-blue-800/50 p-6 rounded-xl border border-white/5">
                <h3 className="text-xl font-bold mb-3 text-white">Access</h3>
                <p className="text-blue-100 leading-relaxed">
                  Unlock premium features, exclusive content, and early access to new solutions and opportunities within the platform.
                </p>
              </div>
              <div className="bg-blue-800/50 p-6 rounded-xl border border-white/5">
                <h3 className="text-xl font-bold mb-3 text-white">Exchange</h3>
                <p className="text-blue-100 leading-relaxed">
                  Convert your LUM tokens to other cryptocurrencies or fiat currency through supported exchanges and partner services.
                </p>
              </div>
            </div>
          </section>
        </div>

        <div className="mt-12 flex flex-col md:flex-row justify-center gap-4">
          <Link 
            href="/how-it-works" 
            className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-3 rounded-full font-semibold transition-all shadow-lg hover:shadow-xl text-center"
          >
            Learn How It Works
          </Link>
          <Link 
            href="/join" 
            className="bg-white/10 hover:bg-white/20 text-white px-8 py-3 rounded-full font-semibold transition-all shadow-lg hover:shadow-xl text-center"
          >
            Join the DAO
          </Link>
          <Link 
            href="/faq" 
            className="bg-white/10 hover:bg-white/20 text-white px-8 py-3 rounded-full font-semibold transition-all shadow-lg hover:shadow-xl text-center"
          >
            FAQ
          </Link>
        </div>
      </div>
    </main>
  );
} 