import { api2023Url } from "../models/AppConfig";
import { AllWinnersResponse, WinnerNewsModel } from "../models/NewsModel";
import { get } from "./http";

export async function fetchAllWinners(
  token: string
): Promise<AllWinnersResponse> {
  const url = `${api2023Url}/winners-2023`;
  const params = {
    page: 0,
    perPage: 10000,
  };
  const resp = await get<AllWinnersResponse>(url, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
    params,
  });

  return resp;
}
export async function fetchWinnersDetail(
  id: number,
  token: string
): Promise<WinnerNewsModel> {
  const url = `${api2023Url}/winners-2023/${id}`;
  const resp = await get<WinnerNewsModel>(url, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return resp;
}
