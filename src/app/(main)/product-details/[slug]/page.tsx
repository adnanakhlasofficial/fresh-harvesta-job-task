"use client";

import QuantitySelector from "@/components/quantity-selector";
import SectionTitle from "@/components/SectionTitle";
import {
  useGetProductDetailsQuery,
  useGetProductsQuery,
} from "@/services/harvestAPI";
import { Star } from "lucide-react";
import { use, useState } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Image from "next/image";
import { cn } from "@/lib/utils";
import ProductCard from "@/components/ProductCard";
import { TProduct } from "@/components/ProductsSection";

const ProductDetails = ({ params }: { params: Promise<{ slug: string }> }) => {
  const [activeTab, setActiveTab] = useState("description");
  const { slug } = use(params);
  const {
    data: productDetails,
    isLoading,
    isFetching,
  } = useGetProductDetailsQuery(slug);
  const { data: products } = useGetProductsQuery({});

  console.log(productDetails);

  if (isLoading || isFetching) {
    return <p>Loading...</p>;
  }

  return (
    <div className="mt-28 max-w-[1200px] mx-auto px-4">
      <div className="flex flex-col md:flex-row items-center gap-10 md:gap-12">
        <div className="w-full md:w-1/2 ">
          <Carousel className="w-full">
            <CarouselContent>
              {productDetails?.data?.images.map(
                (image: string, index: number) => (
                  <CarouselItem key={index}>
                    <Image
                      src={image}
                      alt="product"
                      width={500}
                      height={500}
                      className="w-full h-full object-cover rounded-xl border border-black/10"
                    />
                  </CarouselItem>
                )
              )}
            </CarouselContent>
          </Carousel>
        </div>
        <div className="w-full md:w-1/2 flex flex-col justify-between gap-8 lg:gap-20">
          <div>
            <SectionTitle
              tag="Fruits"
              title={productDetails?.data?.productName}
              description=""
            />
            <div className="flex items-center gap-2 mt-2 lg:mt-4">
              <span className="flex items-center gap-1">
                <Star size={14} className="fill-[#FFB848] text-[#FFB848]" />
                <Star size={14} className="fill-[#FFB848] text-[#FFB848]" />
                <Star size={14} className="fill-[#FFB848] text-[#FFB848]" />
                <Star size={14} className="fill-[#FFB848] text-[#FFB848]" />
                <Star size={14} className="fill-[#FFB848] text-[#FFB848]" />
              </span>
              <p>
                <span className="font-medium text-lg text-[#212337]">5.0</span>
                <span className="text-sm font-medium text-[#212337]">
                  (1 review)
                </span>
              </p>
            </div>
            <p className="font-semibold text-2xl md:text-[32px] text-[#FF6A1A]">
              ${productDetails?.data?.price}
            </p>
            <p className="text-sm md:text-lg font-normal mt-2 lg:mt-4">
              {productDetails?.data?.description}
            </p>
          </div>
          <QuantitySelector />
        </div>
      </div>

      <div className="mt-16">
        {/* Tab Navigation */}
        <div className="flex gap-2 mb-6">
          <button
            onClick={() => setActiveTab("description")}
            className={cn(
              "px-4 py-2 rounded-md font-medium transition-colors",
              activeTab === "description"
                ? "bg-[#749B3F] text-white"
                : "bg-gray-200 text-gray-700 hover:bg-gray-300"
            )}
          >
            Description
          </button>
          <button
            onClick={() => setActiveTab("reviews")}
            className={cn(
              "px-4 py-2 rounded-md font-medium transition-colors",
              activeTab === "reviews"
                ? "bg-[#749B3F] text-white"
                : "bg-gray-200 text-gray-700 hover:bg-gray-300"
            )}
          >
            Reviews (1)
          </button>
        </div>

        {/* Tab Content */}
        <div className="bg-gray-50 p-6 rounded-lg">
          {activeTab === "description" && (
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p>
                Our coconuts are sustainably grown, ensuring the best quality
                and taste. Each coconut is handpicked and carefully prepared,
                offering you the freshest product possible. Rich in healthy
                fats, electrolytes, and essential nutrients, coconuts provide
                both hydration and nourishment. Whether you&#39;re using the
                water, flesh, or milk, our coconuts bring versatility to your
                kitchen while supporting healthy living.
              </p>
              <p>
                Perfect for smoothies, desserts, curries, and more — let the
                natural sweetness of the coconut elevate your recipes. Enjoy the
                tropical goodness in its purest form, directly from nature.
              </p>
            </div>
          )}

          {activeTab === "reviews" && (
            <div className="space-y-4 text-gray-700">
              <div className="border-b pb-4">
                <div className="flex items-center gap-2 mb-2">
                  <div className="flex text-yellow-400">{"★".repeat(5)}</div>
                  <span className="font-medium">Sarah M.</span>
                  <span className="text-sm text-gray-500">
                    Verified Purchase
                  </span>
                </div>
                <p>
                  &quot;Absolutely love these coconuts! The quality is
                  outstanding and they taste incredibly fresh. Perfect for my
                  morning smoothies and the coconut water is so refreshing. Will
                  definitely order again!&quot;
                </p>
              </div>
            </div>
          )}
        </div>
      </div>

      <div className="my-16 md:my-[120px]">
        <SectionTitle
          tag="Our Products"
          title="Related Products"
          description="We pride ourselves on offering a wide variety of fresh and flavorful fruits, vegetables, and salad ingredients."
          className="text-center"
          titleClassName="mb-4"
        />
        <section className="container mx-auto px-2 place-items-center grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mt-6">
          {products?.data?.slice(0, 4).map((product: TProduct) => (
            <ProductCard
              key={product.id}
              id={product.id}
              name={product.productName}
              price={product.price}
              image={product.images[0]}
            />
          ))}
        </section>
      </div>
    </div>
  );
};

export default ProductDetails;
