declare namespace YouTube {
  interface Localized {
    title: string;
    description: string;
  }

  interface Thumbnail {
    height: number;
    width: number;
    url: string;
  }

  interface Thumbnails {
    default: Thumbnail;
    high: Thumbnail;
    medium: Thumbnail;
  }

  interface PlaylistSnippet {
    channelId: string;
    channelTitle: string;
    description: string;
    localized: Localized;
    publishedAt: string;
    thumbnails: Thumbnails;
    title: string;
  }

  interface Playlist {
    etag: string;
    id: string;
    kind: string;
    snippet: Snippet;
  }

  interface ResourceId {
    kind: string;
    videoId: string;
  }

  interface PlaylistItemSnippet {
    channelId: string;
    channelTitle: string;
    description: string;
    playlistId: string;
    position: number;
    publishedAt: string;
    resourceId: ResourceId;
    thumbnails: Thumbnails;
    title: string;
  }
  interface PlaylistItem {
    etag: string;
    id: string;
    kind: string;
    snippet: Snippet;
  }
}
