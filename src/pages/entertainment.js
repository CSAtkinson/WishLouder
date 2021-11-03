import React from 'react'

import Layout from "../components/Layout"
import { graphql, useStaticQuery } from 'gatsby'
import Seo from "../components/SEO"
import { GatsbyImage, getImage } from 'gatsby-plugin-image'



const Entertainment = () => {    
    const data = useStaticQuery(query)
    const recipes = data.allContentfulMeme.nodes
    return (
        <Layout>
          <Seo title="Tags" />
            <main className="page">
              <h1>This is where i shall keep you entertained!</h1>
                <section className="tags-page">
                    {recipes.map((text, index)=>{
                        const {title, description, meme1} = text
                        const pathToImage = getImage(meme1)                        
                        return(                            
                               <GatsbyImage 
                                  image={pathToImage} 
                                  className='recipe-img'
                                  alt={title}
                                />                            
                        )
                    })}
                </section>
            </main>            
        </Layout>
    )
}

export const query = graphql`
{
  allContentfulMeme {
    nodes {
      meme1 {
        description
        title
        gatsbyImageData(layout: CONSTRAINED, placeholder: TRACED_SVG)
      }
    }
  }
}
`


export default Entertainment
