import {useTranslation} from "react-i18next";

export const useLanguage = () => {

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
        language: i18n.language
    }
}