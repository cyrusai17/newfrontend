import Link from 'next/link';

export default function ContributeToMusicTherapy() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-blue-900 via-blue-800 to-blue-700 text-white p-4 md:p-8">
      <div className="max-w-4xl mx-auto">
        <div className="flex justify-between items-center mb-12">
          <div>
            <Link 
              href="/challenges/mental-health/music-therapy"
              className="text-blue-200 hover:text-white mb-4 inline-block font-medium"
            >
              ← Back to Music Therapy Innovation
            </Link>
            <h1 className="text-4xl md:text-5xl font-bold text-white">
              Contribute to Music Therapy
            </h1>
            <p className="text-blue-200 text-lg mt-2">Join our community of music therapy innovators</p>
          </div>
          <div className="flex gap-2">
            <span className="bg-blue-500/30 text-blue-100 text-sm px-3 py-1 rounded-full font-medium">15 Contributors</span>
            <span className="bg-green-500/30 text-green-100 text-sm px-3 py-1 rounded-full font-medium">Active</span>
          </div>
        </div>

        {/* Member Dashboard */}
        <div className="bg-blue-900/50 backdrop-blur-lg rounded-2xl p-6 border border-white/10 shadow-xl mb-8">
          <h2 className="text-2xl font-bold mb-4 text-white">Your Dashboard</h2>
          <div className="grid md:grid-cols-3 gap-4">
            <div className="bg-gradient-to-br from-blue-500/20 to-purple-500/20 p-4 rounded-xl border border-white/5">
              <p className="text-blue-200 text-sm mb-1">Your LUM Tokens</p>
              <p className="text-2xl font-bold text-white">125</p>
            </div>
            <div className="bg-gradient-to-br from-blue-500/20 to-purple-500/20 p-4 rounded-xl border border-white/5">
              <p className="text-blue-200 text-sm mb-1">Contributions</p>
              <p className="text-2xl font-bold text-white">3</p>
            </div>
            <div className="bg-gradient-to-br from-blue-500/20 to-purple-500/20 p-4 rounded-xl border border-white/5">
              <p className="text-blue-200 text-sm mb-1">Active Projects</p>
              <p className="text-2xl font-bold text-white">1</p>
            </div>
          </div>
        </div>

        {/* Contribution Opportunities */}
        <div className="bg-blue-900/50 backdrop-blur-lg rounded-2xl p-6 border border-white/10 shadow-xl mb-8">
          <h2 className="text-2xl font-bold mb-4 text-white">Contribution Opportunities</h2>
          <div className="grid gap-4">
            <div className="bg-gradient-to-br from-blue-500/20 to-purple-500/20 p-4 rounded-xl border border-white/5">
              <div className="flex justify-between items-start mb-2">
                <h3 className="text-xl font-bold text-white">Adaptive Meditation App</h3>
                <span className="bg-purple-500/30 text-purple-100 text-sm px-3 py-1 rounded-full font-medium">Beta Testing</span>
              </div>
              <p className="text-blue-100 mb-4">
                Help test and improve our AI-powered meditation app that adapts to your emotional state.
              </p>
              <div className="flex justify-between items-center">
                <div className="flex items-center gap-2">
                  <span className="text-blue-200 text-sm">Reward: 25 LUM tokens</span>
                </div>
                <Link 
                  href="/challenges/mental-health/music-therapy/adaptive-meditation/join-beta"
                  className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-full font-medium transition-all"
                >
                  Join Beta
                </Link>
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-blue-500/20 to-purple-500/20 p-4 rounded-xl border border-white/5">
              <div className="flex justify-between items-start mb-2">
                <h3 className="text-xl font-bold text-white">Music Creation Suite</h3>
                <span className="bg-yellow-500/30 text-yellow-100 text-sm px-3 py-1 rounded-full font-medium">In Development</span>
              </div>
              <p className="text-blue-100 mb-4">
                Contribute to the development of intuitive music-making tools for non-musicians.
              </p>
              <div className="flex justify-between items-center">
                <div className="flex items-center gap-2">
                  <span className="text-blue-200 text-sm">Reward: 30-50 LUM tokens</span>
                </div>
                <Link 
                  href="/challenges/mental-health/music-therapy/music-creation"
                  className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-full font-medium transition-all"
                >
                  Contribute
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Skills Needed */}
        <div className="bg-blue-900/50 backdrop-blur-lg rounded-2xl p-6 border border-white/10 shadow-xl mb-8">
          <h2 className="text-2xl font-bold mb-4 text-white">Skills Needed</h2>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-gradient-to-br from-blue-500/20 to-purple-500/20 p-4 rounded-xl border border-white/5">
              <h3 className="text-xl font-bold mb-3 text-white">Technical Skills</h3>
              <ul className="text-blue-100 space-y-2">
                <li className="flex items-start gap-2">
                  <span className="text-blue-400">•</span>
                  Web Development (React, Next.js)
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-400">•</span>
                  Audio Processing & Analysis
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-400">•</span>
                  Machine Learning / AI
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-400">•</span>
                  UI/UX Design
                </li>
              </ul>
            </div>
            <div className="bg-gradient-to-br from-blue-500/20 to-purple-500/20 p-4 rounded-xl border border-white/5">
              <h3 className="text-xl font-bold mb-3 text-white">Domain Expertise</h3>
              <ul className="text-blue-100 space-y-2">
                <li className="flex items-start gap-2">
                  <span className="text-blue-400">•</span>
                  Music Therapy
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-400">•</span>
                  Mental Health
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-400">•</span>
                  Music Production
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-400">•</span>
                  Community Facilitation
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Propose New Project */}
        <div className="bg-blue-900/50 backdrop-blur-lg rounded-2xl p-6 border border-white/10 shadow-xl mb-8">
          <h2 className="text-2xl font-bold mb-4 text-white">Have a New Idea?</h2>
          <p className="text-blue-100 mb-6">
            We're always looking for innovative approaches to music therapy. If you have a new project idea, we'd love to hear about it.
          </p>
          <Link href="/challenges/mental-health/music-therapy/propose">
            <button className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-full font-medium transition-all">
              Propose New Project
            </button>
          </Link>
        </div>

        {/* Call to Action */}
        <div className="mt-12 text-center">
          <p className="text-blue-200 mb-4">Ready to make a difference in mental health through music?</p>
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <Link href="/challenges/mental-health/music-therapy/adaptive-meditation/join-beta">
              <button className="w-full md:w-auto bg-blue-500 hover:bg-blue-600 text-white px-8 py-3 rounded-full font-medium transition-all shadow-lg hover:shadow-xl">
                Join Beta Program
              </button>
            </Link>
            <Link href="/challenges/mental-health/music-therapy/propose">
              <button className="w-full md:w-auto bg-purple-500 hover:bg-purple-600 text-white px-8 py-3 rounded-full font-medium transition-all shadow-lg hover:shadow-xl">
                Propose New Project
              </button>
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
} 