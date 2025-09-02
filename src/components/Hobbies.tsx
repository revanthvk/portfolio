import { Bot, Wrench, Users, Trophy, Coffee, Music } from 'lucide-react';

export const Hobbies = () => {
  const hobbies = [
    {
      title: "AI Tools & Exploration",
      description: "Constantly exploring cutting-edge AI tools and experimenting with their applications in solving real-world problems.",
      icon: <Bot className="w-8 h-8" />,
      color: "portfolio-glow",
      activities: ["GPT Applications", "AI Model Testing", "Automation Scripts", "Tool Integration"],
      passion: "High"
    },
    {
      title: "Building Personal Tools",
      description: "Creating custom software solutions and productivity tools to streamline daily tasks and solve personal challenges.",
      icon: <Wrench className="w-8 h-8" />,
      color: "portfolio-glow-purple",
      activities: ["Custom Scripts", "Productivity Apps", "Automation Tools", "System Optimization"],
      passion: "High"
    },
    {
      title: "Freelance Problem Solving",
      description: "Taking on freelance projects to help others solve technical challenges while building diverse experience.",
      icon: <Users className="w-8 h-8" />,
      color: "portfolio-glow-pink",
      activities: ["Client Projects", "Technical Consulting", "Code Reviews", "Mentoring"],
      passion: "Medium"
    },
    {
      title: "Community Tech Events",
      description: "Actively participating in tech meetups, hackathons, and community events to stay connected with the latest trends.",
      icon: <Coffee className="w-8 h-8" />,
      color: "portfolio-glow",
      activities: ["Tech Meetups", "Hackathons", "Developer Conferences", "Networking"],
      passion: "High"
    },
    {
      title: "Playing Cricket",
      description: "Passionate cricketer who enjoys both playing and following the sport, with experience in competitive cricket.",
      icon: <Trophy className="w-8 h-8" />,
      color: "portfolio-glow-purple",
      activities: ["Team Sports", "District Competitions", "Strategy Analysis", "Fitness Training"],
      passion: "High"
    },
    {
      title: "Music & Entertainment",
      description: "Enjoying various forms of music and entertainment as a way to relax and find creative inspiration.",
      icon: <Music className="w-8 h-8" />,
      color: "portfolio-glow-pink",
      activities: ["Music Discovery", "Concert Attending", "Creative Inspiration", "Relaxation"],
      passion: "Medium"
    }
  ];

  const getPassionColor = (passion: string) => {
    switch (passion) {
      case 'High': return 'portfolio-glow';
      case 'Medium': return 'portfolio-glow-purple';
      default: return 'portfolio-text-dim';
    }
  };

  return (
    <section id="hobbies" className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 fade-in">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Hobbies & <span className="gradient-text">Interests</span>
          </h2>
          <p className="text-xl text-portfolio-text-dim max-w-3xl mx-auto">
            Beyond coding - exploring passions that fuel creativity and personal growth
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {hobbies.map((hobby, index) => (
            <div 
              key={index}
              className="glass-card p-6 rounded-xl glow-hover group fade-in relative overflow-hidden"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              {/* Background Gradient */}
              <div className={`absolute inset-0 bg-gradient-to-br from-${hobby.color}/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300`}></div>
              
              <div className="relative z-10">
                {/* Hobby Header */}
                <div className="flex items-center justify-between mb-4">
                  <div className={`text-${hobby.color} group-hover:scale-110 transition-transform`}>
                    {hobby.icon}
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-xs text-portfolio-text-dim">Passion:</span>
                    <span className={`text-xs font-medium text-${getPassionColor(hobby.passion)}`}>
                      {hobby.passion}
                    </span>
                  </div>
                </div>

                {/* Hobby Title */}
                <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-portfolio-glow transition-colors">
                  {hobby.title}
                </h3>

                {/* Description */}
                <p className="text-portfolio-text-dim text-sm leading-relaxed mb-4">
                  {hobby.description}
                </p>

                {/* Activities */}
                <div className="space-y-2">
                  <p className="text-xs font-medium text-foreground">Key Activities:</p>
                  <div className="flex flex-wrap gap-1">
                    {hobby.activities.map((activity, actIndex) => (
                      <span 
                        key={actIndex}
                        className="px-2 py-1 text-xs rounded bg-portfolio-surface/50 border border-white/10 text-portfolio-text-dim hover:border-portfolio-glow/30 transition-colors"
                      >
                        {activity}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Interactive Element */}
                <div className="mt-4 flex items-center gap-2 text-xs text-portfolio-text-dim opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className={`w-2 h-2 rounded-full bg-${hobby.color} animate-pulse`}></div>
                  Active Interest
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Personal Philosophy */}
        <div className="mt-16 fade-in">
          <div className="glass-card p-8 rounded-xl text-center max-w-4xl mx-auto glow-hover">
            <h3 className="text-2xl font-bold mb-6 gradient-text">Your Vision, My Code, Our Success</h3>
            <p className="text-lg leading-relaxed text-portfolio-text-dim">
              "I’m a passionate freelancer helping businesses, startups, and individuals bring their ideas to life through modern websites, secure digital solutions, and innovative tools. With expertise in web development, cybersecurity, and automation, I deliver reliable, creative, and result-driven solutions tailored to client needs. My focus is on blending technical precision with creativity to ensure every project not only works flawlessly but also stands out with impact."
            </p>
          </div>
        </div>

        {/* Interest Categories */}
        <div className="mt-16 fade-in">
          <div className="glass-card p-8 rounded-xl max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-center mb-6 gradient-text">Interest Distribution</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-portfolio-glow mb-2">70%</div>
                <div className="text-portfolio-text-dim text-sm">Technology & Innovation</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-portfolio-glow-purple mb-2">20%</div>
                <div className="text-portfolio-text-dim text-sm">Sports & Fitness</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-portfolio-glow-pink mb-2">10%</div>
                <div className="text-portfolio-text-dim text-sm">Arts & Entertainment</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-portfolio-glow mb-2">24/7</div>
                <div className="text-portfolio-text-dim text-sm">Learning & Growing</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};