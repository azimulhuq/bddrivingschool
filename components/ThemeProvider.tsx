"use client";
import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";

export default function ThemeProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [theme, setTheme] = useState<"light" | "dark">("light");
  const [toastVisible, setToastVisible] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem("theme");
    if (saved === "dark") {
      document.documentElement.classList.add("dark");
      setTheme("dark");
    }
  }, []);

  const toggleTheme = () => {
    const isDark = theme === "dark";
    document.documentElement.classList.toggle("dark", !isDark);
    const newTheme = isDark ? "light" : "dark";
    localStorage.setItem("theme", newTheme);
    setTheme(newTheme);
    showToast(`${newTheme === "dark" ? "Dark" : "Light"} mode enabled`);
  };

  const showToast = (msg: string) => {
    const toast = document.getElementById("theme-toast");
    if (toast) {
      toast.textContent = msg;
      toast.classList.remove("opacity-0");
      toast.classList.add("opacity-100");
      setToastVisible(true);
      setTimeout(() => {
        toast.classList.remove("opacity-100");
        toast.classList.add("opacity-0");
        setToastVisible(false);
      }, 2500);
    }
  };

  return (
    <>
      <div
        id="theme-toast"
        className="fixed bottom-20 right-4 z-[999] px-4 py-2 bg-black/80 text-white text-sm rounded-lg shadow transition-opacity duration-300 opacity-0 pointer-events-none"
      >
        Theme changed
      </div>

      <button
        onClick={toggleTheme}
        className="fixed bottom-4 right-4 md:top-4 md:bottom-auto md:right-4 z-50 flex items-center gap-2 bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-100 px-4 py-2 rounded-full shadow-md hover:shadow-lg transition duration-300 hover:scale-105"
      >
        {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
        <span className="text-sm font-medium">
          {theme === "dark" ? "Light Mode" : "Dark Mode"}
        </span>
      </button>

      {children}
    </>
  );
}
