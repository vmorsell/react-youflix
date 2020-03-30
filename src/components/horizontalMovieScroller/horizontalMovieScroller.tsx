import React from 'react';
import { Item } from './Item';
import styles from './horizontalMovieScroller.module.scss';

export interface HorizontalMovieScrollerProps {
  items: Movie[];
  title: string;
}

export const HorizontalMovieScroller: React.FC<HorizontalMovieScrollerProps> = ({
  items,
  title,
}: HorizontalMovieScrollerProps) => {
  const itemComponents = items
    ? items.map((item: Movie, index: number) => (
        <Item
          key={index}
          id={item.id}
          duration={0}
          tags={item.tags}
          thumbnails={item.thumbnails}
          title={item.title}
        />
      ))
    : null;

  return (
    <div className={styles.horizontalMovieScroller}>
      <div className={styles.title}>
        <span>{title}</span>
      </div>
      <div className={styles.scroller}>
        <ul className={styles.scrollerContent}>
          {itemComponents}
          <li className={styles.rightMargin} />
        </ul>
      </div>
    </div>
  );
};
