import Link from 'next/link';

export default function ProposeMusicTherapyProject() {
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
              Propose New Project
            </h1>
            <p className="text-blue-200 text-lg mt-2">Share your innovative music therapy idea with the community</p>
          </div>
          <div className="flex gap-2">
            <span className="bg-blue-500/30 text-blue-100 text-sm px-3 py-1 rounded-full font-medium">Community Driven</span>
          </div>
        </div>

        {/* Project Proposal Form */}
        <div className="bg-blue-900/50 backdrop-blur-lg rounded-2xl p-6 border border-white/10 shadow-xl mb-8">
          <h2 className="text-2xl font-bold mb-6 text-white">Project Details</h2>
          
          <form className="space-y-6">
            <div>
              <label htmlFor="project-name" className="block text-blue-200 mb-2 font-medium">Project Name</label>
              <input 
                type="text" 
                id="project-name" 
                className="w-full bg-blue-800/50 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-blue-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter a descriptive name for your project"
              />
            </div>
            
            <div>
              <label htmlFor="project-description" className="block text-blue-200 mb-2 font-medium">Project Description</label>
              <textarea 
                id="project-description" 
                rows={5}
                className="w-full bg-blue-800/50 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-blue-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Describe your project idea, its goals, and how it will benefit mental health through music therapy"
              ></textarea>
            </div>
            
            <div>
              <label htmlFor="project-category" className="block text-blue-200 mb-2 font-medium">Category</label>
              <select 
                id="project-category" 
                className="w-full bg-blue-800/50 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="">Select a category</option>
                <option value="digital-tool">Digital Tool</option>
                <option value="community-program">Community Program</option>
                <option value="research">Research Study</option>
                <option value="educational">Educational Resource</option>
                <option value="other">Other</option>
              </select>
            </div>
            
            <div>
              <label htmlFor="project-skills" className="block text-blue-200 mb-2 font-medium">Required Skills</label>
              <div className="flex flex-wrap gap-2 mb-2">
                <span className="bg-blue-500/30 text-blue-100 text-sm px-3 py-1 rounded-full font-medium">Web Development</span>
                <span className="bg-blue-500/30 text-blue-100 text-sm px-3 py-1 rounded-full font-medium">Music Therapy</span>
                <span className="bg-blue-500/30 text-blue-100 text-sm px-3 py-1 rounded-full font-medium">UI/UX Design</span>
                <span className="bg-blue-500/30 text-blue-100 text-sm px-3 py-1 rounded-full font-medium">+ Add Skill</span>
              </div>
              <input 
                type="text" 
                id="project-skills" 
                className="w-full bg-blue-800/50 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-blue-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Type a skill and press Enter"
              />
            </div>
            
            <div>
              <label htmlFor="project-timeline" className="block text-blue-200 mb-2 font-medium">Estimated Timeline</label>
              <select 
                id="project-timeline" 
                className="w-full bg-blue-800/50 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="">Select timeline</option>
                <option value="1-3-months">1-3 months</option>
                <option value="3-6-months">3-6 months</option>
                <option value="6-12-months">6-12 months</option>
                <option value="12-plus-months">12+ months</option>
              </select>
            </div>
            
            <div>
              <label htmlFor="project-resources" className="block text-blue-200 mb-2 font-medium">Required Resources</label>
              <textarea 
                id="project-resources" 
                rows={3}
                className="w-full bg-blue-800/50 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-blue-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Describe any resources, funding, or support needed for this project"
              ></textarea>
            </div>
            
            <div className="pt-4">
              <button 
                type="submit" 
                className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-3 rounded-full font-medium transition-all shadow-lg hover:shadow-xl"
              >
                Submit Proposal
              </button>
            </div>
          </form>
        </div>

        {/* Proposal Guidelines */}
        <div className="bg-blue-900/50 backdrop-blur-lg rounded-2xl p-6 border border-white/10 shadow-xl mb-8">
          <h2 className="text-2xl font-bold mb-4 text-white">Proposal Guidelines</h2>
          <div className="space-y-4">
            <div className="flex items-start gap-3">
              <div className="w-6 h-6 bg-blue-500/30 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                <span className="text-blue-200 font-bold">1</span>
              </div>
              <div>
                <h3 className="text-lg font-bold text-white mb-1">Be Specific</h3>
                <p className="text-blue-100">Clearly define your project's goals, target audience, and expected outcomes.</p>
              </div>
            </div>
            
            <div className="flex items-start gap-3">
              <div className="w-6 h-6 bg-blue-500/30 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                <span className="text-blue-200 font-bold">2</span>
              </div>
              <div>
                <h3 className="text-lg font-bold text-white mb-1">Show Innovation</h3>
                <p className="text-blue-100">Explain how your project brings a unique approach to music therapy or mental health.</p>
              </div>
            </div>
            
            <div className="flex items-start gap-3">
              <div className="w-6 h-6 bg-blue-500/30 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                <span className="text-blue-200 font-bold">3</span>
              </div>
              <div>
                <h3 className="text-lg font-bold text-white mb-1">Consider Feasibility</h3>
                <p className="text-blue-100">Provide realistic timelines and resource requirements that align with community capabilities.</p>
              </div>
            </div>
            
            <div className="flex items-start gap-3">
              <div className="w-6 h-6 bg-blue-500/30 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                <span className="text-blue-200 font-bold">4</span>
              </div>
              <div>
                <h3 className="text-lg font-bold text-white mb-1">Highlight Impact</h3>
                <p className="text-blue-100">Describe how your project will benefit mental health outcomes and the broader community.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-12 text-center">
          <p className="text-blue-200 mb-4">Need help with your proposal?</p>
          <Link href="/challenges/mental-health/music-therapy/contribute">
            <button className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-3 rounded-full font-medium transition-all shadow-lg hover:shadow-xl">
              Browse Existing Projects
            </button>
          </Link>
        </div>
      </div>
    </main>
  );
} 