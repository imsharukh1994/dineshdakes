import { useState } from 'react';
import { celebrityImages } from '../data/siteContent';
import Lightbox from './Lightbox';
import './PortfolioGallery.css';

const PortfolioGallery = () => {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const openLightbox = (index) => {
    setCurrentIndex(index);
    setLightboxOpen(true);
  };

  return (
    <section id="portfolio" className="portfolio-section section-padding">
      <div className="container">
        <div className="section-header">
          <h2 className="heading-md">CELEBRITY PORTFOLIO</h2>
        </div>

        <div className="masonry-grid">
          {celebrityImages.map((img, idx) => (
            <div 
              key={idx} 
              className={`masonry-item ${idx % 3 === 0 ? 'large' : ''}`}
              onClick={() => openLightbox(idx)}
            >
              <img src={img.src} alt={`Portfolio ${idx + 1}`} loading="lazy" />
              <div className="masonry-overlay"></div>
            </div>
          ))}
        </div>
      </div>

      {lightboxOpen && (
        <Lightbox 
          images={celebrityImages}
          currentIndex={currentIndex}
          onClose={() => setLightboxOpen(false)}
          setIndex={setCurrentIndex}
        />
      )}
    </section>
  );
};

export default PortfolioGallery;
