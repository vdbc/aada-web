import { apiUat, apiUrl } from "../models/AppConfig";
import { GalleryModel } from "../models/GalleryModel";
import { get } from "./http";

export async function fetchAllGallery(): Promise<GalleryModel[]> {
    const url = `${apiUat}/media-center/AADA/gallery`;
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
    // console.log('mylog video: ', resp, url);
    return resp.data;

}

export async function fetchAllVideo(): Promise<GalleryModel[]> {
    const url = `${apiUat}/media-center/AADA/video`;
    const params = {
        page: 0,
        pageSize: 10000,
    };
    const resp = await get<{ data: GalleryModel[] }>(url, {
        params,
    });
    // console.log('mylog video: ', resp, url);
    return resp.data;
}
export async function fetchVideoDetail(id: number): Promise<GalleryModel> {
    const url = `${apiUat}/media-center/video/AADA/${id}`;
    const resp = await get<{ data: GalleryModel }>(url);
    return resp.data;
}
export async function fetchAllGuidebook(): Promise<GalleryModel[]> {
    const url = `${apiUat}/media-center/AADA/pdf`;
    const params = {
        page: 0,
        pageSize: 10000,
    };
    const resp = await get<{ data: GalleryModel[] }>(url, {
        params,
    });
    // console.log('mylog pdf: ', resp, url);
    return resp.data;
}
export async function fetchGuidebookDetail(id: number): Promise<GalleryModel> {
    const url = `${apiUat}/media-center/pdf/AADA/${id}`;
    const resp = await get<{ data: GalleryModel }>(url);
    return resp.data;
}