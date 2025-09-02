import { useState } from 'react';
import { Shield, Brain, Github, Cpu, Network, Award } from 'lucide-react';
import { Description } from '@radix-ui/react-dialog';
import { Skills } from './Skills';

export const Certifications = () => {
  const [clickedCert, setClickedCert] = useState<string | null>(null);
  const [hoveredCert, setHoveredCert] = useState<string | null>(null);
  const [glowingCert, setGlowingCert] = useState<string | null>(null);

  const certifications = [
    {
      name: "Fortinet Network Security Expert",
      issuer: "Fortinet",
      description: "Advanced certification in network security, firewall management, and cybersecurity best practices.",
      icon: <Shield className="w-8 h-8" />,
      color: "portfolio-glow",
      skills: ["Network Security", "Firewall Management", "VPN", "Intrusion Prevention"]
    },
    {
      name: "Threat Intelligence Analyst",
      issuer: "Industry Certification",
      description: "Specialized certification in threat intelligence analysis, malware detection, and security incident response.",
      icon: <Brain className="w-8 h-8" />,
      color: "portfolio-glow-purple",
      skills: ["Threat Analysis", "Malware Detection", "Incident Response", "Security Operations"]
    },
    {
      name: "GitHub Copilot Certification",
      issuer: "GitHub",
      description: "Proficiency in AI-powered coding assistance and modern development workflows with GitHub Copilot.",
      icon: <Github className="w-8 h-8" />,
      color: "portfolio-glow-pink",
      skills: ["AI-Assisted Coding", "Version Control", "Collaborative Development", "Code Review"]
    },
    {
      name: "IBM Enterprise AI Developer",
      issuer: "IBM",
      description: "Comprehensive training in enterprise AI solutions, machine learning, and business intelligence systems.",
      icon: <Cpu className="w-8 h-8" />,
      color: "portfolio-glow",
      skills: ["Machine Learning", "AI Development", "Data Analytics", "Enterprise Solutions"]
    },
    {
      name: "Cisco CCNA",
      issuer: "Cisco",
      description: "Industry-standard certification in networking fundamentals, routing, switching, and network troubleshooting.",
      icon: <Network className="w-8 h-8" />,
      color: "portfolio-glow-purple",
      skills: ["Network Fundamentals", "Routing & Switching", "Network Troubleshooting", "Network Security"]
    },
    {
      name: "Certified Ethical Hacker (CEH)",
      issuer: "EC-Council",
      description: "Validates expertise in ethical hacking, penetration testing, and securing systems against cyber threats.",
      icon: <Network className="w-8 h-8" />,
      color: "portfolio-glow-purple",
      skills: ["Penetration Testing", "Vulnerability Assessment", "Network Security", "Ethical Hacking Techniques"]
    },
  ];

  const handleCertClick = (certName: string) => {
    setGlowingCert(certName);
    setClickedCert(certName);
    setTimeout(() => {
      setGlowingCert(null);
      setClickedCert(null);
    }, 600);
  };

  return (
    <section id="certifications" className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 fade-in">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Professional <span className="gradient-text">Certifications</span>
          </h2>
          <p className="text-xl text-portfolio-text-dim max-w-3xl mx-auto">
            Industry-recognized credentials validating expertise in cutting-edge technologies
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {certifications.map((cert, index) => (
            <div 
              key={index}
              onMouseEnter={() => setHoveredCert(cert.name)}
              onMouseLeave={() => setHoveredCert(null)}
              onClick={() => handleCertClick(cert.name)}
              className={`
                glass-card p-6 rounded-xl cursor-pointer transition-all duration-300 group
                hover:scale-105 hover:border-portfolio-glow/50 fade-in relative overflow-hidden
                ${glowingCert === cert.name || clickedCert === cert.name ? 'blink-glow' : ''}
              `}
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              {/* Background Glow Effect */}
              <div className={`absolute inset-0 bg-gradient-to-br from-${cert.color}/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300`}></div>
              
              {/* Certificate Icon */}
              <div className="relative z-10">
                <div className="flex items-center justify-between mb-4">
                  <div className={`text-${cert.color} group-hover:scale-110 transition-transform`}>
                    {cert.icon}
                  </div>
                  <div className={`text-${cert.color} opacity-60 group-hover:opacity-100 transition-opacity`}>
                    <Award size={20} />
                  </div>
                </div>

                {/* Certification Content */}
                <h3 className="text-lg font-bold text-foreground mb-2 group-hover:text-portfolio-glow transition-colors">
                  {cert.name}
                </h3>
                <p className="text-sm text-portfolio-glow font-medium mb-3">
                  {cert.issuer}
                </p>
                <p className="text-portfolio-text-dim text-sm leading-relaxed mb-4">
                  {cert.description}
                </p>

                {/* Skills */}
                <div className="space-y-2">
                  <p className="text-xs font-medium text-foreground">Key Skills:</p>
                  <div className="flex flex-wrap gap-1">
                    {cert.skills.map((skill, skillIndex) => (
                      <span 
                        key={skillIndex}
                        className="px-2 py-1 text-xs rounded bg-portfolio-surface/50 border border-white/10 text-portfolio-text-dim"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Hover Effect Indicator */}
                <div className="mt-4 flex items-center gap-2 text-xs text-portfolio-text-dim opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className={`w-2 h-2 rounded-full bg-${cert.color} animate-pulse`}></div>
                  Verified Certification
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Certification Summary */}
        <div className="mt-16 fade-in">
          <div className="glass-card p-8 rounded-xl text-center max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold mb-6 gradient-text">Certification Journey</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-4xl font-bold text-portfolio-glow mb-2">5+</div>
                <div className="text-portfolio-text-dim">Professional Certifications</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-portfolio-glow-purple mb-2">100%</div>
                <div className="text-portfolio-text-dim">Industry Recognized</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-portfolio-glow-pink mb-2">2024</div>
                <div className="text-portfolio-text-dim">Latest Certification</div>
              </div>
            </div>
          </div>
        </div>

        {/* Interactive Note */}
        <div className="mt-8 text-center fade-in">
          <p className="text-portfolio-text-dim text-sm">
            🎓 Hover and click on certification cards to explore the interactive effects!
          </p>
        </div>
      </div>
    </section>
  );
};