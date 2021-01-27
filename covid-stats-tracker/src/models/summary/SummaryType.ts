import { DataState } from '../common/DataState';
import { ICountrySummary } from './ICountrySummary';
import { IGlobalSummary } from './IGlobalSummary';

export type SummaryType = {
  Global: IGlobalSummary;
  Countries: ICountrySummary[];
  Message: string;
  ID: string;
  Date: string;
  State: DataState;
};
