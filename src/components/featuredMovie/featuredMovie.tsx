import React from 'react';
import { Button } from '../../components';
import { PlayerScreenLink } from '../../components';
import styles from './featuredMovie.module.scss';

export interface FeaturedMovieProps {
  item: Movie;
}

export const FeaturedMovie: React.FC<FeaturedMovieProps> = ({
  item,
}: FeaturedMovieProps) => {
  /** @type {React.CSSProperties} */
  const backgroundImageStyles = item.thumbnails
    ? { backgroundImage: `url(${item.thumbnails.high.url})` }
    : undefined;

  return (
    <section className={styles.featuredMovie} style={backgroundImageStyles}>
      <div className={styles.movieDetails}>
        <p className={styles.title}>{item.title}</p>
        <p className={styles.synopsis}>{item.description}</p>
        <div className={styles.buttons}>
          <PlayerScreenLink movieId={item.id}>
            <Button grower={true} text="Play" icon="play" action={undefined} />
          </PlayerScreenLink>
        </div>
      </div>
    </section>
  );
};
