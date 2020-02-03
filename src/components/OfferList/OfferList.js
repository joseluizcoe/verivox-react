import React from 'react';
import { OfferItem } from '../OfferItem';
import OfferListStyled from './OfferListStyles';

const OfferList = props => {
  console.log(props.offers);
  return (
    <OfferListStyled>
      {props.offers && props.offers.map((offer, index) => (
        <OfferItem offer={offer} />
      ))}
    </OfferListStyled>
  );
}

export default OfferList;