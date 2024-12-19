// ================= Icons ================= //

import { PiChartLineUpBold } from "react-icons/pi";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaLinkedinIn,
  FaGithub,
  FaCode,
  FaEdit,
} from "react-icons/fa";

// ================= Portfolio ================= //
import sakuArtisans from "@/assects/portfolio/portfolio1.png";
import personalPortfolio from "@/assects/portfolio/portfolio2.png";
import optiWebFusion from "@/assects/portfolio/portfolio3.png";
import sakuNest from "@/assects/portfolio/portfolio4.png";

// ================= Team Members ================= //
import sangitaKarmakarMitu from "@/assects/team/sangita.webp";
import saidulIslamRana from "@/assects/team/rana.webp";
import jobayerAhmed from "@/assects/team/jobayer.webp";
import abdullahAlNoman from "@/assects/team/noman.webp";

// ================= Blog Posts ================= //
import blog1 from "@/assects/blog/The-Importance-of-SEO-in-2024.jpg";
import blog2 from "@/assects/blog/Top-5-Social-Media-Marketing-Strategies.jpg";
import blog3 from "@/assects/blog/Boosting-Conversions-with-Landing-Page-Optimization.jpg";
import blog4 from "@/assects/blog/How-AI-is-Helpfull-in-Digital-Marketing.jpg";
import blog5 from "@/assects/blog/Crafting-a-Successful-Content-Marketing-Strategy.jpg";
import blog6 from "@/assects/blog/Why-Website-Speed-Matters-for-SEO.jpg";
import blog7 from "@/assects/blog/Optimizing-for-Voice-Search-in-2024.jpg";
import blog8 from "@/assects/blog/Understanding-Googles-Latest-Algorithm-Update.jpg";
import blog9 from "@/assects/blog/The-Power-of-Video-Marketing.jpg";
import blog10 from "@/assects/blog/Using-Data-Analytics-to-Drive-Results.jpg";
import blog11 from "@/assects/blog/4-Tips-for-Mastering-Email-Marketing.jpg";
import blog12 from "@/assects/blog/Building-Trust-with-Brand-Transparency.jpg";

// ================= Author Image ================= //
import user1 from "@/assects/user/user1.jpg";
import user2 from "@/assects/user/user2.jpg";
import user3 from "@/assects/user/user3.jpg";
import user4 from "@/assects/user/user4.jpg";
import user5 from "@/assects/user/user5.jpg";
import user6 from "@/assects/user/user6.jpg";
import user7 from "@/assects/user/user7.jpg";
import user8 from "@/assects/user/user8.jpg";
import user9 from "@/assects/user/user9.jpg";
import user10 from "@/assects/user/user10.jpg";
import user11 from "@/assects/user/user11.jpg";
import user12 from "@/assects/user/user12.jpg";

const portfolios = [
  {
    id: 1,
    subTitle: "Saku Artisans",
    title: "React E-Commerce for Handmade Crafts",
    description: `Saku Artisans is a React-based e-commerce platform designed to
                showcase and sell handmade crafts. It features a user-friendly
                interface, product listings, and a shopping cart for seamless
                online shopping.`,
    image: sakuArtisans, // Image path (static or from a CDN)
    link: "https://sakuartisans.web.app", // External project link
    technologies: [
      "React",
      "Express.JS",
      "MongoDB",
      "Tailwind",
      "Firebase",
      "Node.js",
    ], // Technologies used
  },
  {
    id: 2,
    subTitle: "Personal Portfolio",
    title: "Front-End Developer Showcase",
    description: `This is my personal portfolio website, where I showcase my
                skills and projects as a front-end developer. It&apos;s built using
                React, Next.js, and Tailwind CSS, and it&apos;s designed to be
                responsive and user-friendly.`,
    image: personalPortfolio,
    link: "https://codewithrana.vercel.app",
    technologies: ["React", "Next.js", "Material UI", "Framer Motion"],
  },
  {
    id: 3,
    subTitle: "OptiWebFusion",
    title: "Web Design & Digital Marketing Agency",
    description: `OptiWebFusion is a web design and digital marketing agency that
                specializes in creating custom websites and digital marketing
                strategies for businesses.`,
    image: optiWebFusion,
    link: "https://optiwebfusion.com",
    technologies: ["React", "Next.js", "Tailwind CSS"],
  },
  {
    id: 4,
    subTitle: "Saku Nest",
    title: "React Real Estate Listings & Solutions",
    description: `Saku Nest is a React-based real estate platform that allows users
                to browse and search for properties for sale or rent. It features
                a user-friendly interface, property listings, and search
                filters for easy navigation.`,
    image: sakuNest,
    link: "https://sakunest-b052c.web.app",
    technologies: [
      "React",
      "Express.js",
      "MongoDB",
      "Node.js",
      "Firebase",
      "Tailwind CSS",
    ],
  },
];

