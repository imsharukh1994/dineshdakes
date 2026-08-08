import { useEffect } from 'react';
import Hero from '../components/Hero';
import FeaturedWork from '../components/FeaturedWork';
import AboutSection from '../components/AboutSection';
import PortfolioGallery from '../components/PortfolioGallery';
import WeddingGallery from '../components/WeddingGallery';
import VideoSection from '../components/VideoSection';
import Services from '../components/Services';
import Contact from '../components/Contact';

const Home = () => {
  useEffect(() => {
    // Scroll to top when mounted unless there's a hash in URL
    if (!window.location.hash) {
      window.scrollTo(0, 0);
    } else {
      const id = window.location.hash.substring(1);
      const element = document.getElementById(id);
      if (element) {
        setTimeout(() => element.scrollIntoView({ behavior: 'smooth' }), 100);
      }
    }
  }, []);

  return (
    <div className="home-page">
      <Hero />
      <FeaturedWork />
      <AboutSection />
      <PortfolioGallery />
      <WeddingGallery />
      <VideoSection />
      <Services />
      <Contact />
    </div>
  );
};

export default Home;
