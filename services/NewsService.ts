import axios from "axios";
import { apiUrl } from "../models/AppConfig";
import { NewsModel } from "../models/NewsModel";

export async function fetchAllNews(): Promise<NewsModel[]> {
  const url = `${apiUrl}/news`;
  const params = {
    page: 0,
    pageSize: 10000,
  };
  const resp = await axios.get(url, {
    params,
  });

  return resp.data.data;
}

export async function fetchNewsDetail(id: number): Promise<NewsModel> {
  const url = `${apiUrl}/news/${id}`;
  const resp = await axios.get(url);

  return resp.data.data;
}
