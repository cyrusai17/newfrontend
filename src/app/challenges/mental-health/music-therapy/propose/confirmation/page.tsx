import Link from 'next/link';

export default function ProposalConfirmation() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-blue-900 via-blue-800 to-blue-700 text-white p-4 md:p-8">
      <div className="max-w-4xl mx-auto">
        <div className="flex justify-between items-center mb-12">
          <div>
            <Link 
              href="/challenges/mental-health/music-therapy/contribute"
              className="text-blue-200 hover:text-white mb-4 inline-block font-medium"
            >
              ← Back to Contribute
            </Link>
            <h1 className="text-4xl md:text-5xl font-bold text-white">
              Proposal Submitted!
            </h1>
            <p className="text-blue-200 text-lg mt-2">Thank you for sharing your innovative idea with the community</p>
          </div>
          <div className="flex gap-2">
            <span className="bg-green-500/30 text-green-100 text-sm px-3 py-1 rounded-full font-medium">Under Review</span>
          </div>
        </div>

        {/* Confirmation Message */}
        <div className="bg-blue-900/50 backdrop-blur-lg rounded-2xl p-6 border border-white/10 shadow-xl mb-8">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-12 h-12 bg-green-500/30 rounded-full flex items-center justify-center">
              <svg className="w-6 h-6 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <div>
              <h2 className="text-2xl font-bold text-white">Your proposal has been received</h2>
              <p className="text-blue-200">We'll review your submission within 48 hours</p>
            </div>
          </div>
        </div>

        {/* Next Steps */}
        <div className="bg-blue-900/50 backdrop-blur-lg rounded-2xl p-6 border border-white/10 shadow-xl mb-8">
          <h2 className="text-2xl font-bold mb-6 text-white">What Happens Next?</h2>
          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <div className="w-8 h-8 bg-blue-500/30 rounded-full flex items-center justify-center flex-shrink-0">
                <span className="text-blue-200 font-bold">1</span>
              </div>
              <div>
                <h3 className="text-lg font-bold text-white mb-1">Initial Review</h3>
                <p className="text-blue-100">Our team will review your proposal for completeness and alignment with community goals.</p>
                <p className="text-blue-300 text-sm mt-1">Expected: Within 48 hours</p>
              </div>
            </div>
            
            <div className="flex items-start gap-4">
              <div className="w-8 h-8 bg-blue-500/30 rounded-full flex items-center justify-center flex-shrink-0">
                <span className="text-blue-200 font-bold">2</span>
              </div>
              <div>
                <h3 className="text-lg font-bold text-white mb-1">Community Feedback</h3>
                <p className="text-blue-100">If approved, your proposal will be shared with the community for feedback and discussion.</p>
                <p className="text-blue-300 text-sm mt-1">Expected: 1-2 weeks</p>
              </div>
            </div>
            
            <div className="flex items-start gap-4">
              <div className="w-8 h-8 bg-blue-500/30 rounded-full flex items-center justify-center flex-shrink-0">
                <span className="text-blue-200 font-bold">3</span>
              </div>
              <div>
                <h3 className="text-lg font-bold text-white mb-1">Final Decision</h3>
                <p className="text-blue-100">Based on community feedback, a final decision will be made on moving forward with your project.</p>
                <p className="text-blue-300 text-sm mt-1">Expected: 2-3 weeks</p>
              </div>
            </div>
          </div>
        </div>

        {/* Rewards & Recognition */}
        <div className="bg-blue-900/50 backdrop-blur-lg rounded-2xl p-6 border border-white/10 shadow-xl mb-8">
          <h2 className="text-2xl font-bold mb-6 text-white">Rewards & Recognition</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-blue-800/30 rounded-xl p-4">
              <h3 className="text-lg font-bold text-white mb-2">Proposal Submission</h3>
              <p className="text-blue-200">25 LUM tokens</p>
              <p className="text-blue-100 text-sm mt-1">Awarded upon successful submission</p>
            </div>
            <div className="bg-blue-800/30 rounded-xl p-4">
              <h3 className="text-lg font-bold text-white mb-2">Community Approval</h3>
              <p className="text-blue-200">50 LUM tokens</p>
              <p className="text-blue-100 text-sm mt-1">Awarded if proposal is approved</p>
            </div>
            <div className="bg-blue-800/30 rounded-xl p-4">
              <h3 className="text-lg font-bold text-white mb-2">Project Leadership</h3>
              <p className="text-blue-200">100 LUM tokens</p>
              <p className="text-blue-100 text-sm mt-1">Awarded upon project completion</p>
            </div>
            <div className="bg-blue-800/30 rounded-xl p-4">
              <h3 className="text-lg font-bold text-white mb-2">Community Impact</h3>
              <p className="text-blue-200">Variable rewards</p>
              <p className="text-blue-100 text-sm mt-1">Based on project success metrics</p>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mt-12">
          <Link href="/challenges/mental-health/music-therapy/contribute">
            <button className="w-full sm:w-auto bg-blue-500 hover:bg-blue-600 text-white px-8 py-3 rounded-full font-medium transition-all shadow-lg hover:shadow-xl">
              Browse Other Projects
            </button>
          </Link>
          <Link href="/challenges/mental-health/music-therapy">
            <button className="w-full sm:w-auto bg-blue-800 hover:bg-blue-900 text-white px-8 py-3 rounded-full font-medium transition-all shadow-lg hover:shadow-xl">
              Return to Music Therapy
            </button>
          </Link>
        </div>
      </div>
    </main>
  );
} 