export interface Tag {
  id: string;
  name: string;
}

export const tagEmpty: Tag = { id: "", name: "" };

export interface NewsModel {
  id: number;
  title: string;
  shortContent: string;
  content: string;
  author: string;
  createdAt: string;
  description: string;
  source: string;
  thumbnail: string;
  wallpaper: string;
  tags: Tag[];
}

export const newsEmpty: NewsModel = {
  id: 0,
  title: "",
  shortContent: "",
  content: "",
  author: "",
  createdAt: "",
  description: "",
  source: "",
  thumbnail: "",
  wallpaper: "",
  tags: [],
};
