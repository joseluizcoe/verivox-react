import React from 'react';
import { OfferList } from './components/OfferList';
import offers from './services/offers';

function App() {
  
  return (
    <div className='App'>
      <OfferList offers={offers} />
    </div>
  );
}

export default App;
