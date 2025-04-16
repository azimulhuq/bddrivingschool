"use client";
import {
  BookOpen,
  CalendarCheck,
  Home,
  Info,
  Menu,
  Newspaper,
  Phone,
  Star,
  X,
} from "lucide-react";
import Link from "next/link";
import { useState } from "react";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="bg-white dark:bg-gray-900 shadow-sm py-4 sticky top-0 z-50">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link
          href="/"
          className="text-xl font-bold text-blue-700 dark:text-blue-300 whitespace-nowrap flex items-center gap-2"
        >
          <Home size={20} /> BD Driving School
        </Link>
        <div className="md:hidden">
          <button
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
            className="text-gray-800 dark:text-gray-100 hover:scale-110 transition-transform"
          >
            {open ? <X /> : <Menu />}
          </button>
        </div>
        <nav
          id="mobile-nav"
          className={`absolute right-4 top-16 md:static bg-white dark:bg-gray-900 md:bg-transparent md:dark:bg-transparent rounded md:rounded-none md:flex md:space-x-6 space-y-2 md:space-y-0 p-4 md:p-0 flex-col md:flex-row text-sm font-medium shadow md:shadow-none z-50 transition-all ${
            open ? "flex animate-fadeIn" : "hidden animate-fadeOut"
          }`}
        >
          <Link href="/about" className="flex items-center gap-2">
            <Info size={16} />
            About
          </Link>
          <Link href="/courses" className="flex items-center gap-2">
            <BookOpen size={16} />
            Courses
          </Link>
          <Link href="/booking" className="flex items-center gap-2">
            <CalendarCheck size={16} />
            Booking
          </Link>
          <Link href="/reviews" className="flex items-center gap-2">
            <Star size={16} />
            Reviews
          </Link>
          <Link href="/blog" className="flex items-center gap-2">
            <Newspaper size={16} />
            Blog
          </Link>
          <Link href="/contact" className="flex items-center gap-2">
            <Phone size={16} />
            Contact
          </Link>
        </nav>
      </div>
    </header>
  );
}
