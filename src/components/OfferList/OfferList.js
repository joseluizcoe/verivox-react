import React from 'react';
import { OfferItem } from '../OfferItem';
import OfferListStyled from './OfferListStyles';
import {SortOfferBar} from '../SortOfferBar';

import AppContext from '../../context';

const OfferList = () => (
  <AppContext.Consumer>
    {context => { 
      const { sortedOffers } = context.state;
      return (
      <OfferListStyled>
        <SortOfferBar />
        {
          sortedOffers &&
          sortedOffers.map(
            (offer, index) => (
              <OfferItem key={index} offer={offer} />
            )
          )
        }
      </OfferListStyled>
    )
    }}
  </AppContext.Consumer>
);

export default OfferList;
