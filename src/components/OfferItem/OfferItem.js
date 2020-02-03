import React from 'react';
import OfferItemStyled from './OfferItemStyles';

const OfferItem = (props) => {
  const { offer } = props;

  return (<OfferItemStyled>
        <div className="order">
          1
        </div>
        <div className="tarif-name">
          {offer.product.content.text}
        </div>
        <div className="network-speed">
          <div className="download">
            <small>Download</small>
            <span className="arrow">&#x2193;</span>
            <span className="speed">{offer.contractTerm.downloadSpeed.amount}</span>
            <span className="speed-unit">{offer.contractTerm.downloadSpeed.unit}</span>
          </div>
          <div className="upload">
            <small>Upload</small>
            <span className="arrow">&#x2191;</span>
            <span className="speed">{offer.contractTerm.uploadSpeed.amount}</span>
            <span className="speed-unit">{offer.contractTerm.uploadSpeed.unit}</span>
          </div>

        </div>
        <div className="product-benefits">
          <ul>
            { offer && offer.remarks.map(
              (remark, index) => (
                <li key={index}>
                  <svg width="12px" height="8px" viewBox="0 0 12 8" version="1.1" xmlns="http://www.w3.org/2000/svg">
                    <g id="Resultlist" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                        <g id="bp-980px---Resultlist" transform="translate(-465.000000, -1118.000000)" fill="#64C973" fillRule="nonzero" stroke="#64C973">
                            <g id="Tarif-List" transform="translate(21.000000, 832.000000)">
                                <g id="1.Mobile/Tick-+-USP-1liner" transform="translate(439.000000, 282.000000)">
                                    <polygon id="_Compound_Path_" points="5.86207867 8.32802311 7.28091034 6.87445316 9.38937587 9.09533636 14.2133781 4 15.6322098 5.45356995 9.38937587 12"></polygon>
                                </g>
                            </g>
                        </g>
                    </g>
                  </svg>
                  {remark.caption.text}
                </li>
                )
              ) 
            }
          </ul>
        </div>
        <div className="price">
          <strong className="value">{offer.cost.effectiveCost.content.text}</strong>
          {
            offer.signup.responsive &&
            <a className="button" href={offer.signup.responsive.url}><span>To tarif</span> &#x2192;</a>
          }
        </div>
    </OfferItemStyled>);
};

export default OfferItem;
