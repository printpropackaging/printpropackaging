# Blog Migration Guide - Static to Sanity CMS

This guide will help you migrate your blog data from static files to Sanity CMS while keeping the author as "printpropackaging".

## Steps to Complete the Migration

### 1. Start Sanity Studio

```bash
npm run dev
```

Then navigate to `http://localhost:3000/studio` to access Sanity Studio.

### 2. Create Author Record

1. In Sanity Studio, go to the "Author" section
2. Click "Create" to add a new author
3. Fill in the following details:
   - **Name**: `printpropackaging`
   - **Bio**: `PrintPro Packaging - Your trusted partner for custom packaging solutions`
   - **Image**: Upload your company logo (optional)

### 3. Upload Blog Images

1. Go to the "Media" section in Sanity Studio
2. Upload the following images:
   - `5-best-companies-for-custom-boxes-and-packaging-1.webp`
   - `custom-boxes-with-logo.webp`
   - `best-custom-packaging-for-your-small-business.webp`

### 4. Create Blog Posts

For each blog post, go to the "Blog" section and create a new blog with the following data:

#### Blog Post 1: "5 best companies for Custom Boxes and Packaging"

- **Title**: `5 best companies for Custom Boxes and Packaging`
- **Slug**: `best_companies_for_custom_boxes_and_packaging`
- **Description**: `There are many companies that offer custom boxes and packaging solutions, but some stand out for their exceptional products and services.`
- **Blog Image**: Select the uploaded image for this blog
- **Author**: Select "printpropackaging"
- **Published At**: `2024-07-28`
- **Content**: Copy the content from the original BlogCardData.jsx file

#### Blog Post 2: "Where to Get Custom Boxes with My Company Logo?"

- **Title**: `Where to Get Custom Boxes with My Company Logo?`
- **Slug**: `custom_boxes_with_logo`
- **Description**: `As a business owner, it's important to ensure that every aspect of your branding is top-notch. This includes not only your product or service offerings`
- **Blog Image**: Select the uploaded image for this blog
- **Author**: Select "printpropackaging"
- **Published At**: `2024-07-28`
- **Content**: Copy the content from the original BlogCardData.jsx file

#### Blog Post 3: "Best Custom Packaging for Small Business 2024"

- **Title**: `Best Custom Packaging for Small Business 2024`
- **Slug**: `best_custom_packaging_for_small_business`
- **Description**: `As small business owners, we know that one of the most important aspects of our business is standing out amongst the competition.`
- **Blog Image**: Select the uploaded image for this blog
- **Author**: Select "printpropackaging"
- **Published At**: `2024-07-28`
- **Content**: Copy the content from the original BlogCardData.jsx file

### 5. Test the Migration

1. Go to `http://localhost:3000/blogs` to see the blog listing
2. Click on individual blog posts to verify they load correctly
3. Check that the author shows as "printpropackaging"

### 6. Clean Up (Optional)

Once you've verified everything works, you can remove the old static data files:

- `config/BlogsData.jsx`
- `config/BlogCardData.jsx`

## Important Notes

- The blog content in Sanity uses PortableText format, which is more flexible than the previous JSX format
- All blog posts will now be managed through Sanity Studio
- The author is set to "printpropackaging" as requested
- The slug structure remains the same for SEO compatibility

## Troubleshooting

If you encounter any issues:

1. Make sure Sanity Studio is running
2. Check that all required fields are filled
3. Verify the author reference is correctly set
4. Ensure images are properly uploaded and referenced
5. **Images not showing?** Make sure you've uploaded the images to Sanity Studio first, then reference them in your blog posts

## Image Fix Applied

The image display issue has been fixed by:

- Adding proper Sanity image URL building using `urlFor()` function
- Updating the Sanity queries to include image asset data
- Adding fallback checks for missing images

Your images should now display correctly once you upload them to Sanity Studio and create your blog posts.
