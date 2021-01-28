import React, { useContext } from 'react';

import { CovidContext } from '../../context/CovidContext';
import { DataState } from '../../models/common/DataState';
import { CovidContextType } from '../../models/context/CovidContextType';
import { Error } from '../common/error/Error';
import { Loader } from '../common/loader/Loader';
import { CountriesList } from './countriesList/CountriesList';

export const Countries = (): JSX.Element => {
  const { summary }: CovidContextType = useContext(CovidContext);

  return summary && summary.State === DataState.idle ? (
    <></>
  ) : summary.State === DataState.pending ? (
    <Loader />
  ) : summary.State === DataState.completed ? (
    <CountriesList countries={summary.Countries} />
  ) : (
    <Error />
  );
};
