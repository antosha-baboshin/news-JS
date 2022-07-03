import { ResponseObject, Data } from "../../types/index";

class Loader {
    baseLink: string;
    options: {[key: string]: string};
    
    constructor(baseLink: string, options: {[key: string]: string}) {
        this.baseLink = baseLink;
        this.options = options;
    }

    getResp(
        { endpoint, options = {} }: {endpoint: string; options?: {sources?: string}},
        callback: (data: ResponseObject | Data) => void = () => {
            console.error('No callback for GET response');
        }
    ): void {
        this.load('GET', endpoint, callback, options);
    }

    errorHandler(res: Response): Response {
        if (!res.ok) {
            if (res.status === 401 || res.status === 404)
                console.log(`Sorry, but there is ${res.status} error: ${res.statusText}`);
            throw Error(res.statusText);
        }

        return res;
    }

    makeUrl(options: {[key: string]: string}, endpoint: string): string {
        const urlOptions: {[key: string]: string} = { ...this.options, ...options };
        let url: string = `${this.baseLink}${endpoint}?`;
        
        Object.keys(urlOptions).forEach((key: string) => {
            url += `${key}=${urlOptions[key]}&`;
        });

        return url.slice(0, -1);
    }

    load(method: string, endpoint: string, callback: (data: ResponseObject | Data) => void, options: {sources?: string} = {}): void {
        fetch(this.makeUrl(options, endpoint), { method })
            .then(this.errorHandler)
            .then((res) => res.json())
            .then((data) => callback(data))
            .catch((err) => console.error(err));
    }
}

export default Loader;