import React from 'react';
import { Location, Link } from '@reach/router';

export interface PlayerScreenLinkProps {
  movieId: string;
  className?: string;
  children: React.ReactNode;
}

export const PlayerScreenLink: React.FC<PlayerScreenLinkProps> = ({
  movieId,
  className,
  children,
}: PlayerScreenLinkProps) => (
  <Location>
    {({ location }): JSX.Element => (
      <Link
        state={{ oldLocation: JSON.parse(JSON.stringify(location)) }}
        to={'/player/' + movieId}
        className={className}
      >
        {children}
      </Link>
    )}
  </Location>
);
