module.exports = {
  siteMetadata: {
    // Site URL for when it goes live
    siteUrl: `https://elastic-meninsky-aa7c74.netlify.app/`,
    // Your Name
    name: 'Joel Chadambuka',
    // Main Site Title
    title: `Joel Chadambuka | Full-Stack Developer`,
    // Description that goes under your name in main bio
    description: `Welcome to my portfolio. I am a full stack web developer`,
    // Optional: Twitter account handle
    author: `@chad_jnr`,
    // Optional: Github account URL
    github: `https://github.com/cruz911`,
    // Optional: LinkedIn account URL
    linkedin: `https://www.linkedin.com/in/joel-chadambuka-110a681a7/`,
    // Content of the About Me section
    about: `
    I am a recently graduated Software Engineering student who is looking to make their first steps to advance their career. I am interested in web development and data science. I am a good problem solver and willing to learn to expand my knowledge`,
    // Optional: List your projects, they must have `name` and `description`. `link` is optional.
    projects: [
      {
        name: 'Devfolio',
        description:
          'A zero-config and blazing fast personal site + blog built with GatsbyJs and TailwindCSS',
        link: 'https://github.com/Cruz911/devfolio',
      },
      // {
      //   name: 'ChromeExtensionKit',
      //   description:
      //     'Kit to jump-start your Chrome extension projects with a variety of battle-tested starter templates',
      //   link: 'https://chromeextensionkit.com/?ref=devfolio',
      // },
      {
        name: 'Chat Application',
        description:
          'A chat application using websockets in node.js',
        link: 'https://github.com/Cruz911/Chat-Application',
      },
    ],
    // Optional: List your experience, they must have `name` and `description`. `link` is optional.
    experience: [
      {
        name: 'Hitrac',
        description: 'Full-Stack Developer Intern, September 2019 - March 2020',
        link: 'https://github.com/RyanFitzgerald/devfolio',
      },
     
    ],
    // Optional: List your skills, they must have `name` and `description`.
    skills: [
      {
        name: 'Languages & Frameworks',
        description:
          'JavaScript (ES6+), Node.js, Express.js, React, Python, Pandas',
      },
      {
        name: 'Databases',
        description: 'MongoDB, PostreSQL, MySQL',
      },
      {
        name: 'Other',
        description:
          'Microservices, API design, Agile / Scrum',
      },
    ],
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/blog`,
        name: `blog`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 590,
              wrapperStyle: `margin: 0 0 30px;`,
            },
          },
          {
            resolve: `gatsby-remark-responsive-iframe`,
            options: {
              wrapperStyle: `margin-bottom: 1.0725rem`,
            },
          },
          `gatsby-remark-prismjs`,
          `gatsby-remark-copy-linked-files`,
          `gatsby-remark-smartypants`,
        ],
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-postcss`,
    `gatsby-plugin-feed`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: `ADD YOUR TRACKING ID HERE`, // Optional Google Analytics
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `devfolio`,
        short_name: `devfolio`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`, // This color appears on mobile
        display: `minimal-ui`,
        icon: `src/images/icon.png`,
      },
    },
  ],
};
