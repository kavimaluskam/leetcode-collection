/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  plugins: [
    `gatsby-plugin-styled-components`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `content`,
        path: `${__dirname}/../content`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `home-page`,
        path: `${__dirname}/../README.md`,
      },
    },
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              // It's important to specify the maxWidth (in pixels) of
              // the content container as this plugin uses this as the
              // base for generating different widths of each image.
              maxWidth: 560.63,
            },
          },
          {
            resolve: `gatsby-remark-prismjs`,
            options: {
              aliases: { py3: "python" },
              showLineNumbers: false,
              noInlineHighlight: true,
            },
          },
        ],
      },
    },
  ],
}
