import { useState } from 'react';
import { Trophy, Award, Target, Medal, Star, Zap } from 'lucide-react';

export const Achievements = () => {
  const [clickedAchievement, setClickedAchievement] = useState<string | null>(null);
  const [glowingAchievement, setGlowingAchievement] = useState<string | null>(null);

  const achievements = [
    {
      title: "GATE 2025 Qualified",
      description: "Successfully qualified the Graduate Aptitude Test in Engineering, demonstrating strong technical knowledge and problem-solving skills.",
      icon: <Trophy className="w-8 h-8" />,
      category: "Academic Excellence",
      color: "portfolio-glow",
      year: "2025"
    },
    {
      title: "AIR 223 in Coding Ninjas",
      description: "Achieved All India Rank 223 in competitive programming, showcasing exceptional coding and algorithmic skills.",
      icon: <Star className="w-8 h-8" />,
      category: "Competitive Programming",
      color: "portfolio-glow-purple",
      year: "2024"
    },
    {
      title: "Rajasthan Police Hackathon - Top 7",
      description: "Secured position in top 7 teams in the prestigious Rajasthan Police Hackathon, developing innovative solutions for law enforcement challenges.",
      icon: <Zap className="w-8 h-8" />,
      category: "Hackathon",
      color: "portfolio-glow-pink",
      year: "2024"
    },
    {
      title: "3rd Prize - IIT Bhilai Boat Racing",
      description: "Won 3rd prize in the boat racing competition at IIT Bhilai, demonstrating teamwork and strategic thinking.",
      icon: <Medal className="w-8 h-8" />,
      category: "Competition",
      color: "portfolio-glow",
      year: "2024"
    },
    {
      title: "District-level Cricket Winner",
      description: "Led the team to victory in district-level cricket championship, showcasing leadership and athletic prowess.",
      icon: <Award className="w-8 h-8" />,
      category: "Sports",
      color: "portfolio-glow-purple",
      year: "2023"
    },
    {
      title: "3D Personal Portfolio",
      description: "Designing a visually engaging 3D-inspired personal portfolio website using Next.js, Tailwind CSS, and Framer Motion. Focused on smooth animations, interactive elements, and modern UI to showcase projects and skills effectively.",
      icon: <Star className="w-8 h-8 "/>,
      category: "Portfolio",
      color: "portfolio-glow-pink",
      year: "2025"
    },
  ];

  const handleAchievementClick = (title: string) => {
    setGlowingAchievement(title);
    setClickedAchievement(title);
    setTimeout(() => {
      setGlowingAchievement(null);
      setClickedAchievement(null);
    }, 600);
  };

  return (
    <section id="achievements" className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 fade-in">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            <span className="gradient-text">Achievements</span> & Recognition
          </h2>
          <p className="text-xl text-portfolio-text-dim max-w-3xl mx-auto">
            A collection of milestones that reflect dedication, skill, and continuous growth
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {achievements.map((achievement, index) => (
            <div 
              key={index}
              onClick={() => handleAchievementClick(achievement.title)}
              className={`
                glass-card p-6 rounded-xl cursor-pointer transition-all duration-300 group
                hover:scale-105 hover:border-portfolio-glow/50 fade-in
                ${glowingAchievement === achievement.title || clickedAchievement === achievement.title ? 'blink-glow' : ''}
              `}
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              {/* Achievement Header */}
              <div className="flex items-center justify-between mb-4">
                <div className={`text-${achievement.color} group-hover:scale-110 transition-transform`}>
                  {achievement.icon}
                </div>
                <span className="text-xs text-portfolio-text-dim bg-portfolio-surface/50 px-2 py-1 rounded">
                  {achievement.year}
                </span>
              </div>

              {/* Category Badge */}
              <div className="mb-4">
                <span className={`text-xs font-medium px-3 py-1 rounded-full bg-${achievement.color}/20 text-${achievement.color} border border-${achievement.color}/30`}>
                  {achievement.category}
                </span>
              </div>

              {/* Achievement Content */}
              <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-portfolio-glow transition-colors">
                {achievement.title}
              </h3>
              <p className="text-portfolio-text-dim text-sm leading-relaxed">
                {achievement.description}
              </p>

              {/* Hover Effect Indicator */}
              <div className="mt-4 flex items-center gap-2 text-xs text-portfolio-text-dim opacity-60 group-hover:opacity-100 transition-opacity">
                <Target size={12} />
                Click to celebrate this achievement!
              </div>
            </div>
          ))}
        </div>

        {/* Achievement Stats */}
        <div className="mt-16 fade-in">
          <div className="glass-card p-8 rounded-xl text-center max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold mb-6 gradient-text">Achievement Statistics</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-portfolio-glow mb-2">6+</div>
                <div className="text-portfolio-text-dim text-sm">Major Achievements</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-portfolio-glow-purple mb-2">3</div>
                <div className="text-portfolio-text-dim text-sm">Competition Wins</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-portfolio-glow-pink mb-2">1</div>
                <div className="text-portfolio-text-dim text-sm">National Qualification</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-portfolio-glow mb-2">223</div>
                <div className="text-portfolio-text-dim text-sm">Best AIR Rank</div>
              </div>
            </div>
          </div>
        </div>

        {/* Interactive Note */}
        <div className="mt-8 text-center fade-in">
          <p className="text-portfolio-text-dim text-sm">
            🏆 Click on any achievement card to see it glow with pride!
          </p>
        </div>
      </div>
    </section>
  );
};