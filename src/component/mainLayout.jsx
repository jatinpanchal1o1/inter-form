import React from "react";
import Footer from "./footer";
import Navbar from "./navbar";

const MainLayout = (props) => {
  return (
    <div className="relative bg-white">
      <div class="max-w-7xl mx-auto px-4 sm:px-6">
        <Navbar />
        {props.children}
        <Footer />
      </div>
    </div>
  );
};

export default MainLayout;
