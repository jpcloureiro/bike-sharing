import React from 'react';

import { Map, TileLayer } from 'react-leaflet';

import Marker from './parts/marker';

import styles from './map-styles';

import { Layers } from '../../helpers';

const position = [38.71667, -9.13333];

// const bounds = [[48.505, -29.09], [52.505, 29.09]];

const MapView = ({ onLayerChange, layer, networks, stations }) => {
  const renderMarkers = () => {
    let collection = [];
    switch (layer) {
      case Layers.networks:
        collection = networks;
        break;
      case Layers.stations:
        collection = stations;
        break;
      default:
        collection = [];
    }

    return collection.map(item => {
      const { latitude, longitude } = item.location;
      const position = [latitude, longitude];
      const details = {
        ...item,
      };
      return <Marker position={position} details={details} />;
    });
  };

  return (
    <Map style={styles.map} center={position} zoom={3} minZoom={3}>
      <TileLayer
        url="https://cartodb-basemaps-{s}.global.ssl.fastly.net/light_all/{z}/{x}/{y}.png"
        attribution='© <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>, © <a href="https://carto.com/attribution">CARTO</a>'
      />
      {renderMarkers()}
    </Map>
  );
};
export default MapView;
