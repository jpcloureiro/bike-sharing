import axios from 'axios';

class Requester {
  baseUrl = '';

  options = {};

  cancelKeys = {};

  constructor(baseUrl, headers) {
    this.baseUrl = baseUrl;
    if (headers) {
      this.options.headers = headers;
    }
  }

  send = (urlPath, { cancelKey = null, request, extraHeaders = null } = {}) => {
    const options = { ...this.options };
    if (extraHeaders) {
      options.headers = { ...options.headers, ...extraHeaders };
    }

    if (cancelKey) {
      this.cancelRequest(cancelKey);
      this.cancelKeys[cancelKey] = axios.CancelToken.source();
      request.cancelToken = this.cancelKeys[cancelKey].token;
    }

    const url = `${this.baseUrl}/${urlPath}`;

    return axios({
      ...options,
      ...request,
      url,
    }).then(response => response.data);
  };

  get = (urlPath, options) =>
    this.send(urlPath, {
      request: { request: { method: 'GET', timeout: 7000 } },
      ...options,
      extraHeaders: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    });

  // TODO: Complete Requester class with the remaining HTTP request methods
}

export default Requester;
