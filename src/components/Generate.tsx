// const tools = [
//   { name: "Image", desc: "Generate images...", btn: "Open" },
//   { name: "Video", desc: "Generate videos...", btn: "Open" },
//   { name: "Realtime", desc: "AI rendering in realtime...", btn: "Open" },
//   { name: "Enhancer", desc: "Enhance resolution...", btn: "Open" },
// ];

// export default function Generate() {
//   return (
//     <section className="px-6 py-8">
//       <h3 className="text-xl font-bold mb-4">Generate</h3>
//       <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
//         {tools.map((tool, i) => (
//           <div
//             key={i}
//             className="p-4 border rounded-xl shadow-sm hover:shadow-md"
//           >
//             <h4 className="font-semibold">{tool.name}</h4>
//             <p className="text-sm text-gray-500">{tool.desc}</p>
//             <button className="mt-2 text-sm px-3 py-1 bg-gray-100 rounded hover:bg-gray-200">
//               {tool.btn}
//             </button>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// }

// "use client";
// import {
//   Image as ImageIcon,
//   Video,
//   Zap,
//   Sparkles,
//   Scissors,
//   Music,
//   PlayCircle,
//   Cpu,
//   RefreshCw,
//   Bot,
// } from "lucide-react";

// const tools = [
//   {
//     name: "Image",
//     desc: "Generate images with custom styles like Flux and Ideogram.",
//     icon: ImageIcon,
//   },
//   {
//     name: "Video",
//     desc: "Generate videos with Haiku, Pika, Runway, Lumalabs and more.",
//     icon: Video,
//   },
//   {
//     name: "Realtime",
//     desc: "Realtime AI rendering on a canvas. Trainable feedback loops.",
//     icon: Zap,
//   },
//   {
//     name: "Enhancer",
//     desc: "Upscale and enhance images up to 2K/4K.",
//     icon: Sparkles,
//   },
//   {
//     name: "Edit",
//     desc: "Edit images, swap objects, replace backgrounds and fix details.",
//     icon: Scissors,
//   },
//   {
//     name: "Video LipSync",
//     desc: "Sync any video to any audio with AI lip-sync.",
//     icon: Music,
//   },
//   {
//     name: "Motion Transfer",
//     desc: "Transfer motion styles to images and animate characters.",
//     icon: PlayCircle,
//   },
//   {
//     name: "Train",
//     desc: "Teach AI new styles, products, or characters.",
//     icon: Cpu,
//   },
//   {
//     name: "Trash",
//     desc: "Clean up messy AI generations automatically.",
//     icon: RefreshCw,
//   },
//   {
//     name: "AI Bot",
//     desc: "Chat and interact with AI agents in real-time.",
//     icon: Bot,
//   },
// ];

// export default function Generate() {
//   return (
//     <section className="px-6 py-10">
//       <h3 className="text-xl font-bold mb-6">Generate</h3>

//       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
//         {tools.map((tool, i) => {
//           const Icon = tool.icon;
//           return (
//             <div
//               key={i}
//               className="p-5 border rounded-xl shadow-sm hover:shadow-md transition bg-white flex flex-col justify-between"
//             >
//               <div className="flex items-center gap-3">
//                 <div className="w-10 h-10 rounded-lg bg-gradient-to-r from-gray-100 to-gray-200 flex items-center justify-center">
//                   <Icon className="w-5 h-5 text-gray-700" />
//                 </div>
//                 <h4 className="font-semibold">{tool.name}</h4>
//               </div>

//               <p className="text-sm text-gray-500 mt-3 flex-1">{tool.desc}</p>

//               <button className="mt-4 text-sm px-4 py-1.5 bg-gray-100 rounded-lg hover:bg-gray-200 transition">
//                 Open
//               </button>
//             </div>
//           );
//         })}
//       </div>
//     </section>
//   );
// }

"use client";
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
} from "lucide-react";

const tools = [
  {
    name: "Image",
    desc: "Generate images with custom styles like Flux and Ideogram.",
    icon: ImageIcon,
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
  },
  {
    name: "Edit",
    desc: "Edit images, swap objects, replace backgrounds and fix details.",
    icon: Scissors,
  },
  {
    name: "Video LipSync",
    desc: "Sync any video to any audio with AI lip-sync.",
    icon: Music,
  },
  {
    name: "Motion Transfer",
    desc: "Transfer motion styles to images and animate characters.",
    icon: PlayCircle,
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
];

export default function Generate() {
  return (
    <section className="px-6 py-10">
      <h3 className="text-xl font-bold mb-6">Generate</h3>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-5">
        {tools.map((tool, i) => {
          const Icon = tool.icon;
          return (
            <div
              key={i}
              className="p-4 border rounded-xl bg-white dark:bg-gray-900 hover:shadow-md transition flex flex-col"
            >
              {/* Icon + Name */}
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-lg bg-gray-100 dark:bg-gray-800 flex items-center justify-center">
                  <Icon className="w-5 h-5 text-gray-700 dark:text-gray-300" />
                </div>
                <h4 className="font-medium text-gray-900 dark:text-gray-100">
                  {tool.name}
                </h4>
              </div>

              {/* Description + Open button in same row */}
              <div className="flex items-center justify-between mt-3">
                <p className="text-xs text-gray-500 dark:text-gray-400 pr-3">
                  {tool.desc}
                </p>
                <button className="text-xs px-3 py-1 bg-gray-100 dark:bg-gray-800 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700 transition whitespace-nowrap">
                  Open
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
