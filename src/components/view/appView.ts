import News from './news/news';
import Sources from './sources/sources';
import { ResponseObject, Data, NewsInterface, Source } from '../../types/index';

export class AppView {
    news: News;
    sources: Sources;
    constructor() {
        this.news = new News();
        this.sources = new Sources();
    }

    drawNews(data: Data):void {
        const values: NewsInterface[] = data?.articles ? data?.articles : [];
        this.news.draw(values);
    }

    drawSources(data: ResponseObject):void {
        const values: Source[] = data?.sources ? data?.sources : [];
        this.sources.draw(values);
    }
}

export default AppView;
