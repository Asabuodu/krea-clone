// "use client";
// import { useEffect, useState } from "react";
// import Image from "next/image";
// import { motion, AnimatePresence } from "framer-motion";

// const slides = [
//   {
//     title: "WAN 2.2 Image generation",
//     subtitle:
//       "Generate complex images with the brand new and powerful WAN 2.2 model.",
//     img: "/wan.jpg",
//     btn: "Try WAN 2.2",
//   },
//   {
//     title: "FLUX.1 Krea",
//     subtitle:
//       "Making the weights to our FLUX.1 model open-source. Download and run locally.",
//     img: "/flux.jpg",
//     btn: "Explore",
//   },
//   {
//     title: "Open Source Models",
//     subtitle:
//       "Explore a variety of open-source models curated by the community.",
//     img: "/bottle.jpg",
//     btn: "Discover",
//   },
// ];

// export default function Hero() {
//   const [index, setIndex] = useState(0);

//   // Auto-slide every 5s
//   useEffect(() => {
//     const interval = setInterval(() => {
//       setIndex((prev) => (prev + 1) % slides.length);
//     }, 5000);
//     return () => clearInterval(interval);
//   }, []);

//   // Manual navigation
//   const prevSlide = () =>
//     setIndex((prev) => (prev - 1 + slides.length) % slides.length);
//   const nextSlide = () => setIndex((prev) => (prev + 1) % slides.length);

//   return (
//     <div className="">
//       <div className="relative w-full mt-10 h-[420px] flex items-center justify-center overflow-hidden bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
//         {/* Slide animation */}
//         <AnimatePresence mode="wait">
//           <motion.div
//             key={index}
//             initial={{ opacity: 0, x: 50 }}
//             animate={{ opacity: 1, x: 0 }}
//             exit={{ opacity: 0, x: -50 }}
//             transition={{ duration: 0.6 }}
//             className="absolute w-[90%] md:w-[75%] h-[400px] rounded-2xl shadow-xl overflow-hidden bg-white dark:bg-gray-800"
//           >
//             <Image
//               src={slides[index].img}
//               alt={slides[index].title}
//               width={900}
//               height={400}
//               className="w-full h-48 object-cover"
//               priority
//             />
//             <div className="p-6">
//               <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100">
//                 {slides[index].title}
//               </h2>
//               <p className="text-gray-600 dark:text-gray-300 mt-2">
//                 {slides[index].subtitle}
//               </p>
//               <button className="mt-4 px-5 py-2 rounded-lg bg-black text-white hover:bg-gray-800 dark:bg-gray-200 dark:text-gray-900 dark:hover:bg-gray-300 transition">
//                 {slides[index].btn}
//               </button>
//             </div>
//           </motion.div>
//         </AnimatePresence>
//       </div>
//       {/* Dots indicator */}
//       <div className="absolute items-center h-3 flex gap-2 ">
//         {slides.map((_, i) => (
//           <button
//             key={i}
//             onClick={() => setIndex(i)}
//             aria-label={`Go to slide ${i + 1}`}
//             className={`w-3 h-3 rounded-full ms-auto transition ${
//               i === index
//                 ? "bg-black dark:bg-white"
//                 : "bg-gray-300 dark:bg-gray-600"
//             }`}
//           />
//         ))}
//       </div>
//       <div className="flex justify-end gap-2 mt-2">
//         <button
//           onClick={prevSlide}
//           className="px-3 py-1 rounded-md bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 transition"
//         >
//           {"<"}
//         </button>
//         <button
//           onClick={nextSlide}
//           className="px-3 py-1 rounded-md bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 transition"
//         >
//           {">"}
//         </button>
//       </div>

//       {/* Manual nav controls (< and >) */}
//       {/* <div className="absolute right-4 botom -translate-y-1/2 flex flex-col gap-2">
//         <button
//           onClick={prevSlide}
//           aria-label="Previous slide"
//           className="px-2 py-1 bg-black/70 dark:bg-white/70 text-white dark:text-black rounded hover:bg-black/90 dark:hover:bg-white transition"
//         >
//           {"<"}
//         </button>
//         <button
//           onClick={nextSlide}
//           aria-label="Next slide"
//           className="px-2 py-1 bg-black/70 dark:bg-white/70 text-white dark:text-black rounded hover:bg-black/90 dark:hover:bg-white transition"
//         >
//           {">"}
//         </button>
//       </div> */}
//       {/* Buttons below image */}
//     </div>
//   );
// }

// "use client";
// import { useState } from "react";
// import { AnimatePresence, motion } from "framer-motion";
// import Image from "next/image";

