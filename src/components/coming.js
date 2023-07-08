import React from "react";

import Navbar from "./navbar";

export default function Coming() {
  return (
    <div class="w-full h-screen">
      <div>
        <Navbar />
      </div>
      <div class="w-full h-screen flex flex-col items-center justify-between bg-black bg-opacity-70 py-8">
        <div class="flex-1 flex flex-col items-center justify-center">
          <div class="bg-white bg-opacity-10 px-4 py-2 rounded-xl flex items-center justify-center text-cyan-100 space-x-2 lg:space-x-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-6 lg:h-8 xl:h-10 w-6 lg:w-8 xl:w-10"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4"
              ></path>
            </svg>
          </div>
          <h1 class="text-6xl lg:text-7xl xl:text-8xl text-gray-200 tracking-wider font-bold font-serif mt-12 text-center">
            Coming Soon
          </h1>
        </div>
      </div>
    </div>
  );
}
