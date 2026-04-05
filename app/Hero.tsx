"use client";
import Image from "next/image";
export default function Hero() {
  return (
    <main className="bg-[linear-gradient(to_right,#F6B562_50%,#FFFFFF_100%)] md:min-h-213.5 max-w-full h-fit text-black my-4 lg:m-7 lg:rounded-3xl flex flex-col lg:flex-row md:justify-between overflow-hidden">
      {" "}
      <div className="Herolefttext flex flex-col gap-6 lg:gap-8.25 px-6 lg:px-35 py-10 lg:py-0 justify-center lg:max-w-xl">
        {" "}
        <div className="flex flex-col w-full md:w-full lg:w-142.75 gap-6 lg:gap-8.25">
          {" "}
          <h1 className="text-3xl md:text-5xl lg:text-[65px] leading-tight tracking-tight font-black">
            {" "}
            Siap Kerja dengan Skill Digital yang Relevan{" "}
          </h1>{" "}
          <h2 className="text-black text-base md:text-lg lg:text-[20px] leading-relaxed md:leading-6.25">
            {" "}
            Tingkatkan skill digital Anda dengan metode belajar terarah, materi
            terstruktur, dan praktik langsung sesuai kebutuhan industri.{" "}
          </h2>{" "}
        </div>{" "}
        <button className="w-full md:w-full lg:w-fit px-8 lg:px-10 py-3.5 text-base md:text-[18px] font-semibold tracking-tight md:tracking-[-5%] bg-[#F37E2E] hover:bg-[#0B55C3] cursor-pointer transition text-white rounded-full lg:rounded-lg">
          {" "}
          Konsultasi Gratis{" "}
        </button>{" "}
      </div>{" "}
      <div>
        {" "}
        <img
          src="/desktop/Hero.svg"
          alt="Hero Image"
          width={500}
          height={500}
          className=" hidden lg:block w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg h-auto md:h-full object-contain md:object-cover"
        />{" "}
        <img
          src="/tab/Hero.svg"
          alt="Hero Image"
          width={500}
          height={500}
          className="hidden md:block lg:hidden w-full max-w md:max-w h-auto md:h-full object-contain md:object-cover"
        />{" "}
        <img
          src="/phone/Hero.svg"
          alt="Hero Image"
          width={500}
          height={500}
          className=" md:hidden w-full max-w object-contain md:object-cover"
        />{" "}
      </div>{" "}
    </main>
  );
}
