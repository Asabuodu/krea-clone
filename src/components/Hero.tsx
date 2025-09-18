"use client";
import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

const slides = [
  {
    id: "wan",
    title: "WAN 2.2",
    subtitle: "WAN 2.2 Image generation ",
    paragraph:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    img: "/assets/1.jpg",
    btn: "Try WAN 2.2",
  },
  {
    id: "flux",
    title: "FLUX.1 Krea",
    subtitle: "FLUX.1 Krea   ",
    paragraph:
      "We're making the weights to our FLUX.1 model open-source. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    img: "/assets/2.jpg",
    btn: "Explore",
  },
  {
    id: "open",
    title: "Open Source",
    subtitle: "Explore a variety of open.",
    paragraph:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna.",
    img: "/assets/3.jpg",
    btn: "Discover",
  },
  {
    id: "source1",
    title: "Open Source",
    subtitle: "Explore a variety of open.",
    paragraph:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    img: "/assets/4.jpg",
    btn: "Discover",
  },
  {
    id: "source2",
    title: "Open Source",
    subtitle: "Explore a variety of open.",
    paragraph:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    img: "/assets/5.jpg",
    btn: "Discover",
  },
  {
    id: "source3",
    title: "Open Source",
    subtitle: "Explore a variety of open.",
    paragraph:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    img: "/assets/6.jpg",
    btn: "Discover",
  },
];

export default function HeroCarousel() {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const slideRefs = useRef<Array<HTMLDivElement | null>>([]);
  const resumeTimeout = useRef<number | null>(null);

  const [index, setIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  // center current slide
  useEffect(() => {
    const container = containerRef.current;
    const slide = slideRefs.current[index];
    if (!container || !slide) return;
    const left =
      slide.offsetLeft - (container.clientWidth - slide.clientWidth) / 2;
    container.scrollTo({ left, behavior: "smooth" });
  }, [index]);

  // autoplay
  useEffect(() => {
    if (isPaused) return;
    const id = window.setInterval(
      () => setIndex((i) => (i + 1) % slides.length),
      5000
    );
    return () => clearInterval(id);
  }, [isPaused]);

  function manualNavigate(newIndex: number) {
    setIndex(newIndex);
    setIsPaused(true);
    if (resumeTimeout.current) window.clearTimeout(resumeTimeout.current);
    resumeTimeout.current = window.setTimeout(() => setIsPaused(false), 8000);
  }

  const nextSlide = () => manualNavigate((index + 1) % slides.length);
  const prevSlide = () =>
    manualNavigate((index - 1 + slides.length) % slides.length);

  return (
    <div className="w-full flex flex-col items-center mt-10 mb-10">
      {/* scrolling container */}
      <div
        ref={containerRef}
        className="relative w-full max-w-8xl overflow-x-auto scrollbar-hide mx-6 px-6"
        aria-roledescription="carousel"
      >
        <div className="flex gap-6 py-8">
          {slides.map((s, i) => (
            <div
              key={s.id}
            //   ref={(el) => (slideRefs.current[i] = el)}
            ref={(el: HTMLDivElement | null) => {
            slideRefs.current[i] = el;
            }}

              className="slide relative flex-shrink-0 w-[90%] sm:w-[70%] md:w-[80%] lg:w-[60%] rounded-4xl overflow-hidden shadow-lg mx-7 mr-3 bg-cover bg-center h-[480px] md:h-[680px]"
              style={{ backgroundImage: `url(${s.img})` }}
            >
              {/* overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />

              {/* content */}
              <div className="relative z-10 p-6 md:p-12 flex flex-col justify-between h-full">

                <motion.h2
                  key={s.title}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.35 }}
                  className="my-auto font-extrabold text-white 
                            text-3xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl 
                            text-center tracking-wider 
                            drop-shadow-[0_6px_18px_rgba(0,0,0,0.6)]"
                >
                  {s.title}
                </motion.h2>

                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mt-6">
                  <div className="flex flex-col md:w-1/2">
                    <h1 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-mono text-white/90 font-extrabold">
                      {s.subtitle}
                    </h1>
                    <p className="mt-2 text-xs sm:text-sm md:text-base lg:text-lg text-white/90 max-w-lg">
                      {s.paragraph}
                    </p>
                  </div>

                  <button className="bg-white text-black font-semibold 
                                    px-4 py-2 sm:px-6 sm:py-3 
                                    rounded-full hover:scale-105 transition 
                                    drop-shadow-[0_6px_18px_rgba(0,0,0,0.3)] 
                                    w-fit hover:shadow-lg text-sm sm:text-base md:text-lg">
                    {s.btn}
                  </button>
                </div>

              </div>
            </div>
          ))}
        </div>
      </div>

      {/* controls */}
      <div className="flex items-center justify-between w-full max-w-8xl px-6">
        <div className="w-1/3 hidden md:block" />
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
        <div className="flex gap-2 justify-end w-1/3 clear-left">
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
