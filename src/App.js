import React, { Component } from 'react';
import { OfferList } from './components/OfferList';
import offers from './services/offers';

class App extends Component {
  state = {
    offers: offers,
    sort: {
      pric: 'asc',
      title: 'asc',
      downloadSpeed: 'asc'
    }
  };

  priceSort = (a, b) => {
    let valueA = a.cost.effectiveCost.amount;
    let valueB = b.cost.effectiveCost.amount;

    return valueA < valueB ? 1 : -1;
  };

  titleSort = (a, b) => {
    let valueA = a.product.content.text;
    let valueB = b.product.content.text;

    return valueA < valueB ? 1 : -1;
  };

  downloadSpeedSort = (a, b) => {
    let valueA = a.contractTerm.downloadSpeed.amount;
    let valueB = b.contractTerm.downloadSpeed.amount;
    let result = {
      asc: valueA < valueB ? 1 : -1,
      desc: valueA < valueB ? 1 : -1
    };
    return result[this.state.sort.downloadSpeed];
  };

  changeOrder = callback => {
    const { offers } = this.state;
    const sortedOffers = offers.sort(callback);
    this.setState({ offers: sortedOffers });
  };

  handlePriceOrder = () => {
    this.changeOrder(this.priceSort);
  };

  handleTitleOrder = () => {
    this.changeOrder(this.titleSort);
  };

  handleDownloadSpeed = () => {
    this.changeOrder(this.downloadSpeedSort);
  };

  render() {
    return (
      <div className='App'>
        <button onClick={this.handlePriceOrder}>
          Price
        </button>
        <button onClick={this.handleTitleOrder}>
          Title
        </button>
        <button onClick={this.handleDownloadSpeed}>
          Download
        </button>
        <OfferList offers={this.state.offers} />
      </div>
    );
  }
}

export default App;
