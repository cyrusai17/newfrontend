import Link from 'next/link';

export default function MusicTherapyInnovation() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-blue-900 via-blue-800 to-blue-700 text-white p-4 md:p-8">
      <div className="max-w-4xl mx-auto">
        {/* Header Section */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12 gap-4">
          <div>
            <Link 
              href="/challenges/mental-health"
              className="text-blue-200 hover:text-white mb-4 inline-block font-medium transition-colors"
            >
              ← Back to Mental Health & Wellness
            </Link>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-2">
              Music Therapy Innovation
            </h1>
            <p className="text-blue-200 text-lg">Transforming mental health through the power of music</p>
          </div>
          <div className="flex flex-wrap gap-2">
            <span className="bg-blue-500/30 text-blue-100 text-sm px-4 py-2 rounded-full font-medium">15 Contributors</span>
            <span className="bg-green-500/30 text-green-100 text-sm px-4 py-2 rounded-full font-medium">Active</span>
            <span className="bg-purple-500/30 text-purple-100 text-sm px-4 py-2 rounded-full font-medium">Phase 2</span>
          </div>
        </div>

        <div className="space-y-12">
          {/* Overview Section */}
          <section className="bg-blue-900/50 backdrop-blur-lg rounded-2xl p-8 border border-white/10 shadow-xl">
            <h2 className="text-2xl md:text-3xl font-bold mb-6 text-white">Overview</h2>
            <div className="bg-black/20 p-8 rounded-xl">
              <p className="text-blue-100 leading-relaxed mb-8 text-lg">
                Music Therapy Innovation combines the healing power of music with modern technology to create accessible, scalable mental health solutions. Our approach leverages both traditional music therapy techniques and cutting-edge digital tools to support emotional wellbeing.
              </p>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-gradient-to-br from-blue-500/20 to-purple-500/20 p-6 rounded-xl border border-white/5">
                  <div className="flex items-baseline gap-2 mb-2">
                    <h4 className="text-3xl font-bold text-white">70%</h4>
                    <span className="text-green-400 text-sm">↑</span>
                  </div>
                  <p className="text-blue-100">Reduction in stress levels reported by participants</p>
                </div>
                <div className="bg-gradient-to-br from-blue-500/20 to-purple-500/20 p-6 rounded-xl border border-white/5">
                  <div className="flex items-baseline gap-2 mb-2">
                    <h4 className="text-3xl font-bold text-white">10K+</h4>
                    <span className="text-green-400 text-sm">↑</span>
                  </div>
                  <p className="text-blue-100">Active users in pilot program</p>
                </div>
                <div className="bg-gradient-to-br from-blue-500/20 to-purple-500/20 p-6 rounded-xl border border-white/5">
                  <div className="flex items-baseline gap-2 mb-2">
                    <h4 className="text-3xl font-bold text-white">85%</h4>
                    <span className="text-green-400 text-sm">↑</span>
                  </div>
                  <p className="text-blue-100">User retention after 3 months</p>
                </div>
              </div>
            </div>
          </section>

          {/* Programs Section */}
          <section className="bg-blue-900/50 backdrop-blur-lg rounded-2xl p-8 border border-white/10 shadow-xl">
            <h2 className="text-2xl md:text-3xl font-bold mb-6 text-white">Current Programs</h2>
            <div className="grid gap-6">
              <Link href="/challenges/mental-health/music-therapy/adaptive-meditation" className="block">
                <div className="bg-gradient-to-br from-blue-500/20 to-purple-500/20 p-6 rounded-xl border border-white/5 hover:border-white/20 transition-all group">
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-xl font-bold text-white group-hover:text-blue-200 transition-colors">Adaptive Music Meditation</h3>
                    <span className="bg-purple-500/30 text-purple-100 text-sm px-3 py-1 rounded-full">Beta Testing</span>
                  </div>
                  <p className="text-blue-100 leading-relaxed mb-4">
                    AI-powered meditation sessions that adapt to your emotional state using biofeedback and musical elements. The system adjusts tempo, harmony, and complexity based on real-time stress indicators.
                  </p>
                  <div className="flex items-center text-blue-200 text-sm">
                    <span>Learn more</span>
                    <svg className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              </Link>
              <div className="bg-gradient-to-br from-blue-500/20 to-purple-500/20 p-6 rounded-xl border border-white/5">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl font-bold text-white">Community Music Circles</h3>
                  <span className="bg-green-500/30 text-green-100 text-sm px-3 py-1 rounded-full">Active</span>
                </div>
                <p className="text-blue-100 leading-relaxed mb-4">
                  Virtual group sessions combining music creation, sharing, and therapeutic discussion. Participants collaborate on music projects while building social connections and emotional support networks.
                </p>
              </div>
              <div className="bg-gradient-to-br from-blue-500/20 to-purple-500/20 p-6 rounded-xl border border-white/5">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl font-bold text-white">Personalized Sound Therapy</h3>
                  <span className="bg-yellow-500/30 text-yellow-100 text-sm px-3 py-1 rounded-full">In Development</span>
                </div>
                <p className="text-blue-100 leading-relaxed mb-4">
                  Custom-generated soundscapes for specific therapeutic needs, including anxiety reduction, sleep improvement, and mood enhancement. Uses machine learning to evolve based on user feedback and outcomes.
                </p>
              </div>
            </div>
          </section>

          {/* Digital Tools Section */}
          <section className="bg-blue-900/50 backdrop-blur-lg rounded-2xl p-8 border border-white/10 shadow-xl">
            <h2 className="text-2xl md:text-3xl font-bold mb-6 text-white">Digital Tools</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-gradient-to-br from-blue-500/20 to-purple-500/20 p-6 rounded-xl border border-white/5">
                <div className="w-12 h-12 bg-blue-500/30 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-blue-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-3 text-white">Emotion-Responsive Player</h3>
                <ul className="text-blue-100 space-y-2">
                  <li className="flex items-start gap-2">
                    <span className="text-blue-400">•</span>
                    Real-time emotion detection through voice and text analysis
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-400">•</span>
                    Dynamic playlist generation based on emotional state
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-400">•</span>
                    Integration with popular music streaming platforms
                  </li>
                </ul>
              </div>
              <div className="bg-gradient-to-br from-blue-500/20 to-purple-500/20 p-6 rounded-xl border border-white/5">
                <div className="w-12 h-12 bg-blue-500/30 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-blue-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-3 text-white">Music Creation Suite</h3>
                <ul className="text-blue-100 space-y-2">
                  <li className="flex items-start gap-2">
                    <span className="text-blue-400">•</span>
                    Intuitive music-making tools for non-musicians
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-400">•</span>
                    Collaborative features for group therapy sessions
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-400">•</span>
                    Progress tracking and emotional journey mapping
                  </li>
                </ul>
              </div>
              <div className="bg-gradient-to-br from-blue-500/20 to-purple-500/20 p-6 rounded-xl border border-white/5">
                <div className="w-12 h-12 bg-blue-500/30 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-blue-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-3 text-white">Therapeutic Assessment Tools</h3>
                <ul className="text-blue-100 space-y-2">
                  <li className="flex items-start gap-2">
                    <span className="text-blue-400">•</span>
                    Musical preference analysis for therapy customization
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-400">•</span>
                    Outcome measurement and progress tracking
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-400">•</span>
                    Integration with healthcare providers' systems
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* Get Involved Section */}
          <section className="bg-blue-900/50 backdrop-blur-lg rounded-2xl p-8 border border-white/10 shadow-xl">
            <h2 className="text-2xl md:text-3xl font-bold mb-6 text-white">Get Involved</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-gradient-to-br from-blue-500/20 to-purple-500/20 p-6 rounded-xl border border-white/5">
                <div className="w-12 h-12 bg-blue-500/30 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-blue-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-3 text-white">For Contributors</h3>
                <ul className="text-blue-100 space-y-2">
                  <li className="flex items-start gap-2">
                    <span className="text-blue-400">•</span>
                    Join development teams for digital tools
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-400">•</span>
                    Contribute to research and effectiveness studies
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-400">•</span>
                    Help expand the music therapy curriculum
                  </li>
                </ul>
              </div>
              <div className="bg-gradient-to-br from-blue-500/20 to-purple-500/20 p-6 rounded-xl border border-white/5">
                <div className="w-12 h-12 bg-blue-500/30 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-blue-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-3 text-white">For Users</h3>
                <ul className="text-blue-100 space-y-2">
                  <li className="flex items-start gap-2">
                    <span className="text-blue-400">•</span>
                    Participate in beta testing programs
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-400">•</span>
                    Join community music circles
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-400">•</span>
                    Provide feedback on new features
                  </li>
                </ul>
              </div>
            </div>
          </section>
        </div>

        {/* Call to Action */}
        <div className="mt-12 text-center">
          <Link href="/challenges/mental-health/music-therapy/contribute">
            <button className="inline-block bg-blue-500 hover:bg-blue-600 text-white px-12 py-4 rounded-full font-semibold transition-all shadow-lg hover:shadow-xl text-lg">
              Join Music Therapy Initiative
            </button>
          </Link>
          <p className="text-blue-200 mt-4">Help shape the future of music therapy</p>
        </div>
      </div>
    </main>
  );
} 