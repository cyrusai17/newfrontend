import Link from 'next/link';

interface Challenge {
  id: string;
  title: string;
  description: string;
  category: string;
  impact: string;
  status: 'active' | 'in-progress' | 'planned';
  contributors: number;
}

const challenges: Challenge[] = [
  {
    id: 'climate-change',
    title: 'Climate Change',
    description: 'Addressing global warming, reducing carbon emissions, and protecting ecosystems for future generations.',
    category: 'Environment',
    impact: 'Rising global temperatures, extreme weather events, sea level rise, and threatened ecosystems worldwide.',
    status: 'active',
    contributors: 45
  },
  {
    id: 'mental-health',
    title: 'Mental Health & Wellness',
    description: 'Making mental healthcare accessible, reducing stigma, and building community support systems for global mental wellness.',
    category: 'Healthcare',
    impact: 'Over 1 billion people affected by mental health conditions globally, with limited access to care and support.',
    status: 'active',
    contributors: 20
  },
  {
    id: 'education-access',
    title: 'Education Access',
    description: 'Ensuring quality education reaches all communities regardless of location or economic status.',
    category: 'Social',
    impact: 'Millions of children without access to quality education, widening the global knowledge gap.',
    status: 'in-progress',
    contributors: 15
  },
  {
    id: 'healthcare',
    title: 'Healthcare Access',
    description: 'Improving access to quality medical care and resources worldwide.',
    category: 'Healthcare',
    impact: 'Billions lacking access to essential healthcare services and medical resources.',
    status: 'active',
    contributors: 30
  },
  {
    id: 'poverty-inequality',
    title: 'Poverty & Inequality',
    description: 'Tackling economic disparity and ensuring fair access to resources and opportunities.',
    category: 'Economic',
    impact: 'Billions living below poverty line, wealth concentration, limited social mobility.',
    status: 'active',
    contributors: 35
  },
  {
    id: 'food-security',
    title: 'Food Security',
    description: 'Ensuring sustainable food production and distribution to feed growing populations.',
    category: 'Agriculture',
    impact: 'Hunger, malnutrition, agricultural sustainability, and food waste issues affecting billions.',
    status: 'active',
    contributors: 25
  },
  {
    id: 'clean-water',
    title: 'Clean Water Access',
    description: 'Providing safe drinking water and sanitation facilities to all communities.',
    category: 'Infrastructure',
    impact: 'Water scarcity, waterborne diseases, and sanitation issues affecting billions worldwide.',
    status: 'active',
    contributors: 22
  },
  {
    id: 'renewable-energy',
    title: 'Renewable Energy',
    description: 'Transitioning to sustainable energy sources and improving energy access.',
    category: 'Energy',
    impact: 'Fossil fuel dependence, energy poverty, and carbon emissions contributing to climate change.',
    status: 'active',
    contributors: 28
  },
  {
    id: 'biodiversity',
    title: 'Biodiversity Loss',
    description: 'Protecting endangered species and preserving natural ecosystems.',
    category: 'Environment',
    impact: 'Species extinction, ecosystem collapse, and reduced genetic diversity threatening planetary health.',
    status: 'active',
    contributors: 18
  },
  {
    id: 'digital-inclusion',
    title: 'Digital Inclusion',
    description: 'Bridging the digital divide and ensuring equitable access to technology and internet connectivity.',
    category: 'Technology',
    impact: 'Billions without internet access, digital literacy gaps, and technological exclusion from opportunities.',
    status: 'in-progress',
    contributors: 15
  },
  {
    id: 'sustainable-cities',
    title: 'Sustainable Cities',
    description: 'Developing urban environments that are environmentally friendly, socially inclusive, and economically viable.',
    category: 'Urban',
    impact: 'Rapid urbanization, environmental degradation, and social inequality in growing cities worldwide.',
    status: 'in-progress',
    contributors: 20
  },
  {
    id: 'gender-equality',
    title: 'Gender Equality',
    description: 'Promoting equal rights, opportunities, and representation for all genders.',
    category: 'Social',
    impact: 'Discrimination, violence, and limited opportunities affecting half the global population.',
    status: 'active',
    contributors: 25
  },
  {
    id: 'refugee-crisis',
    title: 'Refugee Crisis',
    description: 'Addressing displacement, providing support, and finding sustainable solutions for refugees.',
    category: 'Humanitarian',
    impact: 'Millions displaced by conflict, climate change, and persecution, facing uncertain futures.',
    status: 'active',
    contributors: 18
  },
  {
    id: 'ocean-conservation',
    title: 'Ocean Conservation',
    description: 'Protecting marine ecosystems, reducing pollution, and promoting sustainable fishing practices.',
    category: 'Environment',
    impact: 'Ocean acidification, plastic pollution, overfishing, and habitat destruction threatening marine life.',
    status: 'in-progress',
    contributors: 15
  },
  {
    id: 'air-quality',
    title: 'Air Quality',
    description: 'Improving air quality and reducing pollution in urban and industrial areas.',
    category: 'Environment',
    impact: 'Air pollution causing millions of premature deaths and respiratory illnesses worldwide.',
    status: 'in-progress',
    contributors: 12
  },
  {
    id: 'disaster-preparedness',
    title: 'Disaster Preparedness',
    description: 'Building resilience to natural disasters and improving emergency response systems.',
    category: 'Infrastructure',
    impact: 'Increasing frequency and severity of natural disasters affecting vulnerable communities globally.',
    status: 'planned',
    contributors: 10
  },
  {
    id: 'aging-population',
    title: 'Aging Population',
    description: 'Addressing the challenges and opportunities of global demographic aging.',
    category: 'Social',
    impact: 'Shifting demographics, healthcare needs, and economic implications of aging societies.',
    status: 'planned',
    contributors: 8
  },
  {
    id: 'infectious-diseases',
    title: 'Infectious Diseases',
    description: 'Preventing, detecting, and responding to emerging infectious disease threats.',
    category: 'Healthcare',
    impact: 'Global health security risks, pandemic potential, and antimicrobial resistance.',
    status: 'active',
    contributors: 22
  },
  {
    id: 'cybersecurity',
    title: 'Cybersecurity',
    description: 'Protecting digital infrastructure, data, and privacy from cyber threats.',
    category: 'Technology',
    impact: 'Increasing cyber attacks, data breaches, and digital vulnerabilities affecting individuals and organizations.',
    status: 'active',
    contributors: 20
  },
  {
    id: 'democratic-decline',
    title: 'Democratic Decline',
    description: 'Addressing threats to democratic institutions, free speech, and civic participation.',
    category: 'Governance',
    impact: 'Erosion of democratic norms, press freedom restrictions, and declining civic engagement globally.',
    status: 'in-progress',
    contributors: 15
  },
  {
    id: 'indigenous-rights',
    title: 'Indigenous Rights',
    description: 'Protecting indigenous lands, cultures, and rights from exploitation and displacement.',
    category: 'Social',
    impact: 'Loss of traditional knowledge, land dispossession, and cultural erasure of indigenous communities.',
    status: 'in-progress',
    contributors: 12
  }
];

