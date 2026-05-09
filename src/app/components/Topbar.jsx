"use client";

import { useState } from "react";
import { Bell, Moon, Sun, Search } from "lucide-react";

export default function Topbar() {
  const [query, setQuery] = useState("");
  const [darkMode, setDarkMode] = useState(true);
  const [notifications] = useState(3);

  /* SEARCH HANDLER */
  const handleSearch = (e) => {
    setQuery(e.target.value);
    console.log("Searching:", e.target.value);
  };

  /* TOGGLE THEME */
  const toggleTheme = () => {
    setDarkMode((prev) => !prev);
    console.log("Dark mode:", !darkMode);
  };

  return (
    <div className="flex justify-between items-center gap-5">

      {/* SEARCH BOX */}
      <div className="flex-1 relative">
        <input
          type="text"
          value={query}
          onChange={handleSearch}
          placeholder="Search anything..."
          className="w-full bg-[#121933] border border-purple-500/20 rounded-2xl px-5 py-4 outline-none text-white"
        />

        <Search className="absolute right-5 top-4 text-gray-400" />
      </div>

      {/* ACTION BUTTONS */}
      <div className="flex items-center gap-4">

        {/* NOTIFICATION */}
        <button className="relative bg-[#121933] p-4 rounded-full hover:scale-105 transition">
          <Bell />

          {notifications > 0 && (
            <span className="absolute -top-1 -right-1 bg-red-500 text-xs px-2 py-0.5 rounded-full">
              {notifications}
            </span>
          )}
        </button>

        {/* DARK MODE TOGGLE */}
        <button
          onClick={toggleTheme}
          className="bg-[#121933] p-4 rounded-full hover:scale-105 transition"
        >
          {darkMode ? <Moon /> : <Sun />}
        </button>

      </div>
    </div>
  );
}