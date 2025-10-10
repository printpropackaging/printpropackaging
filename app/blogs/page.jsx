import React, { Suspense } from "react";
import PageTitle from "@/components/Global/pageTitle";
import BlogsCard from "@/components/BlogComponent/BlogsCard";
import BlogsLoading from "@/components/BlogComponent/BlogsLoading";
import { getAllBlogs } from "@/sanity/lib/blogQueries";
import {
  BlogListingSchema,
  BreadcrumbSchema,
} from "@/components/SEO/StructuredData";

const Blogs = async () => {
  return (
    <>
      <PageTitle currentPageTitle="Blogs" currentPage="Blogs" prevPage="Home" />
      <Suspense fallback={<BlogsLoading />}>
        <BlogsContent />
      </Suspense>
    </>
  );
};

async function BlogsContent() {
  const blogs = await getAllBlogs();

  return (
    <>
      <BlogListingSchema blogs={blogs} />
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "https://printpropackaging.com" },
          { name: "Blogs", url: "https://printpropackaging.com/blogs" },
        ]}
      />
      <section className="md:px-[var(--paddingX)] px-4 py-20">
        {blogs.length > 0 ? (
          <div className="">
            <div className="grid lg:grid-cols-3 md:grid-cols-2 text-left grid-cols-1 gap-12 justify-center">
              {blogs.map((blog) => (
                <BlogsCard key={blog._id} {...blog} />
              ))}
            </div>
          </div>
        ) : (
          <div className="text-center py-20">
            <div className="text-gray-500 text-6xl mb-4">📝</div>
            <h2 className="text-2xl font-bold text-gray-900 mb-2">
              No Blogs Found
            </h2>
            <p className="text-gray-600">
              Check back later for new blog posts!
            </p>
          </div>
        )}
      </section>
    </>
  );
}

export default Blogs;

export const metadata = {
  title: "Blog - PrintPro Packaging | Custom Packaging Solutions",
  description:
    "Read our latest blog posts about custom packaging, boxes, and packaging solutions. Expert insights from PrintPro Packaging.",
  keywords: [
    "custom packaging blog",
    "packaging solutions",
    "boxes",
    "printpro packaging",
    "packaging tips",
  ],
  openGraph: {
    title: "Blog - PrintPro Packaging",
    description:
      "Read our latest blog posts about custom packaging, boxes, and packaging solutions.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Blog - PrintPro Packaging",
    description:
      "Read our latest blog posts about custom packaging, boxes, and packaging solutions.",
  },
  alternates: {
    canonical: "/blogs",
  },
};
