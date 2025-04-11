import Link from 'next/link';

export default function JoinBetaProgram() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-blue-900 via-blue-800 to-blue-700 text-white p-4 md:p-8">
      <div className="max-w-4xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <div>
            <Link 
              href="/challenges/mental-health/music-therapy/adaptive-meditation"
              className="text-blue-200 hover:text-white mb-4 inline-block font-medium"
            >
              ← Back to Adaptive Music Meditation
            </Link>
            <h1 className="text-4xl md:text-5xl font-bold text-white">
              Join the Beta Program
            </h1>
          </div>
          <div className="flex gap-2">
            <span className="bg-green-500/30 text-green-100 text-sm px-3 py-1 rounded-full font-medium">DAO Member</span>
            <span className="bg-blue-500/30 text-blue-100 text-sm px-3 py-1 rounded-full font-medium">Early Access</span>
          </div>
        </div>

        <div className="space-y-8">
          {/* Member Status */}
          <section className="bg-blue-900/50 backdrop-blur-lg rounded-2xl p-6 border border-white/10 shadow-xl">
            <h2 className="text-2xl font-bold mb-4 text-white">Your DAO Member Status</h2>
            <div className="grid md:grid-cols-3 gap-4 mb-4">
              <div className="bg-blue-800/50 p-4 rounded-xl border border-white/5 text-center">
                <div className="text-3xl font-bold text-blue-300 mb-2">125</div>
                <div className="text-blue-100 font-medium">LUM Tokens</div>
              </div>
              <div className="bg-blue-800/50 p-4 rounded-xl border border-white/5 text-center">
                <div className="text-3xl font-bold text-blue-300 mb-2">7</div>
                <div className="text-blue-100 font-medium">Contributions</div>
              </div>
              <div className="bg-blue-800/50 p-4 rounded-xl border border-white/5 text-center">
                <div className="text-3xl font-bold text-blue-300 mb-2">1.7x</div>
                <div className="text-blue-100 font-medium">Voting Power</div>
              </div>
            </div>
            <p className="text-blue-100 leading-relaxed">
              As a DAO member with 7 contributions, you're eligible for priority access to the Adaptive Meditation Beta Program.
            </p>
          </section>

          {/* How the Beta Program Works */}
          <section className="bg-blue-900/50 backdrop-blur-lg rounded-2xl p-6 border border-white/10 shadow-xl">
            <h2 className="text-2xl font-bold mb-4 text-white">How the Beta Program Works</h2>
            <div className="grid gap-4">
              <div className="bg-blue-800/50 p-4 rounded-xl border border-white/5">
                <h3 className="text-xl font-bold mb-2 text-white">Program Overview</h3>
                <p className="text-blue-100 leading-relaxed mb-4">
                  The Adaptive Meditation Beta Program is a 6-month journey where you'll help test and refine our innovative meditation technology. You'll use the app regularly, provide feedback, and help shape the future of mental health technology.
                </p>
                <div className="flex gap-2">
                  <span className="bg-blue-500/30 text-blue-100 text-sm px-3 py-1 rounded-full font-medium">6 months</span>
                  <span className="bg-blue-500/30 text-blue-100 text-sm px-3 py-1 rounded-full font-medium">2-3 hours/week</span>
                  <span className="bg-blue-500/30 text-blue-100 text-sm px-3 py-1 rounded-full font-medium">Flexible schedule</span>
                </div>
              </div>
              
              <div className="bg-blue-800/50 p-4 rounded-xl border border-white/5">
                <h3 className="text-xl font-bold mb-2 text-white">What You'll Do</h3>
                <ul className="text-blue-100 leading-relaxed space-y-2">
                  <li>• <span className="font-medium">Daily Meditation Sessions:</span> Use the app for 10-15 minutes, 3 times per week</li>
                  <li>• <span className="font-medium">Weekly Feedback:</span> Submit detailed feedback on your experience (15-20 minutes)</li>
                  <li>• <span className="font-medium">Monthly Check-ins:</span> Participate in a 30-minute virtual meeting with the development team</li>
                  <li>• <span className="font-medium">Feature Testing:</span> Try new features as they're released and provide specific feedback</li>
                  <li>• <span className="font-medium">Community Engagement:</span> Share experiences with other beta testers in our private community</li>
                </ul>
              </div>
              
              <div className="bg-blue-800/50 p-4 rounded-xl border border-white/5">
                <h3 className="text-xl font-bold mb-2 text-white">Time Commitment</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-bold text-white mb-1">Weekly Commitment</h4>
                    <ul className="text-blue-100 leading-relaxed space-y-1">
                      <li>• 3 meditation sessions: 30-45 minutes total</li>
                      <li>• 1 feedback submission: 15-20 minutes</li>
                      <li>• <span className="font-medium">Total: 45-65 minutes per week</span></li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-bold text-white mb-1">Monthly Commitment</h4>
                    <ul className="text-blue-100 leading-relaxed space-y-1">
                      <li>• 12 meditation sessions: 2-3 hours total</li>
                      <li>• 4 feedback submissions: 1-1.5 hours total</li>
                      <li>• 1 team check-in: 30 minutes</li>
                      <li>• <span className="font-medium">Total: 3.5-5 hours per month</span></li>
                    </ul>
                  </div>
                </div>
              </div>
              
              <div className="bg-blue-800/50 p-4 rounded-xl border border-white/5">
                <h3 className="text-xl font-bold mb-2 text-white">Program Timeline</h3>
                <div className="relative pl-6 border-l-2 border-blue-500/50">
                  <div className="mb-4">
                    <div className="absolute -left-2 w-4 h-4 rounded-full bg-blue-500"></div>
                    <h4 className="font-bold text-white">Week 1-2: Onboarding</h4>
                    <p className="text-blue-100 leading-relaxed">Complete setup, initial training, and first meditation session</p>
                  </div>
                  <div className="mb-4">
                    <div className="absolute -left-2 w-4 h-4 rounded-full bg-blue-500"></div>
                    <h4 className="font-bold text-white">Week 3-8: Core Testing</h4>
                    <p className="text-blue-100 leading-relaxed">Regular meditation sessions and feedback on core features</p>
                  </div>
                  <div className="mb-4">
                    <div className="absolute -left-2 w-4 h-4 rounded-full bg-blue-500"></div>
                    <h4 className="font-bold text-white">Month 3-4: Feature Expansion</h4>
                    <p className="text-blue-100 leading-relaxed">Test new features and provide detailed feedback on improvements</p>
                  </div>
                  <div className="mb-4">
                    <div className="absolute -left-2 w-4 h-4 rounded-full bg-blue-500"></div>
                    <h4 className="font-bold text-white">Month 5-6: Refinement</h4>
                    <p className="text-blue-100 leading-relaxed">Final testing of refined features and preparation for public release</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* What You Need to Do */}
          <section className="bg-blue-900/50 backdrop-blur-lg rounded-2xl p-6 border border-white/10 shadow-xl">
            <h2 className="text-2xl font-bold mb-4 text-white">Getting Started</h2>
            <div className="grid gap-4">
              <div className="bg-blue-800/50 p-4 rounded-xl border border-white/5">
                <h3 className="text-xl font-bold mb-2 text-white">Step 1: Confirm Participation</h3>
                <p className="text-blue-100 leading-relaxed mb-2">
                  As a DAO member, you're pre-approved. Simply confirm your participation to secure your spot.
                </p>
                <div className="flex gap-2">
                  <span className="bg-blue-500/30 text-blue-100 text-sm px-3 py-1 rounded-full font-medium">2 minutes</span>
                </div>
              </div>
              <div className="bg-blue-800/50 p-4 rounded-xl border border-white/5">
                <h3 className="text-xl font-bold mb-2 text-white">Step 2: Complete Profile</h3>
                <p className="text-blue-100 leading-relaxed mb-2">
                  Provide device details, meditation experience, and preferred times for check-ins.
                </p>
                <div className="flex gap-2">
                  <span className="bg-blue-500/30 text-blue-100 text-sm px-3 py-1 rounded-full font-medium">5 minutes</span>
                </div>
              </div>
              <div className="bg-blue-800/50 p-4 rounded-xl border border-white/5">
                <h3 className="text-xl font-bold mb-2 text-white">Step 3: Onboarding Session</h3>
                <p className="text-blue-100 leading-relaxed mb-2">
                  Attend a 30-minute virtual onboarding session to learn how to use the app and understand the beta process.
                </p>
                <div className="flex gap-2">
                  <span className="bg-blue-500/30 text-blue-100 text-sm px-3 py-1 rounded-full font-medium">30 minutes</span>
                </div>
              </div>
              <div className="bg-blue-800/50 p-4 rounded-xl border border-white/5">
                <h3 className="text-xl font-bold mb-2 text-white">Step 4: Start Using the Beta</h3>
                <p className="text-blue-100 leading-relaxed mb-2">
                  Begin your meditation sessions and provide feedback according to the schedule.
                </p>
                <div className="flex gap-2">
                  <span className="bg-blue-500/30 text-blue-100 text-sm px-3 py-1 rounded-full font-medium">Day 1</span>
                </div>
              </div>
            </div>
          </section>

          {/* LUM Rewards */}
          <section className="bg-blue-900/50 backdrop-blur-lg rounded-2xl p-6 border border-white/10 shadow-xl">
            <h2 className="text-2xl font-bold mb-4 text-white">LUM Rewards</h2>
            <div className="grid gap-4">
              <div className="bg-blue-800/50 p-4 rounded-xl border border-white/5">
                <h3 className="text-xl font-bold mb-2 text-white">Base Reward</h3>
                <p className="text-blue-100 leading-relaxed mb-2">
                  <span className="text-2xl font-bold text-green-300">50 LUM</span> tokens for joining the beta program.
                </p>
              </div>
              <div className="bg-blue-800/50 p-4 rounded-xl border border-white/5">
                <h3 className="text-xl font-bold mb-2 text-white">Participation Rewards</h3>
                <p className="text-blue-100 leading-relaxed mb-2">
                  <span className="text-2xl font-bold text-green-300">10 LUM</span> tokens per month for regular participation (minimum 3 sessions per week).
                </p>
              </div>
              <div className="bg-blue-800/50 p-4 rounded-xl border border-white/5">
                <h3 className="text-xl font-bold mb-2 text-white">Feedback Rewards</h3>
                <p className="text-blue-100 leading-relaxed mb-2">
                  <span className="text-2xl font-bold text-green-300">5 LUM</span> tokens for each detailed feedback submission.
                </p>
              </div>
              <div className="bg-blue-800/50 p-4 rounded-xl border border-white/5">
                <h3 className="text-xl font-bold mb-2 text-white">Completion Bonus</h3>
                <p className="text-blue-100 leading-relaxed mb-2">
                  <span className="text-2xl font-bold text-green-300">100 LUM</span> tokens for completing the full 6-month beta program.
                </p>
              </div>
            </div>
            <div className="mt-4 bg-green-800/30 p-4 rounded-xl border border-green-500/20">
              <h3 className="text-xl font-bold mb-2 text-white">Total Potential Earnings</h3>
              <p className="text-blue-100 leading-relaxed">
                <span className="text-3xl font-bold text-green-300">210 LUM</span> tokens over 6 months (50 base + 60 monthly + 60 feedback + 100 completion bonus)
              </p>
            </div>
          </section>

          {/* Requirements */}
          <section className="bg-blue-900/50 backdrop-blur-lg rounded-2xl p-6 border border-white/10 shadow-xl">
            <h2 className="text-2xl font-bold mb-4 text-white">Requirements</h2>
            <div className="grid gap-4">
              <div className="bg-blue-800/50 p-4 rounded-xl border border-white/5">
                <h3 className="text-xl font-bold mb-2 text-white">Technical Requirements</h3>
                <ul className="text-blue-100 leading-relaxed space-y-1">
                  <li>• Compatible smartphone or tablet (iOS 14+ or Android 10+)</li>
                  <li>• Stable internet connection</li>
                  <li>• Compatible biofeedback device (optional but recommended)</li>
                  <li>• Quiet space for meditation sessions</li>
                </ul>
              </div>
              <div className="bg-blue-800/50 p-4 rounded-xl border border-white/5">
                <h3 className="text-xl font-bold mb-2 text-white">Commitment</h3>
                <ul className="text-blue-100 leading-relaxed space-y-1">
                  <li>• Minimum 3 sessions per week (10-15 minutes each)</li>
                  <li>• Weekly feedback submission (15-20 minutes)</li>
                  <li>• Monthly check-in meeting (30 minutes)</li>
                  <li>• 3-month minimum participation</li>
                </ul>
              </div>
              <div className="bg-blue-800/50 p-4 rounded-xl border border-white/5">
                <h3 className="text-xl font-bold mb-2 text-white">What We're Looking For</h3>
                <ul className="text-blue-100 leading-relaxed space-y-1">
                  <li>• Honest, detailed feedback on your experience</li>
                  <li>• Consistent participation throughout the program</li>
                  <li>• Willingness to try new features and provide constructive criticism</li>
                  <li>• Respect for the privacy of other beta testers</li>
                </ul>
              </div>
            </div>
          </section>
        </div>

        <div className="mt-8 flex flex-col md:flex-row justify-center gap-4">
          <button className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-3 rounded-full font-semibold transition-all shadow-lg hover:shadow-xl text-center">
            Confirm Participation
          </button>
          <Link 
            href="/challenges/mental-health/music-therapy/adaptive-meditation"
            className="bg-white/10 hover:bg-white/20 text-white px-8 py-3 rounded-full font-semibold transition-all shadow-lg hover:shadow-xl text-center"
          >
            Learn More About the Project
          </Link>
        </div>
        <p className="mt-4 text-center text-blue-200 text-sm font-medium">
          As a DAO member, you're pre-approved for the beta program. Limited spots available.
        </p>
      </div>
    </main>
  );
} 