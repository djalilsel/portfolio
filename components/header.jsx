"use client";
import { useEffect, useState } from "react";
import icons from "../assets";
import Link from "next/link";
// import pdf from "@/assets/SELAMNIA-Abdeldjalil.pdf";
const Header = () => {
  // console.log(pdf);
  const [mode, setMode] = useState(
    localStorage.getItem("color-theme") || "light"
  );

  const toggleDark = () => {
    if (
      localStorage.getItem("color-theme") == "light" ||
      (!("color-theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("color-theme", "dark");
      setMode("dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("color-theme", "light");
      setMode("light");
    }
  };
  useEffect(() => {
    if (
      localStorage.getItem("color-theme") == "light" ||
      (!("color-theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("color-theme", "light");
      setMode("light");
    } else {
      document.documentElement.classList.add("dark");
      localStorage.setItem("color-theme", "dark");
      setMode("dark");
    }
  }, []);
  return (
    <div className="w-full xl:px-[250px] xl:py-[16px] xl:h-[70px] flex justify-between items-center border-b border-gray-100 dark:border-gray-100/20 backdrop-filter backdrop-blur-md  dark:text-gray-50 sticky top-0 left-0">
      <Link
        href={"/"}
        className="text-gray-900 font-bold text-4xl dark:text-[#D1D5DB] cursor-pointer"
      >
        &lt;SS /&gt;
      </Link>
      <div className="flex gap-10 items-center">
        <ul className="flex items-center gap-10 text-gray-600 text-lg font-medium dark:text-[#D1D5DB]">
          <li className="cursor-pointer hover:text-gray-900 dark:hover:text-gray-50">
            About
          </li>
          <li className="cursor-pointer hover:text-gray-900 dark:hover:text-gray-50">
            Work
          </li>
          <li className="cursor-pointer hover:text-gray-900 dark:hover:text-gray-50">
            Testimonials
          </li>
          <li className="cursor-pointer hover:text-gray-900 dark:hover:text-gray-50">
            Contact
          </li>
        </ul>
        <div className="border-x border-gray-200 dark:border-gray-600 h-[25px]"></div>
        <div className="flex items-center gap-10">
          {mode == "light" && (
            <img
              src={icons.darkmode32L.src}
              className="w-9 h-9 text-white hover:bg-gray-100 rounded-md p-1 select-none"
              onClick={toggleDark}
            />
          )}
          {mode == "dark" && (
            <img
              src={icons.lightmode32D.src}
              className="w-9 h-9 hover:bg-gray-600 rounded-md p-1 select-none"
              onClick={toggleDark}
            />
          )}
          <div
            onClick={() => window?.open("/abdeldjalil.pdf", "_blank")}
            className="bg-gray-900 px-[16px] py-[6px] text-gray-50 dark:text-gray-900 dark:bg-gray-50 hover:bg-gray-700 active:bg-gray-800 dark:hover:bg-gray-200 dark:active:bg-gray-100 rounded-xl cursor-pointer"
          >
            Download CV
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
