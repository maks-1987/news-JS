export interface INews {
  draw(data: Array<DataNews>): void;
}

export type DataNews = {
  urlToImage: string;
  author: string;
  source: Source;
  name: string;
  publishedAt: string;
  title: string;
  description: string;
  url: string;
  content: string;
  id: string;
};

export type Source = {
  name: string;
};
