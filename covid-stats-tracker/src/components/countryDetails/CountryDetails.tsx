import React, { useCallback, useContext, useEffect, useMemo, useState } from 'react';
import { useParams } from 'react-router-dom';

import { CovidContext } from '../../context/CovidContext';
import { CountryDetailsParams } from '../../models/common/CountryDetailsParams';
import { DataState } from '../../models/common/DataState';
import { CovidContextType } from '../../models/context/CovidContextType';
import { CountryDetailsType } from '../../models/country/CountryDetailsType';
import { ICountryDetails } from '../../models/country/ICountryDetails';
import { CovidApiService } from '../../services/CovidApiService';
import { Loader } from '../common/loader/Loader';
import { Details } from './details/Details';

export const CountryDetails: React.FC = (): JSX.Element => {
  const { slug } = useParams<CountryDetailsParams>();
  const { changeShowModal, changeHistoricData }: CovidContextType = useContext(
    CovidContext
  );

  const [details, setDetails] = useState<CountryDetailsType>({
    details: [],
    state: DataState.idle,
  });

  useEffect(() => {
    (async (): Promise<void> => {
      try {
        setDetails((prevState: CountryDetailsType) => ({
          details: { ...prevState.details },
          state: DataState.pending,
        }));
        const fetchedDetails: ICountryDetails[] = await CovidApiService.getByCountry(
          slug
        );
        setDetails({ details: fetchedDetails, state: DataState.completed });
      } catch (err) {
        console.log(err);
        setDetails((prevState: CountryDetailsType) => ({
          details: { ...prevState.details },
          state: DataState.error,
        }));
      }
    })();
  }, [slug, setDetails]);

  const pendingDetails: JSX.Element = useMemo(
    () => <div>Please select an appropriate country first.</div>,
    []
  );

  const loadingDetails: JSX.Element = useMemo(() => <Loader />, []);

  const errorDetails: JSX.Element = useMemo(
    () => <div>There was an error retrieving data...</div>,
    []
  );

  const showModal = useCallback((): void => {
    changeShowModal(true);

    //Only use the last 10 entries
    const newHistoricData: ICountryDetails[] = details.details
      .slice(-11)
      .reverse();
    newHistoricData.pop();

    changeHistoricData(newHistoricData);
  }, [details, changeShowModal, changeHistoricData]);

  return details && details.state === DataState.idle ? (
    pendingDetails
  ) : details.state === DataState.pending ? (
    loadingDetails
  ) : details.state === DataState.completed ? (
    <Details
      details={details.details[details.details.length - 1]}
      handleBtnClick={showModal}
    />
  ) : (
    errorDetails
  );
};
