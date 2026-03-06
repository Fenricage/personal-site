import React, {Ref, useEffect, useState} from 'react';

import catPawImg from '../../images/cat_paw.png'
import easterEggImg from '../../images/tennis_ball.png'
import {Nullable} from "../../types";

import {BallIcon, Wrapper, CatPaw} from "./controls";
import {AnimationStatus} from "./types";

type EasterEggProps = {
    y: Nullable<number>;
    wrapperRef?: Ref<any>;
}

export const EastEgg =  (props: EasterEggProps) => {

    const {y, wrapperRef} = props;

    const [transitionIsOver, setTransitionIsOver] = useState(false)
    const [catAnimationIsActive, setCatAnimationIsActive] = useState<AnimationStatus>('stop')

    const onMouseOverBall = () => {
        if(!transitionIsOver) {
            return
        }
        setCatAnimationIsActive('in')
    }

    const onTransitionEndBall = () => {
        setTransitionIsOver(true)
    }

    return (
        <Wrapper y={y} ref={wrapperRef}>
            <BallIcon onTransitionEnd={onTransitionEndBall} onMouseOver={onMouseOverBall} y={y} src={easterEggImg} alt="easter egg"/>
            <CatPaw animateStatus={catAnimationIsActive} src={catPawImg} alt="cat paw"/>
        </Wrapper>
    )
}