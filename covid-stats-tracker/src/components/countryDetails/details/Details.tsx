import React, { useCallback, useContext, useMemo } from 'react';

import { CovidContext } from '../../../context/CovidContext';
import { CovidContextType } from '../../../models/context/CovidContextType';
import { Detail } from './detail/Detail';
import styles from './Details.module.scss';
import { ICompletedDetailsProps } from './IDetailsProps';

export const Details: React.FC<ICompletedDetailsProps> = ({
  details,
}: ICompletedDetailsProps): JSX.Element => {
  const { changeShowModal }: CovidContextType = useContext(CovidContext);

  const countryName: string = useMemo(
    (): string => (details ? details.Country : ""),
    [details]
  );

  const date: string = useMemo(() => new Date(details.Date).toDateString(), [
    details,
  ]);

  const showModal = useCallback((): void => {
    changeShowModal(true);
  }, [changeShowModal]);

  return (
    <div className={styles.detail}>
      <h2 className={styles.detail__title}>
        Country details{countryName ? ` for ${countryName}` : ""}
      </h2>
      <span className={styles.detail__date}>{date}</span>
      <div className={styles.detail__section}>
        <Detail title="Confirmed" data={details.Confirmed} />
        <Detail title="Active" data={details.Active} />
      </div>
      <div className={styles.detail__section}>
        <Detail title="Deaths" data={details.Deaths} />
        <Detail title="Recovered" data={details.Recovered} />
      </div>

      <button type="button" onClick={showModal}>
        Check historical data
      </button>
    </div>
  );
};
