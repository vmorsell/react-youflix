import React, { useState, useEffect } from 'react';
import { Logotype } from '../../components';
import { Navigation } from './Navigation';
import styles from './header.module.scss';

export interface HeaderProps {
  drawBehind: boolean;
  siteTitle: string;
}

export const Header: React.FC<HeaderProps> = ({
  drawBehind = false,
  siteTitle,
}: HeaderProps) => {
  const [scrollY, setScrollY] = useState(window.scrollY);

  const handleScroll = (): void => {
    setScrollY(window.scrollY);
  };

  useEffect(() => {
    if (drawBehind) {
      console.log('Register to scroll');
      window.addEventListener('scroll', () => handleScroll());

      return (): void => {
        window.removeEventListener('scroll', () => handleScroll());
      };
    }
  }, [drawBehind]);

  const headerClass = drawBehind
    ? scrollY < 5
      ? styles.headerFixedTransparent
      : styles.headerFixed
    : styles.header;

  return (
    <header className={headerClass}>
      <div className={styles.left}>
        <Logotype text={siteTitle} />
        <Navigation />
      </div>
    </header>
  );
};
