import React from 'react';
import { OfferItem } from '../OfferItem';

const OfferList = props => {
  console.log(props.offers);
  return (
    <ol>
      {props.offers && props.offers.map((offer, index) => (
        <li key={index}>
          <OfferItem offer={offer} />
        </li>
      ))}
    </ol>
  );
}

export default OfferList;