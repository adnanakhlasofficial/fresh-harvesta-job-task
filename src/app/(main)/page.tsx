"use client";

import Banner from "@/components/Banner";
import Navbar from "@/components/Navbar";
import ProductsSection from "@/components/ProductsSection";
import { Provider } from "react-redux";
import { store } from "../store";

export default function Home() {
  return (
    <Provider store={store}>
      <header className="bg-[url(/images/bg.jpg)] min-h-screen bg-center bg-cover">
        <Navbar />
        <Banner />
      </header>
      <main>
        <ProductsSection />
      </main>
    </Provider>
  );
}
