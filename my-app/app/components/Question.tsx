"use client";

import { useState } from "react";

export default function Questions({ data }) {
  const [open, setOpen] = useState(false);

  return (
    <div
      onClick={() => setOpen(!open)}
      className="bg-white p-6 rounded-xl shadow cursor-pointer"
    >
      <div className="flex justify-between items-start">
        <h3 className="font-semibold text-black">
          {data.question}
        </h3>

        <span className="text-black text-xl font-bold">
          {open ? "-" : "+"}
        </span>
      </div>

      {open && (
        <p className="text-gray-600 mt-3 ease-in-out duration-800">
          {data.answer}
        </p>
      )}
    </div>
  );
}
