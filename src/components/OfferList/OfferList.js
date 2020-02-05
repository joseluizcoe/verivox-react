import React from 'react';
import { OfferItem } from '../OfferItem';
import OfferListStyled from './OfferListStyles';
import {SortOfferBar} from '../SortOfferBar';

import AppContext from '../../context';

const OfferList = () => (
  <AppContext.Consumer>
    {context => (
      <OfferListStyled>
        <SortOfferBar />
        {context.state.offers &&
          context.state.offers.map((offer, index) => (
            <OfferItem offer={offer} />
          ))}
      </OfferListStyled>
    )}
  </AppContext.Consumer>
);

export default OfferList;
