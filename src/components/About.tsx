import { GraduationCap, Target, Users, Zap, Brain, Trophy } from 'lucide-react';

export const About = () => {
  const education = [
    {
      degree: "B.Tech",
      institution: "Gandhi Institute of Technology and Management, Visakhapatnam",
      icon: <GraduationCap className="w-6 h-6" />
    },
    {
      degree: "Intermediate",
      institution: "SR Junior College, Hanamakonda",
      icon: <GraduationCap className="w-6 h-6" />
    },
    {
      degree: "SSC",
      institution: "Thakshashila High School, Mahbubabad",
      icon: <GraduationCap className="w-6 h-6" />
    }
  ];

  const strengths = [
    { name: "Quick Learner", icon: <Zap className="w-6 h-6" /> },
    { name: "Problem Solving", icon: <Brain className="w-6 h-6" /> },
    { name: "Collaborative", icon: <Users className="w-6 h-6" /> },
    { name: "Adaptable", icon: <Target className="w-6 h-6" /> },
    { name: "Consistent Performer", icon: <Trophy className="w-6 h-6" /> },
    { name: "Innovative", icon: <Brain className="w-6 h-6" />},
  ];

  return (
    <section id="about" className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 fade-in">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            About <span className="gradient-text">Me</span>
          </h2>
          <p className="text-xl text-portfolio-text-dim max-w-3xl mx-auto">
            “I’m a Computer Science student with a strong focus on Cybersecurity and AI, driven by curiosity and a passion for creating impactful solutions. I thrive on transforming complex ideas into practical applications — from intelligent chatbots to real-time security systems — while constantly pushing myself to learn, innovate, and grow."
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Educational Qualifications */}
          <div className="fade-in">
            <h3 className="text-3xl font-bold mb-8 flex items-center gap-3">
              <GraduationCap className="text-portfolio-glow" />
              Educational Journey
            </h3>
            <div className="space-y-6">
              {education.map((edu, index) => (
                <div 
                  key={index}
                  className="glass-card p-6 rounded-xl glow-hover transition-all duration-300"
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  <div className="flex items-start gap-4">
                    <div className="text-portfolio-glow flex-shrink-0 mt-1">
                      {edu.icon}
                    </div>
                    <div>
                      <h4 className="text-xl font-semibold mb-2 text-foreground">{edu.degree}</h4>
                      <p className="text-portfolio-text-dim">{edu.institution}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Key Strengths */}
          <div className="fade-in">
            <h3 className="text-3xl font-bold mb-8 flex items-center gap-3">
              <Target className="text-portfolio-glow-purple" />
              Key Strengths
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {strengths.map((strength, index) => (
                <div 
                  key={index}
                  className="glass-card p-4 rounded-xl glow-hover skill-glow text-center transition-all duration-300"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="flex flex-col items-center gap-3">
                    <div className="text-portfolio-glow-purple">
                      {strength.icon}
                    </div>
                    <span className="font-medium text-foreground">{strength.name}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Personal Statement */}
        <div className="mt-16 fade-in">
          <div className="glass-card p-8 rounded-2xl text-center glow-hover">
            <h3 className="text-2xl font-bold mb-4 gradient-text">My Philosophy</h3>
            <p className="text-lg leading-relaxed text-portfolio-text-dim max-w-4xl mx-auto">
              I believe in the power of technology to transform lives and solve real-world problems. 
              My journey in computer science has been driven by curiosity, persistence, and a commitment 
              to excellence. I'm always eager to learn new technologies and collaborate with like-minded 
              individuals to create meaningful solutions.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};