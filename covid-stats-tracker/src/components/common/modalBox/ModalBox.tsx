import { useCallback, useContext, useMemo } from 'react';

import { CovidContext } from '../../../context/CovidContext';
import { CovidContextType } from '../../../models/context/CovidContextType';
import { Collapsible } from '../collapsible/Collapsible';
import styles from './ModalBox.module.scss';

export const ModalBox = (): JSX.Element => {
  const { showModal, changeShowModal }: CovidContextType = useContext(
    CovidContext
  );

  const modalClassName: string = useMemo(() => {
    return showModal ? styles.modal : styles.hideModal;
  }, [showModal]);

  const hideModal = useCallback((): void => {
    changeShowModal(false);
  }, [changeShowModal]);

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
          <Collapsible />
        </div>
      </div>
    </div>
  );
};
