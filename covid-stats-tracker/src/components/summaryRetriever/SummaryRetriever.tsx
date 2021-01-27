import React, { useCallback, useContext } from 'react';

import { CovidContext } from '../../context/CovidContext';
import { CovidContextType } from '../../models/context/CovidContextType';
import { SummaryType } from '../../models/summary/SummaryType';
import { CovidApiService } from '../../services/CovidApiService';
import styles from './SummaryRetriever.module.scss';

export const SummaryRetriever = (): JSX.Element => {
  const { changeSummary }: CovidContextType = useContext(CovidContext);

  const getSummary = useCallback(
    async (
      event: React.MouseEvent<HTMLButtonElement, MouseEvent>
    ): Promise<void> => {
      event.preventDefault();

      try {
        const fetchedSummary: SummaryType = await CovidApiService.getSummary();
        changeSummary(fetchedSummary);
      } catch (err) {
        console.log(err);
      }
    },
    [changeSummary]
  );

  return (
    <button type="button" className={styles.button} onClick={getSummary}>
      Get summary
    </button>
  );
};
