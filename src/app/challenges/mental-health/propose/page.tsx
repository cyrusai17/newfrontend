import Link from 'next/link';

export default function ProposeSolution() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-blue-900 via-blue-800 to-blue-700 text-white p-4 md:p-8">
      <div className="max-w-4xl mx-auto">
        <div className="flex justify-between items-center mb-12">
          <div>
            <Link 
              href="/challenges/mental-health/contribute"
              className="text-blue-200 hover:text-white mb-4 inline-block font-medium"
            >
              ← Back to Contribute
            </Link>
            <h1 className="text-4xl md:text-5xl font-bold text-white">
              Propose a New Solution
            </h1>
          </div>
          <div className="flex gap-2">
            <span className="bg-blue-500/30 text-blue-100 text-sm px-3 py-1 rounded-full font-medium">25 LUM Reward</span>
            <span className="bg-purple-500/30 text-purple-100 text-sm px-3 py-1 rounded-full font-medium">Community Driven</span>
          </div>
        </div>

        <div className="space-y-8">
          {/* Proposal Guidelines */}
          <section className="bg-blue-900/50 backdrop-blur-lg rounded-2xl p-8 border border-white/10 shadow-xl">
            <h2 className="text-2xl font-bold mb-4 text-white">Proposal Guidelines</h2>
            <div className="space-y-4 text-blue-100">
              <p>Before submitting your proposal, please ensure it meets the following criteria:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Addresses a specific mental health challenge or need</li>
                <li>Provides clear, actionable solutions</li>
                <li>Includes implementation strategy and resource requirements</li>
                <li>Demonstrates potential impact and scalability</li>
                <li>Aligns with community values and ethical guidelines</li>
              </ul>
            </div>
          </section>

          {/* Proposal Form */}
          <section className="bg-blue-900/50 backdrop-blur-lg rounded-2xl p-8 border border-white/10 shadow-xl">
            <h2 className="text-2xl font-bold mb-6 text-white">Submit Your Proposal</h2>
            <form className="space-y-6">
              <div>
                <label htmlFor="title" className="block text-lg font-medium text-white mb-2">
                  Solution Title
                </label>
                <input
                  type="text"
                  id="title"
                  className="w-full px-4 py-3 rounded-lg bg-blue-800/50 border border-white/10 text-white placeholder-blue-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Enter a clear, descriptive title"
                  required
                />
              </div>

              <div>
                <label htmlFor="category" className="block text-lg font-medium text-white mb-2">
                  Category
                </label>
                <select
                  id="category"
                  className="w-full px-4 py-3 rounded-lg bg-blue-800/50 border border-white/10 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                >
                  <option value="">Select a category</option>
                  <option value="digital-tool">Digital Tool</option>
                  <option value="community-program">Community Program</option>
                  <option value="research-initiative">Research Initiative</option>
                  <option value="educational-resource">Educational Resource</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div>
                <label htmlFor="description" className="block text-lg font-medium text-white mb-2">
                  Solution Description
                </label>
                <textarea
                  id="description"
                  rows={6}
                  className="w-full px-4 py-3 rounded-lg bg-blue-800/50 border border-white/10 text-white placeholder-blue-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Describe your solution in detail. Include the problem it addresses, how it works, and its potential impact."
                  required
                />
              </div>

              <div>
                <label htmlFor="implementation" className="block text-lg font-medium text-white mb-2">
                  Implementation Plan
                </label>
                <textarea
                  id="implementation"
                  rows={4}
                  className="w-full px-4 py-3 rounded-lg bg-blue-800/50 border border-white/10 text-white placeholder-blue-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Outline the steps needed to implement your solution, including required resources and timeline."
                  required
                />
              </div>

              <div>
                <label htmlFor="impact" className="block text-lg font-medium text-white mb-2">
                  Expected Impact
                </label>
                <textarea
                  id="impact"
                  rows={4}
                  className="w-full px-4 py-3 rounded-lg bg-blue-800/50 border border-white/10 text-white placeholder-blue-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Describe the potential impact of your solution, including metrics for success and scalability."
                  required
                />
              </div>

              <div className="flex items-center gap-4">
                <button
                  type="submit"
                  className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-3 rounded-full font-semibold transition-all shadow-lg hover:shadow-xl"
                >
                  Submit Proposal
                </button>
                <Link
                  href="/challenges/mental-health/contribute"
                  className="text-blue-300 hover:text-blue-200 font-medium"
                >
                  Cancel
                </Link>
              </div>
            </form>
          </section>

          {/* Next Steps */}
          <section className="bg-blue-900/50 backdrop-blur-lg rounded-2xl p-8 border border-white/10 shadow-xl">
            <h2 className="text-2xl font-bold mb-4 text-white">Next Steps</h2>
            <div className="space-y-4 text-blue-100">
              <p>After submitting your proposal:</p>
              <ol className="list-decimal list-inside space-y-2 ml-4">
                <li>Your proposal will be reviewed by the community and experts</li>
                <li>You'll receive feedback within 48 hours</li>
                <li>If approved, your solution will be listed for community voting</li>
                <li>Upon successful voting, implementation planning will begin</li>
              </ol>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
} 