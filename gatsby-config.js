module.exports = {
  siteMetadata: {
    title: "Nox Caelo",
    description:
      "Nox Caelo, Latin for night sky is a minimal, dark theme for VS Code.",
    keywords: "Nox, Nox Caelo, Caelo theme, theme, dark theme, VS Code theme",
  },
  plugins: [
    "gatsby-plugin-react-helmet",
    `gatsby-plugin-styled-components`,
    "gatsby-plugin-offline",
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: "nox-caelo-theme",
        short_name: "Nox Caelo",
        start_url: "/",
        background_color: "#000534",
        theme_color: "#000534",
        display: "minimal-ui",
        //icon: 'src/images/', // This path is relative to the root of the site.
      },
    },
  ],
}
