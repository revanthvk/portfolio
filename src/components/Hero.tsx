import { Github, Linkedin, Mail, Phone } from "lucide-react";

export const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden hero-bg">
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          {/* Profile Image */}
          <div className="flex-shrink-0 animate-fade-in">
            <div className="relative">
              <div className="w-80 h-80 rounded-full overflow-hidden border-4 border-portfolio-glow/30 shadow-2xl glow-hover">
                <img 
                  src="/events/revanth-profile.png"   
                  alt="REVANTH BANOTHU"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute inset-0 rounded-full bg-gradient-to-t from-portfolio-glow/20 to-transparent"></div>
            </div>
          </div>

          {/* Hero Content */}
          <div className="flex-1 text-center lg:text-left space-y-8 animate-slide-in-right">
            {/* Main Title */}
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
                <span className="gradient-text">BANOTHU</span>
                <br />
                <span className="text-foreground">REVANTH</span>
              </h1>
              <p className="text-xl lg:text-2xl text-portfolio-text-dim max-w-2xl">
                Freelancer | Code Creator | Cybersecurity Enthusiast
              </p>
            </div>

            {/* Career Objective */}
            <div className="glass-card p-6 rounded-xl max-w-2xl glow-hover">
              <p className="text-lg leading-relaxed text-foreground">
                “Exploring the world of code, cybersecurity, and freelancing with a vision to innovate, learn, and contribute.”
              </p>
            </div>

            {/* Contact Information */}
            <div className="flex flex-col sm:flex-row gap-4 flex-wrap">
              <a href="tel:+916304174467" className="btn-outline flex items-center gap-2 hover:scale-105 transition-transform">
                <Phone size={20} />
                +91 6304174467
              </a>
              <a href="mailto:revanthbanoth22@gmail.com" className="btn-outline flex items-center gap-2 hover:scale-105 transition-transform">
                <Mail size={20} />
                revanthbanoth22@gmail.com
              </a>
            </div>

            {/* Social Links */}
            <div className="flex gap-4 justify-center lg:justify-start">
              <a 
                href="https://linkedin.com/in/revanthbanothu" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-4 glass-card rounded-full glow-hover hover:text-portfolio-glow transition-colors"
              >
                <Linkedin size={24} />
              </a>
              <a 
                href="https://github.com/revanth1819-cloud" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-4 glass-card rounded-full glow-hover hover:text-portfolio-glow transition-colors"
              >
                <Github size={24} />
              </a>
            </div>

            {/* CTA Button */}
            <div className="pt-4">
              <button 
                onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
                className="btn-primary text-lg px-8 py-4"
              >
                Explore My Journey
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-portfolio-glow/10 rounded-full animate-float"></div>
      <div className="absolute bottom-20 right-10 w-16 h-16 bg-portfolio-glow-purple/10 rounded-full animate-float" style={{ animationDelay: '2s' }}></div>
      <div className="absolute top-1/2 right-20 w-12 h-12 bg-portfolio-glow-pink/10 rounded-full animate-float" style={{ animationDelay: '4s' }}></div>
    </section>
  );
};
