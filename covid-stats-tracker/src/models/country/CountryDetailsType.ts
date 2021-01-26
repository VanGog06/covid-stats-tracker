import { DataState } from '../common/DataState';
import { ICountryDetails } from './ICountryDetails';

export type CountryDetailsType = {
  details: ICountryDetails[];
  state: DataState;
};
