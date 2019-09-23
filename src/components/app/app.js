import React from 'react';

import { ContextProvider } from '../../context/Context';
import Map from '../map';

const App = () => (
  <ContextProvider>
    <Map />
  </ContextProvider>
);

export default App;
