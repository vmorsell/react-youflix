import React from 'react';

import { HorizontalMovieScroller } from '../../components';

export interface Props {
  playlists: Playlist[];
  items: Movie[];
}

const Playlists = ({ playlists, items }: Props) => {
  const horizontalScrollers = playlists.map((playlist, index) => (
    <HorizontalMovieScroller
      key={index}
      items={items.filter((item) => {
        return item.id === playlist.id;
      })}
      title={playlist.title}
    />
  ));

  return <section>{horizontalScrollers}</section>;
};

export default Playlists;
