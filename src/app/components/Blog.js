// src/app/components/Blog.js
"use client"; // Mark this component as a Client Component

import React, { useState } from "react";

const blogPosts = [
  {
    title: "Understanding Amazon Sales Rank",
    content: `
      Amazon Sales Rank is a metric used to gauge how well a product sells on Amazon. 
      It’s calculated based on sales data from all sellers, giving a snapshot of product popularity. 
      Understanding this metric can help sellers optimize their listings and increase visibility.
      Factors affecting sales rank include product price, reviews, and sales history.
    `,
    keywords: "Amazon Sales Rank, product popularity, optimize listings",
  },
  {
    title: "How to Improve Your Product's Sales Rank",
    content: `
      Improving your product's sales rank requires a mix of marketing strategies 
      and understanding customer needs. Focus on obtaining more reviews, optimizing your 
      product listing with relevant keywords, and running promotions. 
      Additionally, consider using Amazon Advertising to increase visibility and drive more sales.
    `,
    keywords: "improve sales rank, marketing strategies, Amazon Advertising",
  },
  {
    title: "The Importance of Reviews in Sales Rank",
    content: `
      Customer reviews play a critical role in determining your product's sales rank on Amazon. 
      High-quality reviews not only improve your product’s credibility but also influence 
      potential buyers’ decisions. Encourage satisfied customers to leave positive feedback 
      and respond to reviews to show that you value customer input.
    `,
    keywords: "customer reviews, sales rank, product credibility",
  },
  {
    title: "Using Amazon Tools to Check Sales Rank",
    content: `
      There are various tools available for checking your Amazon sales rank and optimizing your listings. 
      Tools like Jungle Scout and Helium 10 can provide insights into competitors’ sales and 
      market trends. Utilize these tools to track your product's performance and make informed decisions.
    `,
    keywords: "Amazon tools, sales rank checker, optimize listings",
  },
  {
    title: "Analyzing Your Competitors' Sales Rank",
    content: `
      Understanding your competitors' sales rank can provide insights into market trends 
      and customer preferences. By analyzing competitors, you can identify what works and 
      what doesn’t, allowing you to adjust your strategy accordingly. Monitor their pricing, 
      promotions, and customer engagement to stay competitive.
    `,
    keywords: "competitors' sales rank, market trends, customer preferences",
  },
  {
    title: "Frequently Asked Questions about Amazon Sales Rank",
    content: `
      Here we address common queries regarding Amazon Sales Rank and its impact on sales. 
      Questions such as “What affects sales rank?” and “How often is it updated?” are 
      frequently asked. The sales rank is updated hourly and is influenced by recent sales 
      velocity and the product category.
    `,
    keywords: "FAQ, Amazon Sales Rank, sales velocity",
  },
];

const Blog = () => {
  const [posts] = useState(blogPosts);
  const [openIndex, setOpenIndex] = useState(null);

  const togglePost = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  // Generate structured data for the blog posts
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Blog",
    "blogPost": posts.map((post) => ({
      "@type": "BlogPosting",
      "headline": post.title,
      "articleBody": post.content,
      "keywords": post.keywords,
      "url": `https://www.yourwebsite.com/blog/${post.title.replace(/\s+/g, '-').toLowerCase()}`,
      "datePublished": new Date().toISOString(),
    })),
  };

  return (
    <div className="my-8 bg-white p-6 rounded shadow-md">
      <h2 className="text-3xl font-bold text-black">Blog</h2>
      <div className="grid grid-cols-1 gap-4 mt-4">
        {posts.map((post, index) => (
          <div
            key={index}
            className="p-4 border border-gray-300 rounded shadow-md transition-all duration-200 hover:shadow-lg"
          >
            <h3
              className="text-xl font-semibold text-blue-600 cursor-pointer"
              onClick={() => togglePost(index)}
              aria-expanded={openIndex === index} // Accessibility enhancement
              aria-controls={`post-content-${index}`} // Accessibility enhancement
            >
              {post.title}
            </h3>
            {openIndex === index && (
              <p 
                className="mt-2 text-black" 
                id={`post-content-${index}`} // Accessibility enhancement
                aria-labelledby={`post-title-${index}`} // Accessibility enhancement
              >
                {post.content}
              </p>
            )}
            <p className="mt-2 text-gray-500 text-sm">
              Keywords: {post.keywords}
            </p>
          </div>
        ))}
      </div>

      {/* JSON-LD structured data script */}
      <script type="application/ld+json">
        {JSON.stringify(structuredData)}
      </script>
    </div>
  );
};

export default Blog;
