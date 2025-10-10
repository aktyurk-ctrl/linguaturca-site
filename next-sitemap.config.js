/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.SITE_URL || 'https://linguaturca.example.com',
  generateRobotsTxt: true,
  sitemapSize: 5000,
  exclude: ['/api/*'],
  robotsTxtOptions: {
    policies: [{ userAgent: '*', allow: '/' }],
  },
};


