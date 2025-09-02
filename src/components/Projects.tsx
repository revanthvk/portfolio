import { useState } from 'react';
import { Shield, Brain, ExternalLink, ChevronDown, ChevronUp } from 'lucide-react';

export const Projects = () => {
  const [expandedProject, setExpandedProject] = useState<number | null>(null);
  const [clickedProject, setClickedProject] = useState<string | null>(null);

  const handleProjectClick = (title: string) => {
    setClickedProject(title);
    setTimeout(() => setClickedProject(null), 600);
  };

  const projects = [
    {
      title: "Biometric + OTP Secure Authentication Model for Internet Banking",
      icon: <Shield className="w-6 h-6" />,
      shortDescription: "Enhanced security system combining biometric authentication with OTP verification for banking applications.",
      fullDescription: "Developed a comprehensive security solution that integrates biometric authentication (fingerprint/facial recognition) with One-Time Password (OTP) verification to create a multi-layered security approach for internet banking. The system significantly reduces fraud risks while maintaining user convenience through seamless authentication flows.",
      technologies: ["Python", "OpenCV", "Machine Learning", "Security Protocols", "Database Management"],
      highlights: [
        "Multi-factor authentication implementation",
        "Real-time biometric processing",
        "Secure OTP generation and validation",
        "User-friendly interface design"
      ],
      color: "portfolio-glow"
    },
    {
      title: "Anomaly Detection in Network Traffic Using Deep Learning",
      icon: <Brain className="w-6 h-6" />,
      shortDescription: "AI-powered network security system for detecting unusual traffic patterns and potential threats.",
      fullDescription: "Built an intelligent network monitoring system using deep learning algorithms to identify anomalous patterns in network traffic. The system employs neural networks to learn normal traffic behavior and flag deviations that could indicate security threats, malware, or system compromises.",
      technologies: ["Python", "TensorFlow", "Neural Networks", "Network Analysis", "Data Visualization"],
      highlights: [
        "Real-time traffic analysis",
        "Deep learning model training",
        "Automated threat detection",
        "Performance optimization"
      ],
      color: "portfolio-glow-purple"
    }
  ];

  const toggleProject = (index: number) => {
    setExpandedProject(expandedProject === index ? null : index);
  };

  return (
    <section id="projects" className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 fade-in">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-xl text-portfolio-text-dim max-w-3xl mx-auto">
            Innovative solutions showcasing technical expertise and problem-solving capabilities
          </p>
        </div>

        <div className="space-y-8 max-w-4xl mx-auto">
          {projects.map((project, index) => (
            <div 
              key={index}
              className="glass-card rounded-xl overflow-hidden glow-hover fade-in"
              style={{ animationDelay: `${index * 0.3}s` }}
            >
              {/* Project Header */}
              <div className="p-6">
                <div className="flex items-start gap-4 mb-4">
                  <div className={`text-${project.color} flex-shrink-0 mt-1`}>
                    {project.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-foreground mb-2">
                      {project.title}
                    </h3>
                    <p className="text-portfolio-text-dim leading-relaxed">
                      {project.shortDescription}
                    </p>
                  </div>
                  <button
                    onClick={() => toggleProject(index)}
                    className={`p-2 rounded-lg transition-all duration-300 text-${project.color} hover:bg-portfolio-surface/50`}
                  >
                    {expandedProject === index ? <ChevronUp size={24} /> : <ChevronDown size={24} />}
                  </button>
                </div>

                {/* Technologies Used */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, techIndex) => (
                    <span 
                      key={techIndex}
                      className="px-3 py-1 text-xs rounded-full bg-portfolio-surface/50 border border-white/10 text-portfolio-text-dim"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Expanded Content */}
              {expandedProject === index && (
                <div className="px-6 pb-6 border-t border-white/10 animate-fade-in">
                  <div className="pt-6 space-y-6">
                    {/* Full Description */}
                    <div>
                      <h4 className="text-lg font-semibold text-foreground mb-3">Project Overview</h4>
                      <p className="text-portfolio-text-dim leading-relaxed">
                        {project.fullDescription}
                      </p>
                    </div>

                    {/* Key Highlights */}
                    <div>
                      <h4 className="text-lg font-semibold text-foreground mb-3">Key Highlights</h4>
                      <ul className="space-y-2">
                        {project.highlights.map((highlight, highlightIndex) => (
                          <li 
                            key={highlightIndex}
                            className="flex items-center gap-3 text-portfolio-text-dim"
                          >
                            <div className={`w-2 h-2 rounded-full bg-${project.color}`}></div>
                            {highlight}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex gap-4 pt-4">
                      <button className="btn-primary flex items-center gap-2">
                        <ExternalLink size={16} />
                        View Details
                      </button>
                      <button className="btn-outline">
                        Technical Documentation
                      </button>
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};