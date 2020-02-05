import React, { Component } from 'react';
import { OfferList } from './components/OfferList';
import offers from './services/offers';

class App extends Component {
  state = {
    loading: true,
    offers: [],
    sortedOffers: [],
    sort: {
      offers: [],
      field: 'rank',
      order: 'asc'
    }
  };

  componentDidMount() {
    let newState = {
      offers,
      sortedOffers: offers,
      loading: false
    };

    this.setState(newState);
  }

  genericSort = (a, b) => {
    let valueA = a[this.state.sort.field];
    let valueB = b[this.state.sort.field];

    let result = {
      asc: valueA > valueB ? 1 : -1,
      desc: valueA < valueB ? 1 : -1
    };

    return result[this.state.sort.order];
  };

  changeOrder = async sortFunction => {
    let offersCopy = await Object.assign([], offers);
    let sortedOffers = await offersCopy.sort(sortFunction);
    this.setState({ sortedOffers });
  };

  
  handleDownloadSpeed = () => {
    let newState = {
      sort: {
        field: 'downloadSpeed',
        order: 'asc'
      }
    };
    this.setState(newState);

    this.changeOrder(this.genericSort);
  };

  render() {
    const { loading } = this.state;

    return (
      <div className='App'>
        {loading ? (
          'Loading'
        ) : (
          <>
            <button onClick={this.handleDownloadSpeed}>
              Download
            </button>
            <OfferList offers={this.state.sortedOffers} />
          </>
        )}
      </div>
    );
  }
}

export default App;
