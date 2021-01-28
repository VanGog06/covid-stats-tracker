import { DataState } from '../common/DataState';
import { ICountrySummary } from './ICountrySummary';
import { ISummary } from './ISummary';

export type SummaryType = {
  Global: ISummary;
  Countries: ICountrySummary[];
  Message: string;
  ID: string;
  Date: string;
  State: DataState;
};
