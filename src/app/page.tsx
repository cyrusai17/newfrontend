import Link from 'next/link';

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-blue-900 via-blue-800 to-blue-700 text-white p-4 md:p-8">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-7xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-white via-white to-blue-200">
            Lumadao
          </h1>
          <p className="text-2xl md:text-3xl mb-6 text-white leading-relaxed max-w-3xl mx-auto">
            Join the global movement to solve humanity's greatest challenges
          </p>
          <p className="text-lg mb-12 text-blue-100 max-w-2xl mx-auto leading-relaxed">
            A democratic, anonymous platform empowering communities to collaborate on solutions for a better world
          </p>
        </div>

        <div className="bg-blue-900/50 backdrop-blur-lg rounded-2xl p-8 mb-16 border border-white/10 shadow-xl">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-2xl md:text-3xl font-bold text-white">Featured Challenges</h2>
            <Link 
              href="/challenges"
              className="text-blue-200 hover:text-white font-medium transition-all"
            >
              View All →
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Link href="/challenges/climate-change" className="group">
              <div className="bg-blue-800/50 p-6 rounded-xl border border-white/5 hover:bg-blue-800/70 transition-all">
                <div className="flex justify-between items-start mb-3">
                  <h3 className="text-xl font-bold text-white">Climate Change</h3>
                  <span className="bg-green-500/30 text-green-100 text-sm px-3 py-1 rounded-full font-medium">Active</span>
                </div>
                <p className="text-blue-100 leading-relaxed mb-4">
                  Developing innovative solutions to combat global warming, reduce carbon emissions, and protect our planet's ecosystems.
                </p>
                <div className="flex gap-2">
                  <span className="bg-blue-500/30 text-blue-100 text-sm px-3 py-1 rounded-full font-medium">25 Contributors</span>
                </div>
              </div>
            </Link>
            <Link href="/challenges/mental-health" className="group">
              <div className="bg-blue-800/50 p-6 rounded-xl border border-white/5 hover:bg-blue-800/70 transition-all">
                <div className="flex justify-between items-start mb-3">
                  <h3 className="text-xl font-bold text-white">Mental Health</h3>
                  <span className="bg-green-500/30 text-green-100 text-sm px-3 py-1 rounded-full font-medium">Active</span>
                </div>
                <p className="text-blue-100 leading-relaxed mb-4">
                  Making mental healthcare accessible, reducing stigma, and building supportive communities through technology.
                </p>
                <div className="flex gap-2">
                  <span className="bg-blue-500/30 text-blue-100 text-sm px-3 py-1 rounded-full font-medium">35 Contributors</span>
                </div>
              </div>
            </Link>
            <Link href="/challenges/education" className="group">
              <div className="bg-blue-800/50 p-6 rounded-xl border border-white/5 hover:bg-blue-800/70 transition-all">
                <div className="flex justify-between items-start mb-3">
                  <h3 className="text-xl font-bold text-white">Education Access</h3>
                  <span className="bg-yellow-500/30 text-yellow-100 text-sm px-3 py-1 rounded-full font-medium">In Development</span>
                </div>
                <p className="text-blue-100 leading-relaxed mb-4">
                  Creating solutions for equitable access to quality education, focusing on underserved communities worldwide.
                </p>
                <div className="flex gap-2">
                  <span className="bg-blue-500/30 text-blue-100 text-sm px-3 py-1 rounded-full font-medium">18 Contributors</span>
                </div>
              </div>
            </Link>
            <Link href="/challenges/healthcare" className="group">
              <div className="bg-blue-800/50 p-6 rounded-xl border border-white/5 hover:bg-blue-800/70 transition-all">
                <div className="flex justify-between items-start mb-3">
                  <h3 className="text-xl font-bold text-white">Healthcare</h3>
                  <span className="bg-yellow-500/30 text-yellow-100 text-sm px-3 py-1 rounded-full font-medium">In Development</span>
                </div>
                <p className="text-blue-100 leading-relaxed mb-4">
                  Developing innovative approaches to make healthcare accessible and affordable for everyone, everywhere.
                </p>
                <div className="flex gap-2">
                  <span className="bg-blue-500/30 text-blue-100 text-sm px-3 py-1 rounded-full font-medium">15 Contributors</span>
                </div>
              </div>
            </Link>
          </div>
        </div>

        <div className="space-y-6 md:space-y-0 flex flex-col md:flex-row gap-4 md:gap-6 justify-center items-center">
          <Link 
            href="/join"
            className="w-full md:w-auto bg-blue-500 hover:bg-blue-600 text-white px-12 py-4 rounded-full font-semibold transition-all shadow-lg hover:shadow-xl text-lg"
          >
            Join the DAO
          </Link>
          <Link 
            href="/challenges" 
            className="w-full md:w-auto bg-white/10 hover:bg-white/20 px-12 py-4 rounded-full font-semibold transition-all shadow-lg hover:shadow-xl text-lg"
          >
            View All Challenges
          </Link>
          <Link 
            href="/how-it-works" 
            className="w-full md:w-auto bg-white/10 hover:bg-white/20 px-12 py-4 rounded-full font-semibold transition-all shadow-lg hover:shadow-xl text-lg"
          >
            How It Works
          </Link>
          <Link 
            href="/tokenomics" 
            className="w-full md:w-auto bg-white/10 hover:bg-white/20 px-12 py-4 rounded-full font-semibold transition-all shadow-lg hover:shadow-xl text-lg"
          >
            Earn Rewards
          </Link>
          <Link 
            href="/vision" 
            className="w-full md:w-auto bg-white/10 hover:bg-white/20 px-12 py-4 rounded-full font-semibold transition-all shadow-lg hover:shadow-xl text-lg"
          >
            Our Vision
          </Link>
          <Link 
            href="/faq" 
            className="w-full md:w-auto bg-white/10 hover:bg-white/20 px-12 py-4 rounded-full font-semibold transition-all shadow-lg hover:shadow-xl text-lg"
          >
            FAQ
          </Link>
        </div>
      </div>
    </main>
  );
}
