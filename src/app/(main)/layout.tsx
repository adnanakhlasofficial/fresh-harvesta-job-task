"use client";

import { ReactNode } from "react";
import { store } from "../store";
import { Provider } from "react-redux";
import Navbar from "@/components/Navbar";

const CommonLayout = ({ children }: { children: ReactNode }) => {
  return (
    <Provider store={store}>
      <Navbar />
      <div>{children}</div>
    </Provider>
  );
};

export default CommonLayout;