export default function Challenges() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-blue-900 via-blue-800 to-blue-700 text-white p-4 md:p-8">
      <div className="max-w-6xl mx-auto">
        <div className="flex justify-between items-center mb-12">
          <div>
            <Link 
              href="/"
              className="text-blue-200 hover:text-white mb-4 inline-block font-medium"
            >
              ← Back to Home
            </Link>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-2">
              Global Challenges
            </h1>
            <p className="text-blue-100 text-lg">
              Join our community in solving these pressing global issues
            </p>
          </div>
          <div className="flex gap-2">
            <span className="bg-blue-500/30 text-blue-100 text-sm px-3 py-1 rounded-full font-medium">20 Challenges</span>
            <span className="bg-purple-500/30 text-purple-100 text-sm px-3 py-1 rounded-full font-medium">Global Impact</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {challenges.map((challenge) => (
            <Link 
              href={`/challenges/${challenge.id}`}
              key={challenge.id}
              className="bg-blue-900/50 backdrop-blur-lg rounded-2xl p-6 border border-white/10 hover:bg-blue-800/50 transition-all shadow-lg hover:shadow-xl"
            >
              <div className="flex justify-between items-start mb-4">
                <span className="bg-blue-500/20 text-blue-100 text-sm px-3 py-1 rounded-full">
                  {challenge.category}
                </span>
                <div className="flex items-center gap-2">
                  <span className="text-sm text-blue-200">
                    {challenge.contributors} Contributors
                  </span>
                  <span className={`text-sm px-3 py-1 rounded-full ${
                    challenge.status === 'active' 
                      ? 'bg-green-500/20 text-green-100'
                      : challenge.status === 'in-progress'
                      ? 'bg-yellow-500/20 text-yellow-100'
                      : 'bg-blue-500/20 text-blue-100'
                  }`}>
                    {challenge.status === 'active' ? 'Active' : challenge.status === 'in-progress' ? 'In Progress' : 'Planned'}
                  </span>
                </div>
              </div>
              <h2 className="text-xl font-bold mb-3 text-white">{challenge.title}</h2>
              <p className="text-blue-100 leading-relaxed mb-4 text-sm">
                {challenge.description}
              </p>
              <div className="bg-blue-800/30 p-3 rounded-xl">
                <h3 className="text-sm font-semibold mb-1 text-blue-200">Impact:</h3>
                <p className="text-blue-100 text-sm">
                  {challenge.impact}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
} 