import React, {ReactNode} from "react";
import styled from "styled-components";

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
        languageIcon =  <LanguageIcon src="../russia_icon.png" />
    } else {
        languageIcon = <LanguageIcon src="../uk_icon.png" />
    }

    return (
        <WrapperButton onClick={onClickLanguage}>
            {languageIcon}
        </WrapperButton>
    )
}