export interface INews {
  draw(data: Article[] | Source[]): void;
}

export interface IAppView {
  drawNews(data: Response): void;
  drawSources(data: ResponseSources): void;
}

export type Article = {
  source: Source;
  author: string;
  title: string;
  description: string;
  url: string;
  urlToImage: string;
  publishedAt: string;
  content: string;
};

export type Source = {
  id: string | null;
  name: string;
};

export type Response = {
  status: string;
  totalResults: number;
  articles: Article[];
};

export type ResponseSources = {
  status: string;
  sources: Sources[];
};

export type Sources = {
  id: string;
  name: string;
  description: string;
  url: string;
  category: string;
  language: string;
  country: string;
};
