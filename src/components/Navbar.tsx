// src/components/Navbar.tsx
"use client";
import { useState, useEffect } from "react";
// import Image from "next/image";

// import { motion, AnimatePresence } from "framer-motion";
import {
  House,
  Image,
  Video,
  WandSparkles,
  Hammer,
  Brush,
  GalleryHorizontalEnd,
  LifeBuoy,
  User,
  Sun,
  Moon,
  Bell,
  Folder,
} from "lucide-react";

const tools = [
  { id: "house", icon: House },
  { id: "image", icon: Image },
  { id: "video", icon: Video },
  { id: "wand-sparkles", icon: WandSparkles },
  { id: "hammer", icon: Hammer },
  { id: "brush", icon: Brush },
  { id: "folder", icon: Folder },
];

export default function Navbar() {
  const [activeTool, setActiveTool] = useState("house");
  const [theme, setTheme] = useState<"light" | "dark" | null>(null);
  const [notifications, setNotifications] = useState<number>(3);
  const [notifOpen, setNotifOpen] = useState(false);

  // Load theme from localStorage or system preference
      useEffect(() => {
        const saved = localStorage.getItem("theme");
        if (saved === "light" || saved === "dark") {
          setTheme(saved);
        } else {
          const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
          setTheme(prefersDark ? "dark" : "light");
        }
      }, []);

      // Apply theme whenever it changes
      useEffect(() => {
        if (!theme) return;
        const root = document.documentElement;
        if (theme === "dark") {
          root.classList.add("dark");
          localStorage.setItem("theme", "dark");
        } else {
          root.classList.remove("dark");
          localStorage.setItem("theme", "light");
        }
      }, [theme]);

  // Close notifications on outside click
  useEffect(() => {
    function onDocClick(e) {
      const target = e.target;
      if (!(target instanceof HTMLElement)) return;
      if (!target.closest(".notif-wrapper")) setNotifOpen(false);
    }
    document.addEventListener("click", onDocClick);
    return () => document.removeEventListener("click", onDocClick);
  }, []);

  // Prevent flicker before theme loads
  if (!theme) return null;

  return (
    <nav className="flex flex-col md:flex-row md:items-center md:justify-between px-4 sm:px-6 py-3 border-b 
    bg-gradient-to-r from-white via-blue-100 to-white 
    dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 gap-4 md:gap-0">
  
  {/* Left: Logo + Avatar & Username */}
  <div className="flex items-center gap-3 flex-shrink-0">
    <Image src="/assets/logo.png" alt="logo" className="w-9 h-9" />
    <div className="w-9 h-9 rounded-full overflow-hidden bg-gray-200 dark:bg-gray-700">
      <Image
        src="/assets/profile.jpg"
        alt="avatar"
        className="w-full h-full object-cover"
      />
    </div>
    <span className=" sm:inline font-semibold text-gray-700 dark:text-gray-200">
      benevolenttimbiebot
    </span>
  </div>

  {/* Center: Toolbar icons (scrollable on small screens) */}
  <div className="flex justify-center items-center bg-gray-100 dark:bg-gray-700 p-2 gap-3 rounded-2xl 
      overflow-x-auto scrollbar-hide w-full md:w-auto">
    {tools.map((tool) => {
      const Icon = tool.icon;
      const isActive = activeTool === tool.id;
      return (
        <button
          key={tool.id}
          onClick={() => setActiveTool(tool.id)}
          className={`p-2 rounded-md transition ${
            isActive
              ? "dark:bg-black dark:text-white bg-white text-black"
              : "text-gray-600 hover:text-black dark:text-gray-300 dark:hover:text-white"
          }`}
          aria-pressed={isActive}
          aria-label={tool.id}
        >
          <Icon className="w-5 h-5" />
        </button>
      );
    })}
  </div>

  {/* Right: Buttons + Notification + Theme toggle + Profile */}
  <div className="flex items-center gap-2 justify-end flex-wrap">
    {/* Gallery */}
    <button className="px-3 py-1.5 rounded-full bg-gray-100 dark:bg-gray-700 hover:bg-gray-600 
        dark:hover:bg-gray-200 flex items-center gap-1.5 text-sm font-medium 
        text-black dark:text-white hover:text-white dark:hover:text-black">
      <GalleryHorizontalEnd className="w-4 h-4" /> 
      <span className="hidden sm:inline">Gallery</span>
    </button>

    {/* Support */}
    <button className="px-3 py-1.5 rounded-full bg-gray-100 dark:bg-gray-700 hover:bg-gray-600 
        dark:hover:bg-gray-200 flex items-center gap-1.5 text-sm font-medium 
        text-black dark:text-white hover:text-white dark:hover:text-black">
      <LifeBuoy className="w-4 h-4" /> 
      <span className="hidden sm:inline">Support</span>
    </button>

    {/* Notification Bell */}
    <div className="relative notif-wrapper">
      <button
        onClick={(e) => {
          e.stopPropagation();
          setNotifOpen((s) => !s);
          if (notifications > 0) setNotifications(0);
        }}
        aria-label="Notifications"
        className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 dark:bg-gray-700 dark:hover:bg-gray-700"
        title="Notifications"
      >
        <Bell className="w-5 h-5 dark:text-white text-black" />
      </button>
      {notifications > 0 && (
        <span className="absolute top-0 right-0 -translate-y-1 translate-x-1 inline-flex items-center justify-center px-1.5 py-0.5 text-xs font-semibold text-white bg-red-500 rounded-full">
          {notifications}
        </span>
      )}
    </div>

    {/* Theme Toggle */}
    <button
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
      className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 dark:bg-gray-700 dark:hover:bg-gray-600"
      aria-label="Toggle theme"
    >
      {theme === "light" ? (
        <Moon className="w-5 h-5 text-black dark:text-white" />
      ) : (
        <Sun className="w-5 h-5 text-black dark:text-white" />
      )}
    </button>

    {/* Gradient avatar */}
    <div className="p-[2px] rounded-full bg-gradient-to-r from-purple-400 via-pink-400 to-blue-500">
      <div className="w-9 h-9 rounded-full bg-white dark:bg-gray-800 flex items-center justify-center">
        <User className="w-5 h-5 text-gray-700 dark:text-gray-200" />
      </div>
    </div>
  </div>
</nav>

  );
}
