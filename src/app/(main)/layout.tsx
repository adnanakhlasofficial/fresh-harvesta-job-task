"use client";

import { ReactNode } from "react";
import { store } from "../store";
import { Provider } from "react-redux";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const CommonLayout = ({ children }: { children: ReactNode }) => {
  return (
    <Provider store={store}>
      <Navbar />
      <div>{children}</div>
      <footer className="bg-[#F4F6F6]">
        <Footer />
      </footer>
    </Provider>
  );
};

export default CommonLayout;
