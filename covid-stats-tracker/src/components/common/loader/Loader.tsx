import React from 'react';

import styles from './Loader.module.scss';

export const Loader: React.FC = (): JSX.Element => {
  return (
    <div className={styles.loader}>
      <div className={styles.loader__spinner}></div>
      <h4>Please wait while we load the necessary data...</h4>
    </div>
  );
};
