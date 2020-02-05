import React from 'react';
import { OfferItem } from '../OfferItem';
import OfferListStyled from './OfferListStyles';
import {SortOfferBar} from '../SortOfferBar';

const OfferList = props => (
  <OfferListStyled>
    <SortOfferBar />
    { props.offers &&
      props.offers.map(
        (offer, index) => (
          <OfferItem offer={offer} />
        )
      )
    }
  </OfferListStyled>
);

export default OfferList;
