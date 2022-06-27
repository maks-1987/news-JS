import Loader from './loader';

class AppLoader extends Loader {
    constructor() {
        super('https://newsapi.org/v2/', {
            apiKey: 'ed688cb45171420d8b743a63b310b8fc', // получите свой ключ https://newsapi.org/
        });
    }
}

export default AppLoader;
