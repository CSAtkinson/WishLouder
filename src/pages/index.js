import * as React from "react"

import Layout from "../components/Layout"
import { StaticImage } from "gatsby-plugin-image"

import AllRecipes from "../components/AllRecipes"
import Seo from "../components/SEO"



const IndexPage = () => {
  return (
    <Layout>
      <Seo title="Home Page" description="This is the home page" />
      <main className="page">
        <header className="hero">
            <StaticImage
              src="../assets/images/tableTop.jpg"
              alt="eggs"
              className="hero-img"
              placeholder="tracedSVG"
              layout="fullWidth"
            />
            <div className="hero-container">
              <div className="hero-text">
                <StaticImage 
                src="WishLouder.png" 
                alt="Dare to wish louder"
                />
              </div>
            </div>
        </header>
        <AllRecipes />
      </main>      
    </Layout>    
  )
}

export default IndexPage
