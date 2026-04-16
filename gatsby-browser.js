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

import { yandexMetrikaId } from './src/utils/yandex-metrika'

export const wrapRootElement = ({ element }) => element;

/** Первый onRouteUpdate совпадает с уже учтённым init в Метрике — пропускаем, чтобы не было двойного hit. */
let yandexMetrikaInitialRoute = true

export const onRouteUpdate = ({ location }) => {
  if (!yandexMetrikaId || typeof window === `undefined` || typeof window.ym !== `function`) {
    return
  }
  if (yandexMetrikaInitialRoute) {
    yandexMetrikaInitialRoute = false
    return
  }
  const id = String(yandexMetrikaId).trim()
  if (!id) {
    return
  }
  window.ym(id, `hit`, location.pathname + location.search)
}