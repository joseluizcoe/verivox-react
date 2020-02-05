import styled from 'styled-components';

const ButtonStyled = styled.a`
  display: flex;
  align-items: center;
  justify-content: space-around;
  margin: 0;
  padding: 10px;
  border: 0 solid #db720c;
  border-bottom-width: 2px;
  border-radius: 3px;
  cursor: pointer;
  background: #fd8a02;
  transition: background-color 0.2s ease 0s,
    border-color 0.2s ease 0s;
  font-size: 13px;
  font-weight: 700;
  color: #fff;
  text-decoration: none;

  &:hover {
    background-color: #db720c;
    border-color: #fd8a02;
  }

  span {
    display: none;
  }

/* tablet media query */
@media (min-width: 700px) {
  display: inline-block;
  text-align: center;

  span {
    display: inline-block;
    margin-right: 5px;
  }
}

`;


export default ButtonStyled;
