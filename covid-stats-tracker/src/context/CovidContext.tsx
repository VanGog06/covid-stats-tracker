import React, { useCallback, useState } from 'react';

import { CovidContextType } from '../models/context/CovidContextType';
import { ICountryDetails } from '../models/country/ICountryDetails';
import { SummaryType } from '../models/summary/SummaryType';
import { ICovidContextProps } from './ICovidContextProps';
import { summaryDefaultValue } from './SummaryDefaultValue';

const defaultValue: CovidContextType = {
  summary: summaryDefaultValue,
  changeSummary: () => {},
  showModal: false,
  changeShowModal: () => {},
  historicData: [],
  changeHistoricData: () => {},
};

export const CovidContext: React.Context<CovidContextType> = React.createContext(
  defaultValue
);

export const CovidProvider: React.FC<ICovidContextProps> = ({
  children,
}): JSX.Element => {
  const [summary, setSummary] = useState<SummaryType>(summaryDefaultValue);
  const [showModal, setShowModal] = useState<boolean>(false);
  const [historicData, setHistoricData] = useState<ICountryDetails[]>([]);

  const changeSummary = useCallback(
    (newSummary: SummaryType): void => {
      setSummary(newSummary);
    },
    [setSummary]
  );

  const changeShowModal = useCallback(
    (newShowModal: boolean): void => {
      setShowModal(newShowModal);
    },
    [setShowModal]
  );

  const changeHistoricData = useCallback(
    (newData: ICountryDetails[]): void => {
      setHistoricData(newData);
    },
    [setHistoricData]
  );

  return (
    <CovidContext.Provider
      value={{
        summary,
        changeSummary,
        showModal,
        changeShowModal,
        historicData,
        changeHistoricData,
      }}
    >
      {children}
    </CovidContext.Provider>
  );
};
