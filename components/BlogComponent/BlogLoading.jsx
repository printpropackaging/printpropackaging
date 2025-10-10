import React from "react";

const BlogLoading = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header Skeleton */}
      <div className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="h-8 bg-gray-200 rounded w-1/4 animate-pulse"></div>
        </div>
      </div>

      {/* Main Content Skeleton */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Image Skeleton */}
        <div className="w-full h-64 bg-gray-200 rounded-lg mb-6 animate-pulse"></div>

        {/* Title Skeleton */}
        <div className="h-8 bg-gray-200 rounded w-3/4 mb-4 animate-pulse"></div>

        {/* Meta Info Skeleton */}
        <div className="flex items-center space-x-4 mb-6">
          <div className="h-4 bg-gray-200 rounded w-32 animate-pulse"></div>
          <div className="h-4 bg-gray-200 rounded w-24 animate-pulse"></div>
          <div className="h-4 bg-gray-200 rounded w-20 animate-pulse"></div>
        </div>

        {/* Content Skeleton */}
        <div className="space-y-4">
          {[...Array(8)].map((_, i) => (
            <div key={i} className="space-y-2">
              <div className="h-4 bg-gray-200 rounded w-full animate-pulse"></div>
              <div className="h-4 bg-gray-200 rounded w-5/6 animate-pulse"></div>
              <div className="h-4 bg-gray-200 rounded w-4/6 animate-pulse"></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BlogLoading;
