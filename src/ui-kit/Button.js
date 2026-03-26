import { node, oneOf, string } from 'prop-types';
import React from 'react';
import styled from 'styled-components';

import { appShape } from '../theme/shape.js';

const ButtonElement = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  min-height: 44px;
  padding: 10px 20px;
  border: none;
  border-radius: ${appShape.borderRadius}px;
  background-color: #f97316;
  color: ${({ color }) => color || '#ffffff'};
  font-size: 14px;
  font-weight: 600;
  line-height: 1;
  text-align: center;
  text-decoration: none;
  cursor: pointer;
  transition: background-color 0.2s ease, opacity 0.2s ease,
    transform 0.2s ease;

  &:hover {
    background-color: #ea580c;
  }

  &:active {
    transform: translateY(1px);
  }

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
`;

const Button = ({ children, type = 'button', ...props }) => (
  <ButtonElement type={type} {...props}>
    {children}
  </ButtonElement>
);

Button.propTypes = {
  children: node.isRequired,
  color: string,
  type: oneOf(['button', 'submit', 'reset']),
};

export default Button;
