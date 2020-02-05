import React from 'react';
import AppContext from '../../context';
import SortOfferBarStyled from './SortOfferBarStyled';

const SortOfferBar = () => (
  <AppContext.Consumer>
    {context => (
      <SortOfferBarStyled>
        <h2>
          {context.state.offers.totalResults} Results.
        </h2>
        <select onChange={context.handleChange}>
          <option value='rank,asc'>Order by:</option>
          <option value='downloadSpeed,asc'>
            Download Speed - Asc
          </option>
          <option value='downloadSpeed,desc'>
            Download Speed - Desc
          </option>
          <option value='uploadSpeed,asc'>
            Upload Speed - Asc
          </option>
          <option value='uploadSpeed,desc'>
            Upload Speed - Desc
          </option>
          <option value='price,asc'>Price - Asc</option>
          <option value='price,desc'>Price - Desc</option>
        </select>
      </SortOfferBarStyled>
    )}
  </AppContext.Consumer>
);

export default SortOfferBar;