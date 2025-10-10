import { client } from "./client";

// Get all blogs for the blogs listing page with caching and pagination
export async function getAllBlogs(limit = 12, offset = 0) {
  const query = `*[_type == "blog"] | order(publishedAt desc) [${offset}...${offset + limit}] {
    _id,
    title,
    slug,
    description,
    blogImg{
      asset->{
        _id,
        url
      }
    },
    publishedAt,
    author->{
      name
    }
  }`;

  return await client.fetch(
    query,
    {},
    {
      next: {
        revalidate: 3600, // Revalidate every hour
        tags: ["blogs"],
      },
    }
  );
}

// Get total count of blogs for pagination
export async function getBlogsCount() {
  const query = `count(*[_type == "blog"])`;

  return await client.fetch(
    query,
    {},
    {
      next: {
        revalidate: 86400, // Revalidate daily
        tags: ["blog-count"],
      },
    }
  );
}

// Get a single blog by slug with caching
export async function getBlogBySlug(slug) {
  const query = `*[_type == "blog" && slug.current == $slug][0] {
    _id,
    title,
    slug,
    description,
    content,
    blogImg{
      asset->{
        _id,
        url
      }
    },
    publishedAt,
    author->{
      name,
      bio,
      image
    }
  }`;

  return await client.fetch(
    query,
    { slug },
    {
      next: {
        revalidate: 3600, // Revalidate every hour
        tags: ["blog", `blog-${slug}`],
      },
    }
  );
}

// Get all blog slugs for static generation with caching
export async function getAllBlogSlugs() {
  const query = `*[_type == "blog"] {
    "slug": slug.current
  }`;

  return await client.fetch(
    query,
    {},
    {
      next: {
        revalidate: 86400, // Revalidate daily (24 hours)
        tags: ["blog-slugs"],
      },
    }
  );
}

// Get author by name
export async function getAuthorByName(name) {
  const query = `*[_type == "author" && name == $name][0]`;

  return await client.fetch(query, { name });
}
