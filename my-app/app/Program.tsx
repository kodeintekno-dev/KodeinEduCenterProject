"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const data = [
  {
    picture: "/Rectangle-9.png",
    role: "UI&UX Designer",
    title: "Bangun 3 studi kasus portofolio.",
    desc: "Online · 9 Modul",
  },
  {
    picture: "/Rectangle-9.png",
    role: "Web Developer",
    title: "Buat website responsif dari nol.",
    desc: "Online · 9 Modul",
  },
  {
    picture: "/Rectangle-9.png",
    role: "Mobile Developer",
    title: "Buat aplikasi mobile dengan Flutter.",
    desc: "Online · 9 Modul",
  },
  {
    picture: "/Rectangle-9.png",
    role: "Data Scientist",
    title: "Analisis data dengan Python.",
    desc: "Online · 9 Modul",
  },
  {
    picture: "/Rectangle-9.png",
    role: "Game Developer",
    title: "Buat game 2D dengan Unity.",
    desc: "Online · 9 Modul",
  },
  {
    picture: "/Rectangle-9.png",
    role: "AI Engineer",
    title: "Bangun model AI dengan TensorFlow.",
    desc: "Online · 9 Modul",
  },
];

export default function Program() {
  const [index, setIndex] = useState(0);
  const [visibleCards, setVisibleCards] = useState(3);

  /* RESPONSIVE */
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) setVisibleCards(1);
      else if (window.innerWidth < 1024) setVisibleCards(2);
      else setVisibleCards(3);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  /* SLIDER CONFIG */
  const CARD_WIDTH = 380;
  const GAP = 24;
  const SLIDE_WIDTH = CARD_WIDTH + GAP;
  const maxIndex = data.length - visibleCards;

  const next = () => {
    if (index >= maxIndex) return;
    setIndex((prev) => prev + 1);
  };

  const prev = () => {
    if (index <= 0) return;
    setIndex((prev) => prev - 1);
  };

  return (
    <main className="relative bg-gray-200 m-7 rounded-3xl p-16 overflow-hidden shadow-xl h-[850px]">
      <img
        src="/Group-37.png"
        alt=""
        className="absolute top-0 right-0 w-[520px] pointer-events-none select-none z-0"
      />

      <img
        src="/Group-47.png"
        alt=""
        className="
    absolute bottom-0 left-0
    w-[520px]
    object-cover
    rounded-xl
    pointer-events-none
    select-none
    z-0
  "
      />

      {/* HEADER */}
      <div className="flex justify-center items-center mb-14">
        <h1 className="text-5xl lg:text-7xl font-black text-black">
          Program Kami
        </h1>
      </div>

      {/* SLIDER */}
      <div className="relative overflow-hidden">
        <motion.div
          drag="x"
          dragConstraints={{
            left: -maxIndex * SLIDE_WIDTH,
            right: 0,
          }}
          animate={{ x: -index * SLIDE_WIDTH }}
          transition={{ type: "spring", stiffness: 120, damping: 25 }}
          onDragEnd={(_, info) => {
            if (info.offset.x < -100 && index < maxIndex) next();
            if (info.offset.x > 100 && index > 0) prev();
          }}
          className="flex gap-6 cursor-grab active:cursor-grabbing z-10"
        >
          {data.map((item, i) => (
            <div
              key={i}
              className="w-[300px] h-[475px] bg-gray-100 rounded-3xl p-6 shrink-0 shadow-lg flex flex-col justify-between"
            >
              <div className="flex flex-col items-start justify-start">
                <img
                  src={item.picture}
                  alt={item.role}
                  className="w-full h-48 object-cover rounded-xl mb-4"
                />
                <p className="text-lg text-gray-700">{item.role}</p>
                <h4 className="text-xl font-semibold text-black mt-1">
                  {item.title}
                </h4>
              </div>

              <div className="flex flex-col items-start justify-start">
                <p className="text-gray-600 mt-2">{item.desc}</p>
                <button className="mt-4 w-full h-12 py-2 bg-black text-white rounded-lg hover:bg-gray-800 transition cursor-pointer">
                  Mulai Belajar
                </button>
              </div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* CONTROLS */}
      <div className="flex items-center justify-center gap-6 mt-12">
        {/* PREV */}
        <button
          onClick={prev}
          disabled={index === 0}
          className={`w-12 h-12 rounded-full flex items-center justify-center cursor-pointer 
      ${index === 0 ? "bg-gray-300 cursor-not-allowed" : "bg-black hover:scale-105"}
      transition`}
        >
          ←
        </button>

        {/* INDICATOR */}
        <div className="flex items-center gap-3 px-6 py-2 rounded-full shadow">
          {Array.from({ length: maxIndex + 1 }).map((_, i) => (
            <motion.div
              key={i}
              onClick={() => setIndex(i)}
              animate={{
                width: i === index ? 32 : 10,
                backgroundColor: i === index ? "#000" : "#9CA3AF",
              }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className="h-2 rounded-full cursor-pointer"
            />
          ))}
        </div>

        {/* NEXT */}
        <button
          onClick={next}
          disabled={index === maxIndex}
          className={`w-12 h-12 rounded-full flex items-center justify-center text-white cursor-pointer
      ${index === maxIndex ? "bg-gray-400 cursor-not-allowed" : "bg-black text-white hover:scale-105"}
      transition`}
        >
          →
        </button>
      </div>
    </main>
  );
}
