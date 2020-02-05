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

  
  handleChange = async (event) => {
    let selectedIndex = event.target.selectedIndex;
    let splitedValues = event.target[selectedIndex].value.split(',');
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

    return (
      <div className='App'>
        { loading ? (
          'Loading'
        ) : (
          <>
            <select onChange={this.handleChange}>
              <option value="rank,asc">Order by:</option>
              <option value='downloadSpeed,asc'>Download Speed - Asc</option>
              <option value='downloadSpeed,desc'>Download Speed - Desc</option>
              <option value='uploadSpeed,asc'>Upload Speed - Asc</option>
              <option value='uploadSpeed,desc'>Upload Speed - Desc</option>
              <option value='price,asc'>Price - Asc</option>
              <option value='price,desc'>Price - Desc</option>
            </select>
            <OfferList offers={this.state.sortedOffers} />
          </>
        )}
      </div>
    );
  }
}

export default App;
