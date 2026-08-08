import { Link } from 'react-router-dom';
import { siteContent, portfolioImages } from '../data/siteContent';
import './Hero.css';

const Hero = () => {
  // Use a strong image from the portfolio for the hero background
  const heroImage = portfolioImages.length > 0 ? portfolioImages[0].src : '';

  return (
    <section className="hero">
      <div className="container hero-container">
        <div className="hero-content animate-fade-in">
          <h1 className="heading-xl hero-title">{siteContent.artistName}</h1>
          <p className="hero-subtitle">{siteContent.artistTitle}</p>
          
          <div className="hero-actions">
            <Link to="/#portfolio" className="btn btn-solid">
              VIEW PORTFOLIO
            </Link>
            <Link to="/#contact" className="btn">
              ENQUIRE NOW
            </Link>
          </div>
        </div>
        
        <div className="hero-visual animate-fade-in" style={{ animationDelay: '0.3s' }}>
          {heroImage ? (
            <img src={heroImage} alt="Dinesh Dake Makeup Work" className="hero-img" />
          ) : (
            <div className="hero-img-placeholder"></div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Hero;
