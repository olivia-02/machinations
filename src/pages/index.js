import * as React from "react"
import { Link, graphql } from "gatsby"
import {useState} from 'react'
import Bio from "../components/bio"
import Layout from "../components/layout"
import Seo from "../components/seo"

const BlogIndex = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata?.title || `Title`
  const posts = data.allMarkdownRemark.nodes

  const [search, setSearch] = useState({
    query: ``,
    filteredPosts: posts
  })

  const handleSearch = (event) => {

    const queryStr = event.target.value

    const postsAr = posts.filter(post => 
          post.frontmatter.title.toUpperCase().includes(queryStr.toUpperCase())
          //post.rawMarkdownBody.toUpperCase().includes(queryStr.toUpperCase())
          )
    
    setSearch({
      query: queryStr,
      filteredPosts: postsAr
    })
  }


  if (posts.length === 0) {
    return (
      <Layout location={location} title={siteTitle}>
        <Seo title="All posts" />
        <Bio />
        <Link to="/about"><h5 id="aboutLink">About This Blog</h5></Link>
        <p>
          No blog posts found. Add markdown posts to "content/blog" (or the
          directory you specified for the "gatsby-source-filesystem" plugin in
          gatsby-config.js).
        </p>
      </Layout>
    )
  }

  return (
    <Layout location={location} title={siteTitle}>
      <Seo title="All posts" />
      <Bio />
      <Link to="/about"><h5 id="aboutLink"> {"=> "} <em>About This Blog</em></h5></Link>
      <input id="search" type="search" placeholder="/*search by title*/" onChange={handleSearch} value={search.query} />
      <ol style={{ listStyle: `none` }}>
      {search.filteredPosts.map(post => {

          const title = post.frontmatter.title || post.fields.slug

          return (
              <article
              key={post.fields.slug}
                className="post-list-item"
                itemScope
                itemType="http://schema.org/Article"
              >
                <header>
                  <h2>
                    <Link to={post.fields.slug} itemProp="url">
                      <span itemProp="headline">{"=> "}{title}</span>
                    </Link>
                  </h2>
                  <small>{post.frontmatter.date}</small>
                </header>
                <section>
                  <p
                    dangerouslySetInnerHTML={{
                      __html: post.frontmatter.description || post.excerpt,
                    }}
                    itemProp="description"
                  />
                </section>
              </article>
          )
        })}
      </ol>
      <h6>Number of posts for you: {search.filteredPosts.length}</h6>
    </Layout>
  )
}

export default BlogIndex

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
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
