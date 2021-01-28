import React from 'react';

import styles from './Detail.module.scss';
import { IDetailProps } from './IDetailProps';

export const Detail: React.FC<IDetailProps> = ({
  data,
  title,
}: IDetailProps): JSX.Element => (
  <div className={styles.detail}>
    <h4 className={styles.detail__title}>{title}</h4>
    <p className={styles.detail__data}>{data}</p>
  </div>
);
