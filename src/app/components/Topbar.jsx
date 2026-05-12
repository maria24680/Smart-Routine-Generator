"use client";

import { useState } from "react";
import { Bell, Search, LogIn, User, LogOut, Settings } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useSession, signOut } from "@/lib/auth-client"; 

export default function Topbar() {
  const [query, setQuery] = useState("");
  const [notifications] = useState(3);
  const [showDropdown, setShowDropdown] = useState(false);
  
  const { data: session, isPending } = useSession();

  const handleLogout = async () => {
    await signOut({
      fetchOptions: {
        onSuccess: () => {
          window.location.href = "/login"; 
        },
      },
    });
  };

  return (
    <div className="flex justify-between items-center gap-5 w-full">
      
      {/* 1. SEARCH BOX */}
      <div className="flex-1 relative max-w-xl">
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search for tasks or resources..."
          className="w-full bg-[#121933] border border-purple-500/10 rounded-2xl px-5 py-3.5 outline-none text-white focus:border-purple-500/40 transition-all placeholder:text-gray-500"
        />
        <Search className="absolute right-5 top-1/2 -translate-y-1/2 text-gray-500" size={20} />
      </div>

      {/* 2. ACTION AREA */}
      <div className="flex items-center gap-4">
        
        {/* NOTIFICATION ICON */}
        <button className="relative bg-[#121933] p-3.5 rounded-xl hover:bg-[#1A2142] transition-colors text-gray-400 border border-purple-500/5">
          <Bell size={22} />
          {notifications > 0 && (
            <span className="absolute top-2.5 right-2.5 bg-red-500 w-2.5 h-2.5 rounded-full border-2 border-[#070B1D]"></span>
          )}
        </button>

        {/* 3. AUTHENTICATION SECTION */}
        <div className="relative">
          {isPending ? (
            /* Loading State */
            <div className="w-12 h-12 rounded-full bg-gray-800 animate-pulse border border-white/5" />
          ) : session ? (
            /* Logged In State: Profile Dropdown */
            <div className="flex items-center gap-3">
              <button 
                onClick={() => setShowDropdown(!showDropdown)}
                className="flex items-center gap-3 bg-[#121933] p-1.5 pr-4 rounded-full border border-purple-500/10 hover:border-purple-500/30 transition-all"
              >
                <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-purple-500/20 shadow-inner">
                  <Image
                    width={40}
                    height={40}
                    src={session.user.image || `https://api.dicebear.com/7.x/initials/svg?seed=${session.user.name}`}
                    alt="User"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="hidden lg:block text-left">
                  <p className="text-[10px] text-gray-500 uppercase font-bold tracking-wider leading-none mb-1">Student</p>
                  <p className="text-sm font-bold text-white leading-none">
                    {session.user.name.split(" ")[0]}
                  </p>
                </div>
              </button>

              {/* DROPDOWN MENU */}
              {showDropdown && (
                <div className="absolute top-14 right-0 w-48 bg-[#1A2142] border border-white/10 rounded-2xl shadow-2xl py-2 z-50 animate-in fade-in slide-in-from-top-2">
                  <Link href="/profile" className="flex items-center gap-3 px-4 py-3 text-sm text-gray-300 hover:bg-white/5 transition-colors">
                    <User size={16} /> Profile
                  </Link>
                  <Link href="/settings" className="flex items-center gap-3 px-4 py-3 text-sm text-gray-300 hover:bg-white/5 transition-colors border-b border-white/5">
                    <Settings size={16} /> Settings
                  </Link>
                  <button 
                    onClick={handleLogout}
                    className="w-full flex items-center gap-3 px-4 py-3 text-sm text-red-400 hover:bg-red-500/10 transition-colors"
                  >
                    <LogOut size={16} /> Logout
                  </button>
                </div>
              )}
            </div>
          ) : (
            /* Logged Out State: Login Button */
            <Link
              href="/login"
              className="flex items-center gap-2 bg-gradient-to-r from-indigo-500 to-purple-600 px-6 py-3 rounded-2xl font-bold hover:scale-105 transition shadow-lg shadow-indigo-500/20 active:scale-95"
            >
              <LogIn size={18} />
              <span className="hidden sm:inline">Sign In</span>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}