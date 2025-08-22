import { useState } from 'react';
import { ExternalLink, Satellite, Vibrate, Bot, Smartphone } from 'lucide-react';

interface ProjectDetailProps {
  id: string;
  name: string;
  tagline: string;
  problem: string;
  solution: string;
  features: Array<{ icon: any; label: string; }>;
  audience: string;
  techStack: string[];
  impact: string;
  academicFoundation: {
    text: string;
    citation: string;
    link: string;
  };
  image: string;
  reversed?: boolean;
}

const ProjectDetail = ({
  id,
  name,
  tagline,
  problem,
  solution,
  features,
  audience,
  techStack,
  impact,
  academicFoundation,
  image,
  reversed = false
}: ProjectDetailProps) => {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <section id={id} className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${reversed ? 'lg:grid-flow-col-dense' : ''}`}>
            {/* Image Section */}
            <div className={`${reversed ? 'lg:col-start-2' : ''} animate-fade-up`}>
              <div className="glass-card p-4">
                <img 
                  src={image} 
                  alt={name}
                  className="w-full h-64 md:h-80 object-cover rounded-2xl"
                />
              </div>
            </div>

            {/* Content Section */}
            <div className={`${reversed ? 'lg:col-start-1' : ''} animate-fade-up`} style={{ animationDelay: '0.2s' }}>
              <div className="glass-card">
                <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4 text-gradient">
                  {name}
                </h2>
                <p className="text-lg text-muted-foreground mb-6 italic">
                  {tagline}
                </p>

                <div className="space-y-6">
                  <div>
                    <h3 className="font-heading text-xl font-semibold mb-2 text-primary">The Problem</h3>
                    <p className="text-muted-foreground">{problem}</p>
                  </div>

                  <div>
                    <h3 className="font-heading text-xl font-semibold mb-2 text-primary">The Solution</h3>
                    <p className="text-foreground font-medium">{solution}</p>
                  </div>

                  <div>
                    <h3 className="font-heading text-xl font-semibold mb-4 text-primary">Key Features</h3>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                      {features.map((feature, index) => {
                        const IconComponent = feature.icon;
                        return (
                          <div key={index} className="text-center p-3 glass-morphism rounded-xl">
                            <IconComponent className="w-6 h-6 mx-auto mb-2 text-primary" />
                            <span className="text-sm font-medium">{feature.label}</span>
                          </div>
                        );
                      })}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h3 className="font-heading text-lg font-semibold mb-2 text-primary">Target Audience</h3>
                      <p className="text-sm text-muted-foreground">{audience}</p>
                    </div>
                    <div>
                      <h3 className="font-heading text-lg font-semibold mb-2 text-primary">Tech Stack</h3>
                      <div className="flex flex-wrap gap-2">
                        {techStack.map((tech, index) => (
                          <span key={index} className="px-3 py-1 glass-morphism rounded-full text-xs font-medium">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="glass-morphism p-4 rounded-2xl">
                    <h3 className="font-heading text-lg font-semibold mb-2 text-primary">Impact Metric</h3>
                    <p className="text-lg font-bold text-gradient">{impact}</p>
                  </div>

                  <div className="glass-morphism p-4 rounded-2xl bg-white/5">
                    <h3 className="font-heading text-lg font-semibold mb-3 text-primary">Academic Foundation</h3>
                    <div className="text-sm text-muted-foreground italic leading-relaxed">
                      <p className="mb-2">{academicFoundation.text}</p>
                      <p className="text-xs">
                        <a 
                          href={academicFoundation.link} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="text-primary hover:text-primary-glow transition-colors underline"
                        >
                          {academicFoundation.citation}
                        </a>
                      </p>
                    </div>
                  </div>

                  <button 
                    onClick={() => setShowModal(true)}
                    className="glass-button group inline-flex items-center gap-2"
                  >
                    View Concept Summary
                    <ExternalLink className="w-4 h-4 group-hover:rotate-45 transition-transform" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/20 backdrop-blur-sm">
          <div className="glass-card max-w-2xl w-full max-h-[80vh] overflow-y-auto">
            <div className="flex justify-between items-center mb-6">
              <h3 className="font-heading text-2xl font-bold text-gradient">{name} - Concept Summary</h3>
              <button 
                onClick={() => setShowModal(false)}
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                ✕
              </button>
            </div>
            
            <div className="space-y-4 text-sm">
              <p><strong>Full Solution:</strong> {solution}</p>
              <p><strong>Technical Implementation:</strong> Advanced AI and IoT integration with real-time processing capabilities.</p>
              <p><strong>Market Opportunity:</strong> Significant demand in the target market with potential for global expansion.</p>
              <p><strong>Competitive Advantage:</strong> Innovative approach combining multiple technologies for comprehensive solution.</p>
              <p><strong>Future Roadmap:</strong> Planned enhancements include machine learning optimization and expanded feature set.</p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ProjectDetail;