// const slides = [
//   {
//     img: "/images/sample1.jpg",
//     title: "Slide 1",
//     subtitle: "This is the first slide",
//     btn: "Learn More",
//   },
//   {
//     img: "/images/sample2.jpg",
//     title: "Slide 2",
//     subtitle: "This is the second slide",
//     btn: "Discover",
//   },
//   {
//     img: "/images/sample3.jpg",
//     title: "Slide 3",
//     subtitle: "This is the third slide",
//     btn: "Get Started",
//   },
// ];

// export default function Carousel() {
//   const [index, setIndex] = useState(0);

//   const nextSlide = () => setIndex((prev) => (prev + 1) % slides.length);
//   const prevSlide = () =>
//     setIndex((prev) => (prev - 1 + slides.length) % slides.length);

//   return (
//     <div className="relative w-full mt-10 flex flex-col items-center">
//       {/* Carousel */}
//       <div className="relative w-full max-w-4xl h-[420px] flex items-center justify-center overflow-hidden bg-gray-50 dark:bg-gray-900 transition-colors duration-300 rounded-2xl shadow-xl">
//         <AnimatePresence mode="wait">
//           <motion.div
//             key={index}
//             initial={{ opacity: 0, x: 50 }}
//             animate={{ opacity: 1, x: 0 }}
//             exit={{ opacity: 0, x: -50 }}
//             transition={{ duration: 0.6 }}
//             className="absolute w-[90%] md:w-[75%] h-[400px] rounded-2xl shadow-xl overflow-hidden bg-white dark:bg-gray-800"
//           >
//             <Image
//               src={slides[index].img}
//               alt={slides[index].title}
//               width={900}
//               height={400}
//               className="w-full h-48 object-cover"
//               priority
//             />
//             <div className="p-6">
//               <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100">
//                 {slides[index].title}
//               </h2>
//               <p className="text-gray-600 dark:text-gray-300 mt-2">
//                 {slides[index].subtitle}
//               </p>
//               <button className="mt-4 px-5 py-2 rounded-lg bg-black text-white hover:bg-gray-800 dark:bg-gray-200 dark:text-gray-900 dark:hover:bg-gray-300 transition">
//                 {slides[index].btn}
//               </button>
//             </div>
//           </motion.div>
//         </AnimatePresence>
//       </div>

//       {/* Controls row (dots + arrows aligned) */}
//       <div className="flex items-center justify-between w-full max-w-4xl mt-4">
//         {/* Dots centered */}
//         <div className="flex-1 flex justify-center gap-2">
//           {slides.map((_, i) => (
//             <button
//               key={i}
//               onClick={() => setIndex(i)}
//               aria-label={`Go to slide ${i + 1}`}
//               className={`w-3 h-3 rounded-full transition ${
//                 i === index
//                   ? "bg-black dark:bg-white"
//                   : "bg-gray-300 dark:bg-gray-600"
//               }`}
//             />
//           ))}
//         </div>

//         {/* Arrows on the right */}
//         <div className="flex gap-2">
//           <button
//             onClick={prevSlide}
//             className="px-3 py-1 rounded-md bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 transition"
//           >
//             {"<"}
//           </button>
//           <button
//             onClick={nextSlide}
//             className="px-3 py-1 rounded-md bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 transition"
//           >
//             {">"}
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// }

"use client";
import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const slides = [
  {
    id: "wan",
    title: "WAN 2.2",
    subtitle:
      "WAN 2.2 Image generation — Generate complex images with the brand new and powerful WAN 2.2 model.",
    img: "/wan.jpg",
    btn: "Try WAN 2.2",
  },
  {
    id: "flux",
    title: "FLUX.1 Krea",
    subtitle:
      "FLUX.1 Krea — We're making the weights to our FLUX.1 model open-source.",
    img: "/flux.jpg",
    btn: "Explore",
  },
  {
    id: "open",
    title: "Open Source Models",
    subtitle:
      "Explore a variety of open-source models curated by the community.",
    img: "/bottle.jpg",
    btn: "Discover",
  },
  {
    id: "open",
    title: "Open Source Models",
    subtitle:
      "Explore a variety of open-source models curated by the community.",
    img: "/bottle.jpg",
    btn: "Discover",
  },
  {
    id: "open",
    title: "Open Source Models",
    subtitle:
      "Explore a variety of open-source models curated by the community.",
    img: "/bottle.jpg",
    btn: "Discover",
  },
  {
    id: "open",
    title: "Open Source Models",
    subtitle:
      "Explore a variety of open-source models curated by the community.",
    img: "/bottle.jpg",
    btn: "Discover",
  },
];

