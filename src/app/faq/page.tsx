import Link from 'next/link';

export default function FAQ() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-blue-900 via-blue-800 to-blue-700 text-white p-4 md:p-8">
      <div className="max-w-4xl mx-auto">
        <div className="flex justify-between items-center mb-12">
          <div>
            <Link 
              href="/"
              className="text-blue-200 hover:text-white mb-4 inline-block font-medium"
            >
              ← Back to Home
            </Link>
            <h1 className="text-4xl md:text-5xl font-bold text-white">
              Frequently Asked Questions
            </h1>
          </div>
          <div className="flex gap-2">
            <span className="bg-blue-500/30 text-blue-100 text-sm px-3 py-1 rounded-full font-medium">Updated Daily</span>
          </div>
        </div>

        <div className="space-y-12">
          {/* General Questions */}
          <section className="bg-blue-900/50 backdrop-blur-lg rounded-2xl p-8 border border-white/10 shadow-xl">
            <h2 className="text-2xl md:text-3xl font-bold mb-6 text-white">General Questions</h2>
            <div className="space-y-6">
              <div className="bg-blue-800/50 p-6 rounded-xl border border-white/5">
                <h3 className="text-xl font-bold mb-3 text-white">What is Lumadao?</h3>
                <p className="text-blue-100 leading-relaxed">
                  Lumadao is a decentralized autonomous organization (DAO) focused on solving humanity's greatest challenges through collaborative problem-solving. We bring together innovators, experts, and community members to work on solutions for issues like climate change, mental health, education access, and healthcare.
                </p>
              </div>
              <div className="bg-blue-800/50 p-6 rounded-xl border border-white/5">
                <h3 className="text-xl font-bold mb-3 text-white">How does the DAO work?</h3>
                <p className="text-blue-100 leading-relaxed">
                  Our DAO operates through a democratic voting system where members can propose solutions, vote on initiatives, and contribute to projects. Members earn tokens for their contributions, which can be used for voting or exchanged for benefits. All decisions are made transparently through smart contracts on the blockchain.
                </p>
              </div>
              <div className="bg-blue-800/50 p-6 rounded-xl border border-white/5">
                <h3 className="text-xl font-bold mb-3 text-white">Who can join Lumadao?</h3>
                <p className="text-blue-100 leading-relaxed">
                  Anyone with a passion for solving global challenges can join Lumadao. We welcome innovators, experts, community members, and anyone interested in contributing to positive change. The only requirements are completing our verification process and agreeing to our community guidelines.
                </p>
              </div>
              <div className="bg-blue-800/50 p-6 rounded-xl border border-white/5">
                <h3 className="text-xl font-bold mb-3 text-white">Is the platform anonymous?</h3>
                <p className="text-blue-100 leading-relaxed">
                  Yes, Lumadao is designed to be anonymous. While we require basic verification to prevent abuse, you can use a pseudonym and are not required to use your real identity. Your contributions and votes are recorded on the blockchain with your chosen username, not your real name. We prioritize privacy and allow you to control how much personal information you share with the community.
                </p>
              </div>
              <div className="bg-blue-800/50 p-6 rounded-xl border border-white/5">
                <h3 className="text-xl font-bold mb-3 text-white">Why is the platform anonymous?</h3>
                <p className="text-blue-100 leading-relaxed">
                  We've designed Lumadao to be anonymous for several important reasons: First, it allows people to contribute ideas without fear of judgment or professional repercussions. Second, it creates a level playing field where contributions are evaluated based on merit rather than reputation or credentials. Third, it protects vulnerable populations who may be working on sensitive issues. Fourth, it encourages honest feedback and diverse perspectives that might otherwise be withheld due to social pressures. Finally, it aligns with our commitment to privacy and data protection in an increasingly connected world.
                </p>
              </div>
              <div className="bg-blue-800/50 p-6 rounded-xl border border-white/5">
                <h3 className="text-xl font-bold mb-3 text-white">How do you ensure the platform is used for good?</h3>
                <p className="text-blue-100 leading-relaxed">
                  We have multiple safeguards to ensure Lumadao is used for positive purposes: First, our community guidelines explicitly prohibit harmful content and activities. Second, we use AI-powered content moderation to detect and remove inappropriate content. Third, our verification process helps prevent abuse while maintaining anonymity. Fourth, the DAO governance model allows the community to vote on and remove harmful projects. Fifth, we maintain transparency by recording all significant actions on the blockchain. Finally, we have a dedicated ethics committee that reviews projects and can intervene if necessary. Our goal is to create a safe, productive environment for solving humanity's challenges.
                </p>
              </div>
            </div>
          </section>

          {/* Membership & Rewards */}
          <section className="bg-blue-900/50 backdrop-blur-lg rounded-2xl p-8 border border-white/10 shadow-xl">
            <h2 className="text-2xl md:text-3xl font-bold mb-6 text-white">Membership & Rewards</h2>
            <div className="space-y-6">
              <div className="bg-blue-800/50 p-6 rounded-xl border border-white/5">
                <h3 className="text-xl font-bold mb-3 text-white">How do I earn rewards?</h3>
                <p className="text-blue-100 leading-relaxed">
                  You can earn rewards by contributing to projects, participating in voting, providing valuable feedback, or helping implement solutions. The more meaningful your contributions, the more tokens you earn. Early members also receive bonus rewards for helping shape the platform.
                </p>
              </div>
              <div className="bg-blue-800/50 p-6 rounded-xl border border-white/5">
                <h3 className="text-xl font-bold mb-3 text-white">What can I do with my tokens?</h3>
                <p className="text-blue-100 leading-relaxed">
                  Tokens can be used to vote on proposals, access premium resources, participate in exclusive events, or exchange for services and products. You can also stake your tokens to increase your voting power and earn additional rewards.
                </p>
              </div>
              <div className="bg-blue-800/50 p-6 rounded-xl border border-white/5">
                <h3 className="text-xl font-bold mb-3 text-white">Can I contribute money to earn LUM tokens?</h3>
                <p className="text-blue-100 leading-relaxed">
                  Yes, you can contribute funds to the DAO to earn LUM tokens. This is done through our token purchase program, where you can buy LUM tokens directly. Additionally, you can participate in our staking program, where you lock up your tokens for a period to earn additional rewards. The amount of tokens you receive is based on current market rates and may include bonus tokens for early supporters. All financial contributions are transparently recorded on the blockchain.
                </p>
              </div>
              <div className="bg-blue-800/50 p-6 rounded-xl border border-white/5">
                <h3 className="text-xl font-bold mb-3 text-white">How can I convert LUM tokens to cash?</h3>
                <p className="text-blue-100 leading-relaxed">
                  LUM tokens can be converted to cash through several methods: First, you can sell your tokens on supported cryptocurrency exchanges where LUM is listed. Second, you can use our built-in token swap feature to exchange LUM for other cryptocurrencies like Ethereum or stablecoins, which can then be converted to fiat currency. Third, you can use our partner services that allow direct conversion to your local currency. Please note that token value can fluctuate, and there may be fees associated with these conversions. We recommend checking current exchange rates and fees before making any conversions.
                </p>
              </div>
              <div className="bg-blue-800/50 p-6 rounded-xl border border-white/5">
                <h3 className="text-xl font-bold mb-3 text-white">Is there a minimum contribution requirement?</h3>
                <p className="text-blue-100 leading-relaxed">
                  No, there is no minimum contribution requirement. You can participate as much or as little as you'd like. However, more active participation leads to greater rewards and influence within the DAO.
                </p>
              </div>
            </div>
          </section>

          {/* Governance & Resources */}
          <section className="bg-blue-900/50 backdrop-blur-lg rounded-2xl p-8 border border-white/10 shadow-xl">
            <h2 className="text-2xl md:text-3xl font-bold mb-6 text-white">Governance & Resources</h2>
            <div className="space-y-6">
              <div className="bg-blue-800/50 p-6 rounded-xl border border-white/5">
                <h3 className="text-xl font-bold mb-3 text-white">Why do projects need to be voted on?</h3>
                <p className="text-blue-100 leading-relaxed">
                  Projects require community voting for several important reasons: First, it ensures that resources are allocated to the most impactful and feasible solutions. Second, it prevents the platform from being overwhelmed with low-quality or redundant projects. Third, it creates a merit-based system where the best ideas rise to the top. Fourth, it allows the community to collectively decide which challenges to prioritize. Fifth, it ensures transparency and fairness in resource allocation. Finally, it creates a sense of ownership and engagement among community members who have a say in the platform's direction.
                </p>
              </div>
              <div className="bg-blue-800/50 p-6 rounded-xl border border-white/5">
                <h3 className="text-xl font-bold mb-3 text-white">What happens when a project gets approved?</h3>
                <p className="text-blue-100 leading-relaxed">
                  When a project is approved through community voting, several things happen: First, the project is officially added to the Lumadao platform and receives a dedicated project page. Second, resources are allocated based on the voting results and the project's requirements. Third, a project team is formed, which may include the original proposer and other community members who expressed interest. Fourth, the project enters an implementation phase with milestones and deliverables. Fifth, progress is tracked and reported back to the community. Sixth, contributors to the project can earn tokens based on their participation and the project's success. The entire process is transparent and recorded on the blockchain.
                </p>
              </div>
              <div className="bg-blue-800/50 p-6 rounded-xl border border-white/5">
                <h3 className="text-xl font-bold mb-3 text-white">Who decides what resources get allocated?</h3>
                <p className="text-blue-100 leading-relaxed">
                  Resource allocation is determined through a combination of community voting and smart contract execution: First, the community votes on which projects to fund and how much funding each should receive. Second, the voting power of each member is weighted by their token holdings and contribution history. Third, smart contracts automatically execute the allocation based on the voting results. Fourth, a technical committee reviews the allocations to ensure they are feasible and within the DAO's capabilities. Fifth, the allocation is transparently recorded on the blockchain for everyone to verify. This decentralized approach ensures that no single entity has control over resource allocation, and decisions reflect the collective wisdom of the community.
                </p>
              </div>
              <div className="bg-blue-800/50 p-6 rounded-xl border border-white/5">
                <h3 className="text-xl font-bold mb-3 text-white">What resources are available for allocation?</h3>
                <p className="text-blue-100 leading-relaxed">
                  Lumadao has several types of resources that can be allocated to approved projects: First, financial resources in the form of LUM tokens or cryptocurrency, which can be used for development, marketing, or operational costs. Second, technical resources including access to our development infrastructure, APIs, and technical expertise from community members. Third, human resources in the form of community members who can contribute their skills and time to projects. Fourth, network resources including connections to partners, experts, and organizations in various fields. Fifth, educational resources such as training materials, workshops, and mentorship opportunities. Sixth, infrastructure resources including hosting, storage, and computing power. The specific resources available may vary over time as the DAO grows and evolves.
                </p>
              </div>
              <div className="bg-blue-800/50 p-6 rounded-xl border border-white/5">
                <h3 className="text-xl font-bold mb-3 text-white">How is the governance process structured?</h3>
                <p className="text-blue-100 leading-relaxed">
                  Our governance process follows a structured approach: First, any community member can submit a proposal for a new project, feature, or change to the platform. Second, proposals enter a 7-day discussion period where members can ask questions, suggest improvements, and debate the merits. Third, after the discussion period, proposals enter a 3-day voting period where members cast their votes using their LUM tokens. Fourth, proposals that receive more than 50% of the votes in favor are approved and move to implementation. Fifth, approved proposals are executed automatically through smart contracts. Sixth, progress is tracked and reported back to the community. This process ensures transparency, fairness, and efficient decision-making while giving all members a voice in the platform's direction.
                </p>
              </div>
            </div>
          </section>

          {/* Technical Questions */}
          <section className="bg-blue-900/50 backdrop-blur-lg rounded-2xl p-8 border border-white/10 shadow-xl">
            <h2 className="text-2xl md:text-3xl font-bold mb-6 text-white">Technical Questions</h2>
            <div className="space-y-6">
              <div className="bg-blue-800/50 p-6 rounded-xl border border-white/5">
                <h3 className="text-xl font-bold mb-3 text-white">Do I need a crypto wallet?</h3>
                <p className="text-blue-100 leading-relaxed">
                  Yes, you'll need a Web3 wallet to receive and manage your tokens. If you don't have one, we provide guidance on setting up a wallet during the onboarding process. We support popular wallets like MetaMask, WalletConnect, and others.
                </p>
              </div>
              <div className="bg-blue-800/50 p-6 rounded-xl border border-white/5">
                <h3 className="text-xl font-bold mb-3 text-white">How is my data protected?</h3>
                <p className="text-blue-100 leading-relaxed">
                  We use industry-standard encryption and security measures to protect your data. Your personal information is stored securely, and we never share it without your consent. The blockchain provides additional transparency and security for all transactions. You can use a pseudonym and are not required to use your real identity for participation.
                </p>
              </div>
              <div className="bg-blue-800/50 p-6 rounded-xl border border-white/5">
                <h3 className="text-xl font-bold mb-3 text-white">What blockchain do you use?</h3>
                <p className="text-blue-100 leading-relaxed">
                  We use Ethereum and compatible Layer 2 solutions for scalability and low transaction costs. This ensures fast, secure, and cost-effective operations while maintaining the security and decentralization of the Ethereum network.
                </p>
              </div>
            </div>
          </section>

          {/* Projects & Challenges */}
          <section className="bg-blue-900/50 backdrop-blur-lg rounded-2xl p-8 border border-white/10 shadow-xl">
            <h2 className="text-2xl md:text-3xl font-bold mb-6 text-white">Projects & Challenges</h2>
            <div className="space-y-6">
              <div className="bg-blue-800/50 p-6 rounded-xl border border-white/5">
                <h3 className="text-xl font-bold mb-3 text-white">How are projects selected?</h3>
                <p className="text-blue-100 leading-relaxed">
                  Projects are selected through a combination of community voting and expert review. Members can propose new projects, which are then evaluated based on impact potential, feasibility, and alignment with our mission. The community votes on which projects to fund and support.
                </p>
              </div>
              <div className="bg-blue-800/50 p-6 rounded-xl border border-white/5">
                <h3 className="text-xl font-bold mb-3 text-white">Can I propose my own project?</h3>
                <p className="text-blue-100 leading-relaxed">
                  Absolutely! We encourage members to propose their own projects. You'll need to provide details about the problem you're addressing, your proposed solution, and how you plan to implement it. The community will review and vote on your proposal.
                </p>
              </div>
              <div className="bg-blue-800/50 p-6 rounded-xl border border-white/5">
                <h3 className="text-xl font-bold mb-3 text-white">How can I contribute to existing projects?</h3>
                <p className="text-blue-100 leading-relaxed">
                  You can contribute to existing projects in various ways: providing expertise, helping with implementation, giving feedback, or participating in testing. Each project has a dedicated page where you can see what help is needed and how to get involved.
                </p>
              </div>
            </div>
          </section>
        </div>

        <div className="mt-12 text-center">
          <p className="text-blue-200 text-sm font-medium mb-4">
            Still have questions? We're here to help!
          </p>
          <Link 
            href="/join"
            className="inline-block bg-blue-500 hover:bg-blue-600 text-white px-12 py-4 rounded-full font-semibold transition-all shadow-lg hover:shadow-xl text-lg"
          >
            Contact Support
          </Link>
        </div>
      </div>
    </main>
  );
} 