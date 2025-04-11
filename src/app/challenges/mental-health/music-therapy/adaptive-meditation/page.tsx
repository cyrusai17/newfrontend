import Link from 'next/link';

export default function AdaptiveMusicMeditation() {
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
              Adaptive Music Meditation
            </h1>
          </div>
          <div className="flex gap-2">
            <span className="bg-blue-500/30 text-blue-100 text-sm px-3 py-1 rounded-full font-medium">8 Contributors</span>
            <span className="bg-purple-500/30 text-purple-100 text-sm px-3 py-1 rounded-full font-medium">Beta Testing</span>
          </div>
        </div>

        <div className="space-y-12">
          {/* Program Overview */}
          <section className="bg-blue-900/50 backdrop-blur-lg rounded-2xl p-8 border border-white/10 shadow-xl">
            <h2 className="text-2xl md:text-3xl font-bold mb-6 text-white">Program Overview</h2>
            <div className="bg-blue-800/50 p-6 rounded-xl border border-white/5">
              <p className="text-blue-100 leading-relaxed mb-4">
                Adaptive Music Meditation is an AI-powered meditation program that creates personalized musical experiences based on real-time biofeedback. The system continuously adjusts musical elements to optimize your meditation session and emotional state.
              </p>
              <div className="grid md:grid-cols-3 gap-4 mt-6">
                <div className="bg-blue-700/50 p-4 rounded-lg border border-white/5">
                  <h4 className="font-semibold mb-2 text-white">45%</h4>
                  <p className="text-sm text-blue-100">Average improvement in focus</p>
                </div>
                <div className="bg-blue-700/50 p-4 rounded-lg border border-white/5">
                  <h4 className="font-semibold mb-2 text-white">2K+</h4>
                  <p className="text-sm text-blue-100">Beta testers</p>
                </div>
                <div className="bg-blue-700/50 p-4 rounded-lg border border-white/5">
                  <h4 className="font-semibold mb-2 text-white">92%</h4>
                  <p className="text-sm text-blue-100">User satisfaction rate</p>
                </div>
              </div>
            </div>
          </section>

          {/* Technology */}
          <section className="bg-blue-900/50 backdrop-blur-lg rounded-2xl p-8 border border-white/10 shadow-xl">
            <h2 className="text-2xl md:text-3xl font-bold mb-6 text-white">Technology</h2>
            <div className="grid gap-6">
              <div className="bg-blue-800/50 p-6 rounded-xl border border-white/5">
                <h3 className="text-xl font-bold mb-3 text-white">Biofeedback Integration</h3>
                <ul className="text-blue-100 leading-relaxed space-y-2">
                  <li>• Heart rate variability monitoring</li>
                  <li>• Breathing pattern detection</li>
                  <li>• Stress level assessment</li>
                </ul>
              </div>
              <div className="bg-blue-800/50 p-6 rounded-xl border border-white/5">
                <h3 className="text-xl font-bold mb-3 text-white">AI Music Generation</h3>
                <ul className="text-blue-100 leading-relaxed space-y-2">
                  <li>• Real-time musical adaptation</li>
                  <li>• Personalized soundscapes</li>
                  <li>• Mood-based composition</li>
                </ul>
              </div>
              <div className="bg-blue-800/50 p-6 rounded-xl border border-white/5">
                <h3 className="text-xl font-bold mb-3 text-white">Progress Tracking</h3>
                <ul className="text-blue-100 leading-relaxed space-y-2">
                  <li>• Session analytics</li>
                  <li>• Improvement metrics</li>
                  <li>• Personalized recommendations</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Features */}
          <section className="bg-blue-900/50 backdrop-blur-lg rounded-2xl p-8 border border-white/10 shadow-xl">
            <h2 className="text-2xl md:text-3xl font-bold mb-6 text-white">Key Features</h2>
            <div className="grid gap-6">
              <div className="bg-blue-800/50 p-6 rounded-xl border border-white/5">
                <h3 className="text-xl font-bold mb-3 text-white">Personalized Sessions</h3>
                <p className="text-blue-100 leading-relaxed">
                  Each meditation session is uniquely tailored to your current emotional state, stress levels, and meditation goals. The AI system learns from your responses to create increasingly effective experiences.
                </p>
              </div>
              <div className="bg-blue-800/50 p-6 rounded-xl border border-white/5">
                <h3 className="text-xl font-bold mb-3 text-white">Adaptive Soundscapes</h3>
                <p className="text-blue-100 leading-relaxed">
                  The musical elements - tempo, harmony, rhythm, and instrumentation - automatically adjust based on your biofeedback to maintain optimal meditation states and emotional balance.
                </p>
              </div>
              <div className="bg-blue-800/50 p-6 rounded-xl border border-white/5">
                <h3 className="text-xl font-bold mb-3 text-white">Guided & Unguided Options</h3>
                <p className="text-blue-100 leading-relaxed">
                  Choose between guided meditation with voice instructions or pure musical experiences. Both modes adapt to your needs and preferences.
                </p>
              </div>
            </div>
          </section>

          {/* Join Beta */}
          <section className="bg-blue-900/50 backdrop-blur-lg rounded-2xl p-8 border border-white/10 shadow-xl">
            <h2 className="text-2xl md:text-3xl font-bold mb-6 text-white">Join the Beta Program</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-blue-800/50 p-6 rounded-xl border border-white/5">
                <h3 className="text-xl font-bold mb-3 text-white">For Testers</h3>
                <ul className="text-blue-100 leading-relaxed space-y-2">
                  <li>• Early access to new features</li>
                  <li>• Shape the future of meditation</li>
                  <li>• Receive personalized support</li>
                </ul>
              </div>
              <div className="bg-blue-800/50 p-6 rounded-xl border border-white/5">
                <h3 className="text-xl font-bold mb-3 text-white">Requirements</h3>
                <ul className="text-blue-100 leading-relaxed space-y-2">
                  <li>• Basic meditation experience</li>
                  <li>• Compatible device</li>
                  <li>• Willingness to provide feedback</li>
                </ul>
              </div>
            </div>
            <div className="mt-8 text-center">
              <Link href="/challenges/mental-health/music-therapy/adaptive-meditation/join-beta">
                <button className="inline-block bg-blue-500 hover:bg-blue-600 text-white px-12 py-4 rounded-full font-semibold transition-all shadow-lg hover:shadow-xl text-lg">
                  Learn More About Beta Program
                </button>
              </Link>
            </div>
          </section>
        </div>

        <div className="mt-12 text-center">
          <Link href="/challenges/mental-health/music-therapy/adaptive-meditation/join-beta">
            <button className="inline-block bg-blue-500 hover:bg-blue-600 text-white px-12 py-4 rounded-full font-semibold transition-all shadow-lg hover:shadow-xl text-lg">
              Join Beta Program
            </button>
          </Link>
        </div>
      </div>
    </main>
  );
} 