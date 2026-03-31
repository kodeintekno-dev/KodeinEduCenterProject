"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const data = [
  {
    name: "Imamudin",
    role: "Ortu. Ananda Anam",
    rating: 5,
    testimonial:
      "Terkait pembelajaran yang disampaikan oleh Sekolah Developer Indonesia itu jauh diluar bayangan saya, saya senang menemukan sekolah ini. Semoga istiqomah.",
  },
  {
    name: "Aisyah Binti Imamudin",
    role: "Ortu. Ananda Budi",
    rating: 4,
    testimonial:
      "Terkait pembelajaran yang disampaikan oleh Sekolah Developer Indonesia itu jauh diluar bayangan saya, saya senang menemukan sekolah ini. Semoga istiqomah.",
  },
  {
    name: "Fauzi Ahmad",
    role: "Ortu. Ananda Citra",
    rating: 5,
    testimonial:
      "Terkait pembelajaran yang disampaikan oleh Sekolah Developer Indonesia itu jauh diluar bayangan saya, saya senang menemukan sekolah ini. Semoga istiqomah.",
  },
  {
    name: "Rina Sari",
    role: "Ortu. Ananda Dedi",
    rating: 4,
    testimonial:
      "Terkait pembelajaran yang disampaikan oleh Sekolah Developer Indonesia itu jauh diluar bayangan saya, saya senang menemukan sekolah ini. Semoga istiqomah.",
  },
  {
    name: "Ahmad Fauzan",
    role: "Ortu. Ananda Evi",
    rating: 5,
    testimonial:
      "Terkait pembelajaran yang disampaikan oleh Sekolah Developer Indonesia itu jauh diluar bayangan saya, saya senang menemukan sekolah ini. Semoga istiqomah.",
  },
  {
    name: "Siti Nurhaliza",
    role: "Ortu. Ananda Fajar",
    rating: 4,
    testimonial:
      "Terkait pembelajaran yang disampaikan oleh Sekolah Developer Indonesia itu jauh diluar bayangan saya, saya senang menemukan sekolah ini. Semoga istiqomah.",
  },
];

export default function Testimonial() {
  const [index, setIndex] = useState(0);
  const [visibleCards, setVisibleCards] = useState(3);

  // RESPONSIVE HANDLER
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

  const CARD_WIDTH = 420;
  const GAP = 20;
  const SLIDE_WIDTH = CARD_WIDTH + GAP;
  const maxIndex = data.length - visibleCards;

  const next = () => {
    if (index < maxIndex) setIndex((prev) => prev + 1);
  };

  const prev = () => {
    if (index > 0) setIndex((prev) => prev - 1);
  };

  return (
    <main className="bg-black m-7 rounded-3xl p-16 overflow-hidden">
      {/* HEADER */}
      <div className="flex justify-between items-center mb-10">
        <div>
          <h1
            className="text-[45px] lg:text-[65px] 
            leading-tight md:leading-16.25 
            tracking-tight md:tracking-[-3%] 
            font-black"
          >
            Apa kata mereka?
          </h1>
          <p className="text-gray-300 
            text-[15px] md:text-[20px] 
            leading-relaxed md:leading-6.25 
            w-full md:w-130 mt-2">
            Testimonial dari orang tua siswa kami
          </p>
        </div>

        <div className="flex gap-3">
          <button
            onClick={prev}
            disabled={index === 0}
            className={`w-12 h-12 rounded-full bg-white text-black cursor-pointer ${
              index === 0 && "opacity-40"
            }`}
          >
            ←
          </button>
          <button
            onClick={next}
            disabled={index === maxIndex}
            className={`w-12 h-12 rounded-full bg-white text-black cursor-pointer ${
              index === maxIndex && "opacity-40"
            }`}
          >
            →
          </button>
        </div>
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
          className="flex gap-5 cursor-grab active:cursor-grabbing"
        >
          {data.map((item, i) => (
            <div
              key={i}
              className="w-105 h-85 bg-white rounded-3xl p-8 shrink-0 shadow-lg"
            >
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-full bg-gray-200" />
                <div>
                  <h3 className="font-bold text-lg text-black">{item.name}</h3>
                  <p className="text-sm text-gray-600">{item.role}</p>
                </div>
              </div>

              <div className="mt-4 text-yellow-400">
                {"⭐".repeat(item.rating)}
              </div>

              <p className="mt-4 text-sm text-gray-700 leading-relaxed line-clamp-4">
                {item.testimonial}
              </p>
            </div>
          ))}
        </motion.div>
      </div>
    </main>
  );
}
