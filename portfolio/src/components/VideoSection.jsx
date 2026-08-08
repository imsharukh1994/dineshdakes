import { Link } from 'react-router-dom';
import { Play } from 'lucide-react';
import { siteContent } from '../data/siteContent';
import './VideoSection.css';

import { useState } from 'react';
import { X } from 'lucide-react';

const VideoCard = ({ video }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div className="video-card" onClick={() => setIsOpen(true)} style={{ cursor: 'pointer' }}>
        <div className="video-thumbnail">
          <img 
            src={`https://img.youtube.com/vi/${video.id}/hqdefault.jpg`} 
            alt={`Thumbnail for video`} 
            loading="lazy"
          />
          <div className="play-icon">
            <Play size={24} fill="currentColor" />
          </div>
        </div>
      </div>
      
      {isOpen && (
        <div className="video-modal-overlay" onClick={() => setIsOpen(false)} style={{
          position: 'fixed', top: 0, left: 0, width: '100vw', height: '100vh',
          backgroundColor: 'rgba(0,0,0,0.9)', zIndex: 9999,
          display: 'flex', justifyContent: 'center', alignItems: 'center', padding: '5%'
        }}>
          <button className="video-modal-close" onClick={() => setIsOpen(false)} style={{
            position: 'absolute', top: '20px', right: '30px', background: 'none', border: 'none',
            color: 'white', cursor: 'pointer', zIndex: 10000
          }}>
            <X size={40} />
          </button>
          <div className="video-modal-content" onClick={e => e.stopPropagation()} style={{
            width: '100%', maxWidth: '1000px', aspectRatio: '16/9', position: 'relative'
          }}>
            <iframe 
              src={`https://www.youtube.com/embed/${video.id}?autoplay=1`} 
              title="YouTube video player" 
              frameBorder="0" 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
              allowFullScreen
              style={{ width: '100%', height: '100%', position: 'absolute', top: 0, left: 0 }}
            ></iframe>
          </div>
        </div>
      )}
    </>
  );
};

const VideoSection = () => {
  const { youtubeVideos } = siteContent;
  
  if (!youtubeVideos || youtubeVideos.length === 0) return null;
  
  const featuredVideo = youtubeVideos[0];
  const remainingVideos = youtubeVideos.slice(1, 4);
  const playlistIds = remainingVideos.map(v => v.id).join(',');

  return (
    <section id="videos" className="video-section section-padding">
      <div className="container">
        <div className="section-header">
          <h2 className="heading-md">WATCH {siteContent.artistName.split(' ')[0]}</h2>
        </div>

        <div className="video-grid">
          {featuredVideo && (
            <div className="video-featured">
              <div className="video-player-wrapper">
                <iframe 
                  src={`https://www.youtube.com/embed/${featuredVideo.id}?autoplay=1&mute=1&loop=1&playlist=${playlistIds}&rel=0&modestbranding=1`} 
                  title={featuredVideo.title}
                  frameBorder="0" 
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                  allowFullScreen
                ></iframe>
              </div>
            </div>
          )}

          <div className="video-list">
            {remainingVideos.map((video) => (
              <VideoCard key={video.id} video={video} />
            ))}
          </div>
        </div>

        <div className="video-actions">
          <Link to="/videos" className="btn btn-solid">
            VIEW ALL VIDEOS
          </Link>
          <a href={siteContent.socialLinks.youtube} target="_blank" rel="noopener noreferrer" className="btn">
            WATCH ON YOUTUBE
          </a>
        </div>
      </div>
    </section>
  );
};

export default VideoSection;
export { VideoCard };
