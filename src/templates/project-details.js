import { graphql } from 'gatsby'
import React from 'react'
import Layout from '../components/Layout'

export default function ProjectDetails({ data }) {
    
    const { html } = data.markdownRemark
    const { stack, title } = data.markdownRemark.frontmatter
    
    return (
        <Layout>
            <div>
                <h2>{title}</h2>
                <h2>{stack}</h2>
            </div>

            <div dangerouslySetInnerHTML={{ __html: html }} />
        </Layout>
    )
}

export const query = graphql`
query HtmlDataQuery($slug: String) {
    markdownRemark(frontmatter: {slug: {eq: $slug}}) {
      html
        frontmatter {
            stack
            title
        }
    }
  }
`
