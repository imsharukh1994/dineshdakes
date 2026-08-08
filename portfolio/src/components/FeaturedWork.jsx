import { Link } from 'react-router-dom';
import { portfolioImages } from '../data/siteContent';
import './FeaturedWork.css';

const FeaturedWork = () => {
  // Take first 4 images for featured work
  const featured = portfolioImages.slice(0, 4);

  return (
    <section className="featured-work section-padding">
      <div className="container">
        <div className="section-header">
          <h2 className="heading-md">FEATURED WORK</h2>
        </div>
        
        <div className="featured-grid">
          {featured.map((img, idx) => (
            <div key={idx} className="featured-item">
              <img src={img.src} alt={`Featured work ${idx + 1}`} loading="lazy" />
              <div className="featured-overlay">
                <span className="featured-category">{img.category}</span>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-4">
          <Link to="/#portfolio" className="btn">
            VIEW FULL PORTFOLIO
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FeaturedWork;
