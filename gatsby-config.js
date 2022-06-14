require("dotenv").config({
    path: `.env.${process.env.NODE_ENV}`,
});
module.exports = {
    siteMetadata: {
        title: `Axel Rodriguez - Desarrollador web`,
        siteUrl: `https://axel-rodriguez.com`,
        description: `Sitio web de Axel Rodriguez, apasionado por el desarrollo de software y el Cloud Computing.`,
        keywords: `AWS,Lambda,Python,Javascript,Node,.NET,C#,DynamoDB`,
        language: `Spanish`,
        robots: `index, follow`,
        author: `Axel Rodriguez`,
        viewport: `width=device-width, initial-scale=1.0`,
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
        `gatsby-plugin-styled-components`,
        "gatsby-plugin-robots-txt",
        {
            resolve: "gatsby-plugin-html-attributes",
            options: {
                lang: "es",
            },
        },
    ],
};
