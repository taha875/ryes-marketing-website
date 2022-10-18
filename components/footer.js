import React, { useState } from "react";
import ContactUS from "./contactUs";

function footer() {
  return (
    <footer className="relative z-20">
      <div className="border-t border-b border-gray-800 relative z-20 flex  border-r">
        <div className="w-28 h-full"></div>
        <div className="w-full  border-r border-gray-800  mr-24 px-12 py-16">
          <div className="flex items-center justify-between w-full">
            <h2 className="text-4xl leading-10 text-white font-medium flex flex-col">
              Are you ready?{" "}
              <span className="text-gray-600">because we are</span>
            </h2>

            <div className="">
              <p className="text-xl font-medium leading-5 text-white">
                San Diego
              </p>
              <p className="w-80 text-lg Sansmedium leading-7 text-gray-400 mt-5">
                4275 Executive Square, Suite 200
                <br />
                LA Jolla, CA 92037
              </p>
            </div>
          </div>
          <ContactUS
            fontSize="text-2xl"
            fontColor="text-white"
            marginTop="mt-[50px]"
          />
        </div>
      </div>
      <div className="border-t border-b border-gray-800 relative z-0 flex">
        <div className="w-28 h-full"></div>
        <div className="border-r relative mr-24 border-gray-800 w-full p-10 flex items-center justify-center">
          {/* <img src="https://tuk-cdn.s3.amazonaws.com/can-uploader/AlphaSquad.svg" className="absolute left-0 ml-10" /> */}
          <h3 className="absolute left-0 ml-10 text-gray-500 tracking-[0.2rem] font-bold">
            RYES
          </h3>
          <div>
            <ul className="flex items-center">
              <li className="text-lg Sansmedium leading-7 text-gray-400 ">
                Terms of Service
              </li>
              <li className="ml-10 text-lg Sansmedium leading-7 text-gray-400 ">
                Privacy Policy
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default footer;
