import React from 'react';

import { Map, TileLayer } from 'react-leaflet';

import Marker from './parts/marker';

import styles from './map-styles';

const position = [51.505, -0.09];

const bounds = [[48.505, -29.09], [52.505, 29.09]];

const MapView = () => {
  const renderMarkers = () => {
    return <Marker position={position}> Pretty CSS</Marker>;
  };

  return (
    <Map
      style={styles.map}
      center={position}
      zoom={3}
      minZoom={3}
      maxBounds={bounds}
    >
      <TileLayer
        url="https://cartodb-basemaps-{s}.global.ssl.fastly.net/light_all/{z}/{x}/{y}.png"
        attribution='© <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>, © <a href="https://carto.com/attribution">CARTO</a>'
      />
      {renderMarkers()}
    </Map>
  );
};
export default MapView;
