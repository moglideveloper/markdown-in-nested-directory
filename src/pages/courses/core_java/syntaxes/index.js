import { graphql, Link } from 'gatsby'
import React from 'react'
import Layout from '../../../../components/Layout'

export default function Posts({ data }) {
    
    console.log( data )
    
    const metaNodes = data.allMarkdownRemark.nodes
    const pathNodes = data.allFile.nodes

    return (
        <Layout>
            <div>
            {metaNodes.map(function(meta, index){
                    console.log("index is : " + index)
                    const slugValue=meta.frontmatter.slug
                    console.log("slug is : " + slugValue)
                    const mdId=meta.id
                    console.log( "id is : " + mdId )
                    const mdPath=pathNodes[index].relativeDirectory
                    console.log( "path is : " + mdPath )

                    return <Link to={"/md_files/" + mdPath + "/" + slugValue} key={mdId}>
                        <div>
                            <p>{slugValue}</p>
                        </div>
                        </Link>
                  })}
            </div> 
        </Layout>
    )
}

export const query = graphql`
    query MetadataQuery {
        allMarkdownRemark {
            nodes {
                frontmatter {
                slug
                stack
                title
                }
                id
            }
        }
        allFile {
            nodes {
                relativeDirectory
                relativePath
            }
        }        
    }
`
