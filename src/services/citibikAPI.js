import Requester from '../helpers/requester';

const BASE_URL = 'http://api.citybik.es/v2/';

const requester = new Requester(BASE_URL);

const cancelAll = () => requester.cancelAll();

const cancelKey = key => requester.cancelRequest(key);

const getNetworks = () => {
  const urlPath = `networks`;

  return requester.get(urlPath);
};

const getStationsByNetwork = id => {
  const urlPath = `networks/${id}?fields=stations`;

  return requester.get(urlPath);
};

export default { cancelAll, cancelKey, getNetworks, getStationsByNetwork };
