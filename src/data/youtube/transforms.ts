export const transformPlaylist = (
  youtubePlaylist: YouTube.Playlist
): Playlist => {
  return {
    ...youtubePlaylist.snippet,
    id: youtubePlaylist.id,
  };
};

export const transformPlaylistItem = (
  youtubePlaylistItem: YouTube.PlaylistItem
): Movie => {
  return {
    ...youtubePlaylistItem.snippet,
    id: youtubePlaylistItem.snippet.resourceId.videoId,
  };
};
