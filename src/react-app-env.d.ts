/// <reference types="react-scripts" />
declare namespace NodeJS {
  interface ProcessEnv {
    REACT_APP_SITE_TITLE: string;
    REACT_APP_SITE_DESCRIPTION: string;
    REACT_APP_PUBLISHER: string;
    REACT_APP_COPYRIGHT_FROM_YEAR: number;
    REACT_APP_YOUTUBE_API_KEY: string;
    REACT_APP_YOUTUBE_CHANNEL_ID: string;
    REACT_APP_YOUTUBE_UNLISTED_PLAYLISTS_IDS: string;
    REACT_APP_YOUTUBE_FEATURED_VIDEO_ID: string;
  }
}
