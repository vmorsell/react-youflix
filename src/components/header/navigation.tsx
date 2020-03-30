import React from 'react';
import { Link } from '@reach/router';
import styles from './navigation.module.scss';

export const Navigation: React.FC = () => (
  <nav className={styles.navigation}>
    <ul className={styles.navList}>
      <li className={styles.navItem}>
        <Link to="/" className={styles.navLinkActive}>
          Home
        </Link>
      </li>
    </ul>
  </nav>
);
