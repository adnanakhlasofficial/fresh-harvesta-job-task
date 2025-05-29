import React from "react";
import SectionTitle from "@/components/SectionTitle";
import ProductCategory from "./ProductCategory";
import ProductCard from "./ProductCard";
import { useGetProductsQuery } from "@/services/harvestAPI";

type TProduct = {
  id: string;
  productName: string;
  description: string;
  price: number;
  stock: number;
  images: [string];
  categoryId: string;
  isDeleted: false;
  createdAt: string;
  updatedAt: string;
};

const ProductsSection = () => {
  const { data, isLoading, isFetching } = useGetProductsQuery({});

  if (isLoading || isFetching) {
    return <p>Loading...</p>;
  }

  return (
    <section className="my-24">
      <SectionTitle
        tag="Our Products"
        title="Our Fresh Products"
        description="We pride ourselves on offering a wide variety of fresh and flavorful fruits, vegetables, and salad ingredients."
        className="text-center"
        titleClassName="mb-4"
      />
      <ProductCategory />
      <section className="container mx-auto px-2 place-items-center grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mt-6">
        {data?.data?.slice(0, 8).map((product: TProduct) => (
          <ProductCard
            key={product.id}
            name={product.productName}
            price={product.price}
            image={product.images[0]}
          />
        ))}
      </section>
      <div className="flex justify-center mt-8">
        <button className="border-[#FF6A1A] font-medium hover:bg-[#FF6A1A] hover:text-white transition-colors duration-300 cursor-pointer border text-[#FF6A1A] px-8 py-4 rounded-lg">
          See All Products
        </button>
      </div>
    </section>
  );
};

export default ProductsSection;
