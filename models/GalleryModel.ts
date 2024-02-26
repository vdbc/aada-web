export interface Image {
  id: number;
  title: string;
  url: string;
}

export const imagesEmpty: Image = { id: 0, title: "", url: "" };

export interface GalleryAlbum {
  id: number;
  thumbnail: string;
  title: string;
  description: string;
  year: string;
  url: string;
  source: string;
  images: Image[];
  createdAt: string;
  mediaType: string;
}

export interface GalleryModel {
  id: number;
  thumbnail: string;
  title: string;
  description: string;
  year: string;
  url: string;
  source: string;
  images: Image[];
  createdAt: string;
  mediaType: string;
}

export const galleryEmpty: GalleryModel = {
  id: 0,
  thumbnail: "",
  title: "",
  description: "",
  year: "",
  source: "",
  images: [],
  createdAt: "",
  mediaType: "",
  url: "",
};
