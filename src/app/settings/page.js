"use client";

import { useState } from "react";
import { Moon, Sun, Bell, Lock, User, Palette } from "lucide-react";

export default function SettingsPage() {
  const [darkMode, setDarkMode] = useState(true);
  const [notifications, setNotifications] = useState(true);

  return (
    <div className={darkMode ? "bg-[#0b1020] text-white min-h-screen p-6" : "bg-gray-100 text-black min-h-screen p-6"}>
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-6">Settings</h1>

        {/* Profile Section */}
        <div className="bg-white/10 dark:bg-white/5 backdrop-blur p-5 rounded-2xl mb-5">
          <div className="flex items-center gap-3 mb-4">
            <User />
            <h2 className="text-xl font-semibold">Profile</h2>
          </div>
          <input
            type="text"
            placeholder="Your Name"
            className="w-full p-3 rounded-lg bg-transparent border border-gray-500 outline-none"
          />
          <input
            type="email"
            placeholder="Email"
            className="w-full p-3 rounded-lg bg-transparent border border-gray-500 mt-3 outline-none"
          />
        </div>

        {/* Appearance */}
        <div className="bg-white/10 dark:bg-white/5 backdrop-blur p-5 rounded-2xl mb-5">
          <div className="flex items-center gap-3 mb-4">
            <Palette />
            <h2 className="text-xl font-semibold">Appearance</h2>
          </div>

          <div className="flex items-center justify-between">
            <span>Dark Mode</span>
            <button
              onClick={() => setDarkMode(!darkMode)}
              className="p-2 rounded-full bg-purple-600"
            >
              {darkMode ? <Moon /> : <Sun />}
            </button>
          </div>
        </div>

        {/* Notifications */}
        <div className="bg-white/10 dark:bg-white/5 backdrop-blur p-5 rounded-2xl mb-5">
          <div className="flex items-center gap-3 mb-4">
            <Bell />
            <h2 className="text-xl font-semibold">Notifications</h2>
          </div>

          <div className="flex items-center justify-between">
            <span>Enable Notifications</span>
            <button
              onClick={() => setNotifications(!notifications)}
              className={`w-12 h-6 flex items-center rounded-full p-1 ${
                notifications ? "bg-green-500" : "bg-gray-500"
              }`}
            >
              <div
                className={`w-4 h-4 bg-white rounded-full transform transition ${
                  notifications ? "translate-x-6" : ""
                }`}
              />
            </button>
          </div>
        </div>

        {/* Security */}
        <div className="bg-white/10 dark:bg-white/5 backdrop-blur p-5 rounded-2xl">
          <div className="flex items-center gap-3 mb-4">
            <Lock />
            <h2 className="text-xl font-semibold">Security</h2>
          </div>

          <button className="w-full p-3 rounded-lg bg-purple-600 hover:bg-purple-700">
            Change Password
          </button>
        </div>
      </div>
    </div>
  );
}
