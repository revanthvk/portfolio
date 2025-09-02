import { Github, Linkedin, Instagram, Mail, Phone, MapPin, Heart, Twitter } from 'lucide-react';

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  const contactInfo = [
    {
      icon: <Phone size={18} />,
      label: "Phone",
      value: "+91 6304174467",
      href: "tel:+916304174467"
    },
    {
      icon: <Mail size={18} />,
      label: "Email", 
      value: "revanthbanoth22@gmail.com",
      href: "mailto:revanthbanoth22@gmail.com"
    },
    {
      icon: <MapPin size={18} />,
      label: "Location",
      value: "Visakhapatnam, India",
      href: "https://www.bing.com/maps?q=visakhapatnam+map+link&FORM=HDRSC6&cp=17.681748%7E83.242855&lvl=12.1",
    }
  ];

  const socialLinks = [
    {
      icon: <Linkedin size={20} />,
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/revanth-banothu-4b3347279",
      color: "hover:text-portfolio-glow"
    },
    {
      icon: <Github size={20} />,
      label: "GitHub", 
      href: "https://github.com/revanth1819-cloud",
      color: "hover:text-portfolio-glow-purple"
    },
    {
      icon: <Instagram size={20} />,
      label: "Instagram",
      href: "https://www.instagram.com/revanth.vk/",
      color: "hover:text-portfolio-glow-pink"
    },
    {
      icon: <Twitter size={20} />,
      label: "Twitter",
      href: "https://x.com/revanthvk18",
      color: "hover:text-portfolio-glow"
    }
  ];

  const quickLinks = [
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Experience", href: "#experience" },
    { name: "Achievements", href: "#achievements" },
    { name: "Certifications", href: "#certifications" }
  ];

  return (
    <footer className="py-16 relative">
      <div className="container mx-auto px-6">
        {/* Main Footer Content */}
        <div className="grid lg:grid-cols-4 gap-12 mb-12">
          {/* Brand Section */}
          <div className="lg:col-span-1">
            <h3 className="text-2xl font-bold mb-4">
              <span className="gradient-text">BANOTHU</span>
              <br />
              <span className="text-foreground">REVANTH</span>
            </h3>
            <p className="text-portfolio-text-dim leading-relaxed mb-6">
              Computer Science Student passionate about building innovative solutions 
              and contributing to the future of technology.
            </p>
            <div className="flex gap-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`p-3 glass-card rounded-lg transition-all duration-300 ${social.color} glow-hover`}
                  aria-label={social.label}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-1">
            <h4 className="text-lg font-semibold text-foreground mb-6">Quick Links</h4>
            <nav className="space-y-3">
              {quickLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  className="block text-portfolio-text-dim hover:text-portfolio-glow transition-colors duration-300"
                >
                  {link.name}
                </a>
              ))}
            </nav>
          </div>

          {/* Contact Information */}
          <div className="lg:col-span-2">
            <h4 className="text-lg font-semibold text-foreground mb-6">Get In Touch</h4>
            <div className="space-y-4">
              {contactInfo.map((contact, index) => (
                <a
                  key={index}
                  href={contact.href}
                  className={`flex items-center gap-3 text-portfolio-text-dim hover:text-portfolio-glow transition-colors duration-300 ${contact.href === '#' ? 'pointer-events-none' : ''}`}
                >
                  <div className="text-portfolio-glow">
                    {contact.icon}
                  </div>
                  <div>
                    <p className="text-sm font-medium text-foreground">{contact.label}</p>
                    <p className="text-sm">{contact.value}</p>
                  </div>
                </a>
              ))}
            </div>

            {/* Call to Action */}
            <div className="mt-8 glass-card p-6 rounded-xl glow-hover">
              <h5 className="font-semibold text-foreground mb-2">Ready to collaborate?</h5>
              <p className="text-sm text-portfolio-text-dim mb-4">
                I'm always excited to work on innovative projects and connect with like-minded professionals.
              </p>
              <a 
                href="mailto:revanthbanoth22@gmail.com"
                className="btn-primary inline-flex items-center gap-2"
              >
                <Mail size={16} />
                Let's Connect
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/10 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            {/* Copyright */}
            <div className="flex items-center gap-2 text-portfolio-text-dim text-sm">
              <span>© {currentYear} Banothu Revanth. Made with</span>
              <Heart size={16} className="text-portfolio-glow-pink" />
              <span>and cutting-edge tech.</span>
            </div>

            {/* Status */}
            <div className="flex items-center gap-2 text-sm">
              <div className="w-2 h-2 bg-portfolio-glow rounded-full animate-pulse"></div>
              <span className="text-portfolio-text-dim">Available for opportunities</span>
            </div>
          </div>
        </div>

        {/* Scroll to Top */}
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="fixed bottom-8 right-8 p-3 glass-card rounded-full glow-hover z-50 hover:scale-110 transition-all duration-300"
          aria-label="Scroll to top"
        >
          <div className="w-6 h-6 text-portfolio-glow">
            ↑
          </div>
        </button>
      </div>

      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-portfolio-glow/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-40 h-40 bg-portfolio-glow-purple/5 rounded-full blur-3xl"></div>
      </div>
    </footer>
  );
};