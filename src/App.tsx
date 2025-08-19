import React, { useState, useRef } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  const [activeSection, setActiveSection] = useState('home');
  const portfolioRef = useRef<HTMLDivElement>(null);
  const aboutRef = useRef<HTMLDivElement>(null);
  const contactRef = useRef<HTMLDivElement>(null);

  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId);
    
    const refs = {
      home: null,
      about: aboutRef,
      portfolio: portfolioRef,
      contact: contactRef,
    };

    if (sectionId === 'home') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      const ref = refs[sectionId as keyof typeof refs];
      if (ref?.current) {
        ref.current.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  const scrollToPortfolio = () => {
    setActiveSection('portfolio');
    if (portfolioRef.current) {
      portfolioRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Update active section based on scroll position
  React.useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 100;
      
      if (scrollPosition < window.innerHeight / 2) {
        setActiveSection('home');
      } else if (aboutRef.current && scrollPosition < aboutRef.current.offsetTop + aboutRef.current.offsetHeight / 2) {
        setActiveSection('about');
      } else if (portfolioRef.current && scrollPosition < portfolioRef.current.offsetTop + portfolioRef.current.offsetHeight / 2) {
        setActiveSection('portfolio');
      } else if (contactRef.current && scrollPosition >= contactRef.current.offsetTop - 200) {
        setActiveSection('contact');
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <Header activeSection={activeSection} onSectionChange={scrollToSection} />
      
      <main>
        <Hero onScrollToPortfolio={scrollToPortfolio} />
        
        <div ref={aboutRef}>
          <About />
        </div>
        
        <div ref={portfolioRef}>
          <Portfolio />
        </div>
        
        <div ref={contactRef}>
          <Contact />
        </div>
      </main>
      
      <Footer />
    </div>
  );
}

export default App;