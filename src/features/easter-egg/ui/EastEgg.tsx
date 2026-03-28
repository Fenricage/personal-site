import React from 'react';

import catPawImg from '../../../images/cat_paw.png';
import easterEggImg from '../../../images/tennis_ball.png';
import { useEastEggPhase } from '../lib/useEastEggPhase';
import type { EastEggProps } from '../model/types';

import { BallIcon, CatPaw, Wrapper } from './easter-egg.styled';

export const EastEgg = ({ y, wrapperRef }: EastEggProps) => {
  const yPos = y ?? 0;

  const {
    catAnimationIsActive,
    ballOutIsActive,
    disableEvents,
    onInteractBall,
    onBallTransitionEnd,
  } = useEastEggPhase();

  return (
    <Wrapper y={yPos} ref={wrapperRef}>
      <BallIcon
        onTransitionEnd={onBallTransitionEnd}
        disableEvents={disableEvents}
        onMouseOver={onInteractBall}
        onClick={onInteractBall}
        y={yPos}
        out={ballOutIsActive}
        src={easterEggImg}
        alt="easter egg"
      />
      <CatPaw animate={catAnimationIsActive} src={catPawImg} alt="cat paw" />
    </Wrapper>
  );
};
