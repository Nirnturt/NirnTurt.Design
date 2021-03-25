module.exports = {
  siteMetadata: {
    title: `NirnTurt.Design`,
    name: `NirnTurt.Design`,
    siteUrl: `https://novela.narative.co`,
    description: `你好，这里是NirnTurt的UI/UX作品集`,
    hero: {
      heading: `欢迎来到NirnTurt\`Design<br/>这里是NirnTurt的UI/UX作品集`,
      maxWidth: 700,
    },
    social: [
      {
        name: `mailto`,
        url: `mailto:elvlxla@gmail.com`,
      },
      {
        name: `dribbble`,
        url: `https://dribbble.com/NirnTurt`,
      },
      {
        name: `behance`,
        url: `https://www.behance.net/ivxe`,
      },
      {
        name: `instagram`,
        url: `https://www.instagram.com/nirnturt/`,
      },
      {
        name: `github`,
        url: `https://github.com/Nirnturt`,
      }
    ],
  },
  plugins: [
    {
      resolve: "@narative/gatsby-theme-novela",
      options: {
        contentPosts: "content/posts",
        contentAuthors: "content/authors",
        basePath: "/",
        authorsPage: true,
        sources: {
          local: true,
          // contentful: true,
        },
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Novela by Narative`,
        short_name: `Novela`,
        start_url: `/`,
        background_color: `#fff`,
        theme_color: `#fff`,
        display: `standalone`,
        icon: `src/assets/favicon.png`,
      },
    },
    {
      resolve: `gatsby-plugin-netlify-cms`,
      options: {
      },
    },
  ],
};
