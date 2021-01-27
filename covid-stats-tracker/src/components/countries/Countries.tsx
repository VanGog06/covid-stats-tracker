import React, { useContext, useMemo } from 'react';

import { CovidContext } from '../../context/CovidContext';
import { DataState } from '../../models/common/DataState';
import { CovidContextType } from '../../models/context/CovidContextType';
import { Error } from '../common/error/Error';
import { Loader } from '../common/loader/Loader';
import { CountriesList } from './countriesList/CountriesList';

export const Countries = (): JSX.Element => {
  const { summary }: CovidContextType = useContext(CovidContext);

  const pendingDetails: JSX.Element = useMemo(() => <></>, []);

  const loadingDetails: JSX.Element = useMemo(() => <Loader />, []);

  const errorDetails: JSX.Element = useMemo(() => <Error />, []);

  return summary && summary.State === DataState.idle ? (
    pendingDetails
  ) : summary.State === DataState.pending ? (
    loadingDetails
  ) : summary.State === DataState.completed ? (
    <CountriesList countries={summary.Countries} />
  ) : (
    errorDetails
  );
};
