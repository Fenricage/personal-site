import React, {ReactNode} from "react";
import styled from "styled-components";

import russiaIcon from '../../images/russia_icon.png'
import ukIcon from '../../images/uk_icon.png'

import {useLanguage} from "./useLanguage";


const WrapperButton = styled.button`
    background: transparent;
    border: 0;
    cursor: pointer;
`

const LanguageIcon = styled.img`
    width: 35px;
    object-fit: contain;
`

export const LanguageButton = () => {

    let languageIcon: ReactNode
    const {language, onClickLanguage} = useLanguage()

    if (language === 'ru') {
        languageIcon =  <LanguageIcon src={russiaIcon} />
    } else {
        languageIcon = <LanguageIcon src={ukIcon} />
    }

    return (
        <WrapperButton onClick={onClickLanguage}>
            {languageIcon}
        </WrapperButton>
    )
}