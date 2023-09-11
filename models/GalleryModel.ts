

export interface GalleryModel {
    id: number;
    url: string;
    priority: number;
    createdAt: string;
    description: string;
    status: string;
}

export const newsEmpty: GalleryModel = {
    id: 0,
    url: "",
    priority: 0,
    createdAt: "",
    description: "",
    status: "",
};


