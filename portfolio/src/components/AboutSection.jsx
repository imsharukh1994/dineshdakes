import { siteContent, profileImage } from '../data/siteContent';
import './AboutSection.css';

const AboutSection = () => {
  return (
    <section id="about" className="about-section section-padding">
      <div className="container">
        <div className="about-grid">
          <div className="about-image-col">
            <div className="about-image-wrapper">
              {profileImage ? (
                <img src={profileImage} alt={siteContent.artistName} className="about-img" loading="lazy" />
              ) : (
                <div className="about-img-placeholder"></div>
              )}
            </div>
          </div>
          
          <div className="about-content-col">
            <h2 className="heading-lg about-title">ABOUT {siteContent.artistName.split(' ')[0]}</h2>
            
            {siteContent.quote && (
              <blockquote className="about-quote">
                &ldquo;{siteContent.quote}&rdquo;
              </blockquote>
            )}
            
            {siteContent.bio && (
              <div className="about-bio">
                <p className="text-body">{siteContent.bio}</p>
              </div>
            )}
            
            {siteContent.bio && <button className="btn mt-4">READ MORE</button>}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
