import React, { Component } from 'react';
import AppProvider from './context/AppProvider';

class App extends Component {
  render() {

    return (
      <AppProvider>
        <div className='App'>
          {loading ? (
            'Loading'
          ) : (
            <>
              <OfferList />
            </>
          )}
        </div>
      </AppProvider>
    );
  }
}

export default App;
