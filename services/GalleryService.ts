import { mediaCenterApiUrl } from "../models/AppConfig";
import { GalleryAlbum, GalleryModel } from "../models/GalleryModel";
import { get } from "./http";

export async function fetchAllGallery(): Promise<GalleryAlbum[]> {
  const url = `${mediaCenterApiUrl}/gallery`;
  const params = {
    page: 0,
    pageSize: 10000,
  };
  const resp = await get<{ data: GalleryModel[] }>(url, {
    params,
  });

  return resp.data;
}

export async function fetchGalleryDetail(id: number): Promise<GalleryModel> {
  const url = `${mediaCenterApiUrl}/gallery/${id}`;
  const resp = await get<{ data: GalleryModel }>(url);
  return resp.data;
}

export async function fetchAllVideo(): Promise<GalleryModel[]> {
  const url = `${mediaCenterApiUrl}/video`;
  const params = {
    page: 0,
    pageSize: 10000,
  };
  const resp = await get<{ data: GalleryModel[] }>(url, {
    params,
  });
  return resp.data;
}
export async function fetchVideoDetail(id: number): Promise<GalleryModel> {
  const url = `${mediaCenterApiUrl}/video/${id}`;
  const resp = await get<{ data: GalleryModel }>(url);
  return resp.data;
}
export async function fetchAllGuidebook(): Promise<GalleryModel[]> {
  const url = `${mediaCenterApiUrl}/pdf`;
  const params = {
    page: 0,
    pageSize: 10000,
  };
  const resp = await get<{ data: GalleryModel[] }>(url, {
    params,
  });

  return resp.data;
}
export async function fetchGuidebookDetail(id: number): Promise<GalleryModel> {
  const url = `${mediaCenterApiUrl}/pdf/${id}`;
  const resp = await get<GalleryModel>(url);
  return resp;
}
