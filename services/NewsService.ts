import { apiUrl } from "../models/AppConfig";
import { NewsModel, WinnersModel } from "../models/NewsModel";
import { get } from "./http";

export async function fetchAllNews(): Promise<NewsModel[]> {
  const url = `${apiUrl}/news`;
  const params = {
    page: 0,
    pageSize: 10000,
  };
  const resp = await get<{ data: NewsModel[] }>(url, {
    params,
  });

  return resp.data;
}

export async function fetchAllHighlight(): Promise<NewsModel[]> {
  const url = `${apiUrl}/news/highlights`;
  const params = {
    page: 0,
    pageSize: 10000,
  };
  const resp = await get<any>(url, {
    params,
  });

  return resp.data;
}

export async function fetchNewsDetail(id: number): Promise<NewsModel> {
  const url = `${apiUrl}/news/${id}`;
  const resp = await get<{ data: NewsModel }>(url);

  return resp.data;
}

