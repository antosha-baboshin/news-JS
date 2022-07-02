import Loader from './loader';

class AppLoader extends Loader {
    constructor() {
        super('https://newsapi.org/v2/', {
            apiKey: '32d95f4a9f25413eb98c85b1059b3366', // получите свой ключ https://newsapi.org/
        });
    }
}

export default AppLoader;
