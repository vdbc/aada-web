
export interface Images {
    id: number;
    title: string;
    url: string;
}

export const imagesEmpty: Images = { id: 0, title: "", url: "" };
export interface GalleryModel {
    id: number;
    thumbnail: string;
    title: string;
    description: string;
    year: string;
    source: string;
    images: Images[];
    createdAt: string;
    mediaType: string;
}

export const newsEmpty: GalleryModel = {
    id: 0,
    thumbnail: "",
    title: "",
    description: "",
    year: "",
    source: "",
    images: [],
    createdAt: "",
    mediaType: "",
};


