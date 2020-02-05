import styled from 'styled-components';

const OfferItemStyled = styled.li`
  .order {
    width: 1%;
    text-align: center;
    width: 25px;
    padding-top: 5px;
    background: #dfdfdf;
  }

  .tarif-name {
    padding: 10px;
    width: 50%;
    text-align: center;
    .logo-area {
      display: block;
    }
  }

  .network-speed {
    padding: 10px 0;
    width: 30%;

    small {
      display: none;
    }

    .download {
      color: #64c973;
    }
    .upload {
      color: #60c2ca;
    }

    .download,
    .upload {
      display: flex;
      flex-wrap: wrap;

      .arrow,
      .speed,
      .speed-unit {
        padding: 5px;
      }
      .arrow {
        display: inline-block;
      }
      .speed {
        display: inline-block;
        text-align: right;
      }

      .speed-unit {
        display: block;
        margin-bottom: 20px;
      }
    }
  }

  .product-benefits {
    display: none;
  }

  .price {
    padding: 10px;
    display: flex;
    width: 45%;
    justify-content: space-between;

    .value {
      font-size: 24px;
      font-weight: bold;
      display: block;
      width: 70%;
      text-align: right;
    }
  }


  /* tablet media query */
  @media (min-width: 700px) {

      .network-speed {
        width: 15%;
        justify-content: stretch;
      }

      .price {
        width: 20%;
        flex-direction: column;
        justify-content: space-between;

        .value {
          text-align: right;
          width: auto;
          padding: 10px 0;
        }
      } /* price */


  } /* tablet media query */

  /* Desktop media query */
  @media (min-width: 940px) {

      .tarif-name {
        width: 20%;
      }

      .network-speed {
        small {
          display: block;
          width: 95%;
          padding-bottom: 5px;
          margin-bottom: 5px;

          border-bottom: 1px dashed #eee;
          font-size: 10px;
          font-weight: normal;
          letter-spacing: 1px;
          text-transform: uppercase;
        }
      }

      .product-benefits {
        padding: 10px 0;
        width: 40%;
        line-height: 2em;
        display: inline-block;

        ul {
          margin : 0 0 0 20px;
          list-style: none;
          li {
            svg {
              margin-right : 5px;
            }
          }
        }
      }

      .price {
        .value {
          font-size: 24px;
        }
      }

  } /* Desktop media query */


}


`;

export default OfferItemStyled;
