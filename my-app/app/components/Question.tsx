"use client";

import { useState } from "react";

  type QuestionData = {
    question: string;
    answer: string;
  };

  type props = {
    data: QuestionData;
  }

export default function Questions({ data }: props) {
  const [open, setOpen] = useState(false);

  return (
    <div
      onClick={() => setOpen(!open)}
      className="bg-white p-6 rounded-xl shadow cursor-pointer"
    >
      <div className="flex justify-between items-start">
        <h3 className="font-semibold text-xl text-black">
          {data.question}
        </h3>

        <span className="text-black text-4xl">
          {open ? "-" : "+"}
        </span>
      </div>

        <p className={`text-gray-600 mt-3 transition-all duration-500 ease-in-out transform ${open ? "max-h-40 opacity-100" : "max-h-0 opacity-0"}`}>
          {data.answer}
        </p>
      
    </div>
  );
}
