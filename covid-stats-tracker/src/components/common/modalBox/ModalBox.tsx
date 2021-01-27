import { useCallback, useContext, useMemo } from 'react';
import { useHistory } from 'react-router-dom';

import { CovidContext } from '../../../context/CovidContext';
import { CovidContextType } from '../../../models/context/CovidContextType';
import { IModalBoxProps } from './IModalBoxProps';
import styles from './ModalBox.module.scss';

export const ModalBox: React.FC<IModalBoxProps> = ({
  title,
  body,
}: IModalBoxProps): JSX.Element => {
  const history = useHistory();
  const { showModal, changeShowModal }: CovidContextType = useContext(
    CovidContext
  );

  const modalClassName: string = useMemo(() => {
    return showModal ? styles.modal : styles.hideModal;
  }, [showModal]);

  const hideModal = useCallback((): void => {
    history.goBack();
    changeShowModal(false);
  }, [history, changeShowModal]);

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
          <h2>{title}</h2>
        </div>
        <div className={styles.modal__content__body}>{body}</div>
      </div>
    </div>
  );
};
