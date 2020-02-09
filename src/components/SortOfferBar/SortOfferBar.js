import React, { useContext } from 'react';
import AppContext from '../../context';
import SortOfferBarStyled from './SortOfferBarStyled';
import ORDER_BY_OPTIONS from './constants';

const SortOfferBar = () => {
  const { state, handleChange } = useContext(AppContext);
  return (
    <SortOfferBarStyled>
      <h2>
        {state.offers.totalResults} Results.
      </h2>
      <select onChange={handleChange}>
        {
          ORDER_BY_OPTIONS.map(
            ({ title, value }) => (
              <option value={value}>{title}</option>
            )
          )
        }
      </select>
    </SortOfferBarStyled>
  );
}

export default SortOfferBar;