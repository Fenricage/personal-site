import styled, {css, ExecutionContext} from "styled-components";

import {AnimationStatus} from "./types";

type BallIconProps = {
  y: number;
  out: boolean;
  disableEvents: boolean;
}

export const BallIcon = styled.img<BallIconProps>`
  ${props => css`
    position: absolute;
    visibility: ${!props.y && 'hidden'};
    display: flex;
    cursor: pointer;
    width: 30px;
    height: 30px;
    right: ${!props.y ? '230px' : '0px'};
    bottom: ${!props.out ? '0px' : '100px'};
    transform: ${!props.y ? 'rotate(0deg)' : 'rotate(720deg)'};
    pointer-events: ${props.disableEvents ? 'none' : 'auto'};
    transition: right cubic-bezier(0.68, -0.6, 0.32, 1.5) 1500ms, bottom ease-in-out 200ms, transform cubic-bezier(0.68, -0.6, 0.32, 1.5) 1500ms;
  `}
`;


type CatPawProps = {
  animate: boolean;
}

export const CatPaw = styled.img<CatPawProps>`
  ${props => css`
      transform: rotate(180deg);
      cursor: pointer;
      position: absolute;
      right: 0;
      width: 60px;
      bottom: ${(contextProps: any) => {
        return contextProps.animate ? '0px' : '100px'
      }};
      transition: all ease-in-out 200ms;
  `}
`;

type WrapperProps = {
  y: number;
}

export const Wrapper = styled.div<WrapperProps>`
  ${props => css`
      position: absolute;
      display: flex;
      top: ${props.y}px;
      left: 0;
      height: 30px;
      width: 200px;
  `}
`;