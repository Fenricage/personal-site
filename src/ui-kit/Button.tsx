import type { ButtonHTMLAttributes, ReactNode } from "react"
import React from "react"
import styled from "styled-components"

import { gradient, shiftedGradient } from "../theme/gradients"
import { appShape } from "../theme/shape"

type ButtonElementProps = {
  color?: string
}

const ButtonElement = styled.button<ButtonElementProps>`
  display: block;
  border: none;
  text-align: center;
  box-sizing: border-box;
  text-decoration: none;
  padding: 10px 25px;
  cursor: pointer;
  text-transform: uppercase;
  letter-spacing: 2px;
  transition: background-position ease 0.25s;
  ${gradient};
  color: ${(props) => props.color || "rgb(255, 255, 255)"};
  border-radius: ${appShape.borderRadius}px;
  font-weight: bold;

  &:hover {
    box-shadow: inset 0 0 100px 100px rgba(255, 255, 255, 0.25);
    ${shiftedGradient};
  }
`

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  children: ReactNode
  color?: string
}

const Button = ({ children, ...props }: ButtonProps) => (
  <ButtonElement {...props}>{children}</ButtonElement>
)

export default Button
