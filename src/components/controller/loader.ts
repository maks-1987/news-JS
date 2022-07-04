import { EverythingResponse, Indexing, SourcesResponse, StatusCodes } from '../../types/types';

class Loader {
  constructor(public baseLink: string, public options: object) {}

  getResp(
    { endpoint, options = {} }: { endpoint: string; options?: object },
    callback = (data: SourcesResponse | EverythingResponse) => {
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
    });

    return url.slice(0, -1);
  }

  load(method: string, endpoint: string, callback: (data: SourcesResponse | EverythingResponse) => void, options = {}) {
    fetch(this.makeUrl(options, endpoint), { method })
      .then(this.errorHandler)
      .then((res) => res.json())
      .then((data: EverythingResponse | SourcesResponse) => callback(data))
      .catch((err: Error) => console.error(err));
  }
}

export default Loader;
