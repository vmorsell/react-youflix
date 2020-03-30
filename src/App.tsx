import React, { useState, useEffect } from 'react';
import { Router, Location } from '@reach/router';

import { getPlaylists, getPlaylistItems } from './data/youtube';
import {
  HomeScreen,
  PlayerScreen,
  LoadingScreen,
  ErrorScreen,
} from './screens';

export const App: React.FC = () => {
  const [playlists, setPlaylists] = useState<Playlist[]>([]);
  const [movies, setMovies] = useState<Movie[]>([]);
  const [featuredMovie, setFeaturedMovie] = useState<Movie | undefined>(
    undefined
  );
  const [dataHasLoaded, setDataHasLoaded] = useState(false);
  const [error, setError] = useState<any>(false);
  const [loadingScreenDismissed, setLoadingScreenDismissed] = useState(false);

  const dismissLoadingScreen = (): void => {
    setLoadingScreenDismissed(true);
  };

  useEffect(() => {
    const fetchData = async (): Promise<void> => {
      try {
        const playlists: Playlist[] = await getPlaylists();
        setPlaylists(playlists);

        const movies: Movie[] = [];
        for (const key in playlists) {
          const items: Movie[] = await getPlaylistItems(playlists[key].id);
          movies.push(...items);
        }
        setMovies(movies);

        const featuredMovie: Movie | undefined = movies.find((movie) => {
          return movie.id === process.env.REACT_APP_YOUTUBE_FEATURED_VIDEO_ID;
        });
        setFeaturedMovie(featuredMovie);
      } catch (error) {
        setError(error);
      }
    };

    fetchData().then(() => {
      setDataHasLoaded(true);
    });
  }, []);

  const Routes = (props: any) => (
    <Router {...props}>
      <HomeScreen
        path="/"
        playlists={playlists}
        movies={movies}
        featuredMovie={featuredMovie}
      />
      <PlayerScreen path="/player/:id" />
      <ErrorScreen default error={{ status: 404 }} />
    </Router>
  );
  if (dataHasLoaded && loadingScreenDismissed && !error) {
    return (
      <Location>
        {({ location }): JSX.Element => {
          const { oldLocation } = location.state || {};
          return (
            <>
              <Routes location={oldLocation != null ? oldLocation : location} />
              {oldLocation != null && <Routes location={location} />}
            </>
          );
        }}
      </Location>
    );
  } else if (!loadingScreenDismissed && !error) {
    return (
      <LoadingScreen
        dataHasLoaded={dataHasLoaded}
        dismissLoadingScreen={(): void => dismissLoadingScreen()}
      />
    );
  } else {
    return <ErrorScreen error={error} />;
  }
};
