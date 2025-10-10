import { getAllBlogs, getAllBlogSlugs } from "@/sanity/lib/blogQueries";

export default async function sitemap() {
  const baseUrl = "https://printpropackaging.com";

  // Static pages
  const staticPages = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 1.0,
    },
    {
      url: `${baseUrl}/blogs`,
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/faq`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.6,
    },
    {
      url: `${baseUrl}/privacy_policy`,
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.3,
    },
    {
      url: `${baseUrl}/terms_conditions`,
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.3,
    },
  ];

  // Dynamic blog pages
  let blogPages = [];
  try {
    const blogs = await getAllBlogs();
    blogPages = blogs.map((blog) => ({
      url: `${baseUrl}/blog/${blog.slug?.current}`,
      lastModified: new Date(blog.publishedAt),
      changeFrequency: "weekly",
      priority: 0.8,
    }));
  } catch (error) {
    console.error("Error generating blog sitemap:", error);
  }

  // Product pages (if you have products)
  const productPages = [
    // Add your product pages here
    // {
    //   url: `${baseUrl}/products/custom-boxes`,
    //   lastModified: new Date(),
    //   changeFrequency: 'weekly',
    //   priority: 0.8,
    // },
  ];

  return [...staticPages, ...blogPages, ...productPages];
}
