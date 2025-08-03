'use client';

// Static imports
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Technology from '@/components/Technology';
import Projects from '@/components/Projects';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import ScrollToTop from '@/components/ScrollToTop';
import ClientParticleBackground from '@/components/ClientParticleBackground';

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white">
      <ClientParticleBackground />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Technology />
        <Projects />
        <Contact />
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  );
}