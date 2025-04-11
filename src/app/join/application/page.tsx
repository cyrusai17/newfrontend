import Link from 'next/link';

export default function Application() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-blue-900 via-blue-800 to-blue-700 text-white p-4 md:p-8">
      <div className="max-w-4xl mx-auto">
        <div className="flex justify-between items-center mb-12">
          <div>
            <Link 
              href="/join"
              className="text-blue-200 hover:text-white mb-4 inline-block font-medium"
            >
              ← Back to Join
            </Link>
            <h1 className="text-4xl md:text-5xl font-bold text-white">
              Application Form
            </h1>
          </div>
          <div className="flex gap-2">
            <span className="bg-blue-500/30 text-blue-100 text-sm px-3 py-1 rounded-full font-medium">Beta Access</span>
          </div>
        </div>

        <div className="space-y-12">
          {/* Application Form */}
          <section className="bg-blue-900/50 backdrop-blur-lg rounded-2xl p-8 border border-white/10 shadow-xl">
            <h2 className="text-2xl md:text-3xl font-bold mb-6 text-white">Complete Your Application</h2>
            <p className="text-blue-100 leading-relaxed mb-8">
              Please fill out the form below to apply for membership. All information is kept confidential and used only for verification purposes.
            </p>
            
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="username" className="block text-sm font-medium text-blue-100 mb-2">Username</label>
                  <input 
                    type="text" 
                    id="username" 
                    className="w-full bg-blue-800/50 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Choose a username"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-blue-100 mb-2">Email</label>
                  <input 
                    type="email" 
                    id="email" 
                    className="w-full bg-blue-800/50 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Your email address"
                    required
                  />
                  <p className="mt-1 text-sm text-blue-300">
                    For privacy, consider using an anonymous email service
                  </p>
                </div>
              </div>
              
              <div>
                <label htmlFor="motivation" className="block text-sm font-medium text-blue-100 mb-2">Why do you want to join Lumadao?</label>
                <textarea 
                  id="motivation" 
                  rows={4}
                  className="w-full bg-blue-800/50 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Tell us about your interest in solving global challenges..."
                  required
                ></textarea>
              </div>
              
              <div>
                <label htmlFor="expertise" className="block text-sm font-medium text-blue-100 mb-2">What expertise or skills can you contribute?</label>
                <textarea 
                  id="expertise" 
                  rows={4}
                  className="w-full bg-blue-800/50 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Describe your skills, experience, or areas of expertise..."
                  required
                ></textarea>
              </div>
              
              <div>
                <label htmlFor="challenges" className="block text-sm font-medium text-blue-100 mb-2">Which challenges interest you most?</label>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="flex items-center">
                    <input type="checkbox" id="climate-change" className="mr-2 h-5 w-5 text-blue-500 rounded border-white/10 bg-blue-800/50" />
                    <label htmlFor="climate-change" className="text-blue-100">Climate Change</label>
                  </div>
                  <div className="flex items-center">
                    <input type="checkbox" id="mental-health" className="mr-2 h-5 w-5 text-blue-500 rounded border-white/10 bg-blue-800/50" />
                    <label htmlFor="mental-health" className="text-blue-100">Mental Health & Wellness</label>
                  </div>
                  <div className="flex items-center">
                    <input type="checkbox" id="education-access" className="mr-2 h-5 w-5 text-blue-500 rounded border-white/10 bg-blue-800/50" />
                    <label htmlFor="education-access" className="text-blue-100">Education Access</label>
                  </div>
                  <div className="flex items-center">
                    <input type="checkbox" id="healthcare" className="mr-2 h-5 w-5 text-blue-500 rounded border-white/10 bg-blue-800/50" />
                    <label htmlFor="healthcare" className="text-blue-100">Healthcare Access</label>
                  </div>
                  <div className="flex items-center">
                    <input type="checkbox" id="poverty-inequality" className="mr-2 h-5 w-5 text-blue-500 rounded border-white/10 bg-blue-800/50" />
                    <label htmlFor="poverty-inequality" className="text-blue-100">Poverty & Inequality</label>
                  </div>
                  <div className="flex items-center">
                    <input type="checkbox" id="food-security" className="mr-2 h-5 w-5 text-blue-500 rounded border-white/10 bg-blue-800/50" />
                    <label htmlFor="food-security" className="text-blue-100">Food Security</label>
                  </div>
                  <div className="flex items-center">
                    <input type="checkbox" id="clean-water" className="mr-2 h-5 w-5 text-blue-500 rounded border-white/10 bg-blue-800/50" />
                    <label htmlFor="clean-water" className="text-blue-100">Clean Water Access</label>
                  </div>
                  <div className="flex items-center">
                    <input type="checkbox" id="renewable-energy" className="mr-2 h-5 w-5 text-blue-500 rounded border-white/10 bg-blue-800/50" />
                    <label htmlFor="renewable-energy" className="text-blue-100">Renewable Energy</label>
                  </div>
                  <div className="flex items-center">
                    <input type="checkbox" id="biodiversity" className="mr-2 h-5 w-5 text-blue-500 rounded border-white/10 bg-blue-800/50" />
                    <label htmlFor="biodiversity" className="text-blue-100">Biodiversity Loss</label>
                  </div>
                  <div className="flex items-center">
                    <input type="checkbox" id="digital-inclusion" className="mr-2 h-5 w-5 text-blue-500 rounded border-white/10 bg-blue-800/50" />
                    <label htmlFor="digital-inclusion" className="text-blue-100">Digital Inclusion</label>
                  </div>
                  <div className="flex items-center">
                    <input type="checkbox" id="sustainable-cities" className="mr-2 h-5 w-5 text-blue-500 rounded border-white/10 bg-blue-800/50" />
                    <label htmlFor="sustainable-cities" className="text-blue-100">Sustainable Cities</label>
                  </div>
                  <div className="flex items-center">
                    <input type="checkbox" id="gender-equality" className="mr-2 h-5 w-5 text-blue-500 rounded border-white/10 bg-blue-800/50" />
                    <label htmlFor="gender-equality" className="text-blue-100">Gender Equality</label>
                  </div>
                  <div className="flex items-center">
                    <input type="checkbox" id="refugee-crisis" className="mr-2 h-5 w-5 text-blue-500 rounded border-white/10 bg-blue-800/50" />
                    <label htmlFor="refugee-crisis" className="text-blue-100">Refugee Crisis</label>
                  </div>
                  <div className="flex items-center">
                    <input type="checkbox" id="ocean-conservation" className="mr-2 h-5 w-5 text-blue-500 rounded border-white/10 bg-blue-800/50" />
                    <label htmlFor="ocean-conservation" className="text-blue-100">Ocean Conservation</label>
                  </div>
                  <div className="flex items-center">
                    <input type="checkbox" id="air-quality" className="mr-2 h-5 w-5 text-blue-500 rounded border-white/10 bg-blue-800/50" />
                    <label htmlFor="air-quality" className="text-blue-100">Air Quality</label>
                  </div>
                  <div className="flex items-center">
                    <input type="checkbox" id="disaster-preparedness" className="mr-2 h-5 w-5 text-blue-500 rounded border-white/10 bg-blue-800/50" />
                    <label htmlFor="disaster-preparedness" className="text-blue-100">Disaster Preparedness</label>
                  </div>
                  <div className="flex items-center">
                    <input type="checkbox" id="aging-population" className="mr-2 h-5 w-5 text-blue-500 rounded border-white/10 bg-blue-800/50" />
                    <label htmlFor="aging-population" className="text-blue-100">Aging Population</label>
                  </div>
                  <div className="flex items-center">
                    <input type="checkbox" id="infectious-diseases" className="mr-2 h-5 w-5 text-blue-500 rounded border-white/10 bg-blue-800/50" />
                    <label htmlFor="infectious-diseases" className="text-blue-100">Infectious Diseases</label>
                  </div>
                  <div className="flex items-center">
                    <input type="checkbox" id="cybersecurity" className="mr-2 h-5 w-5 text-blue-500 rounded border-white/10 bg-blue-800/50" />
                    <label htmlFor="cybersecurity" className="text-blue-100">Cybersecurity</label>
                  </div>
                  <div className="flex items-center">
                    <input type="checkbox" id="democratic-decline" className="mr-2 h-5 w-5 text-blue-500 rounded border-white/10 bg-blue-800/50" />
                    <label htmlFor="democratic-decline" className="text-blue-100">Democratic Decline</label>
                  </div>
                  <div className="flex items-center">
                    <input type="checkbox" id="indigenous-rights" className="mr-2 h-5 w-5 text-blue-500 rounded border-white/10 bg-blue-800/50" />
                    <label htmlFor="indigenous-rights" className="text-blue-100">Indigenous Rights</label>
                  </div>
                </div>
              </div>
              
              <div className="flex items-start mb-8">
                <input
                  type="checkbox"
                  id="terms"
                  name="terms"
                  className="mt-1 mr-3"
                  required
                />
                <label htmlFor="terms" className="text-blue-100">
                  I agree to the <Link href="/terms" className="text-blue-300 hover:text-blue-200 underline">Terms of Service</Link> and <Link href="/privacy" className="text-blue-300 hover:text-blue-200 underline">Privacy Policy</Link>
                </label>
              </div>
              
              <div className="pt-4">
                <button 
                  type="submit" 
                  className="w-full bg-blue-500 hover:bg-blue-600 text-white px-8 py-4 rounded-full font-semibold transition-all shadow-lg hover:shadow-xl text-lg"
                >
                  Submit Application
                </button>
              </div>
            </form>
          </section>
          
          {/* Next Steps */}
          <section className="bg-blue-900/50 backdrop-blur-lg rounded-2xl p-8 border border-white/10 shadow-xl">
            <h2 className="text-2xl md:text-3xl font-bold mb-6 text-white">Next Steps</h2>
            <div className="grid gap-6">
              <div className="bg-blue-800/50 p-6 rounded-xl border border-white/5">
                <h3 className="text-xl font-bold mb-3 text-white">1. Application Review</h3>
                <p className="text-blue-100 leading-relaxed">
                  Our team will review your application within 48 hours. We'll notify you via email about the status of your application.
                </p>
              </div>
              <div className="bg-blue-800/50 p-6 rounded-xl border border-white/5">
                <h3 className="text-xl font-bold mb-3 text-white">2. Verification</h3>
                <p className="text-blue-100 leading-relaxed">
                  If approved, you'll receive instructions for completing the verification process. This helps ensure the security and integrity of our community.
                </p>
              </div>
              <div className="bg-blue-800/50 p-6 rounded-xl border border-white/5">
                <h3 className="text-xl font-bold mb-3 text-white">3. Onboarding</h3>
                <p className="text-blue-100 leading-relaxed">
                  Once verified, you'll be guided through the onboarding process, including setting up your wallet and receiving your initial tokens.
                </p>
              </div>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
} 