import { apiEndpoints, baseApiUrl } from '../common/constants';
import { ICountryDetails } from '../models/country/ICountryDetails';
import { SummaryType } from '../models/summary/SummaryType';

export class CovidApiService {
  public static async getSummary(): Promise<SummaryType> {
    const summaryResponse: Response = await fetch(
      `${baseApiUrl}${apiEndpoints.getSummary}`
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
    const countryResponse: Response = await fetch(
      `${baseApiUrl}${apiEndpoints.getByCountry}/${slug}`
    );
    const countryString: string = await countryResponse.text();
    const fetchedDetails: ICountryDetails[] = JSON.parse(
      countryString
    ) as ICountryDetails[];

    return fetchedDetails;
  }
}
