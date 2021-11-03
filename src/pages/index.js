import * as React from "react"

import Layout from "../components/Layout"
import { StaticImage } from "gatsby-plugin-image"

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
        <h1>Welcome to the Wishful Thinkers!</h1>
        <h2>“Look, I don’t have a place where I feel like the nerds there GET me, and everyone needs a group.”</h2>
        <p>For the last few years I have been growing a bit more aloof to the nerd culture on the internet. Sure, it has great stuff to tickle my imagination and keep me engaged… But it never matched with my lifestyle. I get dirty, I build things, and I also work in IT. Somewhere, somehow, there has to be a group of folks like my friends and I who just decided to Wish Louder.</p>
        <p>This is our spot to share ideas, goals, solutions, recipes, hacks, tools, creations, wins, fails, and life. If you’ve ever had the thought of, “Gee, I would like to have a centralized location for my family to grow up nerdy….”, Then do we have the solution for you!</p>
        <p>Follow us on Twitch, Facebook, Twitter, and IG! The crew and I are eager to get to know you. We want to hear what you have always felt like you needed, but never had the time to complete. Join our crew and get the hookup with our merch, downloads, and member perks!</p>
      </main>      
    </Layout>    
  )
}

export default IndexPage
