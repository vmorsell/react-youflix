import React from 'react';
import { HorizontalMovieScroller } from '../../components';

export interface PlaylistsProps {
  playlists: Playlist[];
  items: Movie[];
}

export const Playlists: React.FC<PlaylistsProps> = ({
  playlists,
  items,
}: PlaylistsProps) => {
  const horizontalScrollers = playlists.map((playlist, index) => (
    <HorizontalMovieScroller
      key={index}
      items={items.filter((item: Movie) => {
        return item.playlistId === playlist.id;
      })}
      title={playlist.title}
    />
  ));

  return <section>{horizontalScrollers}</section>;
};
