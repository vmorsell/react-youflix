import axios from 'axios';
import { transformPlaylist, transformPlaylistItem } from './transforms';

const youtube = axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3/',
  timeout: 1000,
});

const getPublicPlaylists = async (
  channelId: string
): Promise<Array<Playlist>> => {
  const endpoint = 'playlists';
  const params = {
    part: 'snippet',
    channelId: channelId,
    key: process.env.REACT_APP_YOUTUBE_API_KEY,
  };

  try {
    const response = await youtube.get(endpoint, { params });
    return response.data.items.map(transformPlaylist);
  } catch (error) {
    console.error(error);
    return [];
  }
};

const getUnlistedPlaylists = async (
  unlistedPlaylistsIds: string
): Promise<Array<Playlist>> => {
  const endpoint = 'playlists';
  const params = {
    part: 'snippet',
    id: unlistedPlaylistsIds,
    key: process.env.REACT_APP_YOUTUBE_API_KEY,
  };
  try {
    const response = await youtube.get(endpoint, { params });
    return response.data.items.map(transformPlaylist);
  } catch (error) {
    console.error(error);
    return [];
  }
};

export const getPlaylists = async (): Promise<Array<Playlist>> => {
  const [publicPlaylists, unlistedPlaylists] = await Promise.all([
    getPublicPlaylists(process.env.REACT_APP_YOUTUBE_CHANNEL_ID),
    getUnlistedPlaylists(process.env.REACT_APP_YOUTUBE_UNLISTED_PLAYLISTS_IDS),
  ]);

  return [...publicPlaylists, ...unlistedPlaylists];
};

export const getPlaylistItems = async (
  playlistId: string
): Promise<Array<Movie>> => {
  const endpoint = 'playlistItems';
  const params = {
    part: 'snippet',
    playlistId: playlistId,
    key: process.env.REACT_APP_YOUTUBE_API_KEY,
  };

  try {
    const response = await youtube.get(endpoint, { params });
    return response.data.items.map(transformPlaylistItem);
  } catch (error) {
    console.error(error);
    return [];
  }
};
