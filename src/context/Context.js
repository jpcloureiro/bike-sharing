import React, { createContext, useReducer } from 'react';

import { Layers } from '../helpers';

const Context = createContext();

const initialState = {
  layer: Layers.networks,
  networks: [],
  stations: [],
};

const actions = {
  setActiveLayer: 'store/SET_ACTIVE_LAYER',
  updateNetworks: 'store/UPDATE_NETWORKS',
  updateStations: 'store/UPDATE_STATIONS',
};

const reducer = (state, action) => {
  switch (action.type) {
    case actions.setActiveLayer: {
      return {
        ...state,
        layer: action.payload,
      };
    }
    case actions.updateNetworks: {
      return {
        ...state,
        networks: action.payload,
      };
    }
    case actions.updateStations: {
      const { networkId, stations } = action.payload;
      return {
        ...state,
        stations: {
          [networkId]: {
            ...stations,
          },
        },
      };
    }
    default:
      return state;
  }
};

const ContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const changeLayer = layerId => {
    dispatch(layerId);
  };

  const updateNetworks = networks => {
    dispatch({ type: actions.updateNetworks, payload: networks });
  };

  const updateStations = (networkId, stations) => {
    dispatch({ type: actions.updateStations, payload: { networkId, stations } });
  };

  const defaultContext = {
    state,
    changeLayer,
    updateNetworks,
    updateStations,
  };

  console.log(defaultContext);

  return <Context.Provider value={defaultContext}>{children}</Context.Provider>;
};

export { Context, ContextProvider };
