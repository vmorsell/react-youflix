import React from 'react';
import { RouteComponentProps } from '@reach/router';
import { FeaturedMovie, Layout, Playlists } from '../../components';
import config from '../../config/config';

export interface HomeScreenProps extends RouteComponentProps {
  playlists?: Playlist[] | undefined;
  movies?: Movie[] | undefined;
  featuredMovie?: Movie | undefined;
}

export const HomeScreen: React.FC<HomeScreenProps> = (
  props: HomeScreenProps
) => (
  <Layout
    siteTitle={config.siteTitle}
    publisher={config.publisher}
    copyrightFromYear={config.copyrightFromYear}
    drawBehindHeader={props.featuredMovie ? true : false}
  >
    {props.featuredMovie && <FeaturedMovie item={props.featuredMovie} />}
    {props.playlists && props.movies && (
      <Playlists playlists={props.playlists} items={props.movies} />
    )}
  </Layout>
);
