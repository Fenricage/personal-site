/**
 * Implement Gatsby's SSR (Server Side Rendering) APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-ssr/
 */

const React = require(`react`)
const { yandexMetrikaId } = require(`./src/utils/yandex-metrika`)

/**
 * @type {import('gatsby').GatsbySSR['onRenderBody']}
 */
exports.onRenderBody = ({ setHtmlAttributes, setPostBodyComponents }) => {
  setHtmlAttributes({ lang: `en` })

  if (!yandexMetrikaId) {
    return
  }

  const id = String(yandexMetrikaId).trim()
  if (!id) {
    return
  }

  setPostBodyComponents([
    <script
      key="yandex-metrika"
      dangerouslySetInnerHTML={{
        __html: `
(function(m,e,t,r,i,k,a){m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
m[i].l=1*new Date();
for (var j = 0; j < document.scripts.length; j++) { if (document.scripts[j].src === r) { return; } }
k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)})
(window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym");
ym(${JSON.stringify(id)}, "init", {
  clickmap:true,
  trackLinks:true,
  accurateTrackBounce:true,
  webvisor:true
});
        `.trim(),
      }}
    />,
    <noscript key="yandex-metrika-noscript">
      <div>
        <img
          src={`https://mc.yandex.ru/watch/${encodeURIComponent(id)}`}
          style={{ position: `absolute`, left: `-9999px` }}
          alt=""
        />
      </div>
    </noscript>,
  ])
}
