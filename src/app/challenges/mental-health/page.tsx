import Link from 'next/link';

export default function MentalHealthChallenge() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-blue-900 via-blue-800 to-blue-700 text-white p-4 md:p-8">
      <div className="max-w-4xl mx-auto">
        <div className="flex justify-between items-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-white">
            Mental Health & Wellness
          </h1>
          <Link 
            href="/challenges" 
            className="bg-white/20 px-6 py-3 rounded-full hover:bg-white/30 transition-all flex items-center gap-2 font-medium"
          >
            ← All Challenges
          </Link>
        </div>

        <div className="space-y-12">
          {/* Challenge Overview */}
          <section className="bg-blue-900/50 backdrop-blur-lg rounded-2xl p-8 border border-white/10 shadow-xl">
            <h2 className="text-2xl md:text-3xl font-bold mb-6 text-white">The Challenge</h2>
            <div className="bg-blue-800/50 p-6 rounded-xl border border-white/5">
              <p className="text-blue-100 leading-relaxed mb-4">
                Mental health affects every aspect of human life, yet millions lack access to proper care, face stigma, or suffer in silence. We need innovative solutions to make mental wellness accessible, understood, and prioritized globally.
              </p>
              <div className="grid md:grid-cols-3 gap-4 mt-6">
                <div className="bg-blue-700/50 p-4 rounded-lg border border-white/5">
                  <h4 className="font-semibold mb-2 text-white">1B+</h4>
                  <p className="text-sm text-blue-100">People affected by mental health conditions</p>
                </div>
                <div className="bg-blue-700/50 p-4 rounded-lg border border-white/5">
                  <h4 className="font-semibold mb-2 text-white">75%</h4>
                  <p className="text-sm text-blue-100">People without access to mental health services</p>
                </div>
                <div className="bg-blue-700/50 p-4 rounded-lg border border-white/5">
                  <h4 className="font-semibold mb-2 text-white">$1T</h4>
                  <p className="text-sm text-blue-100">Annual global economic impact</p>
                </div>
              </div>
            </div>
          </section>

          {/* Key Focus Areas */}
          <section className="bg-blue-900/50 backdrop-blur-lg rounded-2xl p-8 border border-white/10 shadow-xl">
            <h2 className="text-2xl md:text-3xl font-bold mb-6 text-white">Focus Areas</h2>
            <div className="grid gap-6">
              <div className="bg-blue-800/50 p-6 rounded-xl border border-white/5">
                <h3 className="text-xl font-bold mb-3 text-white">Access to Care</h3>
                <ul className="text-blue-100 leading-relaxed space-y-2">
                  <li>• Digital mental health platforms and teletherapy solutions</li>
                  <li>• Affordable and scalable treatment options</li>
                  <li>• Integration with existing healthcare systems</li>
                </ul>
              </div>
              <div className="bg-blue-800/50 p-6 rounded-xl border border-white/5">
                <h3 className="text-xl font-bold mb-3 text-white">Stigma Reduction</h3>
                <ul className="text-blue-100 leading-relaxed space-y-2">
                  <li>• Public education and awareness campaigns</li>
                  <li>• Workplace mental health programs</li>
                  <li>• Cultural sensitivity in mental health care</li>
                </ul>
              </div>
              <div className="bg-blue-800/50 p-6 rounded-xl border border-white/5">
                <h3 className="text-xl font-bold mb-3 text-white">Prevention & Early Intervention</h3>
                <ul className="text-blue-100 leading-relaxed space-y-2">
                  <li>• Mental health screening tools</li>
                  <li>• Youth mental health programs</li>
                  <li>• Stress management and resilience building</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Current Solutions */}
          <section className="bg-blue-900/50 backdrop-blur-lg rounded-2xl p-8 border border-white/10 shadow-xl">
            <h2 className="text-2xl md:text-3xl font-bold mb-6 text-white">Active Solutions</h2>
            <div className="grid gap-6">
              <div className="bg-blue-800/50 p-6 rounded-xl border border-white/5">
                <h3 className="text-xl font-bold mb-3 text-white">Community Support Networks</h3>
                <p className="text-blue-100 leading-relaxed">
                  Building peer support systems and community-based mental health resources.
                </p>
                <div className="mt-4 flex gap-2">
                  <span className="bg-blue-500/30 text-blue-100 text-sm px-3 py-1 rounded-full font-medium">12 Contributors</span>
                  <span className="bg-green-500/30 text-green-100 text-sm px-3 py-1 rounded-full font-medium">Active</span>
                </div>
              </div>
              <Link 
                href="/challenges/mental-health/music-therapy"
                className="bg-blue-800/50 p-6 rounded-xl border border-white/5 hover:bg-blue-800/70 transition-all"
              >
                <h3 className="text-xl font-bold mb-3 text-white">Music Therapy Innovation</h3>
                <p className="text-blue-100 leading-relaxed">
                  Developing accessible music therapy programs and digital tools for emotional regulation, stress reduction, and mental wellness through music.
                </p>
                <div className="mt-4 flex gap-2">
                  <span className="bg-blue-500/30 text-blue-100 text-sm px-3 py-1 rounded-full font-medium">15 Contributors</span>
                  <span className="bg-green-500/30 text-green-100 text-sm px-3 py-1 rounded-full font-medium">Active</span>
                </div>
              </Link>
              <div className="bg-blue-800/50 p-6 rounded-xl border border-white/5">
                <h3 className="text-xl font-bold mb-3 text-white">AI-Powered Therapy Access</h3>
                <p className="text-blue-100 leading-relaxed">
                  Developing AI solutions to make mental health support more accessible and affordable.
                </p>
                <div className="mt-4 flex gap-2">
                  <span className="bg-blue-500/30 text-blue-100 text-sm px-3 py-1 rounded-full font-medium">8 Contributors</span>
                  <span className="bg-yellow-500/30 text-yellow-100 text-sm px-3 py-1 rounded-full font-medium">In Development</span>
                </div>
              </div>
            </div>
          </section>
        </div>

        <div className="mt-12 text-center">
          <Link href="/challenges/mental-health/contribute">
            <button className="inline-block bg-blue-500 hover:bg-blue-600 text-white px-12 py-4 rounded-full font-semibold transition-all shadow-lg hover:shadow-xl text-lg">
              Contribute to This Challenge
            </button>
          </Link>
        </div>
      </div>
    </main>
  );
} 