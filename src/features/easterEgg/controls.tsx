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
      position: absolute;
      display: flex;
      top: ${props.y}px;
      left: 0;
  `}
`;