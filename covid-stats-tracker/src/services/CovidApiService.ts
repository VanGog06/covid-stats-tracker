import { SummaryType } from '../models/summary/SummaryType';

export class CovidApiService {
  public static async getSummary(): Promise<SummaryType> {
    const getRequestOptions: RequestInit = {
      method: "GET",
      redirect: "follow",
    };

    return fetch("https://api.covid19api.com/summary", getRequestOptions)
      .then((response: Response) => response.text())
      .then((result: string): SummaryType => JSON.parse(result) as SummaryType);
  }
}
