import { useEffect, useRef } from 'react';

const InstagramEmbed = ({ postUrl }) => {
  const containerRef = useRef(null);
  const scriptRef = useRef(null);

  useEffect(() => {
    const loadEmbed = () => {
      if (window.instgrm) {
        window.instgrm.Embeds.process();
      } else if (!scriptRef.current) {
        scriptRef.current = document.createElement('script');
        scriptRef.current.src = "https://www.instagram.com/embed.js";
        scriptRef.current.async = true;
        scriptRef.current.defer = true;
        
        scriptRef.current.onload = () => {
          if (window.instgrm) {
            window.instgrm.Embeds.process();
          }
        };
        
        document.body.appendChild(scriptRef.current);
      }
    };

    const observer = new MutationObserver((mutations, obs) => {
      loadEmbed();
    });

    if (containerRef.current) {
      observer.observe(containerRef.current, {
        childList: true,
        subtree: true
      });
      loadEmbed();
    }

    return () => {
      observer.disconnect();
      if (scriptRef.current && document.body.contains(scriptRef.current)) {
        document.body.removeChild(scriptRef.current);
        scriptRef.current = null;
      }
    };
  }, [postUrl]);

  return (
    <div ref={containerRef} className="instagram-embed-container">
      <blockquote
        className="instagram-media"
        data-instgrm-captioned
        data-instgrm-permalink={postUrl}
        data-instgrm-version="14"
        style={{
          background: '#FFF',
          border: '0',
          borderRadius: '3px',
          boxShadow: '0 0 1px 0 rgba(0,0,0,0.5),0 1px 10px 0 rgba(0,0,0,0.15)',
          margin: '1px',
          maxWidth: '540px',
          minWidth: '326px',
          padding: '0',
          width: '100%'
        }}
      ></blockquote>
    </div>
  );
};

export default InstagramEmbed;
