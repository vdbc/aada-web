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
  squareImage: string;
  thumbnail: string;
  tags: Tag[];
}

export const newsEmpty: NewsModel = {
  id: 0,
  title: "",
  shotContent: "",
  content: "",
  author: "",
  createdAt: "",
  description: "",
  source: "",
  squareImage: "",
  rectangleImage: "",
  tags: [],
};