export default function HeroCarousel() {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const slideRefs = useRef<Array<HTMLDivElement | null>>([]);
  const resumeTimeout = useRef<number | null>(null);

  const [index, setIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  // center the current slide (so the current slide is centered and next slide peeks)
  useEffect(() => {
    const container = containerRef.current;
    const slide = slideRefs.current[index];
    if (!container || !slide) return;

    const left =
      slide.offsetLeft - (container.clientWidth - slide.clientWidth) / 2;
    container.scrollTo({ left, behavior: "smooth" });
  }, [index]);

  // autoplay (pauses while isPaused === true)
  useEffect(() => {
    if (isPaused) return;
    const id = window.setInterval(
      () => setIndex((i) => (i + 1) % slides.length),
      5000
    );
    return () => clearInterval(id);
  }, [isPaused]);

  // pause autoplay on manual navigation and resume after 8s
  function manualNavigate(newIndex: number) {
    setIndex(newIndex);
    setIsPaused(true);
    if (resumeTimeout.current) window.clearTimeout(resumeTimeout.current);
    resumeTimeout.current = window.setTimeout(() => setIsPaused(false), 8000);
  }

  // helpers
  const nextSlide = () => manualNavigate((index + 1) % slides.length);
  const prevSlide = () =>
    manualNavigate((index - 1 + slides.length) % slides.length);

  // keep slide centered on resize
  useEffect(() => {
    function onResize() {
      const container = containerRef.current;
      const slide = slideRefs.current[index];
      if (!container || !slide) return;
      const left =
        slide.offsetLeft - (container.clientWidth - slide.clientWidth) / 2;
      container.scrollTo({ left });
    }
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, [index]);

  return (
    <div className="w-full flex flex-col items-center mt-10">
      {/* scrolling container */}
      <div
        ref={containerRef}
        className="relative w-full max-w-6xl overflow-x-auto scrollbar-hide -mx-6 px-6"
        aria-roledescription="carousel"
      >
        <div className="flex items-center gap-6 py-6">
          {slides.map((s, i) => (
            <div
              key={s.id}
              ref={(el) => (slideRefs.current[i] = el)}
              className="slide relative flex-shrink-0 min-w-[85%] md:min-w-[65%] rounded-2xl overflow-hidden bg-white dark:bg-gray-800 shadow-lg"
              style={{ scrollSnapAlign: "center" }}
            >
              {/* Background image fills the slide */}
              <div className="relative w-full h-[240px] md:h-[260px]">
                <Image
                  src={s.img}
                  alt={s.title}
                  fill
                  className="object-cover"
                  priority
                />
                {/* subtle gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent pointer-events-none" />
              </div>

              {/* Overlay content */}
              <div className="p-6 md:p-8">
                <motion.h3
                  key={s.title}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.35 }}
                  className="text-4xl md:text-6xl font-extrabold text-white drop-shadow-[0_6px_18px_rgba(0,0,0,0.6)]"
                >
                  {s.title}
                </motion.h3>

                <p className="mt-2 text-sm md:text-base text-white/90 max-w-2xl">
                  {s.subtitle}
                </p>

                <button className="mt-4 inline-block px-4 md:px-5 py-2 rounded-full bg-white text-black font-medium shadow-sm hover:opacity-95 transition">
                  {s.btn}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* controls row: dots centered + arrows right */}
      <div className="flex items-center justify-between w-full max-w-6xl mt-4 px-6">
        {/* empty left spacer to help with alignment on very wide screens */}
        <div className="w-1/3 hidden md:block" />

        {/* dots - centered */}
        <div className="flex justify-center gap-3">
          {slides.map((_, i) => (
            <button
              key={i}
              aria-label={`Go to slide ${i + 1}`}
              onClick={() => manualNavigate(i)}
              className={`w-3 h-3 rounded-full transition ${
                i === index
                  ? "bg-black dark:bg-white"
                  : "bg-gray-300 dark:bg-gray-600"
              }`}
            />
          ))}
        </div>

        {/* arrows - right aligned */}
        <div className="flex gap-2 justify-end w-1/3">
          <button
            onClick={prevSlide}
            aria-label="Previous slide"
            className="w-10 h-10 rounded-full bg-white/90 dark:bg-black/80 flex items-center justify-center shadow hover:scale-105 transition"
          >
            {"<"}
          </button>
          <button
            onClick={nextSlide}
            aria-label="Next slide"
            className="w-10 h-10 rounded-full bg-white/90 dark:bg-black/80 flex items-center justify-center shadow hover:scale-105 transition"
          >
            {">"}
          </button>
        </div>
      </div>
    </div>
  );
}
