import React from "react";
import Sidebar from "./sidebar";
import Footer from "./footer";

function layout({ children }) {
  return (
    <>
      <div className="flex ">
        <div className="w-28">
          <Sidebar />
        </div>

        <main
          className="h-full w-full
         dark:border-gray-800 border-gray-200 mr-24 border-r"
        >
          {children}
        </main>
      </div>
      <Footer />
    </>
  );
}

export default layout;
