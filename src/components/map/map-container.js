import React, { useState } from 'react';

import citibikAPI from '../../services/citibikAPI';

import MapView from './map-view';

export const Layers = { 0: 'Networks', 1: 'Stations' };

const MapContainer = () => {
  const [layer, setLayer] = useState(0);
  const [markers, setMarkers] = useState({});
  const [networkId, setNetworkId] = useState(0);

  const getData = async layerId => {
    let result = {};
    switch (layerId) {
      case 0: {
        result = await citibikAPI.networks();
        if (result) console.log(result);
        break;
      }
      case 1: {
        result = await citibikAPI.stations(networkId);
        if (result) console.log(result);
        break;
      }
      default:
        result = {};
    }
  };

  const handleLayerChange = layerId => {
    setLayer(layerId);
    getData(layerId);
  };

  return (
    <div>
      <MapView
        onLayerChange={handleLayerChange}
        layer={layer}
        markers={markers}
      />
    </div>
  );
};

export default MapContainer;
