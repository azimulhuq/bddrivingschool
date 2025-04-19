"use client";
import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";

type ThemeContextType = {
  theme: "light" | "dark";
  toggleTheme: () => void;
};

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
};

export default function ThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setTheme] = useState<"light" | "dark">("light");

  useEffect(() => {
    const saved = localStorage.getItem("theme");
    if (saved === "dark") {
      document.documentElement.classList.add("dark");
      setTheme("dark");
    }
  }, []);

  const toggleTheme = () => {
    const isDark = theme === "dark";
    const newTheme = isDark ? "light" : "dark";

    document.documentElement.classList.toggle("dark", !isDark);
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

      setTimeout(() => {
        toast.classList.remove("opacity-100");
        toast.classList.add("opacity-0");
      }, 2500);
    }
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <div
        id="theme-toast"
        className="fixed bottom-20 right-4 z-[999] px-4 py-2 bg-black/80 text-white text-sm rounded-lg shadow transition-opacity duration-300 opacity-0 pointer-events-none"
      >
        Theme changed
      </div>
      {children}
    </ThemeContext.Provider>
  );
}
