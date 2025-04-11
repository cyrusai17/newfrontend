import Link from 'next/link';

export default function ProposalConfirmation() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-blue-900 via-blue-800 to-blue-700 text-white p-4 md:p-8">
      <div className="max-w-4xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12 gap-4">
          <div>
            <Link 
              href="/challenges/mental-health/contribute"
              className="text-blue-200 hover:text-white mb-4 inline-block font-medium transition-colors"
            >
              ← Back to Contribute
            </Link>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-2">
              Proposal Submitted
            </h1>
            <p className="text-blue-200 text-lg">Thank you for your contribution to mental health innovation</p>
          </div>
          <div className="flex flex-wrap gap-2">
            <span className="bg-green-500/30 text-green-100 text-sm px-4 py-2 rounded-full font-medium">Under Review</span>
            <span className="bg-blue-500/30 text-blue-100 text-sm px-4 py-2 rounded-full font-medium">25 LUM Reward</span>
          </div>
        </div>

        <div className="space-y-8">
          {/* Confirmation Message */}
          <section className="bg-blue-900/50 backdrop-blur-lg rounded-2xl p-8 border border-white/10 shadow-xl">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 bg-green-500/30 rounded-full flex items-center justify-center">
                <svg className="w-6 h-6 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h2 className="text-2xl font-bold text-white">Your Proposal Has Been Received</h2>
            </div>
            <p className="text-blue-100 leading-relaxed mb-6">
              We've successfully received your proposal for the Mental Health & Wellness initiative. Our team will review it carefully to ensure it aligns with our goals and criteria.
            </p>
          </section>

          {/* Next Steps */}
          <section className="bg-blue-900/50 backdrop-blur-lg rounded-2xl p-8 border border-white/10 shadow-xl">
            <h2 className="text-2xl font-bold mb-6 text-white">What Happens Next?</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-gradient-to-br from-blue-500/20 to-purple-500/20 p-6 rounded-xl border border-white/5">
                <div className="w-12 h-12 bg-blue-500/30 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-blue-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-3 text-white">Review Process</h3>
                <ul className="text-blue-100 space-y-2">
                  <li className="flex items-start gap-2">
                    <span className="text-blue-400">•</span>
                    Expert evaluation (24-48 hours)
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-400">•</span>
                    Community feedback gathering
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-400">•</span>
                    Feasibility assessment
                  </li>
                </ul>
              </div>
              <div className="bg-gradient-to-br from-blue-500/20 to-purple-500/20 p-6 rounded-xl border border-white/5">
                <div className="w-12 h-12 bg-blue-500/30 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-blue-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-3 text-white">Community Vote</h3>
                <ul className="text-blue-100 space-y-2">
                  <li className="flex items-start gap-2">
                    <span className="text-blue-400">•</span>
                    Proposal listed for voting
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-400">•</span>
                    Community discussion period
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-400">•</span>
                    Final decision and implementation
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* Rewards & Recognition */}
          <section className="bg-blue-900/50 backdrop-blur-lg rounded-2xl p-8 border border-white/10 shadow-xl">
            <h2 className="text-2xl font-bold mb-6 text-white">Rewards & Recognition</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-gradient-to-br from-blue-500/20 to-purple-500/20 p-6 rounded-xl border border-white/5">
                <div className="flex items-baseline gap-2 mb-2">
                  <h4 className="text-3xl font-bold text-white">25</h4>
                  <span className="text-blue-200">LUM</span>
                </div>
                <p className="text-blue-100">Initial proposal reward</p>
              </div>
              <div className="bg-gradient-to-br from-blue-500/20 to-purple-500/20 p-6 rounded-xl border border-white/5">
                <div className="flex items-baseline gap-2 mb-2">
                  <h4 className="text-3xl font-bold text-white">50</h4>
                  <span className="text-blue-200">LUM</span>
                </div>
                <p className="text-blue-100">If proposal is approved</p>
              </div>
              <div className="bg-gradient-to-br from-blue-500/20 to-purple-500/20 p-6 rounded-xl border border-white/5">
                <div className="flex items-baseline gap-2 mb-2">
                  <h4 className="text-3xl font-bold text-white">100</h4>
                  <span className="text-blue-200">LUM</span>
                </div>
                <p className="text-blue-100">For successful implementation</p>
              </div>
            </div>
          </section>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
            <Link href="/challenges/mental-health/contribute">
              <button className="w-full sm:w-auto bg-blue-500 hover:bg-blue-600 text-white px-8 py-3 rounded-full font-semibold transition-all shadow-lg hover:shadow-xl">
                View Other Proposals
              </button>
            </Link>
            <Link href="/challenges/mental-health">
              <button className="w-full sm:w-auto bg-blue-900/50 hover:bg-blue-800/50 text-white px-8 py-3 rounded-full font-semibold transition-all border border-white/10">
                Explore More Challenges
              </button>
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
} 