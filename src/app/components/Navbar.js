"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  const isActive = (path) => pathname === path;

  const navItems = [
    { name: "Dashboard", path: "/" },
    { name: "Tasks", path: "/tasks" },
    { name: "Routines", path: "/routines" },
    { name: "Calendar", path: "/calendar" },
    { name: "Progress", path: "/progress" },
  ];

  return (
    <nav className="relative w-full bg-[#0B1023] border-b border-purple-500/20 px-5 py-4 flex items-center justify-between">
      
      {/* Logo */}
      <h1 className="text-xl font-bold text-purple-500">
        Smart Routine
      </h1>

      {/* Desktop Menu */}
      <div className="hidden md:flex gap-6 text-gray-300">
        {navItems.map((item) => (
          <Link
            key={item.name}
            href={item.path}
            className={`transition hover:text-white ${
              isActive(item.path) ? "text-white font-semibold" : ""
            }`}
          >
            {item.name}
          </Link>
        ))}
      </div>

      {/* Mobile Button */}
      <button
        onClick={() => setOpen(!open)}
        className="md:hidden text-white"
      >
        {open ? <X /> : <Menu />}
      </button>

      {/* Mobile Overlay */}
      {open && (
        <div
          onClick={() => setOpen(false)}
          className="fixed inset-0 bg-black/40 md:hidden"
        />
      )}

      {/* Mobile Menu */}
      <div
        className={`absolute top-16 left-0 w-full bg-[#0B1023] border-b border-purple-500/20 flex flex-col gap-4 p-5 md:hidden text-gray-300 transition-all duration-300 ${
          open ? "block" : "hidden"
        }`}
      >
        {navItems.map((item) => (
          <Link
            key={item.name}
            href={item.path}
            onClick={() => setOpen(false)}
            className={`p-2 rounded-lg ${
              isActive(item.path)
                ? "bg-purple-600 text-white"
                : "hover:bg-[#1A2142]"
            }`}
          >
            {item.name}
          </Link>
        ))}
      </div>
    </nav>
  );
}