import { useCallback, useMemo, useState } from 'react';

import styles from './Collapsible.module.scss';

export const Collapsible = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const contentClassName: string = useMemo(
    () => (isOpen ? styles.content : styles.hideContent),
    [isOpen, setIsOpen]
  );

  const toggleContent = useCallback(() => {
    setIsOpen(!isOpen);
  }, [isOpen, setIsOpen]);

  return (
    <>
      <button
        type="button"
        className={styles.collapsible}
        onClick={toggleContent}
      >
        Open Collapsible
      </button>
      <div className={contentClassName}>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </p>
      </div>
    </>
  );
};
