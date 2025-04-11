import Link from 'next/link';

export default function MusicTherapyInnovation() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-blue-800 to-blue-100 text-white p-4 md:p-8">
      <div className="max-w-4xl mx-auto">
        <div className="flex justify-between items-center mb-12">
          <div>
            <Link 
              href="/challenges/mental-health"
              className="text-blue-200 hover:text-blue-100 mb-4 inline-block"
            >
              ← Back to Mental Health & Wellness
            </Link>
            <h1 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-blue-200">
              Music Therapy Innovation
            </h1>
          </div>
          <div className="flex gap-2">
            <span className="bg-blue-500/20 text-blue-100 text-sm px-3 py-1 rounded-full">15 Contributors</span>
            <span className="bg-green-500/20 text-green-100 text-sm px-3 py-1 rounded-full">Active</span>
          </div>
        </div>

        <div className="space-y-12">
          {/* Overview Section */}
          <section className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/5">
            <h2 className="text-2xl md:text-3xl font-bold mb-6">Overview</h2>
            <div className="bg-black/10 p-6 rounded-xl">
              <p className="text-blue-50 leading-relaxed mb-4">
                Music Therapy Innovation combines the healing power of music with modern technology to create accessible, scalable mental health solutions. Our approach leverages both traditional music therapy techniques and cutting-edge digital tools to support emotional wellbeing.
              </p>
              <div className="grid md:grid-cols-3 gap-4 mt-6">
                <div className="bg-black/10 p-4 rounded-lg">
                  <h4 className="font-semibold mb-2">70%</h4>
                  <p className="text-sm text-blue-100">Reduction in stress levels reported by participants</p>
                </div>
                <div className="bg-black/10 p-4 rounded-lg">
                  <h4 className="font-semibold mb-2">10K+</h4>
                  <p className="text-sm text-blue-100">Active users in pilot program</p>
                </div>
                <div className="bg-black/10 p-4 rounded-lg">
                  <h4 className="font-semibold mb-2">85%</h4>
                  <p className="text-sm text-blue-100">User retention after 3 months</p>
                </div>
              </div>
            </div>
          </section>

          {/* Programs Section */}
          <section className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/5">
            <h2 className="text-2xl md:text-3xl font-bold mb-6">Current Programs</h2>
            <div className="grid gap-6">
              <div className="bg-black/10 p-6 rounded-xl">
                <Link href="/challenges/mental-health/music-therapy/adaptive-meditation">
                  <h3 className="text-xl font-bold mb-3">Adaptive Music Meditation</h3>
                </Link>
                <p className="text-blue-50 leading-relaxed mb-4">
                  AI-powered meditation sessions that adapt to your emotional state using biofeedback and musical elements. The system adjusts tempo, harmony, and complexity based on real-time stress indicators.
                </p>
                <div className="flex gap-2">
                  <span className="bg-purple-500/20 text-purple-100 text-sm px-3 py-1 rounded-full">Beta Testing</span>
                </div>
              </div>
              <div className="bg-black/10 p-6 rounded-xl">
                <h3 className="text-xl font-bold mb-3">Community Music Circles</h3>
                <p className="text-blue-50 leading-relaxed mb-4">
                  Virtual group sessions combining music creation, sharing, and therapeutic discussion. Participants collaborate on music projects while building social connections and emotional support networks.
                </p>
                <div className="flex gap-2">
                  <span className="bg-green-500/20 text-green-100 text-sm px-3 py-1 rounded-full">Active</span>
                </div>
              </div>
              <div className="bg-black/10 p-6 rounded-xl">
                <h3 className="text-xl font-bold mb-3">Personalized Sound Therapy</h3>
                <p className="text-blue-50 leading-relaxed mb-4">
                  Custom-generated soundscapes for specific therapeutic needs, including anxiety reduction, sleep improvement, and mood enhancement. Uses machine learning to evolve based on user feedback and outcomes.
                </p>
                <div className="flex gap-2">
                  <span className="bg-yellow-500/20 text-yellow-100 text-sm px-3 py-1 rounded-full">In Development</span>
                </div>
              </div>
            </div>
          </section>

          {/* Digital Tools Section */}
          <section className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/5">
            <h2 className="text-2xl md:text-3xl font-bold mb-6">Digital Tools</h2>
            <div className="grid gap-6">
              <div className="bg-black/10 p-6 rounded-xl">
                <h3 className="text-xl font-bold mb-3">Emotion-Responsive Player</h3>
                <ul className="text-blue-50 leading-relaxed space-y-2">
                  <li>• Real-time emotion detection through voice and text analysis</li>
                  <li>• Dynamic playlist generation based on emotional state</li>
                  <li>• Integration with popular music streaming platforms</li>
                </ul>
              </div>
              <div className="bg-black/10 p-6 rounded-xl">
                <h3 className="text-xl font-bold mb-3">Music Creation Suite</h3>
                <ul className="text-blue-50 leading-relaxed space-y-2">
                  <li>• Intuitive music-making tools for non-musicians</li>
                  <li>• Collaborative features for group therapy sessions</li>
                  <li>• Progress tracking and emotional journey mapping</li>
                </ul>
              </div>
              <div className="bg-black/10 p-6 rounded-xl">
                <h3 className="text-xl font-bold mb-3">Therapeutic Assessment Tools</h3>
                <ul className="text-blue-50 leading-relaxed space-y-2">
                  <li>• Musical preference analysis for therapy customization</li>
                  <li>• Outcome measurement and progress tracking</li>
                  <li>• Integration with healthcare providers' systems</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Get Involved Section */}
          <section className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/5">
            <h2 className="text-2xl md:text-3xl font-bold mb-6">Get Involved</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-black/10 p-6 rounded-xl">
                <h3 className="text-xl font-bold mb-3">For Contributors</h3>
                <ul className="text-blue-50 leading-relaxed space-y-2">
                  <li>• Join development teams for digital tools</li>
                  <li>• Contribute to research and effectiveness studies</li>
                  <li>• Help expand the music therapy curriculum</li>
                </ul>
              </div>
              <div className="bg-black/10 p-6 rounded-xl">
                <h3 className="text-xl font-bold mb-3">For Users</h3>
                <ul className="text-blue-50 leading-relaxed space-y-2">
                  <li>• Participate in beta testing programs</li>
                  <li>• Join community music circles</li>
                  <li>• Provide feedback on new features</li>
                </ul>
              </div>
            </div>
          </section>
        </div>

        <div className="mt-12 text-center">
          <button className="inline-block bg-blue-500 hover:bg-blue-600 text-white px-12 py-4 rounded-full font-semibold transition-all shadow-lg hover:shadow-xl text-lg">
            Join Music Therapy Initiative
          </button>
        </div>
      </div>
    </main>
  );
} 