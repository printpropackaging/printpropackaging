import React from "react";

// Organization Schema (like Google, Facebook)
export const OrganizationSchema = () => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "PrintPro Packaging",
    alternateName: "PrintProPackaging",
    url: "https://printpropackaging.com",
    logo: "https://printpropackaging.com/favicon.svg",
    description:
      "Leading custom packaging solutions provider in USA. Specializing in custom boxes for Retail, CBD, Cosmetics, Food, Gifts, and more.",
    foundingDate: "2020",
    address: {
      "@type": "PostalAddress",
      addressCountry: "US",
      addressRegion: "USA",
    },
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+1-720-604-9062",
      contactType: "customer service",
      availableLanguage: "English",
    },
    sameAs: [
      "https://www.facebook.com/printpropackaging",
      "https://www.instagram.com/printpropackaging",
      "https://www.linkedin.com/company/printpropackaging",
    ],
    potentialAction: {
      "@type": "SearchAction",
      target: "https://printpropackaging.com/search?q={search_term_string}",
      "query-input": "required name=search_term_string",
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
};

// Blog Post Schema (like Medium, WordPress)
export const BlogPostSchema = ({ blog }) => {
  if (!blog) return null;

  const schema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: blog.title,
    description: blog.description,
    image: blog.blogImg?.asset?.url ? [blog.blogImg.asset.url] : [],
    datePublished: blog.publishedAt,
    dateModified: blog.publishedAt,
    author: {
      "@type": "Person",
      name: blog.author?.name || "PrintPro Packaging",
      url: "https://printpropackaging.com",
    },
    publisher: {
      "@type": "Organization",
      name: "PrintPro Packaging",
      logo: {
        "@type": "ImageObject",
        url: "https://printpropackaging.com/favicon.svg",
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `https://printpropackaging.com/blog/${blog.slug?.current}`,
    },
    articleSection: "Custom Packaging",
    keywords: [
      "custom packaging",
      "boxes",
      "printpro packaging",
      blog.title.toLowerCase(),
    ],
    wordCount: blog.content ? calculateWordCount(blog.content) : 0,
    inLanguage: "en-US",
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
};

// Blog Listing Schema (like Google News)
export const BlogListingSchema = ({ blogs }) => {
  if (!blogs || blogs.length === 0) return null;

  const schema = {
    "@context": "https://schema.org",
    "@type": "Blog",
    name: "PrintPro Packaging Blog",
    description: "Latest insights and tips about custom packaging solutions",
    url: "https://printpropackaging.com/blogs",
    publisher: {
      "@type": "Organization",
      name: "PrintPro Packaging",
      logo: {
        "@type": "ImageObject",
        url: "https://printpropackaging.com/favicon.svg",
      },
    },
    blogPost: blogs.map((blog) => ({
      "@type": "BlogPosting",
      headline: blog.title,
      description: blog.description,
      url: `https://printpropackaging.com/blog/${blog.slug?.current}`,
      datePublished: blog.publishedAt,
      author: {
        "@type": "Person",
        name: blog.author?.name || "PrintPro Packaging",
      },
      image: blog.blogImg?.asset?.url,
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
};

// Breadcrumb Schema (like Amazon, Google)
export const BreadcrumbSchema = ({ items }) => {
  if (!items || items.length === 0) return null;

  const schema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
};

// FAQ Schema (like Google's FAQ rich snippets)
export const FAQSchema = ({ faqs }) => {
  if (!faqs || faqs.length === 0) return null;

  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
};

// Helper function to calculate word count
function calculateWordCount(content) {
  if (!content) return 0;

  let wordCount = 0;

  const traverseContent = (blocks) => {
    if (Array.isArray(blocks)) {
      blocks.forEach((block) => {
        if (block._type === "block" && block.children) {
          block.children.forEach((child) => {
            if (child.text) {
              wordCount += child.text.split(/\s+/).length;
            }
          });
        }
      });
    }
  };

  traverseContent(content);
  return wordCount;
}
