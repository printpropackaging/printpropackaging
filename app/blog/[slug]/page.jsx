import BlogCard from "@/components/BlogComponent/BlogCard";
import BlogErrorBoundary from "@/components/BlogComponent/BlogErrorBoundary";
import { getAllBlogSlugs, getBlogBySlug } from "@/sanity/lib/blogQueries";
import { Suspense } from "react";
import BlogLoading from "@/components/BlogComponent/BlogLoading";
import {
  BlogPostSchema,
  BreadcrumbSchema,
} from "@/components/SEO/StructuredData";
import { AdvancedMetadata } from "@/components/SEO/AdvancedMetadata";

export const generateStaticParams = async () => {
  const slugs = await getAllBlogSlugs();
  return slugs;
};

export async function generateMetadata({ params }) {
  const { slug } = params;
  const blog = await getBlogBySlug(slug);

  if (!blog) {
    return {
      title: "Blog Post Not Found",
      description: "The requested blog post could not be found.",
    };
  }

  return {
    title: `${blog.title} | PrintPro Packaging`,
    description:
      blog.description ||
      `Read about ${blog.title} on PrintPro Packaging blog.`,
    keywords: [
      "custom packaging",
      "boxes",
      "printpro packaging",
      blog.title.toLowerCase(),
    ],
    authors: [{ name: blog.author?.name || "PrintPro Packaging" }],
    openGraph: {
      title: blog.title,
      description: blog.description,
      type: "article",
      publishedTime: blog.publishedAt,
      authors: [blog.author?.name || "PrintPro Packaging"],
      images: blog.blogImg
        ? [
            {
              url: blog.blogImg.asset?.url,
              width: 1000,
              height: 500,
              alt: blog.title,
            },
          ]
        : [],
    },
    twitter: {
      card: "summary_large_image",
      title: blog.title,
      description: blog.description,
      images: blog.blogImg?.asset?.url ? [blog.blogImg.asset.url] : [],
    },
    alternates: {
      canonical: `/blog/${slug}`,
    },
  };
}

export default async function Page({ params }) {
  const { slug } = params;

  return (
    <BlogErrorBoundary>
      <Suspense fallback={<BlogLoading />}>
        <BlogPageContent slug={slug} />
      </Suspense>
    </BlogErrorBoundary>
  );
}

async function BlogPageContent({ slug }) {
  const blog = await getBlogBySlug(slug);

  if (!blog) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="max-w-md w-full bg-white shadow-lg rounded-lg p-6 text-center">
          <div className="text-gray-500 text-6xl mb-4">📝</div>
          <h1 className="text-2xl font-bold text-gray-900 mb-2">
            Blog Post Not Found
          </h1>
          <p className="text-gray-600 mb-4">
            The blog post you're looking for doesn't exist or has been moved.
          </p>
          <a
            href="/blogs"
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition-colors"
          >
            View All Blogs
          </a>
        </div>
      </div>
    );
  }

  return (
    <>
      <BlogPostSchema blog={blog} />
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "https://printpropackaging.com" },
          { name: "Blogs", url: "https://printpropackaging.com/blogs" },
          {
            name: blog.title,
            url: `https://printpropackaging.com/blog/${blog.slug?.current}`,
          },
        ]}
      />
      <BlogCard {...blog} />
    </>
  );
}
