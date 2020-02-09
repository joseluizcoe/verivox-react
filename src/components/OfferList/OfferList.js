import React, { useContext } from 'react';
import { OfferItem } from '../OfferItem';
import OfferListStyled from './OfferListStyles';
import {SortOfferBar} from '../SortOfferBar';

import AppContext from '../../context';

const OfferList = () => {
  const {state} = useContext(AppContext);
  return (
    <OfferListStyled>
      <SortOfferBar />
      { state.sortedOffers &&
        state.sortedOffers.map((offer, index) => (
          <OfferItem key={index} offer={offer} />
        ))}
    </OfferListStyled>
  );
}

export default OfferList;
