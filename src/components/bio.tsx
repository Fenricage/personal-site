/**
 * Bio component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/how-to/querying-data/use-static-query/
 */

import { useStaticQuery, graphql } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import * as React from "react"
import {useTranslation} from "react-i18next";

type BioData = GatsbyTypes.BioQueryQuery

const Bio = () => {
  const data = useStaticQuery<BioData>(graphql`
    query BioQuery {
      site {
        siteMetadata {
          author {
            name
            summary
          }
          social {
            twitter
          }
        }
      }
    }
  `)

  // Set these values by editing "siteMetadata" in gatsby-config.js
  const author = data.site?.siteMetadata?.author

    const {t} = useTranslation()

  return (
    <div className="bio">
      <StaticImage
        className="bio-avatar"
        layout="fixed"
        formats={["auto", "webp", "avif"]}
        src="../images/profile-pic.png"
        width={75}
        height={75}
        quality={95}
        alt="Profile picture"
        style={{ flexShrink: 0 }}
      />
      {author?.name && (
        <p>
          {t('written-by')}
        </p>
      )}
    </div>
  )
}

export default Bio
