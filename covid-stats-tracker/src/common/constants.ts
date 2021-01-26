import { ApiEndpointsType } from '../models/common/ApiEndpointsType';

export const baseApiUrl: string = "https://api.covid19api.com/";

export const apiEndpoints: ApiEndpointsType = {
  getSummary: "summary",
  getByCountry: "country",
};
