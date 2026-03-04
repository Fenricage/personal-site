import React from 'react';

import easterEggImg from '../../images/ball.png'
import {Nullable} from "../../types";

import {BallIcon, Wrapper} from "./controls";

type EasterEggProps = {
    y: Nullable<number>;
}

export const EastEgg =  (props: EasterEggProps) => {

    const {y} = props;

    if(!y) {
        return null
    }

    return (
        <Wrapper y={y}>
            <BallIcon src={easterEggImg} alt="easter egg"/>
        </Wrapper>
    )
}