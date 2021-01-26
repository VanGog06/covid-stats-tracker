import { apiEndpoints, baseApiUrl } from '../common/constants';
import { SummaryType } from '../models/summary/SummaryType';

export class CovidApiService {
  public static async getSummary(): Promise<SummaryType> {
    const getRequestOptions: RequestInit = {
      method: "GET",
      redirect: "follow",
    };

    const summaryResponse: Response = await fetch(
      `${baseApiUrl}${apiEndpoints.getSummary}`,
      getRequestOptions
    );
    const summaryString: string = await summaryResponse.text();
    const fetchedSummary: SummaryType = JSON.parse(
      summaryString
    ) as SummaryType;

    return {
      ...fetchedSummary,
      Countries: fetchedSummary.Countries.slice(0, 10),
    };
  }
}
