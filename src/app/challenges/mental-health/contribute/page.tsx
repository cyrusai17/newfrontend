import Link from 'next/link';

export default function ContributeToMentalHealth() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-blue-900 via-blue-800 to-blue-700 text-white p-4 md:p-8">
      <div className="max-w-4xl mx-auto">
        <div className="flex justify-between items-center mb-12">
          <div>
            <Link 
              href="/challenges/mental-health"
              className="text-blue-200 hover:text-white mb-4 inline-block font-medium"
            >
              ← Back to Mental Health & Wellness
            </Link>
            <h1 className="text-4xl md:text-5xl font-bold text-white">
              Contribute to Mental Health & Wellness
            </h1>
          </div>
          <div className="flex gap-2">
            <span className="bg-blue-500/30 text-blue-100 text-sm px-3 py-1 rounded-full font-medium">Earn Rewards</span>
            <span className="bg-purple-500/30 text-purple-100 text-sm px-3 py-1 rounded-full font-medium">Community Driven</span>
          </div>
        </div>

        <div className="space-y-12">
          {/* Member Dashboard */}
          <section className="bg-blue-900/50 backdrop-blur-lg rounded-2xl p-8 border border-white/10 shadow-xl">
            <h2 className="text-2xl md:text-3xl font-bold mb-6 text-white">Member Dashboard</h2>
            <div className="grid md:grid-cols-3 gap-4 mb-6">
              <div className="bg-blue-800/50 p-4 rounded-xl border border-white/5 text-center">
                <div className="text-3xl font-bold text-blue-300 mb-2">125</div>
                <div className="text-blue-100 font-medium">LUM Tokens</div>
              </div>
              <div className="bg-blue-800/50 p-4 rounded-xl border border-white/5 text-center">
                <div className="text-3xl font-bold text-blue-300 mb-2">7</div>
                <div className="text-blue-100 font-medium">Contributions</div>
              </div>
              <div className="bg-blue-800/50 p-4 rounded-xl border border-white/5 text-center">
                <div className="text-3xl font-bold text-blue-300 mb-2">3</div>
                <div className="text-blue-100 font-medium">Active Projects</div>
              </div>
            </div>
            <div className="bg-blue-800/50 p-6 rounded-xl border border-white/5">
              <h3 className="text-xl font-bold mb-3 text-white">Your Impact</h3>
              <p className="text-blue-100 leading-relaxed mb-4">
                As a registered member, you've already contributed to 7 mental health solutions. Your contributions have helped validate 3 projects and provided feedback to 5 others. Keep up the great work!
              </p>
              <div className="flex gap-2">
                <span className="bg-green-500/30 text-green-100 text-sm px-3 py-1 rounded-full font-medium">Active Member</span>
                <span className="bg-blue-500/30 text-blue-100 text-sm px-3 py-1 rounded-full font-medium">Contributor Level 2</span>
              </div>
            </div>
          </section>

          {/* How to Contribute */}
          <section className="bg-blue-900/50 backdrop-blur-lg rounded-2xl p-8 border border-white/10 shadow-xl">
            <h2 className="text-2xl md:text-3xl font-bold mb-6 text-white">Contribution Opportunities</h2>
            <div className="grid gap-6">
              <div className="bg-blue-800/50 p-6 rounded-xl border border-white/5">
                <h3 className="text-xl font-bold mb-3 text-white">1. Propose New Solutions</h3>
                <p className="text-blue-100 leading-relaxed mb-4">
                  Share your innovative ideas for addressing mental health challenges. Your proposals can range from digital tools to community programs or research initiatives.
                </p>
                <div className="flex gap-2">
                  <span className="bg-blue-500/30 text-blue-100 text-sm px-3 py-1 rounded-full font-medium">15-30 minutes</span>
                  <span className="bg-purple-500/30 text-purple-100 text-sm px-3 py-1 rounded-full font-medium">25 LUM reward</span>
                </div>
              </div>
              <div className="bg-blue-800/50 p-6 rounded-xl border border-white/5">
                <h3 className="text-xl font-bold mb-3 text-white">2. Join Existing Projects</h3>
                <p className="text-blue-100 leading-relaxed mb-4">
                  Browse active projects that align with your skills and interests. You can contribute to research, development, testing, or implementation phases.
                </p>
                <div className="flex gap-2">
                  <span className="bg-blue-500/30 text-blue-100 text-sm px-3 py-1 rounded-full font-medium">10-20 minutes</span>
                  <span className="bg-purple-500/30 text-purple-100 text-sm px-3 py-1 rounded-full font-medium">15 LUM reward</span>
                </div>
              </div>
              <div className="bg-blue-800/50 p-6 rounded-xl border border-white/5">
                <h3 className="text-xl font-bold mb-3 text-white">3. Provide Expert Feedback</h3>
                <p className="text-blue-100 leading-relaxed mb-4">
                  Use your expertise to review and provide feedback on proposed solutions. Your insights help improve project quality and feasibility.
                </p>
                <div className="flex gap-2">
                  <span className="bg-blue-500/30 text-blue-100 text-sm px-3 py-1 rounded-full font-medium">5-15 minutes</span>
                  <span className="bg-purple-500/30 text-purple-100 text-sm px-3 py-1 rounded-full font-medium">10 LUM reward</span>
                </div>
              </div>
              <div className="bg-blue-800/50 p-6 rounded-xl border border-white/5">
                <h3 className="text-xl font-bold mb-3 text-white">4. Help with Implementation</h3>
                <p className="text-blue-100 leading-relaxed mb-4">
                  Participate in the actual implementation of approved solutions. This could involve coding, design, content creation, or community outreach.
                </p>
                <div className="flex gap-2">
                  <span className="bg-blue-500/30 text-blue-100 text-sm px-3 py-1 rounded-full font-medium">Variable</span>
                  <span className="bg-purple-500/30 text-purple-100 text-sm px-3 py-1 rounded-full font-medium">20-50 LUM reward</span>
                </div>
              </div>
            </div>
          </section>

          {/* Active Projects */}
          <section className="bg-blue-900/50 backdrop-blur-lg rounded-2xl p-8 border border-white/10 shadow-xl">
            <h2 className="text-2xl md:text-3xl font-bold mb-6 text-white">Active Projects</h2>
            <div className="grid gap-6">
              <div className="bg-blue-800/50 p-6 rounded-xl border border-white/5">
                <div className="flex justify-between items-start mb-3">
                  <h3 className="text-xl font-bold text-white">Adaptive Meditation App</h3>
                  <span className="bg-green-500/30 text-green-100 text-sm px-3 py-1 rounded-full font-medium">In Development</span>
                </div>
                <p className="text-blue-100 leading-relaxed mb-4">
                  A personalized meditation application that adapts to user needs and progress. Currently in beta testing phase.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="bg-blue-500/30 text-blue-100 text-sm px-3 py-1 rounded-full font-medium">UI/UX Design</span>
                  <span className="bg-blue-500/30 text-blue-100 text-sm px-3 py-1 rounded-full font-medium">Beta Testing</span>
                  <span className="bg-blue-500/30 text-blue-100 text-sm px-3 py-1 rounded-full font-medium">Content Creation</span>
                </div>
                <Link 
                  href="/challenges/mental-health/music-therapy/adaptive-meditation"
                  className="text-blue-300 hover:text-blue-200 font-medium inline-flex items-center"
                >
                  View Project Details →
                </Link>
              </div>
              <div className="bg-blue-800/50 p-6 rounded-xl border border-white/5">
                <div className="flex justify-between items-start mb-3">
                  <h3 className="text-xl font-bold text-white">Community Support Network</h3>
                  <span className="bg-yellow-500/30 text-yellow-100 text-sm px-3 py-1 rounded-full font-medium">Planning</span>
                </div>
                <p className="text-blue-100 leading-relaxed mb-4">
                  A peer support system connecting individuals with similar mental health experiences for mutual support and understanding.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="bg-blue-500/30 text-blue-100 text-sm px-3 py-1 rounded-full font-medium">Research</span>
                  <span className="bg-blue-500/30 text-blue-100 text-sm px-3 py-1 rounded-full font-medium">Community Building</span>
                  <span className="bg-blue-500/30 text-blue-100 text-sm px-3 py-1 rounded-full font-medium">Moderation</span>
                </div>
                <Link 
                  href="/challenges/mental-health/community-support"
                  className="text-blue-300 hover:text-blue-200 font-medium inline-flex items-center"
                >
                  View Project Details →
                </Link>
              </div>
              <div className="bg-blue-800/50 p-6 rounded-xl border border-white/5">
                <div className="flex justify-between items-start mb-3">
                  <h3 className="text-xl font-bold text-white">Mental Health Education Platform</h3>
                  <span className="bg-blue-500/30 text-blue-100 text-sm px-3 py-1 rounded-full font-medium">Concept</span>
                </div>
                <p className="text-blue-100 leading-relaxed mb-4">
                  An open-source educational resource providing accurate, accessible information about mental health conditions and treatments.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="bg-blue-500/30 text-blue-100 text-sm px-3 py-1 rounded-full font-medium">Content Creation</span>
                  <span className="bg-blue-500/30 text-blue-100 text-sm px-3 py-1 rounded-full font-medium">Research</span>
                  <span className="bg-blue-500/30 text-blue-100 text-sm px-3 py-1 rounded-full font-medium">Translation</span>
                </div>
                <Link 
                  href="/challenges/mental-health/education-platform"
                  className="text-blue-300 hover:text-blue-200 font-medium inline-flex items-center"
                >
                  View Project Details →
                </Link>
              </div>
            </div>
          </section>

          {/* Voting & Rewards */}
          <section className="bg-blue-900/50 backdrop-blur-lg rounded-2xl p-8 border border-white/10 shadow-xl">
            <h2 className="text-2xl md:text-3xl font-bold mb-6 text-white">Voting & Rewards</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-blue-800/50 p-6 rounded-xl border border-white/5">
                <h3 className="text-xl font-bold mb-3 text-white">Your Voting Power</h3>
                <p className="text-blue-100 leading-relaxed mb-4">
                  As a registered member with 7 contributions, you currently have a voting power of 1.7x. This means your votes have 70% more influence than a new member.
                </p>
                <div className="bg-blue-700/50 p-4 rounded-lg border border-white/5 mb-4">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-blue-100">Current Voting Power</span>
                    <span className="text-white font-bold">1.7x</span>
                  </div>
                  <div className="w-full bg-blue-600/30 rounded-full h-2.5">
                    <div className="bg-blue-400 h-2.5 rounded-full" style={{ width: '70%' }}></div>
                  </div>
                  <p className="text-sm text-blue-200 mt-2">Next level at 10 contributions</p>
                </div>
                <Link 
                  href="/governance"
                  className="text-blue-300 hover:text-blue-200 font-medium inline-flex items-center"
                >
                  View Active Proposals →
                </Link>
              </div>
              <div className="bg-blue-800/50 p-6 rounded-xl border border-white/5">
                <h3 className="text-xl font-bold mb-3 text-white">Your Rewards</h3>
                <p className="text-blue-100 leading-relaxed mb-4">
                  You've earned 125 LUM tokens through your contributions. These tokens can be used for voting, staking, or exchanging for benefits within the ecosystem.
                </p>
                <div className="grid grid-cols-2 gap-4 mb-4">
                  <div className="bg-blue-700/50 p-4 rounded-lg border border-white/5">
                    <h4 className="font-semibold mb-2 text-white">Available</h4>
                    <p className="text-2xl font-bold text-blue-300">125 LUM</p>
                  </div>
                  <div className="bg-blue-700/50 p-4 rounded-lg border border-white/5">
                    <h4 className="font-semibold mb-2 text-white">Staked</h4>
                    <p className="text-2xl font-bold text-blue-300">0 LUM</p>
                  </div>
                </div>
                <Link 
                  href="/tokenomics"
                  className="text-blue-300 hover:text-blue-200 font-medium inline-flex items-center"
                >
                  Learn About Token Utility →
                </Link>
              </div>
            </div>
          </section>
        </div>

        <div className="mt-12 flex flex-col md:flex-row justify-center gap-4">
          <Link 
            href="/challenges/mental-health/propose"
            className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-3 rounded-full font-semibold transition-all shadow-lg hover:shadow-xl text-center"
          >
            Propose New Solution
          </Link>
          <Link 
            href="/challenges/mental-health/projects"
            className="bg-white/10 hover:bg-white/20 text-white px-8 py-3 rounded-full font-semibold transition-all shadow-lg hover:shadow-xl text-center"
          >
            Browse All Projects
          </Link>
          <Link 
            href="/governance"
            className="bg-white/10 hover:bg-white/20 text-white px-8 py-3 rounded-full font-semibold transition-all shadow-lg hover:shadow-xl text-center"
          >
            View Proposals
          </Link>
        </div>
      </div>
    </main>
  );
} 