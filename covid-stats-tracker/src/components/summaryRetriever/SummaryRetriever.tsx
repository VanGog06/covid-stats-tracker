import React, { useCallback, useContext } from 'react';

import { CovidContext } from '../../context/CovidContext';
import { DataState } from '../../models/common/DataState';
import { CovidContextType } from '../../models/context/CovidContextType';
import { SummaryType } from '../../models/summary/SummaryType';
import { CovidApiService } from '../../services/CovidApiService';
import styles from './SummaryRetriever.module.scss';

export const SummaryRetriever = (): JSX.Element => {
  const { summary, changeSummary }: CovidContextType = useContext(CovidContext);

  const getSummary = useCallback(
    async (
      event: React.MouseEvent<HTMLButtonElement, MouseEvent>
    ): Promise<void> => {
      event.preventDefault();
      changeSummary({ ...summary, State: DataState.pending });

      try {
        const fetchedSummary: SummaryType = await CovidApiService.getSummary();
        fetchedSummary.Countries.sort(
          (firstCountry, secondCountry) =>
            firstCountry.TotalConfirmed - secondCountry.TotalConfirmed
        );

        changeSummary({ ...fetchedSummary, State: DataState.completed });
      } catch (err) {
        changeSummary({ ...summary, State: DataState.error });
      }
    },
    [summary, changeSummary]
  );

  return (
    <button type="button" className={styles.button} onClick={getSummary}>
      Get summary
    </button>
  );
};
