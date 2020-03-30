import React from 'react';
import { RouteComponentProps } from '@reach/router';
import { Player } from '../../components';
import styles from './playerScreen.module.scss';

export interface PlayerScreenProps extends RouteComponentProps {
  id?: string;
}

export const PlayerScreen: React.FC<PlayerScreenProps> = (
  props: PlayerScreenProps
) => {
  return props.id ? (
    <div className={styles.playerScreen}>
      <Player id={props.id} />
    </div>
  ) : (
    <p>Missing video id</p>
  );
};
