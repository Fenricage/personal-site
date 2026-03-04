import React, {Ref} from 'react';

import easterEggImg from '../../images/ball.png'
import {Nullable} from "../../types";

import {BallIcon, Wrapper} from "./controls";

type EasterEggProps = {
    y: Nullable<number>;
    wrapperRef?: Ref<any>;
}

export const EastEgg =  (props: EasterEggProps) => {

    const {y, wrapperRef} = props;

    return (
        <Wrapper y={y} ref={wrapperRef}>
            <BallIcon src={easterEggImg} alt="easter egg"/>
        </Wrapper>
    )
}