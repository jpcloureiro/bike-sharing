import Requester from '../helpers/requester';

const BASE_URL = 'http://api.citybik.es/v2/';

const requester = new Requester(BASE_URL);

export const cancelAll = () => requester.cancelAll();

export const cancelKey = key => requester.cancelRequest(key);

const networks = () => {
  const urlPath = `networks`;

  return requester.get(urlPath);
};

const stations = id => {
  const urlPath = `networks/${id}?fields=stations`;

  return requester.get(urlPath);
};

export default {
  cancelAll,
  cancelKey,
  networks,
  stations,
};
