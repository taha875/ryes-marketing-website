import React from "react";

function header() {
  return (
    <div className="w-28 bg-white z-50 relative">
      <nav className="px-[25px] py-10 fixed left-0 h-full border-r dark:bg-[#0B0D13] bg-white dark:border-gray-800 border-gray-200">
        <div className="text-[#18181B] dark:text-white">
          <svg width={51} height={44} viewBox="0 0 51 44" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" clipRule="evenodd" d="M25.5 13.0136L11.1205 37.6567H18.8159L15.1628 44H0L25.2475 0.435644L25.5 0L25.7525 0.435644L51 44H35.8372L32.1841 37.6567H39.8795L25.5 13.0136Z" fill="currentColor" />
          </svg>
        </div>
        <div className="h-full flex items-center justify-center cursor-pointer text-[#111827] dark:text-white">
          <svg width={32} height={32} viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M21.3333 5.33333L21.3333 26.6667" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
            <path d="M10.6667 5.33333L10.6667 26.6667" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
      </nav>
    </div>
  );
}

export default header;
