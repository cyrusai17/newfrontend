import Link from 'next/link';

export default function Vision() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-blue-800 to-blue-100 text-white p-4 md:p-8">
      <div className="max-w-4xl mx-auto">
        <div className="flex justify-between items-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-blue-200">
            Our Vision
          </h1>
          <Link 
            href="/" 
            className="bg-white/20 px-6 py-3 rounded-full hover:bg-white/30 transition-all flex items-center gap-2"
          >
            ← Back to Home
          </Link>
        </div>

        <div className="space-y-12">
          {/* Origin Story Section */}
          <section className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/5">
            <h2 className="text-2xl md:text-3xl font-bold mb-6">The Birth of Lumadao</h2>
            <div className="bg-black/10 p-6 rounded-xl">
              <p className="text-blue-50 leading-relaxed mb-4">
                In a world facing unprecedented challenges, we saw a simple truth: the solutions to humanity's greatest problems exist within the collective wisdom of people around the globe. But these solutions remained locked away, separated by barriers of geography, language, and social structures.
              </p>
              <p className="text-blue-50 leading-relaxed">
                Lumadao was born from a vision to break down these barriers. By combining the power of decentralized technology with human collaboration, we created a platform where anyone, anywhere, can contribute to solving global challenges while maintaining their privacy and earning rewards for their impact.
              </p>
            </div>
          </section>

          {/* Mission Section */}
          <section className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/5">
            <h2 className="text-2xl md:text-3xl font-bold mb-6">Our Mission</h2>
            <div className="grid gap-6">
              <div className="bg-black/10 p-6 rounded-xl">
                <h3 className="text-xl font-bold mb-3">Empowering Global Problem Solvers</h3>
                <p className="text-blue-50 leading-relaxed">
                  We're building a world where anyone with an idea can contribute to solving humanity's challenges, regardless of their background or location. Through the power of our DAO, every voice has the opportunity to be heard and every solution has the chance to make an impact.
                </p>
              </div>
              <div className="bg-black/10 p-6 rounded-xl">
                <h3 className="text-xl font-bold mb-3">Democratic Innovation</h3>
                <p className="text-blue-50 leading-relaxed">
                  By putting the power of decision-making in the hands of our community, we ensure that the most impactful solutions rise to the top. Our democratic approach means that funding and resources flow to ideas that truly matter.
                </p>
              </div>
            </div>
          </section>

          {/* Future Vision Section */}
          <section className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/5">
            <h2 className="text-2xl md:text-3xl font-bold mb-6">The Future We're Building</h2>
            <div className="grid gap-6">
              <div className="bg-black/10 p-6 rounded-xl">
                <h3 className="text-xl font-bold mb-3">2024: Global Launch</h3>
                <p className="text-blue-50 leading-relaxed">
                  Building our initial community of problem solvers and launching our first wave of global challenges. Establishing key partnerships with organizations aligned with our mission.
                </p>
              </div>
              <div className="bg-black/10 p-6 rounded-xl">
                <h3 className="text-xl font-bold mb-3">2025: Scaling Impact</h3>
                <p className="text-blue-50 leading-relaxed">
                  Expanding our reach to every continent, with solutions being implemented in local communities. Launching specialized tracks for climate, healthcare, and education initiatives.
                </p>
              </div>
              <div className="bg-black/10 p-6 rounded-xl">
                <h3 className="text-xl font-bold mb-3">2026 and Beyond</h3>
                <p className="text-blue-50 leading-relaxed">
                  Creating a self-sustaining ecosystem where successful solutions generate real-world value, feeding back into the community and funding future innovations. Establishing Lumadao as the go-to platform for solving global challenges.
                </p>
              </div>
            </div>
          </section>

          {/* Values Section */}
          <section className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/5">
            <h2 className="text-2xl md:text-3xl font-bold mb-6">Our Core Values</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-black/10 p-6 rounded-xl">
                <h3 className="text-xl font-bold mb-3">Transparency</h3>
                <p className="text-blue-50 leading-relaxed">
                  Every decision, fund allocation, and impact metric is publicly visible on the blockchain.
                </p>
              </div>
              <div className="bg-black/10 p-6 rounded-xl">
                <h3 className="text-xl font-bold mb-3">Inclusivity</h3>
                <p className="text-blue-50 leading-relaxed">
                  Anyone can participate, contribute, and earn rewards for their impact.
                </p>
              </div>
              <div className="bg-black/10 p-6 rounded-xl">
                <h3 className="text-xl font-bold mb-3">Innovation</h3>
                <p className="text-blue-50 leading-relaxed">
                  Embracing new ideas and approaches to solve age-old problems.
                </p>
              </div>
              <div className="bg-black/10 p-6 rounded-xl">
                <h3 className="text-xl font-bold mb-3">Impact-Driven</h3>
                <p className="text-blue-50 leading-relaxed">
                  Every action we take is measured by its real-world positive impact.
                </p>
              </div>
            </div>
          </section>
        </div>

        <div className="mt-12 text-center">
          <Link 
            href="/challenges" 
            className="inline-block bg-blue-500 hover:bg-blue-600 text-white px-12 py-4 rounded-full font-semibold transition-all shadow-lg hover:shadow-xl text-lg"
          >
            Start Making an Impact
          </Link>
        </div>
      </div>
    </main>
  );
} 