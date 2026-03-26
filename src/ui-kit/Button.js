import React from 'react';
import styled from 'styled-components';

import { gradient, shiftedGradient } from '../theme/gradients';
import { appShape } from '../theme/shape';

const ButtonElement = styled.button`
  display: block;
  border: none;
  text-align: center;
  box-sizing: border-box;
  text-decoration: none;
  padding: 10px 25px;
  cursor: pointer;
  text-transform: uppercase;
  letter-spacing: 2px;
  transition: background-position ease .25s;
  ${gradient};
  color: ${(props) => props.color || 'rgb(255, 255, 255)'};
  border-radius: ${appShape.borderRadius}px;
  font-weight: bold;

  &:hover {
    box-shadow: inset 0 0 100px 100px rgba(255, 255, 255, 0.25);
    ${shiftedGradient};
  }
`;

const Button = ({ children, ...props }) => (
  <ButtonElement {...props}>
    {children}
  </ButtonElement>
);

export default Button;
