import React from "react";
import { Skeleton } from "./ui/skeleton";

const ProductSkeleton = ({ length }: { length: number }) => {
  const skeletonItems = Array.from({ length }, (_, i) => i);

  return (
    <div className="container mx-auto py-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {skeletonItems.map((item) => (
          <div
            key={item}
            className="bg-white rounded-lg shadow-sm p-4 flex flex-col items-center"
          >
            {/* Product image skeleton */}
            <Skeleton className="w-full aspect-square rounded-md mb-4" />

            {/* Product name skeleton */}
            <Skeleton className="h-5 w-24 mb-2" />

            {/* Price skeleton */}
            <Skeleton className="h-4 w-16 mb-4" />

            {/* Add to cart button skeleton */}
            <Skeleton className="h-10 w-full rounded-md" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductSkeleton;
