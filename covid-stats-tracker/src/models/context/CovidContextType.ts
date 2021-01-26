import { SummaryType } from '../summary/SummaryType';

export type CovidContextType = {
  summary: SummaryType;
  changeSummary(newSummary: SummaryType): void;
};
