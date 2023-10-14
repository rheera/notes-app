/**
 * @type {import('gatsby').GatsbyConfig}
 */

require("dotenv").config({
  path: `.env`,
});

module.exports = {
  siteMetadata: {
    title: `Notes App`,
    siteUrl: `https://www.yourdomain.tld`,
  },
  plugins: [],
};
