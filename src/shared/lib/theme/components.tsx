import React, { PropsWithChildren } from 'react';
import { Transition } from 'react-transition-group';
import styled from 'styled-components';

const IconAnimationContainer = styled.div`
  transition: 0.5s;
  width: auto;
  display: flex;
  height: auto;
  transform-origin: 50% 50%;
  transform: translateX(${({ state }) => (state === 'entering' || state === 'entered' ? 0 : 20)}px);
  opacity: ${({ state }) => {
    switch (state) {
      case 'entering':
        return 1;
      case 'entered':
        return 1;
      case 'exiting':
        return 0;
      case 'exited':
        return 0;
      default:
        return 0;
    }
  }};
`;

const BlockAnimationContainer = styled.div`
  transition: 0.5s;
  width: 100%;
  flex: 1;
  display: flex;
  height: auto;
  transform-origin: 50% 50%;
  transform: translateY(${({ state }) => (state === 'entering' || state === 'entered' ? 0 : -20)}px);
  opacity: ${({ state }) => {
    switch (state) {
      case 'entering':
        return 1;
      case 'entered':
        return 1;
      case 'exiting':
        return 0;
      case 'exited':
        return 0;
      default:
        return 0;
    }
  }};
`;

type AnimatedItem = PropsWithChildren<{
  animate: boolean;
}>;

export const IconAnimatedContainer = ({
  children,
  animate,
}: AnimatedItem) => (
  <Transition in={animate} timeout={500}>
    {(state) => (
      <IconAnimationContainer state={state}>{children}</IconAnimationContainer>
    )}
  </Transition>
);

export const BlockAnimatedContainer = ({
  children,
  animate,
}: AnimatedItem) => (
  <Transition in={animate} timeout={500}>
    {(state) => (
      <BlockAnimationContainer state={state}>{children}</BlockAnimationContainer>
    )}
  </Transition>
);
