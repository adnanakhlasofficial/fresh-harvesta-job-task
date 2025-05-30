"use client";

import Banner from "@/components/Banner";
import ProductsSection from "@/components/ProductsSection";
import AboutSection from "@/components/AboutSection";
import OfferSection from "@/components/OfferSection";
import Testimonials from "@/components/Testimonials";
import BlogSection from "@/components/BlogSection";

export default function Home() {
  return (
    <>
      <header className="bg-[url(/images/bg.jpg)] min-h-screen bg-center bg-cover">
        <Banner />
      </header>
      <main>
        <div className="max-w-[1200px] mx-auto">
          <ProductsSection />
          <AboutSection />
        </div>
        <OfferSection />
        <div className="max-w-[1200px] mx-auto">
          <Testimonials />
          <BlogSection />
        </div>
      </main>
    </>
  );
}
