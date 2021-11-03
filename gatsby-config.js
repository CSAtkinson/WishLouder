require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`
})

module.exports = {
  flags: {
    PARALLEL_QUERY_RUNNING: false
  },
  siteMetadata: {
    siteUrl: "https://www.yourdomain.tld",
    title: "WishLouder.com",
    description:"Dare to wish louder",
    author:"@JamesAtkinson",
    person:{name:"James", age:33},
    simpleData: ["item 1", "item 2"],
    complexData: [
      {name: "James", age: 33},
      {name: "Cat", age: 18},
    ]
  },
  plugins: [
    {
      resolve: `gatsby-plugin-styled-components`,
      options: {
        // Add any options here
      },
    },
    {
      resolve: "gatsby-source-contentful",
      options: {
        accessToken: process.env.CONTENTFUL_API_KEY,
        spaceId: "xl3cf4swv9m8",
      },
    },
    "gatsby-plugin-image",
    "gatsby-transformer-remark",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-webfonts`,
      options: {
        fonts: {
          google: [
            {
              family: "Montserrat",
              variants: ["400"],
            },
            {
              family: "Inconsolata",
              variants: ["400", "500", "600", "700"],
            },
          ],
        },
      },
    },    
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: `${__dirname}/src/assets/images`,
      },
      __key: "images",
    },
    // {
    //   resolve: "gatsby-source-filesystem",
    //   options: {
    //     name: "pages",
    //     path: `${__dirname}/src/pages/`,
    //   },
    //   __key: "pages",
    // },
    // {
    //   resolve: "gatsby-source-filesystem",
    //   options: {
    //     name: "data",
    //     path: `${__dirname}/src/assets/data/`,
    //   },
    //   __key: "data",
    // },
    // {
    //   resolve: "gatsby-source-filesystem",
    //   options: {
    //     name: "styles",
    //     path: `${__dirname}/src/assets/css`,
    //   },
    //   __key: "styles",
    // },
  ],
};
