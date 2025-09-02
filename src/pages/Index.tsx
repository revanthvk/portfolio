import { ParticleBackground } from '@/components/ParticleBackground';
import { ScrollAnimations } from '@/components/ScrollAnimations';
import { Hero } from '@/components/Hero';
import { About } from '@/components/About';
import { Skills } from '@/components/Skills';
import { Projects } from '@/components/Projects';
import { Experience } from '@/components/Experience';
import { Achievements } from '@/components/Achievements';
import { Certifications } from '@/components/Certifications';
import { Leadership } from '@/components/Leadership';
import { Events } from '@/components/Events';
import { Hobbies } from '@/components/Hobbies';
import { Footer } from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-portfolio-bg text-foreground overflow-x-hidden">
      {/* Particle Background */}
      <ParticleBackground />
      
      {/* Scroll Animations Controller */}
      <ScrollAnimations />
      
      {/* Main Content */}
      <main className="relative z-10">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Achievements />
        <Certifications />
        <Leadership />
        <Events />
        <Hobbies />
        <Footer />
      </main>
    </div>
  );
};

export default Index;