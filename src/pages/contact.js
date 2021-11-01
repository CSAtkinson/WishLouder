import React from 'react'

import Layout from "../components/Layout"
import { graphql } from 'gatsby'
import RecipesList from '../components/RecipesList'
import Seo from "../components/SEO"


const contact = ({data:{allContentfulRecipe:{nodes:recipes}}}) => {
    return (
        <Layout>
            <Seo title="Contact" />
            <main className="page">
                <section className="contact-page">
                    <article className="contact-info">
                        <h3>Want To Get In Touch?</h3>
                        <p>Four dollar toast biodiesel plaid salvia actually pickled banjo bespoke mlkshk intelligentsia edison bulb synth.</p>
                        <p>Cardigan prism bicycle rights put a bird on it deep v.</p>
                        <p>Hashtag swag health goth air plant, raclette listicle fingerstache cold-pressed fanny pack bicycle rights cardigan poke.</p>
                    </article>
                    <article>
                        <form 
                            className="form contact-form"  
                            action="https://formspree.io/f/xdoyreao"  
                            method="POST"
                        >
                            <div className="form-row">
                                <label htmlFor="name">Your Name</label>
                                <input type="text" name="name" id="name" />
                            </div>
                            <div className="form-row">
                                <label htmlFor="email">Email</label>
                                <input type="text" name="email" id="email" />
                            </div>
                            <div className="form-row">
                                <label htmlFor="message">Message</label>
                                <textarea name="message" id="message"></textarea>
                            </div>
                            <button type="submit" className="btn block">
                                Submit
                            </button>                        
                        </form>
                    </article>
                </section>
                <section className="featured-recipes">
                    <h5>Look at this Awesomesauce</h5>
                    <RecipesList recipes={recipes}/>
                </section>
            </main>
        </Layout>
    )
}

export const query = graphql`
  {
    allContentfulRecipe(
      sort: {fields: title, order: ASC}
      filter: {featured: {eq: true}}
    ) {
      nodes {
        id
        title
        cookTime
        prepTime
        image {
          gatsbyImageData(layout: CONSTRAINED, placeholder: BLURRED)
        }
      }
    }
  }
`

export default contact
