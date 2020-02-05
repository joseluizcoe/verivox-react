import React from 'react';

const SortOfferBar = props => (
  <select onChange="">
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
);

export default SortOfferBar;