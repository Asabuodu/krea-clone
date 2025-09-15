"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Image as ImageIcon,
  Video,
  Zap,
  Sparkles,
  Scissors,
  Music,
  PlayCircle,
  Cpu,
  RefreshCw,
  Bot,
  ChevronDown,
} from "lucide-react";

const tools = [
  {
    name: "Image",
    desc: "Generate images with custom styles like Flux and Ideogram.",
    icon: ImageIcon,
    set: "New",
  },
  {
    name: "Video",
    desc: "Generate videos with Haiku, Pika, Runway, Lumalabs and more.",
    icon: Video,
  },
  {
    name: "Realtime",
    desc: "Realtime AI rendering on a canvas. Trainable feedback loops.",
    icon: Zap,
  },
  {
    name: "Enhancer",
    desc: "Upscale and enhance images up to 2K/4K.",
    icon: Sparkles,
    set: "New",
  },
  {
    name: "Edit",
    desc: "Edit images, swap objects, replace backgrounds and fix details.",
    icon: Scissors,
    set: "New",
  },
  {
    name: "Video LipSync",
    desc: "Sync any video to any audio with AI lip-sync.",
    icon: Music,
    set: "New",
  },
  {
    name: "Motion Transfer",
    desc: "Transfer motion styles to images and animate characters.",
    icon: PlayCircle,
    set: "New",
  },
  {
    name: "Train",
    desc: "Teach AI new styles, products, or characters.",
    icon: Cpu,
  },
  {
    name: "Trash",
    desc: "Clean up messy AI generations automatically.",
    icon: RefreshCw,
  },
  {
    name: "AI Bot",
    desc: "Chat and interact with AI agents in real-time.",
    icon: Bot,
  },
  {
    name: "Trash",
    desc: "Clean up messy AI generations automatically.",
    icon: RefreshCw,
  },
  {
    name: "AI Bot",
    desc: "Chat and interact with AI agents in real-time.",
    icon: Bot,
  },
];

export default function Generate() {
  const [showAll, setShowAll] = useState(false);

  const visibleTools = showAll ? tools : tools.slice(0, 8);

  return (
    <section className="px-6 py-10 bg-white text-black dark:bg-black dark:text-white transition-colors">
      {/* Header with toggle */}
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-xl font-bold">Generate</h3>
        <button
          onClick={() => setShowAll(!showAll)}
          className="flex items-center gap-1 text-sm font-medium text-blue-400 dark:text-gray-300 hover:text-blue-500 dark:hover:text-white transition"
        >
          <ChevronDown
            className={`h-4 w-4 transition-transform ${
              showAll ? "rotate-180" : ""
            }`}
          />
          <span>{showAll ? "Show less" : "Show all"}</span>
        </button>
      </div>

      {/* Cards Grid with Animation */}
      <motion.div
        layout
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5"
      >
        <AnimatePresence>
          {visibleTools.map((tool, i) => {
            const Icon = tool.icon;
            return (
              <motion.div
                key={i}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
                className="p-4 border border-gray-200 dark:border-gray-700 rounded-xl bg-white dark:bg-gray-900 hover:shadow-md transition flex items-center justify-between gap-4"
              >
                {/* Left: Icon */}
                <div className="w-10 h-10 rounded-lg bg-gray-100 dark:bg-gray-800 flex items-center justify-center flex-shrink-0">
                  <Icon className="w-5 h-5 text-gray-700 dark:text-gray-300" />
                </div>

                {/* Middle: Name + Description */}
                <div className="flex flex-col flex-1 min-w-0">
                  <div className="flex items-center gap-2">
                    <h4 className="font-medium truncate">{tool.name}</h4>
                    {tool.set && (
                      <span className="text-xs bg-blue-500 text-white px-2 py-0.5 rounded-full">
                        {tool.set}
                      </span>
                    )}
                  </div>
                  <p className="text-xs text-gray-600 dark:text-gray-400 truncate">
                    {tool.desc}
                  </p>
                </div>

                {/* Right: Button */}
                <button className="text-xs px-3 py-1 bg-gray-200 text-black dark:bg-gray-700 dark:text-white rounded-lg hover:bg-gray-300 dark:hover:bg-gray-600 transition whitespace-nowrap">
                  Open
                </button>
              </motion.div>
            );
          })}
        </AnimatePresence>
      </motion.div>
    </section>
  );
}
