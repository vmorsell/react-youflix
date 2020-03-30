import React, { useEffect } from 'react';
import { RouteComponentProps } from '@reach/router';
import { Logotype } from '../../components';
import styles from './loadingScreen.module.scss';
import config from '../../config/config';

export interface LoadingScreenProps extends RouteComponentProps {
  dataHasLoaded: boolean;
  dismissLoadingScreen: CallableFunction;
}

export const LoadingScreen: React.FC<LoadingScreenProps> = (
  props: LoadingScreenProps
) => {
  const showOnlyFirstLetter = !props.dataHasLoaded;

  useEffect(() => {
    if (props.dataHasLoaded) {
      setTimeout(() => props.dismissLoadingScreen(), 500);
    }
  }, [props.dataHasLoaded]);

  return (
    <div className={styles.loadingScreen}>
      <Logotype
        text={config.siteTitle}
        showOnlyFirstLetter={showOnlyFirstLetter}
      />
    </div>
  );
};
