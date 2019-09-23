import React from 'react';
import PropTypes from 'prop-types';

import { Marker as LeafletMarker, Popup } from 'react-leaflet';

const MarkerView = ({ position, details }) => {
  const renderDetails = () => {
    // TODO: Render marker details
    return (
      <p>
        A pretty CSS3 popup.
        <br />
        Easily customizable.
      </p>
    );
  };

  return (
    <LeafletMarker position={position}>
      <Popup>{renderDetails()}</Popup>
    </LeafletMarker>
  );
};

MarkerView.propTypes = {
  position: PropTypes.arrayOf(PropTypes.number).isRequired,
  details: PropTypes.objectOf(PropTypes.string).isRequired,
};

export default MarkerView;