const services = [
  {
    id: 1,
    title: "SEO Optimization",
    description: `Gain more visitors, higher search engine ranks, and an overall stronger online presence with the help of professional SEO services.`,
    icon: <PiChartLineUpBold size={32} />,
  },
  {
    id: 2,
    title: "Web Development",
    description: `Build websites that are quick, safe, and responsive to draw in customers, increase conversions, and improve the perception of your company.`,
    icon: <FaCode size={32} />,
  },
  {
    id: 3,
    title: "Video Editing",
    description: `Professional video editing services help improve brand narrative, generate interesting content, and increase audience engagement for businesses.`,
    icon: <FaEdit size={32} />,
  },
];

const teamMembers = [
  {
    name: "Sangita Karmakar Mitu",
    designation: "Founder & Web Designer",
    image: sangitaKarmakarMitu,
    social: [
      {
        platform: "facebook",
        link: "https://www.facebook.com/sk.mitu.5836",
        icon: FaFacebookF,
      },
      {
        platform: "instagram",
        link: "https://www.instagram.com/sangita_karmoker_mitu",
        icon: FaInstagram,
      },
      // { platform: "twitter", link: "https://twitter.com", icon: FaTwitter },
      {
        platform: "linkedin",
        link: "https://www.linkedin.com/in/skmituofficial",
        icon: FaLinkedinIn,
      },
    ],
  },

  {
    name: "Abdullah Al Noman",
    designation: "Founder & Social Media Expert",
    image: abdullahAlNoman,
    social: [
      {
        platform: "facebook",
        link: "https://www.facebook.com/profile.php?id=100048961087152",
        icon: FaFacebookF,
      },
      {
        platform: "instagram",
        link: "https://www.instagram.com/dm_noman",
        icon: FaInstagram,
      },
      // { platform: "twitter", link: "https://twitter.com", icon: FaTwitter },
      {
        platform: "linkedin",
        link: "https://www.linkedin.com/in/abdullah-all-noman-04b09421a",
        icon: FaLinkedinIn,
      },
    ],
  },

  {
    name: "Jobayer Ahmed",
    designation: "Founder & SEO Expert",
    image: jobayerAhmed,
    social: [
      {
        platform: "facebook",
        link: "https://www.facebook.com/jobayer.ahamedtouqir",
        icon: FaFacebookF,
      },
      {
        platform: "instagram",
        link: "https://instagram.com/dm__jobayer",
        icon: FaInstagram,
      },
      // { platform: "twitter", link: "https://twitter.com", icon: FaTwitter },
      {
        platform: "linkedin",
        link: "https://www.linkedin.com/in/md-jobayer-ahmed-8a333821a",
        icon: FaLinkedinIn,
      },
    ],
  },


  {
    name: "Saidul Islam Rana",
    designation: "Founder & Junior Web Developer",
    image: saidulIslamRana,
    social: [
      {
        platform: "facebook",
        link: "https://www.facebook.com/saidul.islam.rana.9",
        icon: FaFacebookF,
      },
      {
        platform: "instagram",
        link: "https://instagram.com/codewithsaidul",
        icon: FaInstagram,
      },
      {
        platform: "twitter",
        link: "https://twitter.com/codewithsaidul",
        icon: FaTwitter,
      },
      {
        platform: "linkedin",
        link: "https://www.linkedin.com/in/codewithsaidul",
        icon: FaLinkedinIn,
      },
      {
        platform: "github",
        link: "https://github.com/codewithsaidul",
        icon: FaGithub,
      },
    ],
  },
];

