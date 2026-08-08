import { Link } from 'react-router-dom';
import { siteContent } from '../data/siteContent';
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-top-brand">
        <h2 className="footer-massive-logo">{siteContent.artistName}</h2>
      </div>
      
      <div className="container footer-container">
        <div className="footer-col">
          <h3 className="footer-heading">GET IN TOUCH</h3>
          <p className="footer-tagline">
            Professional makeup and hair artistry for film, television, editorial, and exclusive bridal events.
          </p>
          <Link to="/#contact" className="btn mt-4">BOOK A CONSULTATION</Link>
        </div>

        <div className="footer-col">
          <h3 className="footer-heading">QUICK LINKS</h3>
          <nav className="footer-nav">
            <Link to="/">Home</Link>
            <Link to="/#about">About</Link>
            <Link to="/#portfolio">Celebrity Portfolio</Link>
            <Link to="/#wedding">Wedding & Bridal</Link>
            <Link to="/videos">Watch Videos</Link>
          </nav>
        </div>

        <div className="footer-col">
          <h3 className="footer-heading">CONNECT</h3>
          <div className="footer-social">
            {siteContent.socialLinks.instagram && (
              <a href={siteContent.socialLinks.instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                <span className="social-text">IG</span>
              </a>
            )}
            {siteContent.socialLinks.youtube && (
              <a href={siteContent.socialLinks.youtube} target="_blank" rel="noopener noreferrer" aria-label="YouTube">
                <span className="social-text">YT</span>
              </a>
            )}
            {siteContent.socialLinks.facebook && (
              <a href={siteContent.socialLinks.facebook} target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                <span className="social-text">FB</span>
              </a>
            )}
            {siteContent.socialLinks.linkedin && (
              <a href={siteContent.socialLinks.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <span className="social-text">IN</span>
              </a>
            )}
          </div>
        </div>
      </div>
      
      <div className="footer-bottom">
        <div className="container">
          <p>&copy; {currentYear} {siteContent.artistName}. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
