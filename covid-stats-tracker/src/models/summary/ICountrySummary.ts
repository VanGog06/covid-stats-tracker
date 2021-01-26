import { IGlobalSummary } from './IGlobalSummary';

export interface ICountrySummary extends IGlobalSummary {
  Country: string;
  CountryCode: string;
  Slug: string;
  Date: string;
}
