import { useState } from 'react';
import { Code, Globe, Wrench, Monitor, BookOpen } from 'lucide-react';

export const Skills = () => {
  const [glowingSkill, setGlowingSkill] = useState<string | null>(null);

  const skillCategories = [
    {
      title: "Programming Languages",
      icon: <Code className="w-6 h-6" />,
      skills: ["Java", "Python", "C", "C++"],
      color: "portfolio-glow"
    },
    {
      title: "Web Technologies",
      icon: <Globe className="w-6 h-6" />,
      skills: ["HTML", "React", "Tailwind CSS", "Bootstrap", "WordPress", "Figma", "Adobe XD"],
      color: "portfolio-glow-purple"
    },
    {
      title: "Tools & Platforms",
      icon: <Wrench className="w-6 h-6" />,
      skills: ["Git", "VS Code", "OpenCV", "Nmap", "Burp Suite", "Anaconda", "Fusion 360", "Microsoft Azure", "Amazon Web Services ", "Pycharm", "Oracle"],
      color: "portfolio-glow-pink"
    },
    {
      title: "Operating Systems",
      icon: <Monitor className="w-6 h-6" />,
      skills: ["Windows", "Linux", "VMware", "Android Studio", "Metasploit", "OpenVAS", "JUnit", "Wireshark"],
      color: "portfolio-glow"
    },
    {
      title: "Relevant Coursework",
      icon: <BookOpen className="w-6 h-6" />,
      skills: ["Data Structures", "DBMS", "Networks", "AI", "Machine Learning", "Computer Networks"],
      color: "portfolio-glow-purple"
    }
  ];

  const handleSkillClick = (skill: string) => {
    setGlowingSkill(skill);
    setTimeout(() => setGlowingSkill(null), 600);
  };

  return (
    <section id="skills" className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 fade-in">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Technical <span className="gradient-text">Skills</span>
          </h2>
          <p className="text-xl text-portfolio-text-dim max-w-3xl mx-auto">
            A comprehensive toolkit built through academic learning and hands-on experience
          </p>
        </div>

        <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <div 
              key={categoryIndex}
              className="glass-card p-6 rounded-xl glow-hover fade-in"
              style={{ animationDelay: `${categoryIndex * 0.2}s` }}
            >
              <div className="flex items-center gap-3 mb-6">
                <div className={`text-${category.color}`}>
                  {category.icon}
                </div>
                <h3 className="text-xl font-bold text-foreground">{category.title}</h3>
              </div>
              
              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill, skillIndex) => (
                  <button
                    key={skillIndex}
                    onClick={() => handleSkillClick(skill)}
                    className={`
                      px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 cursor-pointer
                      bg-portfolio-surface/50 border border-white/10 text-foreground
                      hover:border-portfolio-glow/50 hover:text-portfolio-glow hover:scale-105
                      ${glowingSkill === skill ? 'animate-pulse shadow-glow' : ''}
                    `}
                  >
                    {skill}
                  </button>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Interactive Note */}
        <div className="mt-12 text-center fade-in">
          <p className="text-portfolio-text-dim text-sm">
            💡 Click on any skill to see it glow!
          </p>
        </div>
      </div>
    </section>
  );
};