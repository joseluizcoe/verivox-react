import React from 'react';
import AppProvider from './context/AppProvider';
import OfferList from './components/OfferList';

const App = (props) => (
  <AppProvider>
    <OfferList />
  </AppProvider>
);

export default App;
