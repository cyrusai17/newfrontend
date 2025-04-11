import Link from 'next/link';

export default function MentalHealthProjects() {
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
              Mental Health Projects
            </h1>
            <p className="text-blue-200 text-lg mt-2">Browse and contribute to ongoing mental health initiatives</p>
          </div>
          <div className="flex gap-2">
            <span className="bg-blue-500/30 text-blue-100 text-sm px-3 py-1 rounded-full font-medium">Active Projects</span>
            <span className="bg-purple-500/30 text-purple-100 text-sm px-3 py-1 rounded-full font-medium">Community Driven</span>
          </div>
        </div>

        {/* Project Filters */}
        <div className="bg-blue-900/50 backdrop-blur-lg rounded-2xl p-6 border border-white/10 shadow-xl mb-8">
          <div className="flex flex-col md:flex-row gap-4 items-center">
            <div className="flex-1">
              <input 
                type="text" 
                placeholder="Search projects..." 
                className="w-full bg-blue-800/50 border border-white/10 rounded-lg px-4 py-2 text-white placeholder-blue-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div className="flex gap-2">
              <select className="bg-blue-800/50 border border-white/10 rounded-lg px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-blue-500">
                <option value="">All Categories</option>
                <option value="digital">Digital Tools</option>
                <option value="community">Community Programs</option>
                <option value="research">Research</option>
                <option value="education">Education</option>
              </select>
              <select className="bg-blue-800/50 border border-white/10 rounded-lg px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-blue-500">
                <option value="">All Statuses</option>
                <option value="concept">Concept</option>
                <option value="planning">Planning</option>
                <option value="development">Development</option>
                <option value="testing">Testing</option>
                <option value="launched">Launched</option>
              </select>
            </div>
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid gap-6">
          {/* Project 1 */}
          <div className="bg-blue-900/50 backdrop-blur-lg rounded-2xl p-6 border border-white/10 shadow-xl">
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
            <div className="flex justify-between items-center">
              <div className="flex items-center gap-2">
                <div className="flex -space-x-2">
                  <div className="w-8 h-8 rounded-full bg-blue-500/30 border-2 border-blue-900 flex items-center justify-center text-xs font-bold">JD</div>
                  <div className="w-8 h-8 rounded-full bg-blue-500/30 border-2 border-blue-900 flex items-center justify-center text-xs font-bold">AS</div>
                  <div className="w-8 h-8 rounded-full bg-blue-500/30 border-2 border-blue-900 flex items-center justify-center text-xs font-bold">+3</div>
                </div>
                <span className="text-blue-200 text-sm">5 contributors</span>
              </div>
              <Link 
                href="/challenges/mental-health/music-therapy/adaptive-meditation"
                className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-full font-medium transition-all"
              >
                View Project
              </Link>
            </div>
          </div>

          {/* Project 2 */}
          <div className="bg-blue-900/50 backdrop-blur-lg rounded-2xl p-6 border border-white/10 shadow-xl">
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
            <div className="flex justify-between items-center">
              <div className="flex items-center gap-2">
                <div className="flex -space-x-2">
                  <div className="w-8 h-8 rounded-full bg-blue-500/30 border-2 border-blue-900 flex items-center justify-center text-xs font-bold">MK</div>
                  <div className="w-8 h-8 rounded-full bg-blue-500/30 border-2 border-blue-900 flex items-center justify-center text-xs font-bold">RL</div>
                  <div className="w-8 h-8 rounded-full bg-blue-500/30 border-2 border-blue-900 flex items-center justify-center text-xs font-bold">+2</div>
                </div>
                <span className="text-blue-200 text-sm">4 contributors</span>
              </div>
              <Link 
                href="/challenges/mental-health/community-support"
                className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-full font-medium transition-all"
              >
                View Project
              </Link>
            </div>
          </div>

          {/* Project 3 */}
          <div className="bg-blue-900/50 backdrop-blur-lg rounded-2xl p-6 border border-white/10 shadow-xl">
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
            <div className="flex justify-between items-center">
              <div className="flex items-center gap-2">
                <div className="flex -space-x-2">
                  <div className="w-8 h-8 rounded-full bg-blue-500/30 border-2 border-blue-900 flex items-center justify-center text-xs font-bold">TP</div>
                  <div className="w-8 h-8 rounded-full bg-blue-500/30 border-2 border-blue-900 flex items-center justify-center text-xs font-bold">+1</div>
                </div>
                <span className="text-blue-200 text-sm">2 contributors</span>
              </div>
              <Link 
                href="/challenges/mental-health/education-platform"
                className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-full font-medium transition-all"
              >
                View Project
              </Link>
            </div>
          </div>

          {/* Project 4 */}
          <div className="bg-blue-900/50 backdrop-blur-lg rounded-2xl p-6 border border-white/10 shadow-xl">
            <div className="flex justify-between items-start mb-3">
              <h3 className="text-xl font-bold text-white">Mood Tracking & Analysis</h3>
              <span className="bg-green-500/30 text-green-100 text-sm px-3 py-1 rounded-full font-medium">In Development</span>
            </div>
            <p className="text-blue-100 leading-relaxed mb-4">
              A comprehensive mood tracking application with AI-powered analysis to identify patterns and provide personalized recommendations.
            </p>
            <div className="flex flex-wrap gap-2 mb-4">
              <span className="bg-blue-500/30 text-blue-100 text-sm px-3 py-1 rounded-full font-medium">AI/ML</span>
              <span className="bg-blue-500/30 text-blue-100 text-sm px-3 py-1 rounded-full font-medium">Data Privacy</span>
              <span className="bg-blue-500/30 text-blue-100 text-sm px-3 py-1 rounded-full font-medium">User Experience</span>
            </div>
            <div className="flex justify-between items-center">
              <div className="flex items-center gap-2">
                <div className="flex -space-x-2">
                  <div className="w-8 h-8 rounded-full bg-blue-500/30 border-2 border-blue-900 flex items-center justify-center text-xs font-bold">CW</div>
                  <div className="w-8 h-8 rounded-full bg-blue-500/30 border-2 border-blue-900 flex items-center justify-center text-xs font-bold">HJ</div>
                  <div className="w-8 h-8 rounded-full bg-blue-500/30 border-2 border-blue-900 flex items-center justify-center text-xs font-bold">+4</div>
                </div>
                <span className="text-blue-200 text-sm">6 contributors</span>
              </div>
              <Link 
                href="/challenges/mental-health/mood-tracking"
                className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-full font-medium transition-all"
              >
                View Project
              </Link>
            </div>
          </div>

          {/* Project 5 */}
          <div className="bg-blue-900/50 backdrop-blur-lg rounded-2xl p-6 border border-white/10 shadow-xl">
            <div className="flex justify-between items-start mb-3">
              <h3 className="text-xl font-bold text-white">Teletherapy Integration Platform</h3>
              <span className="bg-yellow-500/30 text-yellow-100 text-sm px-3 py-1 rounded-full font-medium">Planning</span>
            </div>
            <p className="text-blue-100 leading-relaxed mb-4">
              A platform connecting mental health professionals with clients, featuring secure video sessions, scheduling, and progress tracking.
            </p>
            <div className="flex flex-wrap gap-2 mb-4">
              <span className="bg-blue-500/30 text-blue-100 text-sm px-3 py-1 rounded-full font-medium">Security</span>
              <span className="bg-blue-500/30 text-blue-100 text-sm px-3 py-1 rounded-full font-medium">Video Integration</span>
              <span className="bg-blue-500/30 text-blue-100 text-sm px-3 py-1 rounded-full font-medium">HIPAA Compliance</span>
            </div>
            <div className="flex justify-between items-center">
              <div className="flex items-center gap-2">
                <div className="flex -space-x-2">
                  <div className="w-8 h-8 rounded-full bg-blue-500/30 border-2 border-blue-900 flex items-center justify-center text-xs font-bold">DR</div>
                  <div className="w-8 h-8 rounded-full bg-blue-500/30 border-2 border-blue-900 flex items-center justify-center text-xs font-bold">+2</div>
                </div>
                <span className="text-blue-200 text-sm">3 contributors</span>
              </div>
              <Link 
                href="/challenges/mental-health/teletherapy"
                className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-full font-medium transition-all"
              >
                View Project
              </Link>
            </div>
          </div>
        </div>

        {/* Pagination */}
        <div className="flex justify-center mt-8">
          <div className="flex gap-2">
            <button className="bg-blue-800/50 hover:bg-blue-700/50 text-white px-4 py-2 rounded-lg font-medium transition-all">
              Previous
            </button>
            <button className="bg-blue-500 text-white px-4 py-2 rounded-lg font-medium">1</button>
            <button className="bg-blue-800/50 hover:bg-blue-700/50 text-white px-4 py-2 rounded-lg font-medium transition-all">2</button>
            <button className="bg-blue-800/50 hover:bg-blue-700/50 text-white px-4 py-2 rounded-lg font-medium transition-all">3</button>
            <button className="bg-blue-800/50 hover:bg-blue-700/50 text-white px-4 py-2 rounded-lg font-medium transition-all">
              Next
            </button>
          </div>
        </div>
      </div>
    </main>
  );
} 