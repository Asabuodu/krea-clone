// src/components/Navbar.tsx
"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
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
    const saved = localStorage.getItem("theme") as "light" | "dark" | null;
    if (saved) {
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
    function onDocClick(e: MouseEvent) {
      const target = e.target as HTMLElement | null;
      if (!target) return;
      if (!target.closest(".notif-wrapper")) setNotifOpen(false);
    }
    document.addEventListener("click", onDocClick);
    return () => document.removeEventListener("click", onDocClick);
  }, []);

  // Prevent flicker before theme loads
  if (!theme) return null;

  return (
    <nav className="flex flex-col md:flex-row md:items-center md:justify-between px-6 py-3 border-b bg-gradient-to-r from-white via-blue-100 to-white dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 gap-4 md:gap-0">
      {/* Left: Logo + Avatar & Username */}
      <div className="flex items-center gap-4">
        <img src="/assets/logo.png" alt="logo" className="w-9 h-9" />
        <div className="w-9 h-9 rounded-full overflow-hidden bg-gray-200 dark:bg-gray-700">
          <img
            src="/assets/profile.jpg"
            alt="avatar"
            className="w-full h-full object-cover"
          />
        </div>
        <span className="font-semibold text-gray-700 dark:text-gray-200">
          benevolenttimbiebot
        </span>
      </div>

      {/* Center: Toolbar icons */}
      <div className="flex flex-wrap justify-center items-center bg-gray-100 dark:bg-gray-700 p-2 gap-4 rounded-2xl">
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
      <div className="flex items-center gap-3 justify-end">
        <button className="px-4 py-1.5 rounded-full bg-gray-100 dark:hover:bg-gray-200 dark:bg-gray-700 hover:bg-gray-600 flex items-center gap-2 text-sm font-medium dark:text-white text-black hover:text-white dark:hover:text-black">
          <GalleryHorizontalEnd className="w-4 h-4" /> Gallery
        </button>

        <button className="px-4 py-1.5 rounded-full bg-gray-100 dark:hover:bg-gray-200 dark:bg-gray-700 hover:bg-gray-600 flex items-center gap-2 text-sm font-medium dark:text-white text-black hover:text-white dark:hover:text-black">
          <LifeBuoy className="w-4 h-4" /> Support
        </button>

        {/* Notification (bell) */}
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
            <Bell className="w-5 h-5 dark:text-white text-black dark:hover:text-2xl" />
          </button>

          {notifications > 0 && (
            <span className="absolute top-0 right-0 -translate-y-1 translate-x-1 inline-flex items-center justify-center px-1.5 py-0.5 text-xs font-semibold text-white bg-red-500 rounded-full">
              {notifications}
            </span>
          )}

          <AnimatePresence>
            {notifOpen && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.2 }}
                className="absolute right-0 mt-2 w-64 bg-white dark:bg-gray-800 border dark:border-gray-700 rounded-lg shadow-lg z-50"
              >
                <div className="p-3">
                  <div className="text-sm font-medium text-gray-900 dark:text-gray-100">
                    Notifications
                  </div>
                  <div className="mt-2 text-sm text-gray-600 dark:text-gray-300">
                    <div className="py-2 border-b border-gray-100 dark:border-gray-700">
                      No new notifications
                    </div>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Theme toggle */}
        <button
          onClick={() => setTheme(theme === "light" ? "dark" : "light")}
          className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 dark:bg-gray-700 dark:hover:bg-gray-700"
          aria-label="Toggle theme"
        >
          {theme === "light" ? (
            <Moon className="w-5 h-5 dark:text-white text-black" />
          ) : (
            <Sun className="w-5 h-5 dark:text-white text-black" />
          )}
        </button>

        {/* Gradient avatar border */}
        <div className="p-[2px] rounded-full bg-gradient-to-r from-purple-400 via-pink-400 to-blue-500">
          <div className="w-9 h-9 rounded-full bg-white dark:bg-gray-800 flex items-center justify-center">
            <User className="w-5 h-5 text-gray-700 dark:text-gray-200" />
          </div>
        </div>
      </div>
    </nav>
  );
}
