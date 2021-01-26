import { apiEndpoints, baseApiUrl } from '../common/constants';
import { ICountryDetails } from '../models/country/ICountryDetails';
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

  public static async getByCountry(slug: string): Promise<ICountryDetails[]> {
    const getRequestOptions: RequestInit = {
      method: "GET",
      redirect: "follow",
    };

    const countryResponse: Response = await fetch(
      `${baseApiUrl}${apiEndpoints.getByCountry}/${slug}`,
      getRequestOptions
    );
    const countryString: string = await countryResponse.text();
    const fetchedDetails: ICountryDetails[] = JSON.parse(
      countryString
    ) as ICountryDetails[];

    return fetchedDetails;
  }
}
