import { apiUat, apiUrl } from "../models/AppConfig";
import { GalleryModel } from "../models/GalleryModel";
import { get } from "./http";

export async function fetchAllGallery(): Promise<GalleryModel[]> {
    const url = `${apiUat}/media-center/admin/gallery`;
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
    const url = `${apiUat}/media-center/admin/gallery/${id}`;
    const resp = await get<{ data: GalleryModel }>(url);

    return resp.data;
}

export async function fetchAllVideo(): Promise<GalleryModel[]> {
    const url = `${apiUat}/media-center/video/AADA`;
    const params = {
        page: 0,
        pageSize: 10000,
    };
    const resp = await get<{ data: GalleryModel[] }>(url, {
        params,
    });

    return resp.data;
}
export async function fetchAllPdf(): Promise<GalleryModel[]> {
    const url = `${apiUat}/media-center/pdf/AADA`;
    const params = {
        page: 0,
        pageSize: 10000,
    };
    const resp = await get<{ data: GalleryModel[] }>(url, {
        params,
    });

    return resp.data;
}