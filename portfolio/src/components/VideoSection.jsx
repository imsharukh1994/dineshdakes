import { Link } from 'react-router-dom';
import { Play } from 'lucide-react';
import { siteContent } from '../data/siteContent';
import './VideoSection.css';

const VideoCard = ({ video }) => {
  return (
    <a href={`https://www.youtube.com/watch?v=${video.id}`} target="_blank" rel="noopener noreferrer" className="video-card">
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
    </a>
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
