import { useCallback, useEffect, useState } from 'react';

import { CAT_PAW_VISIBLE_MS } from '../model/constants';

type EastEggPhase =
  | 'awaiting_ball_entry'
  | 'ready'
  | 'paw_showing'
  | 'complete';

type UseEastEggPhaseResult = {
  catAnimationIsActive: boolean;
  ballOutIsActive: boolean;
  disableEvents: boolean;
  onInteractBall: () => void;
  onBallTransitionEnd: () => void;
};

export const useEastEggPhase = (): UseEastEggPhaseResult => {
  const [phase, setPhase] = useState<EastEggPhase>('awaiting_ball_entry');

  const onBallTransitionEnd = useCallback(() => {
    setPhase((p) => (p === 'awaiting_ball_entry' ? 'ready' : p));
  }, []);

  const onInteractBall = useCallback(() => {
    setPhase((p) => (p === 'ready' ? 'paw_showing' : p));
  }, []);

  useEffect(() => {
    if (phase !== 'paw_showing') {
      return;
    }

    const timer = setTimeout(() => {
      setPhase('complete');
    }, CAT_PAW_VISIBLE_MS);

    return () => clearTimeout(timer);
  }, [phase]);

  return {
    catAnimationIsActive: phase === 'paw_showing',
    ballOutIsActive: phase === 'complete',
    disableEvents: phase !== 'ready',
    onInteractBall,
    onBallTransitionEnd,
  };
};
