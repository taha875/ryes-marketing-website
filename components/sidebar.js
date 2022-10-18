import React from "react";

function header() {
  return (
    <div className="w-28 bg-white z-50 relative">
      <nav className="w-28 px-[25px] py-10 fixed left-0 h-full border-r dark:bg-[#0B0D13] bg-white dark:border-gray-800 border-gray-200">
        <div className="text-[#18181B] dark:text-white">
          
          <img src="/logo.png" />
        </div>
        <div className="h-full flex items-center justify-center cursor-pointer text-[#111827] dark:text-white">
          <svg
            width={32}
            height={32}
            viewBox="0 0 32 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M21.3333 5.33333L21.3333 26.6667"
              stroke="currentColor"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M10.6667 5.33333L10.6667 26.6667"
              stroke="currentColor"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </nav>
    </div>
  );
}

export default header;
