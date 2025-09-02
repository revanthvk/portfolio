import { Users, Presentation, Trophy, Heart, Target, Lightbulb } from 'lucide-react';

export const Leadership = () => {
  const leadershipRoles = [
    {
      role: "Social Content Provider",
      organization: "IIT Dharwad",
      description: "Led social media content creation and digital engagement strategies, enhancing the institution's online presence and community building.",
      icon: <Presentation className="w-8 h-8" />,
      color: "portfolio-glow",
      achievements: [
        "Created engaging content for multiple social media platforms",
        "Increased community engagement by 40%",
        "Collaborated with diverse teams across departments",
        "Developed content strategies for events and announcements"
      ]
    },
    {
      role: "Gully Cricket Coordinator",
      organization: "Dillo Ball",
      description: "Organized and managed a massive cricket tournament with 800+ participants, demonstrating exceptional event management and leadership skills.",
      icon: <Trophy className="w-8 h-8" />,
      color: "portfolio-glow-purple", 
      achievements: [
        "Successfully coordinated 800+ participant tournament",
        "Managed logistics, scheduling, and venue arrangements",
        "Led a team of 15+ volunteers",
        "Ensured smooth execution and participant satisfaction"
      ]
    },
    {
      role: "Microsoft Student Ambassador",
      organization: "Microsoft",
      description: "Mentored students, conducted technical workshops, and facilitated knowledge sharing in Microsoft technologies and career development.",
      icon: <Users className="w-8 h-8" />,
      color: "portfolio-glow-pink",
      achievements: [
        "Mentored 20+ students in technical skills",
        "Conducted workshops on Microsoft technologies",
        "Facilitated career guidance sessions",
        "Built strong community connections and networks"
      ]
    }
  ];

  const leadershipQualities = [
    {
      quality: "Team Building",
      description: "Building cohesive teams and fostering collaboration",
      icon: <Users className="w-6 h-6" />
    },
    {
      quality: "Strategic Thinking",
      description: "Planning and executing long-term initiatives",
      icon: <Target className="w-6 h-6" />
    },
    {
      quality: "Innovation",
      description: "Bringing creative solutions to complex challenges",
      icon: <Lightbulb className="w-6 h-6" />
    },
    {
      quality: "Mentorship",
      description: "Guiding and developing others' potential",
      icon: <Heart className="w-6 h-6" />
    }
  ];

  return (
    <section id="leadership" className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 fade-in">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Leadership & <span className="gradient-text">Community</span>
          </h2>
          <p className="text-xl text-portfolio-text-dim max-w-3xl mx-auto">
            Driving positive change through leadership, mentorship, and community engagement
          </p>
        </div>

        {/* Leadership Roles */}
        <div className="space-y-12 max-w-5xl mx-auto mb-20">
          {leadershipRoles.map((role, index) => (
            <div 
              key={index}
              className="glass-card p-8 rounded-xl glow-hover fade-in"
              style={{ animationDelay: `${index * 0.3}s` }}
            >
              <div className="flex flex-col lg:flex-row gap-8">
                {/* Role Header */}
                <div className="lg:w-1/3">
                  <div className="flex items-center gap-4 mb-4">
                    <div className={`text-${role.color} p-3 glass-card rounded-lg`}>
                      {role.icon}
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-foreground">{role.role}</h3>
                      <p className="text-lg text-portfolio-glow">{role.organization}</p>
                    </div>
                  </div>
                  <p className="text-portfolio-text-dim leading-relaxed">
                    {role.description}
                  </p>
                </div>

                {/* Achievements */}
                <div className="lg:w-2/3">
                  <h4 className="text-lg font-semibold text-foreground mb-4">Key Achievements</h4>
                  <div className="grid sm:grid-cols-2 gap-4">
                    {role.achievements.map((achievement, achIndex) => (
                      <div 
                        key={achIndex}
                        className="flex items-start gap-3 p-4 bg-portfolio-surface/30 border border-white/10 rounded-lg hover:border-portfolio-glow/30 transition-all duration-300"
                      >
                        <div className={`w-2 h-2 rounded-full bg-${role.color} flex-shrink-0 mt-2`}></div>
                        <p className="text-sm text-portfolio-text-dim">{achievement}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Leadership Qualities */}
        <div className="fade-in">
          <h3 className="text-3xl font-bold text-center mb-12">
            Core <span className="gradient-text">Leadership</span> Qualities
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {leadershipQualities.map((quality, index) => (
              <div 
                key={index}
                className="glass-card p-6 rounded-xl text-center glow-hover group"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="text-portfolio-glow mb-4 group-hover:scale-110 transition-transform">
                  {quality.icon}
                </div>
                <h4 className="font-bold text-foreground mb-2 group-hover:text-portfolio-glow transition-colors">
                  {quality.quality}
                </h4>
                <p className="text-sm text-portfolio-text-dim">
                  {quality.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Impact Statistics */}
        <div className="mt-16 fade-in">
          <div className="glass-card p-8 rounded-xl text-center max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold mb-6 gradient-text">Leadership Impact</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-portfolio-glow mb-2">800+</div>
                <div className="text-portfolio-text-dim text-sm">Event Participants Managed</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-portfolio-glow-purple mb-2">20+</div>
                <div className="text-portfolio-text-dim text-sm">Students Mentored</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-portfolio-glow-pink mb-2">3</div>
                <div className="text-portfolio-text-dim text-sm">Leadership Positions</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-portfolio-glow mb-2">15+</div>
                <div className="text-portfolio-text-dim text-sm">Team Members Led</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};