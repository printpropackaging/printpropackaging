import { client } from "../sanity/lib/client.js";

// Create the printpropackaging author
async function createAuthor() {
  try {
    const authorData = {
      _type: "author",
      name: "printpropackaging",
      bio: "PrintPro Packaging - Your trusted partner for custom packaging solutions",
      image: {
        _type: "image",
        asset: {
          _type: "reference",
          _ref: "image-printpro-logo", // You'll need to upload the logo to Sanity first
        },
      },
    };

    const author = await client.create(authorData);
    console.log("Author created:", author);
    return author;
  } catch (error) {
    console.error("Error creating author:", error);
    throw error;
  }
}

// Migrate blog data from static to Sanity
async function migrateBlogData() {
  try {
    // First, get or create the author
    let author = await client.fetch(
      '*[_type == "author" && name == "printpropackaging"][0]'
    );

    if (!author) {
      author = await createAuthor();
    }

    // Blog data to migrate
    const blogsData = [
      {
        title: "5 best companies for Custom Boxes and Packaging",
        slug: "best_companies_for_custom_boxes_and_packaging",
        description:
          "There are many companies that offer custom boxes and packaging solutions, but some stand out for their exceptional products and services.",
        blogImg: {
          _type: "image",
          asset: {
            _type: "reference",
            _ref: "image-blog-1", // You'll need to upload the image to Sanity first
          },
        },
        publishedAt: "2024-07-28T00:00:00Z",
        content: [
          {
            _type: "block",
            _key: "block1",
            style: "normal",
            children: [
              {
                _type: "span",
                _key: "span1",
                text: "There are many companies that offer custom boxes and packaging solutions, but some stand out for their exceptional products and services.",
              },
            ],
          },
          {
            _type: "block",
            _key: "block2",
            style: "h1",
            children: [
              {
                _type: "span",
                _key: "span2",
                text: "Here are the top five companies for custom boxes and packaging in the US:",
              },
            ],
          },
          {
            _type: "block",
            _key: "block3",
            style: "h2",
            children: [
              {
                _type: "span",
                _key: "span3",
                text: "PrintPro Packaging:",
              },
            ],
          },
          {
            _type: "block",
            _key: "block4",
            style: "normal",
            children: [
              {
                _type: "span",
                _key: "span4",
                text: "PrintPro Packaging is a premier provider of custom packaging solutions in the US. With a wide range of materials, including corrugated boxes, paperboard boxes, and cardboard boxes, PrintPro Packaging has a solution for every need. Our team of experienced designers can help you create the perfect packaging for your product, and their state-of-the-art manufacturing facilities ensure that you receive high-quality boxes that meet your specifications.",
              },
            ],
          },
        ],
      },
      {
        title: "Where to Get Custom Boxes with My Company Logo?",
        slug: "custom_boxes_with_logo",
        description:
          "As a business owner, it's important to ensure that every aspect of your branding is top-notch. This includes not only your product or service offerings",
        blogImg: {
          _type: "image",
          asset: {
            _type: "reference",
            _ref: "image-blog-2", // You'll need to upload the image to Sanity first
          },
        },
        publishedAt: "2024-07-28T00:00:00Z",
        content: [
          {
            _type: "block",
            _key: "block1",
            style: "normal",
            children: [
              {
                _type: "span",
                _key: "span1",
                text: "As a business owner, it's important to ensure that every aspect of your branding is top-notch. This includes not only your product or service offerings but also the packaging in which they are delivered to your customers.",
              },
            ],
          },
        ],
      },
      {
        title: "Best Custom Packaging for Small Business 2024",
        slug: "best_custom_packaging_for_small_business",
        description:
          "As small business owners, we know that one of the most important aspects of our business is standing out amongst the competition.",
        blogImg: {
          _type: "image",
          asset: {
            _type: "reference",
            _ref: "image-blog-3", // You'll need to upload the image to Sanity first
          },
        },
        publishedAt: "2024-07-28T00:00:00Z",
        content: [
          {
            _type: "block",
            _key: "block1",
            style: "normal",
            children: [
              {
                _type: "span",
                _key: "span1",
                text: "As small business owners, we know that one of the most important aspects of our business is standing out amongst the competition. Custom packaging is an easy way to make your products stand out from the crowd and improve customer experience.",
              },
            ],
          },
        ],
      },
    ];

    // Create blog posts
    for (const blogData of blogsData) {
      const blogPost = {
        _type: "blog",
        ...blogData,
        author: {
          _type: "reference",
          _ref: author._id,
        },
      };

      const createdBlog = await client.create(blogPost);
      console.log("Blog created:", createdBlog.title);
    }

    console.log("Migration completed successfully!");
  } catch (error) {
    console.error("Error during migration:", error);
    throw error;
  }
}

// Run the migration
migrateBlogData().catch(console.error);
