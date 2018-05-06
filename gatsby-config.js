module.exports = {
  siteMetadata: {
    title: 'CN2018 Hacking',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/src/solutions`,
        name: 'markdown-pages',
      },
    },
    'gatsby-transformer-remark',
  ],
}
