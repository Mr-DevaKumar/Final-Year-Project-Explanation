import { useEffect, useState } from 'react';
import { ChevronDown } from 'lucide-react';

const Hero = () => {
  const [typedText, setTypedText] = useState('');
  const fullText = 'Innovation Engineered.';

  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      if (index < fullText.length) {
        setTypedText(fullText.slice(0, index + 1));
        index++;
      } else {
        clearInterval(timer);
      }
    }, 100);

    return () => clearInterval(timer);
  }, []);

  const scrollToProjects = () => {
    const element = document.getElementById('projects');
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-background via-muted to-secondary/20" />
        {/* Floating particles */}
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className={`absolute w-2 h-2 bg-primary/30 rounded-full animate-float`}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${3 + Math.random() * 2}s`,
            }}
          />
        ))}
      </div>

      {/* Hero Content */}
      <div className="relative z-10 text-center px-6">
        <div className="glass-card max-w-4xl mx-auto animate-fade-up">
          <h1 className="font-heading text-5xl md:text-7xl font-bold mb-6 text-gradient">
            {typedText}
            <span className="animate-pulse">|</span>
          </h1>
          
          <h2 className="font-body text-xl md:text-2xl text-muted-foreground mb-8 leading-relaxed">
            A explanation of five venture-grade project concepts poised to solve real-world problems.
            <br />
            <span className="text-primary font-medium">Curated by Deva Kumar, Thivish, Athesh, Syed Umar</span>
          </h2>

          <button
            onClick={scrollToProjects}
            className="glass-button group text-lg font-semibold text-primary hover:text-primary-foreground inline-flex items-center gap-2 animate-glow"
          >
            Explore the Concepts
            <ChevronDown className="w-5 h-5 animate-bounce" />
          </button>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ChevronDown className="w-8 h-8 text-primary/60" />
      </div>
    </section>
  );
};

export default Hero;