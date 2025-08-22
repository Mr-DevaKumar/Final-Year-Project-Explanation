import Hero from '@/components/Hero';
import ProjectNavigator from '@/components/ProjectNavigator';
import ProjectDetail from '@/components/ProjectDetail';
import ComparisonChart from '@/components/ComparisonChart';
import Contact from '@/components/Contact';

// Import project hero images
import touristConnectHero from '@/assets/tourist-connect-hero.jpg';
import dnaEditorHero from '@/assets/dna-editor-hero.jpg';
import guardianForestHero from '@/assets/guardian-forest-hero.jpg';
import appealbotHero from '@/assets/appealbot-hero.jpg';
import phytosonicsHero from '@/assets/phytosonics-hero.jpg';

// Import icons for features
import { MapPin, Users, Smartphone, Shield, Dna, Microscope, Database, FileText, TreePine, Satellite, Vibrate, Bot, Scale, FileCheck, MessageSquare, Gavel, Music, Leaf, Headphones, Cpu } from 'lucide-react';

const projectsData = [
  {
    id: 'tourist-connect',
    name: '📍 Tourist Connect',
    tagline: 'Seamless Travel Connections Through Smart Location Intelligence',
    problem: 'Travelers struggle to discover authentic local experiences and connect with fellow tourists in unfamiliar destinations, often missing out on the best a location has to offer.',
    solution: 'An AI-powered mobile platform that uses location intelligence to connect travelers with curated local experiences and like-minded tourists in real-time.',
    features: [
      { icon: MapPin, label: 'Smart Discovery' },
      { icon: Users, label: 'Social Connect' },
      { icon: Smartphone, label: 'Real-time Chat' },
      { icon: Shield, label: 'Safety First' },
    ],
    audience: 'Solo Travelers | Tourism Boards | Local Businesses',
    techStack: ['React Native', 'Node.js', 'MongoDB', 'Google Maps API', 'Socket.io', 'ML Algorithms'],
    impact: 'Aims to Increase Tourist Satisfaction by 40% and Local Business Revenue by 25%',
    academicFoundation: {
      text: 'The recommendation engine for this platform is informed by extensive research into context-aware systems for the tourism industry. Focusing on connecting user preferences with hyper-local experiences and vendors.',
      citation: 'Borrás, J., Moreno, A., & Valls, A. (2014). A survey of recommender systems for tourism. Expert Systems with Applications.',
      link: 'https://www.sciencedirect.com/science/article/abs/pii/S0957417413006729'
    },
    image: touristConnectHero,
  },
  {
    id: 'dna-editor',
    name: '🧬 Forensic DNA Editor',
    tagline: 'Advanced Genetic Analysis for Criminal Justice',
    problem: 'Forensic DNA analysis is time-consuming and requires extensive manual interpretation, leading to delayed justice and potential human error in criminal investigations.',
    solution: 'An AI-enhanced DNA analysis platform that automates genetic sequence interpretation and provides rapid, accurate forensic insights.',
    features: [
      { icon: Dna, label: 'AI Analysis' },
      { icon: Microscope, label: 'Lab Integration' },
      { icon: Database, label: 'CODIS Compatible' },
      { icon: FileText, label: 'Auto Reports' },
    ],
    audience: 'Forensic Laboratories | Law Enforcement | Legal Professionals',
    techStack: ['Python', 'TensorFlow', 'BioPython', 'PostgreSQL', 'Flask', 'LIMS Integration'],
    impact: 'Seeks to Reduce DNA Analysis Time from Weeks to Hours with 99.8% Accuracy',
    academicFoundation: {
      text: 'This tool is made possible by the BioPython library, a cornerstone of computational biology and bioinformatics in Python. It provides the core functionality for sequence manipulation, analysis, and visualization.',
      citation: 'Cock, P. J., et al. (2009). Biopython: freely available Python tools for computational molecular biology and bioinformatics. Bioinformatics.',
      link: 'https://academic.oup.com/bioinformatics/article/25/11/1422/330687'
    },
    image: dnaEditorHero,
    reversed: true,
  },
  {
    id: 'guardian-forest',
    name: '🌳 Guardian Forest',
    tagline: 'Real-Time Deforestation Monitoring from Space and Soil',
    problem: 'Illegal logging devastates remote ecosystems, often going undetected for weeks, causing irreversible environmental damage.',
    solution: 'A dual-sensor AI system that monitors forests from orbit and the ground, triggering real-time alerts for immediate ranger response.',
    features: [
      { icon: Satellite, label: 'Satellite Monitor' },
      { icon: Vibrate, label: 'Vibration Sensors' },
      { icon: Bot, label: 'AI Verification' },
      { icon: Smartphone, label: 'Ranger Alerts' },
    ],
    audience: 'Forestry Departments | Environmental NGOs | Government Agencies',
    techStack: ['Python', 'Google Earth Engine', 'IoT Sensors', 'TensorFlow', 'React Dashboard', 'AWS IoT'],
    impact: 'Seeks to Reduce Illegal Logging Response Time from Weeks to Minutes',
    academicFoundation: {
      text: 'This project is inspired by foundational research in remote sensing and bioacoustics. The core methodology is based on the principles outlined in coupled with real-time sound classification techniques for IoT networks.',
      citation: 'Gorelick, N., et al. (2017). Google Earth Engine: Planetary-scale geospatial analysis for everyone. Remote Sensing of Environment.',
      link: 'https://www.sciencedirect.com/science/article/abs/pii/S0034425717302900'
    },
    image: guardianForestHero,
  },
  {
    id: 'appealbot',
    name: '⚖️ AppealBot',
    tagline: 'AI-Powered Legal Appeal Assistant for Justice Access',
    problem: 'Legal appeals are complex, expensive, and time-consuming, preventing many individuals from accessing fair legal representation and justice.',
    solution: 'An intelligent legal assistant that analyzes case documents, identifies appeal opportunities, and generates comprehensive legal briefs automatically.',
    features: [
      { icon: Scale, label: 'Case Analysis' },
      { icon: FileCheck, label: 'Document Gen' },
      { icon: MessageSquare, label: 'Legal Advice' },
      { icon: Gavel, label: 'Court Filing' },
    ],
    audience: 'Legal Aid Organizations | Individual Defendants | Small Law Firms',
    techStack: ['GPT-4 API', 'React', 'Node.js', 'Legal Databases', 'NLP Libraries', 'Document Processing'],
    impact: 'Aims to Reduce Appeal Preparation Time by 75% and Legal Costs by 60%',
    academicFoundation: {
      text: 'This concept leverages advancements in Legal Natural Language Processing (NLP) and is built upon the transformer architecture that powers modern large language models. Applied to the specific domain of legal text and precedent retrieval.',
      citation: 'Devlin, J., et al. (2018). BERT: Pre-training of Deep Bidirectional Transformers for Language Understanding. arXiv preprint arXiv:1810.04805.',
      link: 'https://arxiv.org/abs/1810.04805'
    },
    image: appealbotHero,
    reversed: true,
  },
  {
    id: 'phytosonics',
    name: '🎵 PhytoSonics',
    tagline: 'Transforming Plant Biorhythms into Harmonious Music',
    problem: 'The connection between nature and human well-being is often overlooked in our digital age, missing opportunities for therapeutic and educational applications.',
    solution: 'A bio-responsive system that converts plant electrical signals into real-time musical compositions, creating therapeutic soundscapes from living plants.',
    features: [
      { icon: Leaf, label: 'Bio Sensing' },
      { icon: Music, label: 'Live Composition' },
      { icon: Headphones, label: 'Wellness Audio' },
      { icon: Cpu, label: 'AI Harmonics' },
    ],
    audience: 'Wellness Centers | Educational Institutions | Art Installations',
    techStack: ['Arduino', 'Pure Data', 'Python', 'Machine Learning', 'Web Audio API', 'Sensor Networks'],
    impact: 'Pioneering Bio-Musical Therapy with 85% Stress Reduction in Initial Studies',
    academicFoundation: {
      text: 'This artistic exploration is grounded in the field of data sonification, the practice of converting data into sound. It explores the mapping of biological electrical signals into generative musical parameters.',
      citation: 'Kramer, G., et al. (1999). Sonification: A Review of Auditory Display. Proceedings of the International Conference on Auditory Display.',
      link: 'https://www.researchgate.net/publication/228725360_Sonification_A_Review_of_Auditory_Display'
    },
    image: phytosonicsHero,
  },
];

const Index = () => {
  return (
    <main className="min-h-screen overflow-x-hidden">
      <Hero />
      <ProjectNavigator />
      
      {projectsData.map((project, index) => (
        <ProjectDetail
          key={project.id}
          {...project}
          reversed={project.reversed}
        />
      ))}
      
      <ComparisonChart />
      <Contact />
    </main>
  );
};

export default Index;