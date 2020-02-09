import React from 'react';
import AppContext from '../../context';
import SortOfferBarStyled from './SortOfferBarStyled';
import ORDER_BY_OPTIONS from './constants';

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