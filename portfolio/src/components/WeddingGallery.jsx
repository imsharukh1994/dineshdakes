import { useState } from 'react';
import { weddingImages } from '../data/siteContent';
import Lightbox from './Lightbox';
import './PortfolioGallery.css'; // Re-use the masonry CSS

const WeddingGallery = () => {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const openLightbox = (index) => {
    setCurrentIndex(index);
    setLightboxOpen(true);
  };

  return (
    <section id="wedding" className="portfolio-section section-padding" style={{ background: 'var(--color-secondary)' }}>
      <div className="container">
        <div className="section-header">
          <h2 className="heading-md">WEDDING & BRIDAL</h2>
        </div>

        <div className="masonry-grid">
          {weddingImages.map((img, idx) => (
            <div 
              key={idx} 
              className={`masonry-item ${idx % 3 === 0 ? 'large' : ''}`}
              onClick={() => openLightbox(idx)}
            >
              <img src={img.src} alt={`Wedding Portfolio ${idx + 1}`} loading="lazy" />
              <div className="masonry-overlay"></div>
            </div>
          ))}
        </div>
      </div>

      {lightboxOpen && (
        <Lightbox 
          images={weddingImages}
          currentIndex={currentIndex}
          onClose={() => setLightboxOpen(false)}
          setIndex={setCurrentIndex}
        />
      )}
    </section>
  );
};

export default WeddingGallery;
