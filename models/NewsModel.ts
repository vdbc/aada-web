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

export interface WinnerNewsModel {
  id: number;
  projectId: number;
  author: string;
  thumbnail: string;
  status: string;
  wallpaper: string;
  content: string;
  projectName: string;
  nominateName: string;
}
export const winnersEmpty: WinnerNewsModel = {
  id: 0,
  projectId: 0,
  author: "",
  thumbnail: "",
  status: "",
  wallpaper: "",
  content: "",
  projectName: "",
  nominateName: "",
};
export interface AllWinnersResponse {
  data: WinnerNewsModel[];
}