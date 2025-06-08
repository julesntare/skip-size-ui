import React from "react";

const SkipCardSkeleton: React.FC = () => (
  <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-gray-900 via-gray-800 to-black p-6">
    <div className="animate-pulse">
      <div className="flex justify-between items-start mb-4">
        <div className="h-6 w-20 bg-gray-700 rounded-full"></div>
        <div className="h-6 w-6 bg-gray-700 rounded-full"></div>
      </div>
      <div className="h-48 bg-gray-800 rounded-2xl mb-6"></div>
      <div className="h-8 bg-gray-700 rounded w-3/4 mb-2"></div>
      <div className="h-4 bg-gray-700 rounded w-full mb-4"></div>
      <div className="grid grid-cols-2 gap-3 mb-6">
        <div className="h-8 bg-gray-700 rounded"></div>
        <div className="h-8 bg-gray-700 rounded"></div>
      </div>
      <div className="flex justify-between items-end">
        <div className="h-12 w-24 bg-gray-700 rounded"></div>
        <div className="h-12 w-28 bg-gray-700 rounded-full"></div>
      </div>
    </div>
  </div>
);

export default SkipCardSkeleton;
