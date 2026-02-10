export default function Home() {
  return (
    <main>
      <div className="bg-white min-h-screen text-black m-7 rounded-3xl flex flex-row justify-between overflow-hidden">
        <div className="Herolefttext flex flex-col gap-6 m-20 justify-center w-150">
          <h1 className="text-[65px] font-bold">
            Belajar Skill Digital dengan Cara yang Tepat
          </h1>
          <h2>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
            rhoncus ante turpis, et ornare dui interdum at. Etiam libero urna,
            tincidunt ac viverra ac, facilisis at justo. Donec vitae lorem ac
            odio vestibulum rhoncus. Quisque in iaculis purus.
          </h2>
          <button className="w-40 h-12 bg-[#F37E2E] text-white flex justify-center items-center rounded-md">
            <p>CTA</p>
          </button>
        </div>

        <div className="Herorightimg flex flex-col gap-6 m-40 justify-center w-150">
          <img
            src="/Group-33.png"
            alt="Hero Image"
            width={621.49}
            height={468}
            className="m-20"
          />
        </div>
      </div>

      <div
        className="relative bg-[#0B55C3] min-h-screen m-7 rounded-3xl 
                flex flex-col items-center justify-center 
                px-6 py-20 gap-16 
                shadow-xl overflow-hidden"
      >
        {/* Pattern kanan atas */}
        <img
          src="/Pattern-2.png"
          alt=""
          className="absolute 
               -right-10
               w-225
               opacity-40
               rotate-12
               pointer-events-none"
        />

        {/* Pattern kiri bawah */}
        <img
          src="/Pattern.png"
          alt=""
          className="absolute 
               -left-8
               w-185
               opacity-40
               rotate-5
               pointer-events-none"
        />

        {/* Konten */}
        <div className="max-w-3xl flex flex-col gap-6 items-center text-center z-10">
          <h1 className="text-[48px] md:text-[65px] font-bold text-white leading-tight">
            Mengapa kami hadir
          </h1>
          <p className="text-[18px] md:text-[20px] text-white/90 max-w-2xl">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
            rhoncus ante turpis, et ornare dui interdum at.
          </p>
        </div>

        {/* CTA */}
        <div className="flex flex-col md:flex-row gap-6 z-10">
          <button className="w-60 h-12 bg-[#F37E2E] text-white rounded-md">
            CTA
          </button>
          <button className="w-60 h-12 bg-[#F37E2E] text-white rounded-md">
            CTA
          </button>
        </div>
      </div>

      <div
        className="Ketiga bg-white min-h-screen m-7 rounded-3xl 
                flex flex-col p-8
                gap-16 
                shadow-xl overflow-hidden"
      >
        <div className="flex flex-col gap-5 m-20 p-6">
          <h1 className="text-[48px] md:text-[65px] font-bold text-black leading-tight text-center">
            Bagaimana cara kerjanya
          </h1>
          <p className="text-black text-center">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.{" "}
          </p>
        </div>

        <div className=" card1 flex flex-wrap justify-center">
          <div>
            <div className=" card flex flex-col bg-[#F37E2E] w-80 h-100 rounded-3xl p-8 items-center gap-6 m-10 float-left shadow-lg">
              <div className="rounded-full border bg-white w-25 h-25 "></div>
              <div className="flex flex-col items-center gap-8">
                <h3 className="font-semibold text-[24px] text-center">
                  Atur Rencanamu
                </h3>
                <p className="text-[18px] text-center">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.{" "}
                </p>
              </div>
            </div>
          </div>
          <div>
            <div className=" card2 flex flex-col bg-[#F37E2E] w-80 h-100 rounded-3xl p-8 items-center gap-6 m-10 float-left shadow-lg">
              <div className="rounded-full border bg-white w-25 h-25 "></div>
              <div className="flex flex-col items-center gap-8">
                <h3 className="font-semibold text-[24px] text-center">
                  Temukan kursusmu
                </h3>
                <p className="text-[18px] text-center">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.{" "}
                </p>
              </div>
            </div>
          </div>

          <div>
            <div className=" card3 flex flex-col bg-[#F37E2E] w-80 h-100 rounded-3xl p-8 items-center gap-6 m-10 float-left shadow-lg">
              <div className="rounded-full border bg-white w-25 h-25 "></div>
              <div className="flex flex-col items-center gap-8">
                <h3 className="font-semibold text-[24px] text-center">
                  Pesan tempatmu
                </h3>
                <p className="text-[18px] text-center">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.{" "}
                </p>
              </div>
            </div>
          </div>

          <div>
            <div className=" card4 flex flex-col bg-[#F37E2E] w-80 h-100 rounded-3xl p-8 items-center gap-6 m-10 float-left shadow-lg">
              <div className="rounded-full border bg-white w-25 h-25"></div>
              <div className="flex flex-col items-center gap-8">
                <h3 className="font-semibold text-[24px] text-center">
                  Dapatkan sertifikat
                </h3>
                <p className="text-[18px] text-center">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.{" "}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        className="Keempat relative bg-[#0B55C3] min-h-screen m-7 rounded-3xl 
                flex flex-col p-8
                gap-16 
                shadow-xl overflow-hidden"
      >
        <img
          src="/Pattern-2.png"
          alt=""
          className="absolute 
               -right-10
               w-225
               opacity-40
               rotate-12
               pointer-events-none"
        />

        {/* Pattern kiri bawah */}
        <img
          src="/Pattern.png"
          alt=""
          className="absolute 
               -left-8
               w-185
               opacity-40
               rotate-5
               pointer-events-none"
        />

        <div
          className="Keempat relative bg-[#0B55C3] min-h-screen m-7 rounded-3xl 
             flex flex-col p-8 gap-16 
             shadow-xl overflow-hidden"
        >
          {/* Pattern kanan */}
          <img
            src="/Pattern-2.png"
            alt=""
            className="absolute 
               top-0 -right-20
               w-225
               opacity-40
               rotate-12
               pointer-events-none"
          />

          {/* Pattern kiri */}
          <img
            src="/Pattern.png"
            alt=""
            className="absolute 
               bottom-0 -left-20
               w-185
               opacity-40
               rotate-5
               pointer-events-none"
          />

          <div className="flex flex-col p-20 gap-20 z-10">
            <h1 className="font-bold text-white text-[64px]">Program Kami</h1>

            <div className="flex flex-row gap-12 flex-wrap justify-center">
              {/* CARD */}
              <div
                className="card1 flex flex-col items-center bg-white 
                      w-75 h-130 p-2 gap-6 
                      shadow-lg rounded-xl"
              >
                <img
                  src="/Rectangle-9.png"
                  alt="image"
                  className="w-72 h-58.5 rounded-md"
                />
                <div className="flex flex-col gap-5 p-2 text-black">
                  <p className="text-[14px]">Kelas UI&UX</p>
                  <h3 className="font-semibold text-[22px]">
                    Lorem ipsum dolor sit amet
                  </h3>
                  <p className="text-[14px]">Online • 9 Kelas</p>
                </div>
                <button className="w-60 h-12 bg-black text-white rounded-md">
                  CTA
                </button>
              </div>

              {/* CARD */}
              <div
                className="card2 flex flex-col items-center bg-white
                      w-75 h-130 p-2 gap-6 
                      shadow-lg rounded-xl"
              >
                <img
                  src="/Rectangle-9.png"
                  alt="image"
                  className="w-72 h-58.5 rounded-md"
                />
                <div className="flex flex-col gap-5 p-2 text-black">
                  <p className="text-[14px]">Kelas UI&UX</p>
                  <h3 className="font-semibold text-[22px]">
                    Lorem ipsum dolor sit amet
                  </h3>
                  <p className="text-[14px]">Online • 9 Kelas</p>
                </div>
                <button className="w-60 h-12 bg-black text-white rounded-md">
                  CTA
                </button>
              </div>

              {/* CARD */}
              <div
                className="card3 flex flex-col items-center bg-white
                      w-75 h-130 p-2 gap-6 
                      shadow-lg rounded-xl"
              >
                <img
                  src="/Rectangle-9.png"
                  alt="image"
                  className="w-72 h-58.5 rounded-md"
                />
                <div className="flex flex-col gap-5 p-2 text-black">
                  <p className="text-[14px]">Kelas UI&UX</p>
                  <h3 className="font-semibold text-[22px]">
                    Lorem ipsum dolor sit amet
                  </h3>
                  <p className="text-[14px]">Online • 9 Kelas</p>
                </div>
                <button className="w-60 h-12 bg-black text-white rounded-md">
                  CTA
                </button>
              </div>

              {/* CARD */}
              <div
                className="card4 flex flex-col items-center bg-white
                      w-75 h-130 p-2 gap-6 
                      shadow-lg rounded-xl"
              >
                <img
                  src="/Rectangle-9.png"
                  alt="image"
                  className="w-72 h-58.5 rounded-md"
                />
                <div className="flex flex-col gap-5 p-2 text-black">
                  <p className="text-[14px]">Kelas UI&UX</p>
                  <h3 className="font-semibold text-[22px]">
                    Lorem ipsum dolor sit amet
                  </h3>
                  <p className="text-[14px]">Online • 9 Kelas</p>
                </div>
                <button className="w-60 h-12 bg-black text-white rounded-md">
                  CTA
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        className="Keempat relative bg-[#0B55C3] min-h-screen m-7 rounded-3xl 
                flex flex-col p-8
                gap-16 
                shadow-xl overflow-hidden"
      ></div>

      <div
        className="Keempat relative bg-[#0B55C3] min-h-screen m-7 rounded-3xl 
                flex flex-col p-8
                gap-16 
                shadow-xl overflow-hidden"
      ></div>

      <div
        className="Kelima bg-[#F37E2E] min-h-screen m-7 rounded-3xl 
             flex flex-row p-12 gap-16 
             shadow-xl overflow-hidden justify-center"
      >
        <div className="gap-7.5 flex flex-col m-20 p-6 text-white justify-center">
          <h1 className="text-[66px] font-bold">
            Pertanyaan yang sering muncul
          </h1>
          <p className="text-[20px]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
        </div>

        <div className="card FAQ flex flex-col gap-6 m-20 p-6 justify-center">
          <div className="card1 flex justify-between bg-white w-187.5 h-18.5 rounded-md p-4 text-black items-center">
            <p className="text-black text-[20px]">
              Kenapa klo ini itu gak begini biar ini ikutan
            </p>
            <p className="text-black text-[20px]">+</p>
          </div>

          <div className="card2 flex justify-between bg-white w-187.5 h-18.5 rounded-md p-4 text-black items-center">
            <p className="text-black text-[20px]">
              Kenapa klo ini itu gak begini biar ini ikutan
            </p>
            <p className="text-black text-[20px]">+</p>
          </div>

          <div className="card3 flex justify-between bg-white w-187.5 h-18.5 rounded-md p-4 text-black items-center">
            <p className="text-black text-[20px]">
              Kenapa klo ini itu gak begini biar ini ikutan
            </p>
            <p className="text-black text-[20px]">+</p>
          </div>

          <div className="card4 flex justify-between bg-white w-187.5 h-18.5 rounded-md p-4 text-black items-center">
            <p className="text-black text-[20px]">
              Kenapa klo ini itu gak begini biar ini ikutan
            </p>
            <p className="text-black text-[20px]">+</p>
          </div>

          <div className="card5 flex justify-between bg-white w-187.5 h-18.5 rounded-md p-4 text-black items-center">
            <p className="text-black text-[20px]">
              Kenapa klo ini itu gak begini biar ini ikutan
            </p>
            <p className="text-black text-[20px]">+</p>
          </div>
        </div>
      </div>
    </main>
  );
}
