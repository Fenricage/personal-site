import styled, {css} from "styled-components";

export const BallIcon = styled.img`
    cursor: pointer;
    width: 30px;
    height: 30px;
`

type WrapperProps = {
  y: number;
}

export const Wrapper = styled.div<WrapperProps>`
  ${props => css`
      visibility: ${!props.y && 'hidden'};
      left: ${!props.y ? '-30px' : '170px'};
      position: absolute;
      display: flex;
      top: ${props.y}px;
      transform: ${!props.y ? 'rotate(0deg)' : 'rotate(720deg)'};
      transition: left ease 1000ms, transform ease 1000ms;
  `}
`;