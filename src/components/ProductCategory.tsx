"use client";

import { useGetProductCategoryQuery } from "@/services/harvestAPI";
import CategoryButton from "./CategoryButton";

type TCategory = {
  id: string;
  categoryName: string;
  createdAt: string;
  updatedAt: string;
};

const ProductCategory = () => {
  const { data, isFetching, isLoading } = useGetProductCategoryQuery({});

  if (isLoading || isFetching) {
    return <p>Loading</p>;
  }

  return (
    <section className="container mx-auto">
      <div className="flex justify-center gap-8 mt-6">
        {data?.data?.map((category: TCategory) => {
          return (
            <CategoryButton key={category.id} title={category.categoryName} />
          );
        })}
      </div>
    </section>
  );
};

export default ProductCategory;
