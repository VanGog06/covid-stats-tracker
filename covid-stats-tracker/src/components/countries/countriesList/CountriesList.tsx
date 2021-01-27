import React, { useMemo } from 'react';
import { Link } from 'react-router-dom';

import { ICountrySummary } from '../../../models/summary/ICountrySummary';
import { SortableColumn } from '../../common/sortableColumn/SortableColumn';
import styles from './CountriesList.module.scss';
import { ICountriesListProps } from './ICountriesListProps';

export const CountriesList: React.FC<ICountriesListProps> = ({
  countries,
}: ICountriesListProps): JSX.Element => {
  const rows: JSX.Element[] = useMemo(
    () =>
      countries.map(
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
    [countries]
  );

  return rows.length ? (
    <table className={styles.table}>
      <thead>
        <tr className={styles.table__tr}>
          <th className={styles.table__tr__th}>Name</th>
          <SortableColumn title="Total confirmed" />
          <th className={styles.table__tr__th}>Total deaths</th>
          <th className={styles.table__tr__th}>Total recovered</th>
        </tr>
      </thead>
      <tbody>{rows}</tbody>
    </table>
  ) : (
    <></>
  );
};
