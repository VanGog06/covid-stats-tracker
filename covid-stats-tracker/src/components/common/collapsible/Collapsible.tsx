import { useCallback, useMemo, useState } from 'react';

import styles from './Collapsible.module.scss';
import { ICollapsibleProps } from './ICollapsibleProps';

export const Collapsible: React.FC<ICollapsibleProps> = ({
  title,
  body,
}: ICollapsibleProps): JSX.Element => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const contentClassName: string = useMemo(
    (): string => (isOpen ? styles.content : styles.hideContent),
    [isOpen]
  );

  const toggleContent = useCallback((): void => {
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
      <div className={contentClassName}>{body}</div>
    </>
  );
};
