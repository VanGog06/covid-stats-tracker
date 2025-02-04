import styles from './Error.module.scss';

export const Error: React.FC = (): JSX.Element => (
  <div className={styles.error}>
    There seems to be an issue, please refresh and try again...
  </div>
);
