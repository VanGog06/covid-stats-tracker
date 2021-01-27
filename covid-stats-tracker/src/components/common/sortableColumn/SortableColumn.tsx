import { useCallback, useContext, useMemo, useState } from 'react';

import { CovidContext } from '../../../context/CovidContext';
import { CovidContextType } from '../../../models/context/CovidContextType';
import { Ascending } from '../ascending/Ascending';
import { Descending } from '../descending/Descending';
import { ISortableColumnProps } from './ISortableColumnProps';
import styles from './SortableColumn.module.scss';

export const SortableColumn: React.FC<ISortableColumnProps> = ({
  title,
}: ISortableColumnProps): JSX.Element => {
  const { summary, changeSummary }: CovidContextType = useContext(CovidContext);
  const [isAscending, setIsAscending] = useState<boolean>(true);

  const handleAscending = useCallback((): void => {
    const newSummary = Object.assign({}, summary, {
      Countries: [
        ...summary.Countries.sort(
          (firstCountry, secondCountry) =>
            firstCountry.TotalConfirmed - secondCountry.TotalConfirmed
        ),
      ],
    });
    changeSummary(newSummary);
    setIsAscending(true);
  }, [summary, setIsAscending, changeSummary]);

  const handleDescending = useCallback((): void => {
    const newSummary = Object.assign({}, summary, {
      Countries: [
        ...summary.Countries.sort(
          (firstCountry, secondCountry) =>
            secondCountry.TotalConfirmed - firstCountry.TotalConfirmed
        ),
      ],
    });
    changeSummary(newSummary);
    setIsAscending(false);
  }, [summary, setIsAscending, changeSummary]);

  const sortingArrow: JSX.Element = useMemo(
    () =>
      isAscending ? (
        <Ascending handleDescending={handleDescending} />
      ) : (
        <Descending handleAscending={handleAscending} />
      ),
    [isAscending, handleAscending, handleDescending]
  );

  return (
    <th className={styles.th}>
      {title} {sortingArrow}
    </th>
  );
};
