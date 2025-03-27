/** @type {import('next-sitemap').IConfig} */
module.exports = {
    siteUrl: 'https://vercel.app',
    generateRobotsTxt: true,
    robotsTxtOptions: {
      policies: [
        {
          userAgent: '*',
          allow: '/',
        },
      ],
    },
    sitemapSize: 5000,
  };
  