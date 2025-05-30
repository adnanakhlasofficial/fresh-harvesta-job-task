"use client";

import Banner from "@/components/Banner";
import Navbar from "@/components/Navbar";
import ProductsSection from "@/components/ProductsSection";
import { Provider } from "react-redux";
import { store } from "../store";
import AboutSection from "@/components/AboutSection";
import OfferSection from "@/components/OfferSection";
import Testimonials from "@/components/Testimonials";

export default function Home() {
  return (
    <Provider store={store}>
      <header className="bg-[url(/images/bg.jpg)] min-h-screen bg-center bg-cover">
        <Navbar />
        <Banner />
      </header>
      <main>
        <ProductsSection />
        <AboutSection />
        <OfferSection />
        <Testimonials />
      </main>
    </Provider>
  );
}
