import React from 'react';
import styles from './footer.module.scss';

export interface FooterProps {
  publisher: string;
  copyrightFromYear: number;
}

export const Footer: React.FC<FooterProps> = ({
  publisher,
  copyrightFromYear,
}: FooterProps) => {
  const year = new Date().getFullYear();
  const copyrightYears =
    copyrightFromYear === year ? year : copyrightFromYear + '-' + year;

  return (
    <footer className={styles.footer}>
      <p>
        YouFlix is made just for fun and is open sourced at{' '}
        <a
          href="https://github.com/vmorsell/react-youflix"
          rel="noopener noreferrer"
          target="_blank"
        >
          GitHub
        </a>
        .
      </p>
      <p>
        &copy; {copyrightYears} {publisher}.
      </p>
    </footer>
  );
};
