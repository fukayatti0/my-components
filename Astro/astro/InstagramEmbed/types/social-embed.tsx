export interface InstagramEmbedProps {
    postUrl: string;
    caption?: string;
    hideCaption?: boolean;
    maxWidth?: number;
  }
  
  export interface PostEmbedProps {
    tweetUrl: string;
    theme?: 'light' | 'dark';
    maxWidth?: number;
  }
