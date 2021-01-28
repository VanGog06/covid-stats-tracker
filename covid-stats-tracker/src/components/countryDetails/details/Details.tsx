import React, { useMemo } from 'react';
import { Link, useParams } from 'react-router-dom';

import { CountryDetailsParams } from '../../../models/common/CountryDetailsParams';
import { Detail } from './detail/Detail';
import styles from './Details.module.scss';
import { ICompletedDetailsProps } from './IDetailsProps';

export const Details: React.FC<ICompletedDetailsProps> = ({
  details,
  handleBtnClick,
}: ICompletedDetailsProps): JSX.Element => {
  const { slug } = useParams<CountryDetailsParams>();
  const countryName: string = useMemo((): string => details.Country || "", [
    details,
  ]);

  const date: string = useMemo(() => new Date(details.Date).toDateString(), [
    details,
  ]);

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

      <Link to={`/${slug}/historic`} onClick={handleBtnClick}>
        Check historic data
      </Link>
    </div>
  );
};
