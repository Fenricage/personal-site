import { graphql, type PageProps } from "gatsby"
import * as React from "react"

import Index from "../components/layout"
import Seo from "../components/seo"

type NotFoundPageData = {
  site: {
    siteMetadata: {
      title: string
    }
  }
}

const NotFoundPage = ({ data, location }: PageProps<NotFoundPageData>) => {
  const siteTitle = data.site.siteMetadata.title

  return (
    <Index location={location} title={siteTitle}>
      <h1>404: Not Found</h1>
      <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
    </Index>
  )
}

export const Head = () => <Seo title="404: Not Found" />

export default NotFoundPage

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
