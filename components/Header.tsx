"use client";

import { useTheme } from "@/hooks/useTheme";
import { Home, Menu, Moon, Sun, X } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";
import NavMenu from "./NavMenu";

export default function Header() {
  const [open, setOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const checkScreen = () => {
      setIsMobile(window.innerWidth < 1024);
    };
    checkScreen();
    window.addEventListener("resize", checkScreen);
    return () => window.removeEventListener("resize", checkScreen);
  }, []);

  return (
    <header className="bg-white dark:bg-gray-900 shadow-sm sticky top-0 z-50">
      <div
        className={`w-full max-w-screen-2xl mx-auto px-4 xl:px-24 py-4 ${
          !isMobile ? "grid grid-cols-3" : "grid grid-cols-2"
        } items-center`}
      >
        {/* Left: Logo */}
        <div className="justify-self-start">
          <Link
            href="/"
            className="text-xl font-bold text-blue-700 dark:text-blue-300 whitespace-nowrap flex items-center gap-2"
          >
            <Home size={20} /> BD Driving School
          </Link>
        </div>

        {/* Center: Desktop Menu */}
        {!isMobile && (
          <div className="justify-self-center">
            <NavMenu mobile={false} />
          </div>
        )}

        {/* Right: Theme Toggle and Mobile Toggle */}
        <div className="justify-self-end flex items-center gap-4">
          {!isMobile && (
            <button
              onClick={toggleTheme}
              className="flex items-center gap-2 bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-100 px-4 py-2 rounded-full shadow-md hover:shadow-lg transition duration-300 hover:scale-105"
            >
              {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
              {/* <span className="text-sm font-medium">
                {theme === "dark" ? "Light Mode" : "Dark Mode"}
              </span> */}
            </button>
          )}

          {isMobile && (
            <button
              onClick={() => setOpen(!open)}
              className="text-gray-800 dark:text-gray-100 hover:scale-110 transition-transform ml-auto"
              aria-label="Toggle menu"
            >
              {open ? <X /> : <Menu />}
            </button>
          )}
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobile && open && (
        <div className="px-4 xl:px-24 pb-4">
          <div className="grid gap-4">
            <NavMenu mobile />
            {/* <div className="flex justify-end">
              <button
                onClick={toggleTheme}
                className="flex items-center gap-2 bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-100 px-4 py-2 rounded-full shadow-md hover:shadow-lg transition duration-300 hover:scale-105"
              >
                {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
                <span className="text-sm font-medium">
                  {theme === "dark" ? "Light Mode" : "Dark Mode"}
                </span>
              </button>
            </div> */}
          </div>
        </div>
      )}
    </header>
  );
}
