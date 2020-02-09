import React from 'react';
import AppContext from '../../context';
import SortOfferBarStyled from './SortOfferBarStyled';

const ORDER_BY_OPTIONS = [
  {
    title: 'Order by:',
    value: 'rank,asc'
  },
  {
    title: 'Download Speed - Asc',
    value: 'downloadSpeed,asc'
  },
  {
    title: 'Download Speed - Desc',
    value: 'downloadSpeed,desc'
  },
  {
    title: 'Upload Speed - Asc',
    value: 'uploadSpeed,asc'
  },
  {
    title: 'Upload Speed - Desc',
    value: 'uploadSpeed,desc'
  },
  {
    title: 'Price - Asc',
    value: 'price,asc'
  },
  {
    title: 'Price - Desc',
    value: 'price,desc'
  }
];

const SortOfferBar = () => (
  <AppContext.Consumer>
    {context => (
      <SortOfferBarStyled>
        <h2>
          {context.state.offers.totalResults} Results.
        </h2>
        <select onChange={context.handleChange}>
          {
            ORDER_BY_OPTIONS.map(
              ({title, value}) => (
                <option value={value}>{title}</option>
              )
            )
          }
        </select>
      </SortOfferBarStyled>
    )}
  </AppContext.Consumer>
);

export default SortOfferBar;