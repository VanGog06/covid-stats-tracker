import { ISummary } from './ISummary';

export interface ICountrySummary extends ISummary {
  Country: string;
  CountryCode: string;
  Slug: string;
  Date: string;
  ID: string;
}
