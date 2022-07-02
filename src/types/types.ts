export interface IDate {
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
};

export type Source = {
  name: string;
};
