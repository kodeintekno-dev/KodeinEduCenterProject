"use client";

import FaQ from "@/app/FaQ";
<<<<<<< HEAD
import Testimonials from "./components/Testimonials";
=======
import Testimonial from "./Testimonial";
>>>>>>> develop

export default function Home() {
  return (
    <main>
      <div className="bg-linear-to-r from-[#F6B562] to-[#FFE8BB] min-h-screen text-black m-7 rounded-3xl flex flex-row justify-between overflow-hidden">
        <div className="Herolefttext flex flex-col gap-6 px-20 py-24 justify-center max-w-xl">
          <div className="flex flex-col w-143 ">
            <h1 className="text-[64px] font-bold leading-tight">
              Siap Kerja dengan Skill Digital yang Relevan
            </h1>

            <h2 className="text-gray-600 text-lg leading-relaxed">
              Tingkatkan skill digital Anda dengan metode belajar terarah,
              materi terstruktur, dan praktik langsung sesuai kebutuhan
              industri.
            </h2>
          </div>

          <button className="w-50 px-6 py-3 bg-[#F37E2E] text-white rounded-lg hover:opacity-90 transition">
            Konsultasi Gratis
          </button>
        </div>

        <div className="Herorightimg flex justify-end items-center">
          <img
            src="/Vector.png"
            alt="Hero Image"
            className="h-full object-cover"
          />
        </div>
      </div>

      <div
        className="relative
  bg-[linear-gradient(to_right,#FFFFFF_0%,#F6B562_50%,#FFFFFF_100%)]
  min-h-screen m-7 rounded-3xl
  flex justify-between items-center
  px-20 py-20 gap-16
  shadow-xl overflow-hidden"
      >
        <div className="flex flex-col max-w-2xl gap-8 px-10 items-center  ">
          <div className="flex flex-col gap-6">
            <h1 className="text-[66px] font-black text-black leading-tight">
              Program Pembelajaran <br /> Skill Digital
            </h1>

            <p className="text-[20px] text-black max-w-xl leading-relaxed">
              Kodein Edu Center memiliki program pembelajaran skill digital
              berbasis praktik untuk pelajar, mahasiswa, dan pemula dalam
              membangun portofolio sesuai kebutuhan industri.
            </p>

            <div className="flex gap-4 items-center">
              <p className="text-[20px] font-bold text-black">
                Siap kerja dengan skill digital dan portofolio berbasis project.
              </p>
              <img src="/Frame.png" alt="" className="w-8" />
            </div>
          </div>

          <div className="flex flex-col gap-6 mt-6">
            <div className="flex gap-4 items-start">
              <img className="w-11" src="/frame-1.png" alt="" />
              <div>
                <h2 className="text-black font-bold text-lg">
                  Pembelajaran Praktis
                </h2>
                <p className="text-black">
                  Materi disampaikan melalui praktik dan studi kasus.
                </p>
              </div>
            </div>

            <div className="flex gap-4 items-start">
              <img className="w-11" src="/frame-3.png" alt="" />
              <div>
                <h2 className="text-black font-bold text-lg">Project Based</h2>
                <p className="text-black">
                  Peserta mengerjakan project untuk membangun portofolio.
                </p>
              </div>
            </div>

            <div className="flex gap-4 items-start">
              <img className="w-11" src="/frame-2.png" alt="" />
              <div>
                <h2 className="text-black font-bold text-lg">
                  Bimbingan Mentor Ahli
                </h2>
                <p className="text-black">
                  Peserta dibimbing selama proses belajar berlangsung.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="flex justify-center items-center px-10">
          <img src="/itulah.png" alt="" className="w-200" />
        </div>
      </div>

      <div
        className="relative bg-black min-h-screen m-7 rounded-3xl 
                flex flex-col items-center 
                px-24 py-28 gap-20 
                shadow-xl overflow-hidden text-white"
      >
        <div className="flex flex-col gap-8 items-center text-center max-w-4xl">
          <h1 className="text-7xl font-black leading-tight">
            Belajar Secara Praktis dan Terarah
          </h1>
          <p className="text-xl text-gray-300">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
        </div>

        <div className="relative z-10 flex flex-wrap justify-center gap-10">
          <div
            className="flex flex-col w-90 h-100 bg-white text-black 
                    rounded-3xl p-10 gap-8 items-center 
                    shadow-2xl"
          >
            <div className="w-30 h-30 bg-gray-300 rounded-full"></div>
            <div className="flex flex-col items-center gap-4 text-center">
              <h3 className="font-bold text-xl">Dapatkan sertifikat</h3>
              <p className="text-base text-gray-600">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
            </div>
          </div>

          <div
            className="flex flex-col w-90 h-100 bg-white text-black 
                    rounded-3xl p-10 gap-8 items-center 
                    shadow-2xl"
          >
            <div className="w-30 h-30 bg-gray-300 rounded-full"></div>
            <div className="flex flex-col items-center gap-4 text-center">
              <h3 className="font-bold text-xl">Dapatkan sertifikat</h3>
              <p className="text-base text-gray-600">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
            </div>
          </div>

          <div
            className="flex flex-col w-90 h-100 bg-white text-black 
                    rounded-3xl p-10 gap-8 items-center 
                    shadow-2xl"
          >
            <div className="w-30 h-30 bg-gray-300 rounded-full"></div>
            <div className="flex flex-col items-center gap-4 text-center">
              <h3 className="font-bold text-xl">Dapatkan sertifikat</h3>
              <p className="text-base text-gray-600">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
            </div>
          </div>

          <div
            className="flex flex-col w-90 h-100 bg-white text-black 
                    rounded-3xl p-10 gap-8 items-center 
                    shadow-2xl"
          >
            <div className="w-30 h-30 bg-gray-300 rounded-full"></div>
            <div className="flex flex-col items-center gap-4 text-center">
              <h3 className="font-bold text-xl">Dapatkan sertifikat</h3>
              <p className="text-base text-gray-600">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
            </div>
          </div>
        </div>
<<<<<<< HEAD
      </div> */}

      <div>
        <Testimonials />
=======
        <img
          src="/haha.png"
          alt=""
          className="absolute bottom-0 left-0 w-152.5 opacity-90 "
        />
      </div>

      <div
        className="relative bg-white min-h-screen m-7 rounded-3xl 
                flex flex-col items-center 
                px-24 py-28 gap-20 
                shadow-xl overflow-hidden text-black"
      >
        <h1 className="text-[66px] font-black text-black">Program Kami</h1>

        <img
          src="/Group-37.png"
          alt=""
          className="absolute top-0 right-0 w-130"
        />

        <div className="relative">
          <div className="flex gap-8 overflow-x-auto scroll-smooth no-scrollbar pb-10">
            <div className="shrink-0 w-75 h-130 bg-white rounded-2xl shadow-xl p-4">
              <img
                src="/Rectangle-9.png"
                alt=""
                className="w-72 h-58.5 object-cover rounded-xl"
              />

              <div className="flex flex-col gap-4 mt-4 text-black">
                <p className="text-sm">UI/UX</p>
                <h3 className="font-semibold text-xl">
                  Bangun 3 studi kasus portfolio.
                </h3>
                <p className="text-sm text-gray-600">Online • 9 Modul</p>
                <button className="mt-4 bg-black text-white py-3 rounded-lg">
                  Mulai Belajar
                </button>
              </div>
            </div>

            <div className="shrink-0 w-75 h-130 bg-white rounded-2xl shadow-xl p-4">
              <img
                src="/Rectangle-9.png"
                alt=""
                className="w-72 h-58.5 object-cover rounded-xl"
              />
              <div className="flex flex-col gap-4 mt-4 text-black">
                <p className="text-sm">Web Development</p>
                <h3 className="font-semibold text-xl">
                  Buat website responsif dari nol.
                </h3>
                <p className="text-sm text-gray-600">Online • 9 Modul</p>
                <button className="mt-4 bg-black text-white py-3 rounded-lg">
                  Mulai Belajar
                </button>
              </div>
            </div>
            <div className="shrink-0 w-75 h-130 bg-white rounded-2xl shadow-xl p-4">
              <img
                src="/Rectangle-9.png"
                alt=""
                className="w-72 h-58.5 object-cover rounded-xl"
              />
              <div className="flex flex-col gap-4 mt-4 text-black">
                <p className="text-sm">Graphic Design</p>
                <h3 className="font-semibold text-xl">
                  Desain konten untuk kebutuhan branding.
                </h3>
                <p className="text-sm text-gray-600">Online • 9 Modul</p>
                <button className="mt-4 bg-black text-white py-3 rounded-lg">
                  Mulai Belajar
                </button>
              </div>
            </div>

            <div className="shrink-0 w-75 h-130 bg-white rounded-2xl shadow-xl p-4">
              <img
                src="/Rectangle-9.png"
                alt=""
                className="w-72 h-58.5 object-cover rounded-xl"
              />
              <div className="flex flex-col gap-4 mt-4 text-black">
                <p className="text-sm">Digital Marketing</p>
                <h3 className="font-semibold text-xl">
                  Kelola strategi promosi digital.
                </h3>
                <p className="text-sm text-gray-600">Online • 9 Modul</p>
                <button className="mt-4 bg-black text-white py-3 rounded-lg">
                  Mulai Belajar
                </button>
              </div>
            </div>
          </div>

          <div className="flex gap-4 absolute right-0 -bottom-16">
            <button className="w-14 h-14 rounded-full bg-gray-300 flex items-center justify-center">
              ←
            </button>

            <button className="w-14 h-14 rounded-full bg-black text-white flex items-center justify-center">
              →
            </button>
          </div>
        </div>
      </div>

      <div className="relative bg-[linear-gradient(to_bottom,#FFC067_0%,#F6B562_50%,#FFFFFF_100%)] min-h-screen m-7 rounded-3xl flex flex-col justify-center items-center px-20 py-20 gap-16 shadow-xl overflow-hidden">
        <img
          src="/Group-47.png"
          alt=""
          className="absolute bottom-0 left-0 w-200 "
        />

        <img
          src="/Group-40.png"
          alt=""
          className="absolute bottom-0 right-0 w-200 "
        />

        <div className="flex flex-col gap-6">
          <h1 className="text-[60px] text-black font-black text-centers">
            Gabung Sekarang!
          </h1>
          <p className="text-[20px] text-black text-center">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
        </div>

        <div className="flex gap-6">
          <button className="w-59.5 h-12.5 bg-black text-white  rounded-lg">
            Daftar Sekarang
          </button>
          <button className="w-59.5 h-12.5 bg-black text-white  rounded-lg">
            Daftar Sekarang
          </button>
        </div>
      </div>
      
      <Testimonial />

      <FaQ />

      <div className="relative bg-[#FFD79E] min-h-screen flex flex-col px-20 py-20 gap-16 shadow-xl overflow-hidden">
        <h1 className="text-[66px] text-black font-black">Kontak</h1>
        <div className="flex gap-6">
          <div className="bg-white w-57.5 h-57.5"></div>
          <div className="bg-white w-57.5 h-57.5"></div>
          <div className="bg-white w-57.5 h-57.5"></div>
          <div className="bg-white w-200 h-57.5"></div>
        </div>
>>>>>>> develop
      </div>
    </main>
  );
}
