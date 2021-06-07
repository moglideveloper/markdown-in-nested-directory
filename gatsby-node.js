const path = require('path')

exports.createPages = async ({ graphql, actions }) => {


    const { data } = await graphql(`
        query MyQuery {
            allMarkdownRemark {
                nodes {
                    frontmatter {
                        slug
                    }
                }
            }
            allFile {
                nodes {
                    relativeDirectory
                }
            }               
        }
    `)

    const metaNodes = data.allMarkdownRemark.nodes
    const pathNodes = data.allFile.nodes


    metaNodes.forEach(function(meta, index){
        console.log("[create-page] index is : " + index)
        const slugValue=meta.frontmatter.slug
        console.log("[create-page] slug is : " + slugValue)
        const mdPath=pathNodes[index].relativeDirectory
        console.log( "[create-page] path is : " + mdPath )

        actions.createPage({
            path: "/md_files/" + mdPath + "/" + slugValue,
            component: path.resolve('./src/templates/project-details.js'),
            context: { slug: slugValue }
        })
    })
};
