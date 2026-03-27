// custom typefaces
import "@fontsource-variable/montserrat"
import "@fontsource/merriweather"
// normalize CSS across browsers
import "./src/normalize.css"
// custom CSS styles
import "./src/style.css"

// Highlighting for code blocks
import "prismjs/themes/prism.css"


import './src/app/i18n' // инициализация i18n (слой app)

// Оборачиваем все приложение в Suspense (нужно для работы i18n)
import React, { Suspense } from 'react';

export const wrapRootElement = ({ element }) => element;