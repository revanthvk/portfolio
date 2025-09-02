import { Building, Shield, FileText, Eye, Network } from 'lucide-react';

export const Experience = () => {
  const internships = [
    {
      organization: "DRDO",
      role: "Research Intern",
      duration: "Summer 2024",
      icon: <Building className="w-6 h-6" />,
      projects: [
        {
          name: "Weapon Recognition System",
          description: "Built an advanced computer vision system using OpenCV and YOLOv8 for real-time weapon detection and classification in security surveillance applications.",
          technologies: ["OpenCV", "YOLOv8", "Computer Vision", "Deep Learning"],
          icon: <Eye className="w-5 h-5" />
        },
        {
          name: "Offline PDF Analyzer",
          description: "Developed an intelligent document analysis system using Large Language Models (LLMs) and Optical Character Recognition (OCR) for processing and extracting insights from PDF documents.",
          technologies: ["LLMs", "OCR", "Python", "NLP"],
          icon: <FileText className="w-5 h-5" />
        },
      ],
      color: "portfolio-glow-pink"
    },
    {
      organization: "Palo Alto Networks",
      role: "Cybersecurity Intern", 
      duration: "Winter 2024",
      icon: <Shield className="w-6 h-6" />,
      projects: [
        {
          name: "Threat Intelligence Analysis",
          description: "Conducted comprehensive threat intelligence research and analysis to identify emerging cybersecurity threats and develop countermeasures.",
          technologies: ["Threat Intelligence", "Security Analysis", "Risk Assessment"],
          icon: <Network className="w-5 h-5" />
        },
        {
          name: "NGFW Implementation",
          description: "Worked with Next-Generation Firewall (NGFW) systems to implement advanced security policies and optimize network protection strategies.",
          technologies: ["NGFW", "Network Security", "Policy Management"],
          icon: <Shield className="w-5 h-5" />
        },
        {
          name: "Incident Response",
          description: "Participated in incident response activities, analyzing security breaches and developing remediation strategies for enterprise environments.",
          technologies: ["Incident Response", "Forensics", "Security Operations"],
          icon: <Shield className="w-5 h-5" />
        }
      ],
      color: "portfolio-glow"
    }
  ];

  return (
    <section id="experience" className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 fade-in">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Professional <span className="gradient-text">Experience</span>
          </h2>
          <p className="text-xl text-portfolio-text-dim max-w-3xl mx-auto">
            Hands-on experience gained through prestigious internships and real-world projects
          </p>
        </div>

        <div className="space-y-12 max-w-5xl mx-auto">
          {internships.map((internship, index) => (
            <div 
              key={index}
              className="glass-card p-8 rounded-xl glow-hover fade-in"
              style={{ animationDelay: `${index * 0.3}s` }}
            >
              {/* Internship Header */}
              <div className="flex items-center gap-4 mb-8">
                <div className={`text-${internship.color} p-3 glass-card rounded-lg`}>
                  {internship.icon}
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-foreground">{internship.organization}</h3>
                  <p className="text-lg text-portfolio-text-dim">{internship.role}</p>
                  <p className="text-sm text-portfolio-glow font-medium">{internship.duration}</p>
                </div>
              </div>

              {/* Projects Grid */}
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {internship.projects.map((project, projectIndex) => (
                  <div 
                    key={projectIndex}
                    className="bg-portfolio-surface/30 border border-white/10 rounded-lg p-6 hover:border-portfolio-glow/30 transition-all duration-300 group"
                  >
                    {/* Project Header */}
                    <div className="flex items-start gap-3 mb-4">
                      <div className={`text-${internship.color} flex-shrink-0 mt-1 group-hover:scale-110 transition-transform`}>
                        {project.icon}
                      </div>
                      <h4 className="font-semibold text-foreground group-hover:text-portfolio-glow transition-colors">
                        {project.name}
                      </h4>
                    </div>

                    {/* Project Description */}
                    <p className="text-sm text-portfolio-text-dim leading-relaxed mb-4">
                      {project.description}
                    </p>

                    {/* Technologies */}
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, techIndex) => (
                        <span 
                          key={techIndex}
                          className="px-2 py-1 text-xs rounded bg-portfolio-surface/50 border border-white/10 text-portfolio-text-dim"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
<div className="text-center mt-16 fade-in">
  <div className="glass-card p-6 rounded-xl inline-block glow-hover">
    <p className="text-lg text-portfolio-text-dim mb-4">
      Interested in my professional experience?
    </p>
    <a 
      href="/Revanth_Resume.pdf"  // put your resume inside public folder
      download="Revanth_Resume.pdf"
    >
      <button className="btn-primary">
        Download Resume
      </button>
    </a>
  </div>
</div>

      </div>
    </section>
  );
};