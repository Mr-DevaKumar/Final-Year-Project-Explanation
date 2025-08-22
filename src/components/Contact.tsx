import { Mail, Linkedin, Calendar, ChevronRight } from 'lucide-react';

const Contact = () => {
  const contactMethods = [
    {
      icon: Calendar,
      label: 'Schedule a Technical Discussion',
      href: '#',
      primary: true,
    },
    {
      icon: Mail,
      label: 'Email Me',
      href: 'deva29008@gmail.com',
      primary: false,
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      href: 'https://www.linkedin.com/in/deva-kumar-developer/',
      primary: false,
    },
  ];

  return (
    <section className="py-20 px-6 relative overflow-hidden">
      {/* Background Animation */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className={`absolute w-3 h-3 bg-primary/20 rounded-full animate-float`}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 4}s`,
              animationDuration: `${4 + Math.random() * 2}s`,
            }}
          />
        ))}
      </div>

      <div className="max-w-4xl mx-auto text-center relative z-10">
        <div className="glass-card">
          <h2 className="font-heading text-5xl font-bold mb-6 text-gradient">
            Let's Build the Future.
          </h2>
          
          <p className="text-xl text-muted-foreground mb-12 leading-relaxed">
            These concepts are ready for deeper technical exploration. I am seeking an advisor 
            to collaborate with to turn the most promising idea into a groundbreaking final year project.
          </p>

          <div className="space-y-4 mb-12">
            {contactMethods.map((method, index) => {
              const IconComponent = method.icon;
              
              if (method.primary) {
                return (
                  <a
                    key={index}
                    href={method.href}
                    className="glass-button group text-lg font-semibold text-primary hover:text-primary-foreground inline-flex items-center gap-3 animate-glow"
                  >
                    <IconComponent className="w-6 h-6" />
                    {method.label}
                    <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </a>
                );
              }
              
              return (
                <a
                  key={index}
                  href={method.href}
                  className="glass-morphism inline-flex items-center gap-3 px-6 py-3 rounded-2xl font-medium text-muted-foreground hover:text-primary transition-all duration-300 hover:scale-105 mx-2"
                >
                  <IconComponent className="w-5 h-5" />
                  {method.label}
                </a>
              );
            })}
          </div>

          {/* Additional CTA Section */}
          <div className="glass-morphism p-6 rounded-2xl">
            <h3 className="font-heading text-2xl font-semibold mb-4 text-primary">
              Ready to Innovate?
            </h3>
            <p className="text-muted-foreground mb-4">
              Each project represents months of research and planning. Let's discuss which concept 
              aligns best with your expertise and research interests.
            </p>
            <div className="flex flex-wrap gap-2 justify-center">
              {['AI & Machine Learning', 'IoT Systems', 'Environmental Tech', 'Legal Tech', 'Creative Technology'].map((tag) => (
                <span key={tag} className="px-3 py-1 glass-morphism rounded-full text-xs font-medium text-primary">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="text-center mt-16 relative z-10">
        <p className="text-muted-foreground">
          © 2025 Deva Kumar, Thivish, Athesh, Syed Umar. The future is built, not found.
        </p>
      </div>
    </section>
  );
};

export default Contact;