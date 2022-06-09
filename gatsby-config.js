require("dotenv").config({
    path: `.env.${process.env.NODE_ENV}`,
});
module.exports = {
    siteMetadata: {
        title: `Axel Rodriguez`,
        siteUrl: `https://axel-rodriguez.com`,
    },
    plugins: [
        {
            resolve: "gatsby-source-contentful",
            options: {
                accessToken: process.env.GATSBY_CONTENTFUL_ACCESS_TOKEN,
                spaceId: process.env.GATSBY_CONTENTFUL_SPACE_ID,
            },
        },
        `gatsby-plugin-image`,
        {
            resolve: `gatsby-plugin-algolia`,
            options: {
                appId: process.env.GATSBY_ALGOLIA_APP_ID,
                apiKey: process.env.ALGOLIA_ADMIN_KEY,
                queries: require("./src/utils/algolia-queries"),
            },
        },
    ],
};
