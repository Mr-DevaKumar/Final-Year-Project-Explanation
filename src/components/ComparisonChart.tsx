import { useEffect, useRef, useState } from 'react';

interface ProjectPoint {
  name: string;
  x: number; // Technical Ambition (0-100)
  y: number; // Market Impact (0-100)
  color: string;
}

const projectData: ProjectPoint[] = [
  { name: 'Tourist Connect', x: 65, y: 80, color: '#10B981' },
  { name: 'DNA Editor', x: 90, y: 70, color: '#8B5CF6' },
  { name: 'Guardian Forest', x: 85, y: 85, color: '#22C55E' },
  { name: 'AppealBot', x: 75, y: 75, color: '#3B82F6' },
  { name: 'PhytoSonics', x: 70, y: 60, color: '#EC4899' },
];

const ComparisonChart = () => {
  const [animatedPoints, setAnimatedPoints] = useState<ProjectPoint[]>([]);
  const [isVisible, setIsVisible] = useState(false);
  const chartRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true);
          // Animate points in sequence
          projectData.forEach((point, index) => {
            setTimeout(() => {
              setAnimatedPoints(prev => [...prev, point]);
            }, index * 200);
          });
        }
      },
      { threshold: 0.5 }
    );

    if (chartRef.current) {
      observer.observe(chartRef.current);
    }

    return () => observer.disconnect();
  }, [isVisible]);

  return (
    <section className="py-20 px-6 bg-gradient-to-b from-transparent to-muted/20">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="font-heading text-4xl font-bold mb-4 text-gradient">
          A Strategic Spectrum of Innovation
        </h2>
        
        <p className="text-lg text-muted-foreground mb-12 max-w-3xl mx-auto">
          This portfolio demonstrates a range of capabilities: from hardware IoT and environmental science 
          to AI/NLP and creative tech. Each project balances uniqueness, feasibility, and potential for tangible impact.
        </p>

        <div ref={chartRef} className="glass-card">
          <div className="relative w-full h-96 p-8">
            {/* Chart Grid */}
            <div className="absolute inset-8 border-l-2 border-b-2 border-primary/20">
              {/* Grid lines */}
              {[...Array(5)].map((_, i) => (
                <div key={`h-${i}`}>
                  <div 
                    className="absolute w-full border-t border-primary/10"
                    style={{ bottom: `${i * 20}%` }}
                  />
                  <div 
                    className="absolute h-full border-l border-primary/10"
                    style={{ left: `${i * 20}%` }}
                  />
                </div>
              ))}
            </div>

            {/* Axis Labels */}
            <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 text-sm font-medium text-muted-foreground">
              Technical Ambition →
            </div>
            <div className="absolute left-2 top-1/2 transform -translate-y-1/2 -rotate-90 text-sm font-medium text-muted-foreground">
              Market Impact →
            </div>

            {/* Data Points */}
            {animatedPoints.map((point, index) => (
              <div
                key={point.name}
                className="absolute w-4 h-4 rounded-full animate-scale-hover cursor-pointer group"
                style={{
                  backgroundColor: point.color,
                  left: `${8 + (point.x * 0.84)}%`,
                  bottom: `${8 + (point.y * 0.84)}%`,
                  animationDelay: `${index * 0.2}s`,
                  boxShadow: `0 0 20px ${point.color}40`,
                }}
              >
                {/* Tooltip */}
                <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="glass-morphism px-3 py-2 rounded-lg whitespace-nowrap text-sm font-medium">
                    {point.name}
                    <br />
                    <span className="text-xs text-muted-foreground">
                      Tech: {point.x} | Impact: {point.y}
                    </span>
                  </div>
                </div>
                
                {/* Pulse animation */}
                <div 
                  className="absolute inset-0 rounded-full animate-ping"
                  style={{ backgroundColor: point.color }}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ComparisonChart;