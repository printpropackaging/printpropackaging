import React from "react";

const BlogsLoading = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header Skeleton */}
      <div className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="h-8 bg-gray-200 rounded w-1/4 animate-pulse"></div>
        </div>
      </div>

      {/* Main Content Skeleton */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-8">
          {[...Array(6)].map((_, i) => (
            <div
              key={i}
              className="bg-white rounded-lg shadow-md overflow-hidden"
            >
              {/* Image Skeleton */}
              <div className="w-full h-48 bg-gray-200 animate-pulse"></div>

              {/* Content Skeleton */}
              <div className="p-6">
                <div className="h-6 bg-gray-200 rounded w-3/4 mb-3 animate-pulse"></div>
                <div className="space-y-2 mb-4">
                  <div className="h-4 bg-gray-200 rounded w-full animate-pulse"></div>
                  <div className="h-4 bg-gray-200 rounded w-5/6 animate-pulse"></div>
                  <div className="h-4 bg-gray-200 rounded w-4/6 animate-pulse"></div>
                </div>

                {/* Button Skeleton */}
                <div className="h-10 bg-gray-200 rounded w-24 animate-pulse"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BlogsLoading;
