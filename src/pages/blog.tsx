import {Link, graphql, PageProps} from "gatsby"
import * as React from "react"
import {useTranslation} from "react-i18next";

import Bio from "../components/bio"
import Index from "../components/layout"
import Seo from "../components/seo"
import {LanguageButton} from "../features/i18n/LanguageButton";



type BlogPageQuery = GatsbyTypes.BlogPageQuery

const BlogIndex = ({ data, location }: PageProps<BlogPageQuery>) => {
  const posts = data.allMarkdownRemark.nodes

    const {t, i18n} = useTranslation()

  if (posts.length === 0) {
    return (
      <Index
          location={location}
          languageButton={<LanguageButton/>}
      >
        <Bio />
        <p>
          No blog posts found. Add markdown posts to "content/blog" (or the
          directory you specified for the "gatsby-source-filesystem" plugin in
          gatsby-config.js).
        </p>
      </Index>
    )
  }

  if (!i18n.isInitialized) return null

  return (
    <Index
        location={location}
        languageButton={<LanguageButton/>}
        header={
                <Link className="header-link-home" to="/">
                    {t('back-to-home')}
                </Link>
        }
    >
      <Bio />
      <ol style={{ listStyle: `none` }}>
        {posts.map(post => {

          const title = post.frontmatter?.title || post.fields?.slug

            if(!post.fields?.slug) {
                return null
            }

          return (
            <li key={post.fields.slug}>
              <article
                className="post-list-item"
                itemScope
                itemType="http://schema.org/Article"
              >
                <header>
                  <h2>
                    <Link to={post.fields.slug} itemProp="url">
                      <span itemProp="headline">{title}</span>
                    </Link>
                  </h2>
                    {post.frontmatter?.date && (
                        <small>{post.frontmatter.date}</small>
                    )}
                </header>
                  {(post.frontmatter?.description && post.excerpt) && (
                      <section>
                          <p
                              dangerouslySetInnerHTML={{
                                  __html: post.frontmatter.description || post.excerpt,
                              }}
                              itemProp="description"
                          />
                      </section>
                  )}
              </article>
            </li>
          )
        })}
      </ol>
    </Index>
  )
}

export default BlogIndex

/**
 * Head export to define metadata for the page
 *
 * See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
 */
export const Head = () => <Seo title="All posts" description="All posts"/>

export const pageQuery = graphql`
  query BlogPage {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { frontmatter: { date: DESC } }) {
      nodes {
        excerpt
        fields {
          slug
        }
        frontmatter {
          date(formatString: "MMMM DD, YYYY")
          title
          description
        }
      }
    }
  }
`
