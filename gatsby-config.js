module.exports = {
  siteMetadata: {
    siteUrl: "https://www.yourdomain.tld",
    title: "WishLouder.com",
  },
  plugins: [
    {
      resolve: "gatsby-source-contentful",
      options: {
        accessToken: "FRdeyn7DpNqI0tRxn6p2FqLelX9ueaFl__G2ZtIIo_I",
        spaceId: "xl3cf4swv9m8",
      },
    },
    "gatsby-plugin-image",
    "gatsby-transformer-remark",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/images/",
      },
      __key: "images",
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "pages",
        path: "./src/pages/",
      },
      __key: "pages",
    },
  ],
};
