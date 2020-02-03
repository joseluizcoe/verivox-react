import React, { Component } from 'react';
import { OfferList } from './components/OfferList';
import offers from './services/offers';

class App extends Component {
  
  state = { offers };

  render () {
    return (
      <div className='App'>
        <OfferList offers={this.state.offers} />
      </div>
    );
  }
}

export default App;
