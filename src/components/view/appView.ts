import { IAppView, ResponseData, ResponseSources } from '../../types/types';
import News from './news/news';
import Sources from './sources/sources';

export class AppView implements IAppView {
  news: News;
  sources: Sources;

  constructor() {
    this.news = new News();
    this.sources = new Sources();
  }

  drawNews(data: ResponseData) {
    const values = data?.articles ? data?.articles : [];
    this.news.draw(values);
  }

  drawSources(data: ResponseSources) {
    const values = data?.sources ? data?.sources : [];
    this.sources.draw(values);
  }
}

export default AppView;
