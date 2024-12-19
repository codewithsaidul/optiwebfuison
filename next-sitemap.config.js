// /** @type {import('next-sitemap').IConfig} */



// // next-sitemap.js
// const {  portfolios, teamMembers } = require("./src/data/Data"); // Import your data
// const slugify = require("./src/utils/slugify"); // Import slugify function

// module.exports = {
//   siteUrl: 'https://localhost:3000',  // Your actual domain
//   generateRobotsTxt: true,                // Automatically generate robots.txt
//   sitemapSize: 50000,                     // Optional: Max 50,000 URLs per sitemap file
//   changefreq: 'daily',                    // Optional: Frequency of change for all pages
//   priority: 0.7,                          // Optional: Default priority for all pages
//   exclude: ['/admin/**', '/login/**'],    // Optional: Exclude pages like admin or login

//   // Path to output the sitemap.xml and robots.txt
//   // outDir: './out',  // Add this line to specify the `out/` folder for export
  
//   // Static pages + dynamic pages from data.js
//   additionalPages: [
//     '/',                // Home page
//     '/about',           // About page
//     '/services',        // Service page
//     '/portfolio',       // Portfolio page
//     '/blog',            // Blog page
//     '/contact',         // Contact page

//     // Add dynamic service pages, slugify service names
//     ...services.map(service => ({
//       url: `/services/${slugify(service.title)}`,  // Generate slug from service name
//       changefreq: 'weekly',
//       priority: 0.8,
//     })),

//     // Add dynamic blog post pages, slugify blog post titles
//     ...blogPosts.map(post => ({
//       url: `/blog/${slugify(post.title)}`,  // Generate slug from post title
//       changefreq: 'monthly',
//       priority: 0.8,
//     })),


//     // Add dynamic Portfolio pages, slugify Portfolio titles
//     ...portfolios.map(portfolio => ({
//       url: `/portfolio/${slugify(portfolio.title)}`,  // Generate slug from Portfolio title
//       changefreq: 'monthly',
//       priority: 0.8,
//     })),

//     // Add dynamic team member pages, slugify team member names
//     ...teamMembers.map(member => ({
//       url: `/team/${slugify(member.name)}`,  // Generate slug from team member name
//       changefreq: 'weekly',
//       priority: 0.6,
//     })),
//   ],
// };


/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://optiwebfuison.com',
  generateRobotsTxt: true,
  sitemapSize: 1000,
  changefreq: 'daily',
  priority: 0.7,
  exclude: ['/admin/**', '/login/**'],
  outDir: './out',
  additionalPages: [
    '/', 
    '/about', 
    '/services', 
    '/portfolio', 
    '/blog', 
    '/contact'
  ],
  debug: true, // Add this line to enable debug mode
};


