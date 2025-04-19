"use client";

import {
  BookOpen,
  CalendarCheck,
  Info,
  Newspaper,
  Phone,
  Star,
} from "lucide-react";
import Link from "next/link";

export default function NavMenu({ mobile = false }: { mobile?: boolean }) {
  return (
    <nav
      className={`${
        mobile
          ? "flex flex-col gap-4"
          : "grid grid-flow-col auto-cols-max gap-6"
      } items-center text-sm font-medium transition-all`}
    >
      <Link href="/about" className="flex items-center gap-2">
        <Info size={16} /> About
      </Link>
      <Link href="/courses" className="flex items-center gap-2">
        <BookOpen size={16} /> Courses
      </Link>
      <Link href="/booking" className="flex items-center gap-2">
        <CalendarCheck size={16} /> Booking
      </Link>
      <Link href="/reviews" className="flex items-center gap-2">
        <Star size={16} /> Reviews
      </Link>
      <Link href="/blog" className="flex items-center gap-2">
        <Newspaper size={16} /> Blog
      </Link>
      <Link href="/contact" className="flex items-center gap-2">
        <Phone size={16} /> Contact
      </Link>
    </nav>
  );
}
