import { useEffect } from 'react';
import { siteContent } from '../data/siteContent';
import { VideoCard } from '../components/VideoSection';
import '../components/VideoSection.css';

const Videos = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const { youtubeVideos } = siteContent;

  return (
    <div className="videos-page" style={{ paddingTop: '100px', minHeight: '100vh', background: 'var(--color-primary)' }}>
      <div className="container">
        <div className="section-padding">
          <div className="section-header" style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <h1 className="heading-lg">VIDEOS</h1>
            <p className="text-body" style={{ marginTop: '1rem', letterSpacing: '0.1em' }}>
              Official videos from {siteContent.artistName}'s YouTube channel.
            </p>
          </div>
          
          <div className="video-list" style={{ gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))' }}>
            {youtubeVideos.map((video) => (
              <VideoCard key={video.id} video={{...video, thumbnail: `https://img.youtube.com/vi/${video.id}/hqdefault.jpg`}} />
            ))}
          </div>

          <div className="text-center" style={{ marginTop: '4rem', textAlign: 'center' }}>
            <a href={siteContent.socialLinks.youtube} target="_blank" rel="noopener noreferrer" className="btn btn-solid">
              SUBSCRIBE ON YOUTUBE
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Videos;
