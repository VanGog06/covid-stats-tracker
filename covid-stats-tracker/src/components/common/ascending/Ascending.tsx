import styles from './Ascending.module.scss';
import { IAscendingProps } from './IAscendingProps';

export const Ascending: React.FC<IAscendingProps> = ({
  handleDescending,
}: IAscendingProps): JSX.Element => {
  return (
    <svg
      className={styles.svg}
      onClick={handleDescending}
      focusable="false"
      viewBox="0 0 24 24"
      aria-hidden="true"
    >
      <path
        className={styles.svg__path}
        d="M4 12l1.41 1.41L11 7.83V20h2V7.83l5.58 5.59L20 12l-8-8-8 8z"
      ></path>
    </svg>
  );
};
