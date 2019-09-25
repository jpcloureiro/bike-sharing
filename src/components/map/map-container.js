import React, { useContext, useEffect } from 'react';

import { Context } from '../../context/Context';

import { CityBikAPI } from '../../services';

import MapView from './map-view';

import { Layers } from '../../helpers';

const MapContainer = () => {
  const {
    state: { layer, networks, stations },
    changeLayer,
    updateNetworks,
    updateStations,
  } = useContext(Context);

  const getData = async layerId => {
    let result = {};
    switch (layerId) {
      case Layers.networks: {
        result = await CityBikAPI.getNetworks();
        updateNetworks(result.networks);
        if (result) console.log(result);
        break;
      }
      case Layers.stations: {
        result = await CityBikAPI.getStationsByNetwork(1);
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

  useEffect(() => {
    if (Object.keys(networks) < 1) getData(Layers.networks);
  });

  return (
    <div>
      <MapView
        onLayerChange={handleLayerChange}
        layer={layer}
        networks={networks}
        stations={stations}
      />
    </div>
  );
};

export default MapContainer;
