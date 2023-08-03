
import { apiUrl } from "../models/AppConfig";
import { AllWinnersResponse, NewsModel, WinnersModel } from "../models/NewsModel";
import { get } from "./http";

export async function fetchAllWinners(
    token: string
): Promise<AllWinnersResponse> {
    const url = `${apiUrl}/winners-2023?perPage=1000`;
    const params = {
        page: 0,
        pageSize: 10000,
    };
    const resp = await get<AllWinnersResponse>(url, {
        headers: {
            Authorization: `Bearer ${token}`,
        },
        params,
    });

    return resp;
}
export async function fetchWinnersDetail(id: number, token: string): Promise<WinnersModel> {
    const url = `${apiUrl}/winners-2023/${id}`;
    const resp = await get<WinnersModel>(url, {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    });

    return resp;
}