

export interface GalleryModel {
    id: string;
    url: string;
    priority: number;
    createdAt: string;
    description: string;
    status: string;

}

export const newsEmpty: GalleryModel = {
    id: "",
    url: "",
    priority: 0,
    createdAt: "",
    description: "",
    status: "",
};


