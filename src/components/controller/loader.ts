import { Indexing, StatusCodes } from '../../types/types';

class Loader {
  constructor(public baseLink: string, public options: object) {}

  protected getResp(
    { endpoint, options = {} }: { endpoint: string; options: object },
    callback = () => {
      console.error('No callback for GET response');
    }
  ) {
    this.load('GET', endpoint, callback, options);
  }

  private errorHandler(res: Response) {
    if (!res.ok) {
      if (res.status === StatusCodes.Unauthorized || res.status === StatusCodes.FileNotFound)
        console.log(`Sorry, but there is ${res.status} error: ${res.statusText}`);
      throw Error(res.statusText);
    }

    return res;
  }

  private makeUrl(options: object, endpoint: string): string {
    const urlOptions: Indexing = { ...this.options, ...options };
    let url = `${this.baseLink}${endpoint}?`;

    Object.keys(urlOptions).forEach((key) => {
      url += `${key}=${urlOptions[key]}&`;
      console.log(url);
    });

    return url.slice(0, -1);
  }

  private load(method: string, endpoint: string, callback: (data: Response) => void, options = {}) {
    fetch(this.makeUrl(options, endpoint), { method })
      .then(this.errorHandler)
      .then((res) => res.json())
      .then((data) => callback(data))
      .catch((err) => console.error(err));
  }
}

export default Loader;
