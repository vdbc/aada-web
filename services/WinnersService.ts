
import { apiUrl } from "../models/AppConfig";
import { NewsModel, WinnersModel } from "../models/NewsModel";
import { get } from "./http";

export async function fetchAllWinners(): Promise<WinnersModel[]> {
    const url = `${apiUrl}/winners-2023`;
    const params = {
        page: 0,
        pageSize: 10000,
    };
    const resp = await get<{ data: WinnersModel[] }>(url, {
        params,
    });

    return resp.data;
}

export async function fetchWinnersDetail(id: number): Promise<WinnersModel> {
    const url = `${apiUrl}/winners-2023/${id}`;
    const resp = await get<{ data: WinnersModel }>(url);

    return resp.data;
}