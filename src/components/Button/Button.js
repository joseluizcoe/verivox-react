import React from 'react';
import ButtonStyled from  './ButtonStyled';

const Button = props => (
  <ButtonStyled {...props}>
    {props.children}
  </ButtonStyled>
);

export default Button;
