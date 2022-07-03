import { Data, ResponseObject } from '../../types/index';
import AppController from '../controller/controller';
import { AppView } from '../view/appView';

class App {
    controller: AppController;
    view: AppView;
    constructor() {
        this.controller = new AppController();
        this.view = new AppView();
    }

    start() {
        document
            .querySelector('.sources')
            .addEventListener('click', (e) => {
                console.log(e);
                this.controller.getNews(e, (data:Data) => this.view.drawNews(data));
            });
        this.controller.getSources((data:ResponseObject) => this.view.drawSources(data));
    }
}

export default App;
