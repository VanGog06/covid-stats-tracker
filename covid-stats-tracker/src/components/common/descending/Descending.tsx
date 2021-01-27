import styles from './Descending.module.scss';
import { IDescendingProps } from './IDescendingProps';

export const Descending: React.FC<IDescendingProps> = ({
  handleAscending,
}: IDescendingProps): JSX.Element => {
  return (
    <svg
      className={styles.svg}
      onClick={handleAscending}
      focusable="false"
      viewBox="0 0 24 24"
      aria-hidden="true"
    >
      <path
        className={styles.svg__path}
        d="M20 12l-1.41-1.41L13 16.17V4h-2v12.17l-5.58-5.59L4 12l8 8 8-8z"
      ></path>
    </svg>
  );
};
