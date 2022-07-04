export interface INews {
  draw(data: SourcesTitle[] | Articles[]): void;
}

export interface IAppView {
  drawNews(data: EverythingResponse | Articles[]): void;
  drawSources(data: SourcesResponse | SourcesTitle[]): void;
}

export type SourcesResponse = {
  status: string;
  sources?: SourcesTitle[];
};

export type SourcesTitle = {
  id: string;
  name: string;
  description: string;
  url: string;
  category: string;
  language: string;
  country: string;
};

export type EverythingResponse = {
  status: string;
  totalResults?: number;
  articles?: Articles[];
};

export type Articles = {
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
  id: string;
  name: string;
};

export const enum StatusCodes {
  OK = 200,
  BadRequest = 400,
  FileNotFound = 404,
  Unauthorized = 401,
  TooManyRequests = 429,
  ServerError = 500,
}

export type Indexing = {
  [key: string]: string;
};

/* export type Response = {
  status: string;
  totalResults: number;
  articles: Article[];
};

export type ResponseSources = {
  status: string;
  sources: SourcesArray[];
};

export type SourcesArray = {
  id: string;
  name: string;
  description: string;
  url: string;
  category: string;
  language: string;
  country: string;
}; */
