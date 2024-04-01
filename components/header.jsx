"use client";
import { useEffect, useState } from "react";
import icons from "../assets";
import Link from "next/link";
import { Backdrop, Drawer } from "@mui/material";

const Header = () => {
  const [mode, setMode] = useState(
    localStorage.getItem("color-theme") || "light"
  );
  const [menu, setMenu] = useState(false);

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

  const toggleMenu = () => {
    const menu = document.querySelector(".menu");
    menu.classList.toggle("hidden");
    document.body.classList.toggle("overflow-hidden");
    setMenu(!menu);
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
    <div className="w-full p-[16px] xl:px-[250px] xl:py-[16px] h-[70px] flex justify-between items-center border-b border-gray-100 dark:border-gray-100/20 backdrop-filter backdrop-blur-md dark:text-gray-50 sticky top-0 left-0 z-30">
      <Link
        href={"/"}
        className="text-gray-900 font-bold text-2xl xl:text-4xl dark:text-[#D1D5DB] cursor-pointer"
      >
        &lt;SS /&gt;
      </Link>
      <div className="hidden xl:flex gap-10 items-center">
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
          <img
            src={
              mode == "light" ? icons.darkmode32L.src : icons.darkmode32D.src
            }
            className="w-9 h-9 text-white hover:bg-gray-100 rounded-md p-1 select-none"
            onClick={toggleDark}
          />
          <div
            onClick={() => window?.open("/abdeldjalil.pdf", "_blank")}
            className="bg-gray-900 px-[16px] py-[6px] text-gray-50 dark:text-gray-900 dark:bg-gray-50 hover:bg-gray-700 active:bg-gray-800 dark:hover:bg-gray-200 dark:active:bg-gray-100 rounded-xl cursor-pointer"
          >
            Download CV
          </div>
        </div>
      </div>
      <img
        src={mode == "dark" ? icons.menu24D.src : icons.menu24L.src}
        className="w-6 h-6 rounded-md select-none block xl:hidden btn btn-primary drawer-button"
        onClick={toggleMenu}
      />
      <div className="menu hidden absolute top-0 right-0 w-[70vw] bg-gray-50 z-40 h-screen dark:bg-[#030712]">
        <div className="h-[69px] flex justify-between items-center p-[16px]">
          <div className="text-gray-900 font-bold text-2xl dark:text-[#D1D5DB] cursor-pointer">
            &lt;SS /&gt;
          </div>
          <img
            src={mode == "dark" ? icons.close24D.src : icons.close24L.src}
            className="w-6 h-6 rounded-md select-none block xl:hidden"
            onClick={toggleMenu}
          />
        </div>
        <ul className="flex flex-col gap-5 text-gray-600 text-base font-medium dark:text-[#D1D5DB] p-[16px] border-y border-gray-100 dark:border-gray-100/20">
          <li className="cursor-pointer dark:hover:text-gray-50">About</li>
          <li className="cursor-pointer dark:hover:text-gray-50">Work</li>
          <li className="cursor-pointer dark:hover:text-gray-50">
            Testimonials
          </li>
          <li className="cursor-pointer dark:hover:text-gray-50">Contact</li>
        </ul>
        <div className="flex justify-between p-[16px]">
          <span>Switch mode</span>
          {mode == "light" && (
            <img
              src={icons.darkmode24L.src}
              className="w-6 h-6 text-white select-none"
              onClick={toggleDark}
            />
          )}
          {mode == "dark" && (
            <img
              src={icons.lightmode24D.src}
              className="w-6 h-6  select-none"
              onClick={toggleDark}
            />
          )}
        </div>
        <div
          onClick={() => window?.open("/abdeldjalil.pdf", "_blank")}
          className="bg-gray-900 p-[6px] text-gray-50
          dark:text-gray-900 dark:bg-gray-50 
          active:bg-gray-800  dark:active:bg-gray-100 
          rounded-xl mx-[16px] text-base text-center"
        >
          Download CV
        </div>
      </div>
    </div>
  );
};

export default Header;
{
  /* <Drawer
        open={menu}
        anchor="right"
        onClose={toggleMenu}
        PaperProps={{
          sx: { width: "70%", backgroundColor: "black" },
        }}
        className="dark:bg-gray-900 dark:text-gray-50"
      >
        
      </Drawer> */
}
