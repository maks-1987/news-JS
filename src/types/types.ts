export interface INews {
  draw(data: Article[] | Source[]): void;
}

export interface IAppView {
  drawNews(data: ResponseData): void;
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

export type ResponseData = {
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

export const enum StatusCodes {
  'OK' = 200,
  'BadRequest' = 400,
  'FileNotFound' = 404,
  'Unauthorized' = 401,
  'TooManyRequests' = 429,
  'ServerError' = 500,
}

export type Indexing = {
  [key: string]: string;
};

/* export type ErrorResponse = {
  status: string;
  code: string;
  message: string;
}; */
