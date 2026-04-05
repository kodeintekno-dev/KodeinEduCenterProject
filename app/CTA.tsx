export default function CTA() {
  return (
    <main className="relative bg-[linear-gradient(to_bottom,#FFC067_0%,#F6B562_50%,#FFFFFF_100%)] min-h-screen my-4 lg:m-7 lg:rounded-3xl flex flex-col justify-center items-center px-20 py-20 gap-16 shadow-xl overflow-hidden">
      <img
        src="/desktop/gabung-kiri.svg"
        alt=""
        className="hidden lg:block absolute bottom-0 left-0 w-150 "
      />

      <img
        src="/desktop/gabung-kanan.svg"
        alt=""
        className="hidden lg:block absolute bottom-0 right-0 w-150 "
      />

      <img
        src="/tab/gabung-tab.svg"
        alt=""
        className="hidden md:block lg:hidden absolute bottom-0 left-0 w-150 z-0"
      />

      <img
        src="/phone/gabung.svg"
        alt=""
        className="block md:hidden lg:hidden absolute bottom-0 left-0 w-150 z-0"
      />

      <div className="flex flex-col gap-6 z-10">
        <h1 className="text-[60px] text-black font-black text-center">
          Gabung Sekarang!
        </h1>
        <p className="text-[20px] text-black text-center z-10">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>
      </div>

      <div className="flex flex-col w-full md:flex md:flex-row md:justify-center gap-6 z-10">
        <button className="w-full md:w-59.5 h-12.5 bg-black text-white  rounded-lg">
          Daftar Sekarang
        </button>
        <button className="w-full md:w-59.5 h-12.5 bg-black text-white  rounded-lg">
          Daftar Sekarang
        </button>
      </div>
    </main>
  );
}
