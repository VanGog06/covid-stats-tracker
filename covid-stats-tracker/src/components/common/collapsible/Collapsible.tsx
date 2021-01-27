import { useCallback, useMemo, useState } from 'react';

import styles from './Collapsible.module.scss';
import { ICollapsibleProps } from './ICollapsibleProps';

export const Collapsible: React.FC<ICollapsibleProps> = ({
  title,
  body,
}: ICollapsibleProps): JSX.Element => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const contentClassName: string = useMemo(
    () => (isOpen ? styles.content : styles.hideContent),
    [isOpen]
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
        {title}
      </button>
      <div className={contentClassName}>
        {/* <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </p> */}
        {body}
      </div>
    </>
  );
};