const blogPosts = [
  {
    id: 1,
    image: blog1,
    title: "The Importance of SEO in 2025",
    description: `Search engine optimization (SEO) is the art and science of enhancing your site so it appears at the top of search engines such as Google. SEO enables you to reach users who are looking for your products or services by increasing the relevance and authority of your site. It is such an important part of digital marketing.
Long-term: The long-term strategy is one of the effective digital marketing strategies with a higher return on investment (ROI).
Ways in Which SEO Can Provide a Boost to Your Business
Target Specific Regions with Local SEO If your business is local, use part of the cash you save to invest in local SEO because it can be a game-changer for you. At Optiwebfusion, we optimize your presence on the web for local listings so that your potential customers in a close vicinity are able to locate you easily. Local SEO guides your business properties with everything from Google My Business optimization to local keywords and online reviews so that you shine where it matters most.
 
On-Page SEO for Peak Performance On-page SEO pertains to all the changes made to individual pages on your website in order to achieve better rankings and to fetch more relevant traffic. We consider keyword placement, meta description optimization, and even readership improvement, so each page of your website can be an effective weapon in attracting search traffic.
 
Technical SEO for Effective Functioning A quick, properly organized site is the backbone of any good SEO. Our staff performs technical SEO work by increasing page loading times, mobile device usability, and web design. Hence, it is easy for the search engines to crawl and index the site, while at the same time improving the user experience.
 
Content Strategy for Catapulting Popularity and Retention Prerequisites contain quality content itself—the fuel for any SEO machine. At Optiwebfusion, we craft content to the Orem level and also still manage to capture the audience’s attention and retain them. These include blog posts, articles, infographics, and many other forms of content—all of which are designed with your business objectives and keywords in mind.
`,
    post_date: "2024-10-01",
    author: "John Miller",
    authorImage: user1,
  },

  {
    id: 2,
    image: blog2,
    title: "The Importance of Quality Web Design in 2024",
    description: `A good web design can be termed to go beyond aesthetic appeal. It influences the ease of use, search engine optimization, and ultimately, customer loyalty. Here are reasons why quality web design is a must for every business:
 
First Impressions are Quite Important: Research shows that users take an average of 0.05 seconds to judge a website. A contemporary and neat design conveys a sense of corporate image, for instance, while its opposite, a cluttered and old-fashioned template, drives away users.
 
Ease of use and access: An ideal design should consider the user and focus on ensuring that navigation is simple, speed of loading is fast, and information is easy to access.
`,
    post_date: "2024-10-05",
    author: "Sarah Johnson",
    authorImage: user2,
  },

  {
    id: 3,
    image: blog3,
    title: "Why Choose Optiwebfusion as Your Brand Development Partner?",
    description: `Thank you Optiwebfusion hates needless imitation. inflicts pain and suffering upon idiosyncratic-styled individuals. Naturally, we need every ounce of your creative side to be dedicated to how you will promote your product while we cater to the best practicesтехнології. Here’s how we do it:
 
Custom, Adaptive Designs: Our team builds each website in such a way that it adapts to the screen size being used without any problems, whether it be a mobile device or a stationary computer.
 
Proficient User’s Layouts: Unsurprisingly, some analysis is done on the target audience beforehand, and this ensures that every single component on the web page is functional and rewarding to the end user.
 
Design that is Research-Based: Right from the integration of the site design, we implement the SEO strategies that are relevant, making it more organic for the site to search for potential clients easily.
`,
    post_date: "2024-10-08",
    author: "Emily Davis",
    authorImage: user3,
  },


  {
    id: 4,
    image: blog4,
    title: "How AI is Helpfull in Digital Marketing",
    description:
      "An exploration of how artificial intelligence is transforming marketing strategies.",
    post_date: "2024-10-12",
    author: "Michael Brown",
    authorImage: user4,
  },


  {
    id: 5,
    image: blog5,
    title: "Crafting a Successful Content Marketing Strategy",
    description:
      "Effective techniques for creating a content marketing plan that delivers results.",
    post_date: "2024-10-15",
    author: "Michael Lee",
    authorImage: user5,
  },



  {
    id: 6,
    image: blog6,
    title: "Why Website Speed Matters for SEO",
    description:
      "Understand the impact of website speed on search engine rankings and user experience.",
    post_date: "2024-10-18",
    author: "Laura Bennett",
    authorImage: user6,
  },


  {
    id: 7,
    image: blog7,
    title: "Optimizing for Voice Search in 2024",
    description:
      "Tips and tricks for adapting your website to meet the needs of voice search users.",
    post_date: "2024-10-20",
    author: "Chris Parker",
    authorImage: user7,
  },


  {
    id: 8,
    image: blog8,
    title: "Understanding Google’s Latest Algorithm Update",
    description:
      "A breakdown of Google's latest algorithm update and how it impacts SEO.",
    post_date: "2024-10-22",
    author: "Megan Reed",
    authorImage: user8,
  },


  {
    id: 9,
    image: blog9,
    title: "The Power of Video Marketing",
    description:
      "Why video marketing should be a priority in your digital marketing strategy.",
    post_date: "2024-10-25",
    author: "David Kim",
    authorImage: user9,
  },

  {
    id: 10,
    image: blog10,
    title: "Using Data Analytics to Drive Results",
    description:
      "Explore how data-driven insights can improve your digital marketing efforts.",
    post_date: "2024-10-28",
    author: "Rachel Moore",
    authorImage: user10,
  },


  {
    id: 11,
    image: blog11,
    title: "4 Tips for mastaring E-Mail Marketing",
    description:
      "Strategies to enhance engagement through effective email marketing campaigns.",
    post_date: "2024-11-01",
    author: "Tom Green",
    authorImage: user11,
  },

  
  {
    id: 12,
    image: blog12,
    title: "Building Trust with Brand Transparency",
    description:
      "Learn how transparency and authenticity can strengthen your brand.",
    post_date: "2024-11-05",
    author: "Lisa Adams",
    authorImage: user12,
  },
];

export { portfolios, services, teamMembers, blogPosts };
