import { useEffect, useCallback } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import './Lightbox.css';

const Lightbox = ({ images, currentIndex, onClose, setIndex }) => {
  const handleKeyDown = useCallback((e) => {
    if (e.key === 'Escape') onClose();
    if (e.key === 'ArrowRight') setIndex((currentIndex + 1) % images.length);
    if (e.key === 'ArrowLeft') setIndex((currentIndex - 1 + images.length) % images.length);
  }, [currentIndex, images.length, onClose, setIndex]);

  useEffect(() => {
    document.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'auto';
    };
  }, [handleKeyDown]);

  const handleNext = (e) => {
    e.stopPropagation();
    setIndex((currentIndex + 1) % images.length);
  };

  const handlePrev = (e) => {
    e.stopPropagation();
    setIndex((currentIndex - 1 + images.length) % images.length);
  };

  return (
    <div className="lightbox-overlay" onClick={onClose}>
      <button className="lightbox-close" onClick={onClose}>
        <X size={32} />
      </button>

      <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
        <img 
          src={images[currentIndex].src} 
          alt={`Gallery item ${currentIndex + 1}`} 
          className="lightbox-img"
        />
      </div>

      <button className="lightbox-nav prev" onClick={handlePrev}>
        <ChevronLeft size={48} />
      </button>
      
      <button className="lightbox-nav next" onClick={handleNext}>
        <ChevronRight size={48} />
      </button>

      <div className="lightbox-counter">
        {currentIndex + 1} / {images.length}
      </div>
    </div>
  );
};

export default Lightbox;
