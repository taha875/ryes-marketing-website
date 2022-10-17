import { useRouter } from "next/router";
import React, { useState, useEffect } from "react";
import ContactUs from "../contactUs";
import { ParallaxProvider } from "react-scroll-parallax";
import { Parallax } from 'react-scroll-parallax';

function index() {
  const [bar, setBar] = useState(0);
  const [mode, setMode] = useState(null);
  const router = useRouter();
  // mode change
  useEffect(() => {
    document.onscroll = function () {
      let darkMode = document.getElementById("darkMode");

      if (router.pathname === "/") {
        isElementInViewport(darkMode);
      }
    };
  });
  function isElementInViewport(el) {
    mode ? document.querySelector("html").classList.add("dark") : document.querySelector("html").classList.remove("dark");
    if (el === null) return null;
    else {
      let rect = el.getBoundingClientRect();
      if (rect.top <= 300) {
        setMode(true);
      } else if (rect.top >= 300) {
        setMode(false);
      }
    }
  }
  // scroll to top
  const executeScroll = () => {
    window.scrollTo({
      top: 0,
      duration: 800,
      delay: 0,
      behavior: "smooth",
    });
  };
  return (
    <>
      <ParallaxProvider>
        <ContactUs fontColor={"text-gray-900"} fontSize="text-base" marginTop="mt-[53px]" paddingRight="pr-12" marginBottom="mb-12" justify="justify-end"/>
        <section className="px-12 ">
          <h1 className="text-7xl font-bold leading-[88px] text-gray-900 w-[1250px]">Move beyond constraints. We collaborate with partners to get shit done</h1>
        </section>
        <section className="w-full h-[600px] mt-[75px]">
          <img src="https://tuk-cdn.s3.amazonaws.com/can-uploader/imageOne.png" alt="Something text here" className="w-full h-full" />
        </section>
        <section className="mt-24 px-12 ">
          <h2 className="text-7xl font-bold leading-[88px] text-gray-900">Featured Work</h2>
          <div className="flex items-start justify-between mt-16">
            <div className="w-[800px] cursor-pointer">
              <div className="overflow-hidden w-full h-[600px]" onMouseEnter={() => setBar(1)} onMouseLeave={() => setBar(0)}>
                <img src="https://images.unsplash.com/photo-1496181133206-80ce9b88a853?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80" className="hover:scale-110 ease-in-out duration-500 h-full" />
              </div>
              <p className="text-2xl SansmediumItalic mt-10 leading-6 text-gray-700">Toyota North America</p>
              <h3 className="text-4xl font-bold leading-10 text-gray-900 mt-10">
                UX optimastion increasing <br /> conversion by 30%
              </h3>
              <p className="text-xl font-medium leading-5 jarkataDisplay mt-12 text-gray-900">View Case Study</p>
              <div className="w-40 h-0.5 bg-gray-200 mt-2.5">
                <div className={`hover:w-full h-full bg-gray-900 duration-700 ease-in-out ${bar === 1 ? `w-full ` : `w-0`}`}></div>
              </div>
            </div>
            <div className="w-[657px] cursor-pointer">
              <div className="overflow-hidden w-full h-[800px]" onMouseEnter={() => setBar(2)} onMouseLeave={() => setBar(0)}>
                <img src="https://images.unsplash.com/photo-1541807084-5c52b6b3adef?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80" className="hover:scale-110 ease-in-out duration-500" />
              </div>
              {/* img here */}
              <p className="text-2xl SansmediumItalic mt-10 leading-6 text-gray-700">SCTE-ISBE</p>
              <h3 className="text-4xl font-bold leading-10 text-gray-900 mt-10">
                Systems Architecture using <br />
                micro-services technology
              </h3>
              <p className="text-xl font-medium leading-5 jarkataDisplay mt-12 text-gray-900">View Case Study</p>
              <div className="w-40 h-0.5 bg-gray-200 mt-2.5">
                <div className={`hover:w-full h-full bg-gray-900 duration-700 ease-in-out ${bar === 2 ? `w-full ` : `w-0`}`}></div>
              </div>
            </div>
          </div>
        </section>
        <section className="cursor-pointer mt-20 px-12 " id="darkMode">
          <div className="overflow-hidden w-full h-[600px]" onMouseEnter={() => setBar(3)} onMouseLeave={() => setBar(0)}>
            <img src="https://images.unsplash.com/photo-1602080858428-57174f9431cf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1551&q=80" className="hover:scale-110 ease-in-out duration-500 h-full w-full" />
          </div>
          <p className="text-2xl SansmediumItalic mt-10 leading-6 text-gray-400">SCTE-ISBE</p>
          <div className=" flex items-center justify-between">
            <h3 className="text-4xl font-bold leading-10 text-white mt-10">End-to-end engineering of Europe’s biggest learning platform</h3>
            <div>
              <p className="text-xl font-medium leading-5 jarkataDisplay mt-12 text-white">View Case Study</p>
              <div className="w-40 h-0.5 bg-gray-800 mt-2.5">
                <div className={`hover:w-full h-full bg-white duration-300 ease-in-out ${bar === 3 ? `w-full ` : `w-0`}`}></div>
              </div>
            </div>
          </div>
        </section>
        <section>
          <p className="cursor-pointer text-xl Sansmedium leading-5 text-center mt-[109px] text-white">VIEW ALL WORK</p>
        </section>
        <section className="mt-[49px] relative h-[1080px] overflow-hidden border-t border-b border-gray-800 over">
          <Parallax className="absolute z-0 w-full duration-700 ease-in-out delay-700 bottom-0" y={[-20, 20]} tagOuter="figure">
            <img src="https://tuk-cdn.s3.amazonaws.com/can-uploader/line-expanded.png" className=" w-full duration-700 ease-in-out delay-700 object-cover object-center h-[1080px] z-0" />
          </Parallax>

          <div className="flex h-full justify-between flex-col relative z-20">
            <h2 className="text-7xl leading-[97.2px] px-12 pt-32  text-white">
              Top 0.1% of Talent.
              <br />
              White Glove, Start to Finish.
              <br />
              Results, No Matter What.
            </h2>
            <div className="grid sm:grid-cols-1 px-12 pb-32 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-[36px] ">
              <div>
                <h3 className="text-xl font-medium leading-5 text-white">1. Design</h3>
                <p className=" text-base Sansmedium leading-5 text-gray-400 mt-4">At the core of our design philosophy is problem-solving. By understanding our client’s objectives and values, we ensure that every aspect of the design process is seamless. We focus on providing immersive experiences and lasting impressions for the users.</p>
              </div>
              <div>
                <h3 className="text-xl font-medium leading-5 text-white">2. Design</h3>
                <p className=" text-base Sansmedium leading-5 text-gray-400 mt-4">At the core of our design philosophy is problem-solving. By understanding our client’s objectives and values, we ensure that every aspect of the design process is seamless. We focus on providing immersive experiences and lasting impressions for the users.</p>
              </div>
              <div>
                <h3 className="text-xl font-medium leading-5 text-white">3. Design</h3>
                <p className=" text-base Sansmedium leading-5 text-gray-400 mt-4">At the core of our design philosophy is problem-solving. By understanding our client’s objectives and values, we ensure that every aspect of the design process is seamless. We focus on providing immersive experiences and lasting impressions for the users.</p>
              </div>
              <div>
                <h3 className="text-xl font-medium leading-5 text-white">4. Design</h3>
                <p className=" text-base Sansmedium leading-5 text-gray-400 mt-4">At the core of our design philosophy is problem-solving. By understanding our client’s objectives and values, we ensure that every aspect of the design process is seamless. We focus on providing immersive experiences and lasting impressions for the users.</p>
              </div>
            </div>
          </div>
        </section>
        <section className="grid sm:grid-cols-1 px-12  md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-[36px] border-b border-gray-800">
          <div className="flex flex-col items-center justify-center border-r border-gray-800">
            <img src="https://tuk-cdn.s3.amazonaws.com/can-uploader/GoogleLogo.png" className="w-[141px] h-[40px] mt-[128px]" />
            <img src="https://tuk-cdn.s3.amazonaws.com/can-uploader/dribble.png" className="w-[164px] h-[40px] my-[128px]" />
          </div>
          <div className="flex flex-col items-center justify-center border-r border-gray-800">
            <img src="https://tuk-cdn.s3.amazonaws.com/can-uploader/LinkedInLogo.png" className="w-[164px] h-[40px] mt-[128px]" />
            <img src="https://tuk-cdn.s3.amazonaws.com/can-uploader/AmazonLogo.png" className="w-[132px] h-[40px] my-[128px]" />
          </div>
          <div className="flex flex-col items-center justify-center border-r border-gray-800">
            <img src="https://tuk-cdn.s3.amazonaws.com/can-uploader/MicrosoftLogo.png" className="w-[187px] h-[40px] mt-[128px]" />
            <img src="https://tuk-cdn.s3.amazonaws.com/can-uploader/HubspotLogo.png" className="w-[140px] h-[40px] my-[128px]" />
          </div>
          <div className="flex flex-col items-center justify-center ">
            <img src="https://tuk-cdn.s3.amazonaws.com/can-uploader/WalmartLogo.png" className="w-[172px] h-[40px] mt-[128px]" />
            <img src="https://tuk-cdn.s3.amazonaws.com/can-uploader/AirbnbLogo.png" className="w-[128px] h-[40px] my-[128px]" />
          </div>
        </section>
        <section className="py-7 flex items-center justify-center cursor-pointer" onClick={executeScroll}>
          <svg width={36} height={36} viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M18 7.5V28.5" stroke="#9CA3AF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M24 13.5L18 7.5" stroke="#9CA3AF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M12 13.5L18 7.5" stroke="#9CA3AF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </section>
      </ParallaxProvider>
    </>
  );
}

export default index;
