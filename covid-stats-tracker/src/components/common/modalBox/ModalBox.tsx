import { useCallback, useMemo, useState } from 'react';

import styles from './ModalBox.module.scss';

export const ModalBox = (): JSX.Element => {
  const [showModal, setShowModal] = useState<boolean>(false);

  const modalClassName: string = useMemo(
    () => (showModal ? styles.modal : styles.hideModal),
    [showModal]
  );

  const hideModal = useCallback((): void => {
    setShowModal(false);
  }, [setShowModal]);

  return (
    <div className={modalClassName}>
      <div className={styles.modal__content}>
        <div className={styles.modal__content__header}>
          <span
            onClick={hideModal}
            className={styles.modal__content__header__close}
          >
            &times;
          </span>
          <h2>Historic data</h2>
        </div>
        <div className={styles.modal__content__body}>
          <p>Some text in the Modal Body</p>
          <p>Some other text...</p>
        </div>
      </div>
    </div>
  );
};
