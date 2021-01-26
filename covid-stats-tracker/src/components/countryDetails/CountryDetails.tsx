import React, { useEffect, useMemo, useState } from 'react';
import { useParams } from 'react-router-dom';

import { CountryDetailsParams } from '../../models/common/CountryDetailsParams';
import { DataState } from '../../models/common/DataState';
import { CountryDetailsType } from '../../models/country/CountryDetailsType';
import { ICountryDetails } from '../../models/country/ICountryDetails';
import { CovidApiService } from '../../services/CovidApiService';
import { Details } from './details/Details';

export const CountryDetails: React.FC = (): JSX.Element => {
  const { slug } = useParams<CountryDetailsParams>();

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

  const loadingDetails: JSX.Element = useMemo(
    () => <div>Please wait while we load the necessary data.</div>,
    []
  );

  const errorDetails: JSX.Element = useMemo(
    () => <div>There was an error retrieving data...</div>,
    []
  );

  return details && details.state === DataState.idle ? (
    pendingDetails
  ) : details.state === DataState.pending ? (
    loadingDetails
  ) : details.state === DataState.completed ? (
    <Details details={details.details[details.details.length - 1]} />
  ) : (
    errorDetails
  );
};
