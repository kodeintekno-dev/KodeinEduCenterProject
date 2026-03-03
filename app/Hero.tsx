export default function Hero() {
  return (
    <main
      className="bg-[linear-gradient(to_right,#F6B562_50%,#FFFFFF_100%)] 
      min-h-screen md:min-h-213.5 
      text-black 
      m-4 md:m-7 
      rounded-3xl 
      flex flex-col md:flex-row 
      justify-between 
      overflow-hidden"
    >
      <div
        className="Herolefttext 
        flex flex-col 
        gap-6 md:gap-8.25 
        px-6 sm:px-10 md:px-20 lg:px-35 
        py-10 md:py-0 
        justify-center 
        max-w-xl"
      >
        <div
          className="flex flex-col 
          w-full md:w-142.75 
          gap-6 md:gap-8.25"
        >
          <h1
            className="text-3xl sm:text-4xl md:text-5xl lg:text-[65px] 
            leading-tight md:leading-16.25 
            tracking-tight md:tracking-[-3%] 
            font-black"
          >
            Siap Kerja dengan Skill Digital yang Relevan
          </h1>

          <h2
            className="text-black 
            text-base sm:text-lg md:text-[20px] 
            leading-relaxed md:leading-6.25"
          >
            Tingkatkan skill digital Anda dengan metode belajar terarah, materi
            terstruktur, dan praktik langsung sesuai kebutuhan industri.
          </h2>
        </div>

        <button
          className="w-fit md:w-59.25 
          px-8 md:px-10 
          py-3.5 
          text-base md:text-[18px] 
          font-semibold 
          tracking-tight md:tracking-[-5%] 
          bg-[#F37E2E] 
          hover:bg-[#0B55C3] 
          cursor-pointer 
          transition 
          text-white 
          rounded-lg"
        >
          Konsultasi Gratis
        </button>
      </div>

      <div
        className="Herorightimg 
        flex justify-center md:justify-end 
        items-center 
        mt-8 md:mt-0"
      >
        <img
          src="/Vector.png"
          alt="Hero Image"
          className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg 
          h-auto md:h-full 
          object-contain md:object-cover"
        />
      </div>
    </main>
  );
}
