import React, { Component } from 'react';
import getAllOffers from '../services/offers';
import AppContext from './';

class AppProvider extends Component {
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

  async componentDidMount() {
    let offers = await getAllOffers();
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
    let offersCopy = await Object.assign([], this.state.offers);
    let sortedOffers = await offersCopy.sort(sortFunction);
    this.setState({ sortedOffers });
  };

  handleChange = async event => {
    let selectedIndex = event.target.selectedIndex;
    let splitedValues = event.target[
      selectedIndex
    ].value.split(',');
    let [field, order] = splitedValues;

    let newState = {
      sort: {
        field,
        order
      }
    };

    await this.setState(newState);
    this.changeOrder(this.genericSort);
  };

  render() {
    const { loading } = this.state;
    const context = {
      state: this.state,
      genericSort: this.genericSort,
      changeOrder: this.changeOrder,
      handleChange: this.handleChange
    };

    return (
      <AppContext.Provider value={context}>
        {loading ? 'Loading...' : this.props.children}
      </AppContext.Provider>
    );
  }
}

export default AppProvider;
