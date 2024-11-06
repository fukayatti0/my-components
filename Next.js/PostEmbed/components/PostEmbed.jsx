import { useEffect } from 'react';

const PostEmbed = ({ tweetUrl }) => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = "https://platform.twitter.com/widgets.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div className="twitter-embed-container">
      <blockquote className="twitter-tweet">
        <a href={tweetUrl}></a>
      </blockquote>
    </div>
  );
};

export default PostEmbed;