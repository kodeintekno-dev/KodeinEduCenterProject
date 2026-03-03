"use client";

import Hero from "./Hero";
import About from "./About";
import Steps from "./Steps";
import Program from "./Program";
import CTA from "./CTA";
import Testimonial from "./Testimonial";
import FaQ from "@/app/FaQ";

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Steps />
      <Program />
      <CTA />
      <Testimonial />
      <FaQ />
    </main>
  );
}
