import React from "react";
import styled from "styled-components";

import russiaIcon from '../../images/russia_icon.png';
import ukIcon from '../../images/uk_icon.png';

import {AllowedLanguages} from "./types";
import { useLanguage } from "./useLanguage";

const WrapperButton = styled.button`
    background: transparent;
    border: 0;
    cursor: pointer;
`;

const LanguageIcon = styled.img`
    width: 35px;
    object-fit: contain;
`;

const languageIconMap: Record<AllowedLanguages, string> = {
    ru: russiaIcon,
    en: ukIcon,
};

export const LanguageButton = () => {
    const { language, onClickLanguage } = useLanguage();
    const iconSrc = languageIconMap[language];

    return (
        <WrapperButton onClick={onClickLanguage}>
            <LanguageIcon src={iconSrc} />
        </WrapperButton>
    );
};