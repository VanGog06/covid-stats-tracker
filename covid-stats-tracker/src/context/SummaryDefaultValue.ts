import { SummaryType } from '../models/summary/SummaryType';

export const summaryDefaultValue: SummaryType = {
  Countries: [],
  Date: "",
  Global: {
    NewConfirmed: 0,
    NewDeaths: 0,
    NewRecorded: 0,
    TotalConfirmed: 0,
    TotalDeaths: 0,
    TotalRecovered: 0,
  },
  ID: "",
  Message: "",
};
