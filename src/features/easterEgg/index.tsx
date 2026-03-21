import React, {Ref, useEffect, useState} from 'react';

import catPawImg from '../../images/cat_paw.png'
import easterEggImg from '../../images/tennis_ball.png'
import {Nullable} from "../../types";

import {BallIcon, Wrapper, CatPaw} from "./controls";

type EasterEggProps = {
    y: Nullable<number>;
    wrapperRef?: Ref<HTMLElement>;
}

export const EastEgg =  (props: EasterEggProps) => {

    const {y, wrapperRef} = props;
    const [catAnimationIsActive, setCatAnimationIsActive] = useState<boolean>(false)
    const [animationInitialized, setAnimationInitialized] = useState<boolean>(false)
    const [ballTransitionIsEnd, setBallTransitionIsEnd] = useState<boolean>(false)
    const [ballOutIsActive, setBallOutIsActive] = useState(false)

    const onMouseOverBall = () => {
        setCatAnimationIsActive(true)
        setAnimationInitialized(true)
    }

    useEffect(() => {
        if(!catAnimationIsActive) {
            return
        }

        const timer = setTimeout(() => {
            setCatAnimationIsActive(false)
            setBallOutIsActive(true)
        }, 350)

        return () => {
            return clearTimeout(timer)
        }
    }, [animationInitialized, catAnimationIsActive]);

    const onBallTransitionEnd = () => {
        setBallTransitionIsEnd(true)
    }

    return (
        <Wrapper y={y} ref={wrapperRef}>
            <BallIcon
                onTransitionEnd={onBallTransitionEnd}
                disableEvents={animationInitialized || !ballTransitionIsEnd}
                onMouseOver={onMouseOverBall}
                onClick={onMouseOverBall}
                y={y}
                out={ballOutIsActive}
                src={easterEggImg}
                alt="easter egg"
            />
            <CatPaw animate={catAnimationIsActive} src={catPawImg} alt="cat paw"/>
        </Wrapper>
    )
}