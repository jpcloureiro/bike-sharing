import React, { useContext, useEffect } from 'react';

import { Context } from '../../context/Context';

import citibikAPI from '../../services/citibikAPI';

import MapView from './map-view';

export const Layers = { 0: 'Networks', 1: 'Stations' };

const MapContainer = () => {
  const { layer, changeLayer } = useContext(Context);
  const getData = async layerId => {
    let result = {};
    switch (layerId) {
      case 0: {
        result = await citibikAPI.networks();
        if (result) console.log(result);
        break;
      }
      case 1: {
        result = await citibikAPI.stations(1);
        if (result) console.log(result);
        break;
      }
      default:
        result = {};
    }
  };

  const handleLayerChange = layerId => {
    changeLayer(layerId);
    getData(layerId);
  };


  return (
    <div>
      <MapView onLayerChange={handleLayerChange} layer={layer} />
    </div>
  );
};

export default MapContainer;
