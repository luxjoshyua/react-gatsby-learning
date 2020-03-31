// export a function with the name of the API from gatsby-node-js e.g. onCreateNode is the API
// this onCreateNode function will be called by Gatsby whenever a new node is created (or updated)

const path = require(`path`)
const { createFilePath } = require(`gatsby-source-filesystem`)

exports.onCreateNode = ({ node, getNode, actions }) => {
    const { createNodeField } = actions
    if (node.internal.type === `MarkdownRemark`) {

        const slug = createFilePath({ node, getNode, basePath: `pages` })

        createNodeField({
            node,
            name: `slug`,
            value: slug,
        })

        // if you run this query now in localhost:8000/___graphql, you will see the slugs
        // query MyQuery {
        //     allMarkdownRemark {
        //       edges {
        //         node {
        //           fields {
        //             slug
        //           }
        //         }
        //       }
        //     }
        //   }
          

        // const fileNode = getNode(node.parent)
        // prints the two markdown file paths
        // console.log(createFilePath({ node, getNode, basePath: `pages` }))
    }
}


// The steps to programatically creating pages
// 1. Query data with GraphQL
// 2. Map the query results to pages

// now we have the slugs, we can create the pages
exports.createPages = async ({ graphql, actions }) => {
    // **Note:** The graphql function call returns a Promise
    // see: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise for more info
    const { createPage } = actions
    
    const result = await graphql(`
        query {
            allMarkdownRemark {
                edges {
                    node {
                        fields {
                            slug
                        }
                    }
                }
            }
        }
    `)
    // console.log(JSON.stringify(result, null, 4))

    result.data.allMarkdownRemark.edges.forEach(({ node }) => {
        createPage({
            path: node.fields.slug,
            component: path.resolve(`./src/templates/blog-post.js`),
            context: {
                // Data passed to context is available
                // in page queries as GraphQL variables.
                slug: node.fields.slug,
            },
        })
    })
}