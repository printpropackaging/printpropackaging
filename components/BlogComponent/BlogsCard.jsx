import React, { memo } from "react";
import Link from "next/link";
import Image from "next/image";
import { urlFor } from "@/sanity/lib/image";

const BlogsCard = ({ blogImg, title, description, slug }) => {
  return (
    <section className="relative">
      <article id="affiliate__badge">
        <div id="affiliate__badge__body">
          <span className="uppercase">powered by</span>
          <h3>PrintProPackaging</h3>
        </div>
      </article>

      <article
        style={{ boxShadow: "0 0 10px 0 #0000001A" }}
        className={`hover:bg-[#f6f8fa] bg-white hover:border rounded-t-md border border-transparent hover:scale-[1.01] transition-all duration-1000 my-6 shadow-md hover:shadow-none h-[92%] `}
      >
        {blogImg && (
          <Image
            width={1000}
            height={500}
            src={urlFor(blogImg).width(1000).height(500).quality(85).url()}
            className="w-[100%] rounded-t-md border-b"
            alt="blog"
            loading="lazy"
            placeholder="blur"
            blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdABmX/9k="
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        )}
        <div className=" px-5 py-4 bg-white transition_link hover:bg-[#f6f8fa]">
          <div className="card-footer my-4 ">
            <h6 className="text-lg font-semibold uppercase">
              {title ? title.slice(0, 34) : title}...
            </h6>
            <p className="py-4 text-[.9rem] text-justify">
              {description ? description.slice(0, 150) : description}....
            </p>
            {/* <button type='button' className="secondary_text px-2 rounded-sm tracking-[1px]">{category}</button> */}
          </div>
          <div className="flex items-center justify-between relative">
            <Link
              href={`/blog/${slug.current}`}
              className="border border-black rounded-sm flex items-center"
              style={{ padding: ".65rem 1.3rem" }}
            >
              Read More
              <svg
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                className="w-4 h-4 ml-1"
                viewBox="0 0 24 24"
              >
                <path d="M5 12h14M12 5l7 7-7 7"></path>
              </svg>
            </Link>
          </div>
        </div>
      </article>
    </section>
  );
};

export default memo(BlogsCard);
