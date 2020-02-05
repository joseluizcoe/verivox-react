import styled from 'styled-components';

const OfferListStyled = styled.ol`
  max-width: 960px;
  color: #333;
  margin : 0 auto;
  padding: 0;
  font-family: "Segoe UI", Segoe, "Open Sans", Calibri, Tahoma, Geneva, sans-serif;
  font-size: 14px;

  >li {
    display: flex;
    justify-content: space-between;
    min-height: 80px;
    border: 1px solid #eee;
    margin-bottom: 15px;
  }

`;

export default OfferListStyled;
