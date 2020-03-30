import React from 'react';
import { Icon, PlayerScreenLink } from '../../components';

import styles from './item.module.scss';

export const Item: React.FC<Movie> = ({
  duration,
  id,
  isNew,
  tags,
  thumbnails,
  title,
}: Movie) => {
  const isNewMarker = isNew ? <span className={styles.isNew}>New</span> : null;

  /** @type {React.CSSProperties} */
  const backgroundImageStyles = thumbnails
    ? {
        backgroundImage: `url(${thumbnails.medium.url})`,
      }
    : undefined;

  const tagComponents = tags
    ? tags.map((tag, index) => (
        <span key={index} className={styles.tag}>
          {tag}
          {index !== tags.length - 1 && (
            <span className={styles.tagSeparator}> &bull; </span>
          )}
        </span>
      ))
    : null;

  return (
    <PlayerScreenLink movieId={id} className={styles.movieItem}>
      <li style={backgroundImageStyles}>
        <div className={styles.details}>
          <Icon name="play" className={styles.playIcon} />
          <p className={styles.title}>{title}</p>
        </div>
      </li>
    </PlayerScreenLink>
  );
};
