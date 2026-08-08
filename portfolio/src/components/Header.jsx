import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { siteContent } from '../data/siteContent';
import './Header.css';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const closeMenu = () => setMobileMenuOpen(false);

  const navLinks = [
    { name: 'HOME', path: '/' },
    { name: 'ABOUT', path: '/#about' },
    { name: 'CELEBRITY', path: '/#portfolio' },
    { name: 'WEDDING', path: '/#wedding' },
    { name: 'VIDEOS', path: '/videos' },
    { name: 'CONTACT', path: '/#contact' },
  ];

  const handleNavClick = (e, path) => {
    if (path.startsWith('/#') && location.pathname === '/') {
      e.preventDefault();
      const id = path.substring(2);
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
    closeMenu();
  };

  return (
    <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
      <div className="header-container">
        <Link to="/" className="logo" onClick={closeMenu}>
          {siteContent.artistName}
          <span className="logo-subtitle">{siteContent.artistTitle}</span>
        </Link>

        <nav className="desktop-nav">
          {navLinks.map((link) => (
            <Link 
              key={link.name} 
              to={link.path}
              onClick={(e) => handleNavClick(e, link.path)}
              className="nav-link"
            >
              {link.name}
            </Link>
          ))}
        </nav>

        <div className="header-actions">
          <Link to="/#contact" className="btn btn-book desktop-only" onClick={(e) => handleNavClick(e, '/#contact')}>
            BOOK / ENQUIRE
          </Link>
          <button 
            className="mobile-menu-btn"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`mobile-menu ${mobileMenuOpen ? 'open' : ''}`}>
        <nav className="mobile-nav">
          {navLinks.map((link) => (
            <Link 
              key={link.name} 
              to={link.path}
              onClick={(e) => handleNavClick(e, link.path)}
              className="mobile-nav-link"
            >
              {link.name}
            </Link>
          ))}
          <Link to="/#contact" className="btn btn-solid mobile-book-btn" onClick={(e) => handleNavClick(e, '/#contact')}>
            BOOK / ENQUIRE
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
