import { useState } from 'react';
import { Calendar, MapPin, Presentation, Code, Brain, ZoomIn } from 'lucide-react';
import { Lightbox } from './Lightbox';

export const Events = () => {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [clickedEvent, setClickedEvent] = useState<string | null>(null);

  const events = [
    {
      title: "Google Cloud Next 2025",
      date: "April 2025",
      location: "Hyderabad",
      type: "Tech Conference",
      description: "Attended Google's premier developer conference focusing on AI, cloud technologies, and modern web development.",
      image: "/events/event-google-summit.png",
      highlights: ["AI/ML Sessions", "Cloud Architecture", "Networking"],
      color: "portfolio-glow"
    },
    {
      title: "Microsoft Student Partner Workshop",
      date: "February 2024",
      location: "Hyderabad",
      type: "Workshop",
      description: "Conducted and participated in Microsoft technology workshops, sharing knowledge about Azure and modern development practices.",
      image: "/events/event-microsoft-workshop.png",
      highlights: ["Azure Training", "Student Mentoring", "Technical Demos"],
      color: "portfolio-glow-purple"
    },
    {
      title: "IIT Bhilai Technical Fest",
      date: "March 2024",
      location: "IIT Bhilai",
      type: "Competition",
      description: "Participated in multiple technical competitions and won 3rd prize in boat racing competition.",
      image: "/events/event-iit-hub.png",
      highlights: ["Technical Competitions", "Innovation Showcase", "Prize Winner"],
      color: "portfolio-glow-pink"
    },
    {
      title: "Rajasthan Police Hackathon 1.0",
      date: "January 2024",
      location: "Jaipur",
      type: "Hackathon",
      description: "Reached top 7 position in the prestigious hackathon focused on law enforcement technology solutions.",
      image: "/events/event-hackathon-hub.png",
      highlights: ["Security Solutions", "Team Collaboration", "Top 7 Finish"],
      color: "portfolio-glow"
    },
    {
      title: "AI & Machine Learning Conference",
      date: "November 2023",
      location: "Bangalore",
      type: "Confernce",
      description: "Attended advanced sessions on AI/ML applications in cybersecurity and participated in hands-on workshops.",
      image: "/events/event-iitx-hub.png",
      highlights: ["AI Research", "Practical Labs", "Industry Insights"],
      color: "portfolio-glow-purple"
    },
    {
      title: "Industrail Innovation and Technology Expo 2025",
      date: "June 2025",
      location: "Hyderabad",
      type: "EXPO",
      description: "Participated in India's largest cybersecurity conference, learning about latest threats and defense strategies.",
      image: "/events/event-innovation-hub.png",
      highlights: ["Threat Intelligence", "Security Trends", "Expert Panels"],
      color: "portfolio-glow-pink"
    }
  ];

  const workshops = [
    {
      title: "Docker & Kubernetes Workshop",
      organizer: "TechCorp",
      skills: ["Containerization", "Orchestration", "DevOps"],
      icon: <Code className="w-6 h-6" />
    },
    {
      title: "Ethical Hacking Bootcamp",
      organizer: "CyberSec Institute",
      skills: ["Penetration Testing", "Vulnerability Assessment", "Security Auditing"],
      icon: <Brain className="w-6 h-6" />
    },
    {
      title: "React & Next.js Masterclass",
      organizer: "WebDev Academy",
      skills: ["Frontend Development", "Modern JavaScript", "Performance Optimization"],
      icon: <Presentation className="w-6 h-6" />
    }
  ];

  const eventImages = events.map(event => event.image);
  const eventTitles = events.map(event => event.title);

  const handleImageClick = (index: number, eventTitle: string) => {
    setCurrentImageIndex(index);
    setLightboxOpen(true);
    setClickedEvent(eventTitle);
    setTimeout(() => setClickedEvent(null), 600);
  };

  const handleEventClick = (eventTitle: string) => {
    setClickedEvent(eventTitle);
    setTimeout(() => setClickedEvent(null), 600);
  };

  return (
    <section id="events" className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 fade-in">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Events & <span className="gradient-text">Workshops</span>
          </h2>
          <p className="text-xl text-portfolio-text-dim max-w-3xl mx-auto">
            Continuous learning through industry events, conferences, and hands-on workshops
          </p>
        </div>

        {/* Events Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {events.map((event, index) => (
            <div
              key={index}
              className={`glass-card rounded-xl overflow-hidden glow-hover group fade-in cursor-pointer ${
                clickedEvent === event.title ? 'blink-glow' : ''
              }`}
              style={{ animationDelay: `${index * 0.1}s` }}
              onClick={() => handleEventClick(event.title)}
            >
              {/* Event Image */}
              <div className="relative h-48 overflow-hidden group">
                <img
                  src={event.image}
                  alt={event.title}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-portfolio-bg/80 via-transparent to-transparent"></div>

                {/* Zoom Overlay */}
                <div
                  className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  onClick={(e) => {
                    e.stopPropagation();
                    handleImageClick(index, event.title);
                  }}
                >
                  <div className="p-3 rounded-full bg-portfolio-surface/80 backdrop-blur-sm">
                    <ZoomIn className="w-6 h-6 text-foreground" />
                  </div>
                </div>
              </div>

              {/* Event Content */}
              <div className="p-6">
                {/* Event Type Badge */}
                <span className={`inline-block px-3 py-1 text-xs rounded-full bg-${event.color}/20 text-${event.color} border border-${event.color}/30 mb-3`}>
                  {event.type}
                </span>

                {/* Event Title */}
                <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-portfolio-glow transition-colors">
                  {event.title}
                </h3>

                {/* Event Details */}
                <div className="flex items-center gap-4 text-sm text-portfolio-text-dim mb-3">
                  <div className="flex items-center gap-1">
                    <Calendar size={14} />
                    {event.date}
                  </div>
                  <div className="flex items-center gap-1">
                    <MapPin size={14} />
                    {event.location}
                  </div>
                </div>

                {/* Description */}
                <p className="text-portfolio-text-dim text-sm leading-relaxed mb-4">
                  {event.description}
                </p>

                {/* Highlights */}
                <div className="space-y-2">
                  <p className="text-xs font-medium text-foreground">Key Highlights:</p>
                  <div className="flex flex-wrap gap-1">
                    {event.highlights.map((highlight, hlIndex) => (
                      <span
                        key={hlIndex}
                        className="px-2 py-1 text-xs rounded bg-portfolio-surface/50 border border-white/10 text-portfolio-text-dim"
                      >
                        {highlight}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Workshops Section */}
        <div className="fade-in">
          <h3 className="text-3xl font-bold text-center mb-12">
            Professional <span className="gradient-text">Workshops</span>
          </h3>
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {workshops.map((workshop, index) => (
              <div
                key={index}
                className="glass-card p-6 rounded-xl glow-hover group text-center"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="text-portfolio-glow mb-4 group-hover:scale-110 transition-transform">
                  {workshop.icon}
                </div>
                <h4 className="font-bold text-foreground mb-2 group-hover:text-portfolio-glow transition-colors">
                  {workshop.title}
                </h4>
                <p className="text-sm text-portfolio-glow-purple mb-4">{workshop.organizer}</p>
                <div className="flex flex-wrap gap-1 justify-center">
                  {workshop.skills.map((skill, skillIndex) => (
                    <span
                      key={skillIndex}
                      className="px-2 py-1 text-xs rounded bg-portfolio-surface/50 border border-white/10 text-portfolio-text-dim"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Event Statistics */}
        <div className="mt-16 fade-in">
          <div className="glass-card p-8 rounded-xl text-center max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold mb-6 gradient-text">Event Participation Stats</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-portfolio-glow mb-2">15+</div>
                <div className="text-portfolio-text-dim text-sm">Events Attended</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-portfolio-glow-purple mb-2">8</div>
                <div className="text-portfolio-text-dim text-sm">Workshops Completed</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-portfolio-glow-pink mb-2">5</div>
                <div className="text-portfolio-text-dim text-sm">Conference Presentations</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-portfolio-glow mb-2">3</div>
                <div className="text-portfolio-text-dim text-sm">Competition Wins</div>
              </div>
            </div>
          </div>
        </div>

        {/* Lightbox */}
        <Lightbox
          images={eventImages}
          currentIndex={currentImageIndex}
          isOpen={lightboxOpen}
          onClose={() => setLightboxOpen(false)}
          titles={eventTitles}
        />
      </div>
    </section>
  );
};
