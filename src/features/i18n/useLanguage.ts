import {useTranslation} from "react-i18next";

import {AllowedLanguages} from "./types";

type UseLanguage = {
  onClickLanguage: () => void;
  language: 'ru' | 'en'
}

export const useLanguage = (): UseLanguage => {

    const {i18n} = useTranslation()

    const onClickLanguage = () => {

        if(i18n.language === 'ru') {
            i18n.changeLanguage('en')
            return
        }

        i18n.changeLanguage('ru')
    }


    return {
        onClickLanguage,
        language: i18n.language as AllowedLanguages
    }
}