const siteUrl = process.env.URL || `https://sesam-ecotox.netlify.app`

module.exports = {
  siteMetadata: {
    title: `SESAM Ecotox Lab`,
    description: `UPLB SESAM Ecotox Lab`,
    author: `Mark Benson Nastor`,
    siteUrl: `${siteUrl}`,
    googleVerification: 'NHCMOl5J5DMZgGwQe33gjwjBA6pVXtcyesbFkBBNt18'
  },
  plugins: [
    `gatsby-plugin-typescript`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/assets/images`
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `content`,
        path: `${__dirname}/src/data`
      }
    },
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: [
          {
            resolve: 'gatsby-remark-images',
            options: {
              maxWidth: 768,
              linkImagesToOriginal: false
            }
          }
        ]
      }
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-personal-website-starter`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#81e6d9`,
        theme_color: `#81e6d9`,
        display: `minimal-ui`,
        icon: `src/assets/images/ecotox_small.png`
      }
    },
    `gatsby-plugin-offline`,
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-postcss`,
    `gatsby-plugin-tailwindcss`,
    {
      resolve: "gatsby-plugin-sitemap",
      excludes: ['/blog/*'],
      options: {
        output: '/sitemap'
      },
    },
    {
      resolve: 'gatsby-plugin-robots-txt',
      options: {
        host: siteUrl,
        sitemap: `${siteUrl}/sitemap/sitemap-index.xml`,
        resolveEnv: () => 'production',
        env: {
          development: {
            policy: [{ userAgent: '*', disallow: ['/'] }]
          },
          production: {
            policy: [{ userAgent: '*', allow: '/' }]
          }
        }
      }
    },
    {
      resolve: `gatsby-plugin-purgecss`,
      options: {
        tailwind: true,
        purgeOnly: [`src/assets/styles/global.css`]
      }
    }
  ]
};
