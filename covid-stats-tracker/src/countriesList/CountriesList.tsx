import React, { useContext, useMemo } from 'react';
import { Link } from 'react-router-dom';

import { CovidContext } from '../context/CovidContext';
import { CovidContextType } from '../models/context/CovidContextType';
import { ICountrySummary } from '../models/summary/ICountrySummary';
import styles from './CountriesList.module.scss';

export const CountriesList: React.FC = (): JSX.Element => {
  const { summary }: CovidContextType = useContext(CovidContext);

  const rows: JSX.Element[] = useMemo(
    () =>
      summary.Countries.map(
        (c: ICountrySummary): JSX.Element => (
          <tr key={c.ID} className={styles.table__tr}>
            <td className={styles.table__tr__td}>
              <Link to={`/${c.Slug}/details`}>{c.Country}</Link>
            </td>
            <td className={styles.table__tr__td}>{c.TotalConfirmed}</td>
            <td className={styles.table__tr__td}>{c.TotalDeaths}</td>
            <td className={styles.table__tr__td}>{c.TotalRecovered}</td>
          </tr>
        )
      ),
    [summary]
  );

  return (
    <table className={styles.table}>
      <thead>
        <tr className={styles.table__tr}>
          <th className={styles.table__tr__th}>Name</th>
          <th className={styles.table__tr__th}>Total confirmed</th>
          <th className={styles.table__tr__th}>Total deaths</th>
          <th className={styles.table__tr__th}>Total recovered</th>
        </tr>
      </thead>
      <tbody>{rows}</tbody>
    </table>
  );
};
