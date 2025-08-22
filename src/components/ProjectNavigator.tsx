import { useState } from 'react';
import { MapPin, Dna, TreePine, Scale, Music } from 'lucide-react';

const projects = [
  { id: 'tourist-connect', name: 'Tourist Connect', icon: MapPin, color: 'text-emerald-500' },
  { id: 'dna-editor', name: 'DNA Editor', icon: Dna, color: 'text-purple-500' },
  { id: 'guardian-forest', name: 'Guardian Forest', icon: TreePine, color: 'text-green-500' },
  { id: 'appealbot', name: 'AppealBot', icon: Scale, color: 'text-blue-500' },
  { id: 'phytosonics', name: 'PhytoSonics', icon: Music, color: 'text-pink-500' },
];

const ProjectNavigator = () => {
  const [activeProject, setActiveProject] = useState<string | null>(null);

  const handleProjectClick = (projectId: string) => {
    setActiveProject(projectId);
    const element = document.getElementById(projectId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="projects" className="py-20 px-6">
      <div className="max-w-6xl mx-auto text-center">
        <h3 className="font-heading text-4xl font-bold mb-12 text-gradient">
          Select a Concept to Explore
        </h3>
        
        <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
          {projects.map((project) => {
            const IconComponent = project.icon;
            const isActive = activeProject === project.id;
            
            return (
              <div
                key={project.id}
                onClick={() => handleProjectClick(project.id)}
                className={`
                  glass-card cursor-pointer transition-all duration-300 group
                  ${isActive ? 'scale-105 animate-glow' : 'opacity-80 hover:opacity-100'}
                  hover:scale-105 animate-scale-hover
                `}
              >
                <div className={`text-6xl mb-4 ${project.color} group-hover:animate-float`}>
                  <IconComponent className="w-16 h-16 mx-auto" />
                </div>
                
                <h4 className="font-heading text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
                  {project.name}
                </h4>
                
                {isActive && (
                  <div className="mt-2 w-full h-1 bg-gradient-to-r from-primary to-primary-glow rounded-full"></div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ProjectNavigator;