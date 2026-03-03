export default function CTA() {
  return (
    <main className="relative bg-[linear-gradient(to_bottom,#FFC067_0%,#F6B562_50%,#FFFFFF_100%)] min-h-screen m-7 rounded-3xl flex flex-col justify-center items-center px-20 py-20 gap-16 shadow-xl overflow-hidden">
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
    </main>
  );
}
