const escapeStringRegexp = require("escape-string-regexp");

const pagePath = `content`;
const indexName = `Pages`;

const pageQuery = `{
  pages: allContentfulPost(filter: {keywords: {regex: "//"}}) {
    edges {
      node {
        id
        title
        url
        heroImage {
            imageUrl: url
            imageTitle: title
        }
        description {
            description
        }
        keywords
      }
    }
  }
}`;

function pageToAlgoliaRecord({
    node: { id, keywords, url, heroImage, description, title, ...rest },
}) {
    return {
        objectID: id,
        keywords,
        title,
        url,
        ...heroImage,
        ...description,
        ...rest,
    };
}

const queries = [
    {
        query: pageQuery,
        transformer: ({ data }) => data.pages.edges.map(pageToAlgoliaRecord),
        indexName,
        settings: { attributesToSnippet: [`excerpt:20`] },
    },
];

module.exports = queries;
