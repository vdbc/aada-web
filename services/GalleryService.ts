import { apiUrl } from "../models/AppConfig";
import { GalleryModel } from "../models/GalleryModel";
import { get } from "./http";

export async function fetchAllGallery(): Promise<GalleryModel[]> {
    const url = `${apiUrl}/gallery`;
    const params = {
        page: 0,
        pageSize: 10000,
    };
    const resp = await get<{ data: GalleryModel[] }>(url, {
        params,
    });

    return resp.data;
}

export async function fetchGalleryDetail(id: string): Promise<GalleryModel> {
    const url = `${apiUrl}/gallery/${id}`;
    const resp = await get<{ data: GalleryModel }>(url);

    return resp.data;
}