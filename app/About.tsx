export default function About() {
  return (
    <main
      className="relative 
      bg-[linear-gradient(to_right,#FFFFFF_0%,#FFC674_50%,#FFFFFF_100%)] 
      min-h-screen md:min-h-213.5 
      my-4 lg:m-7 
      lg:rounded-3xl 
      flex flex-col md:flex-row 
      justify-between items-center 
      py-12 md:py-20 
      gap-10 md:gap-16 
      shadow-xl 
      overflow-hidden"
    >
      <div
        className="flex flex-col gap-8 
        px-6 sm:px-10 md:px-20 lg:px-35 
        items-start md:items-center"
      >
        <div
          className="flex flex-col 
          w-full md:w-173.75 
          gap-6 md:gap-6.25 
          text-black"
        >
          <h1
            className="text-[45px] lg:text-[65px] 
            leading-tight md:leading-16.25 
            tracking-tight md:tracking-[-3%] 
            font-black"
          >
            Program Pembelajaran Skill Digital
          </h1>

          <p
            className="text-black 
            text-[15px] md:text-[20px] 
            leading-relaxed md:leading-6.25 
            w-full md:w-130"
          >
            Kodein Edu Center memiliki program pembelajaran skill digital
            berbasis praktik untuk pelajar, mahasiswa, dan pemula dalam
            membangun portofolio sesuai kebutuhan industri.
          </p>

          <div
            className="flex flex-col sm:flex-row 
            gap-4 sm:gap-5.75 
            items-start sm:items-center"
          >
            <p
              className="text-[18px] 
              font-bold text-black"
            >
              Siap kerja dengan skill digital dan portofolio berbasis project.
            </p>

            <img src="/Frame.png" alt="" className="w-6 md:w-8" />
          </div>
        </div>

        <div
          className="flex flex-col 
          gap-6 
          items-start"
        >
          <div className="flex gap-5 md:gap-8.25 items-start md:items-center">
            <img className="w-9 md:w-11" src="/frame-1.png" alt="" />
            <div>
              <h2
                className="text-black font-bold 
                text-[18px] md:text-[24px] 
                tracking-tight md:tracking-[-3%]"
              >
                Pembelajaran Praktis
              </h2>
              <p className="text-black text-[15px] md:text-[20px]">
                Materi disampaikan melalui praktik dan studi kasus.
              </p>
            </div>
          </div>

          <div className="flex gap-5 md:gap-8.25 items-start md:items-center">
            <img className="w-9 md:w-11" src="/frame-3.png" alt="" />
            <div>
              <h2
                className="text-black font-bold 
                text-[18px] md:text-[24px] 
                tracking-tight md:tracking-[-3%]"
              >
                Project Based
              </h2>
              <p className="text-black text-[15px] md:text-[20px]">
                Peserta mengerjakan project untuk membangun portofolio.
              </p>
            </div>
          </div>

          <div className="flex gap-5 md:gap-8.25 items-start md:items-center">
            <img className="w-9 md:w-11" src="/frame-2.png" alt="" />
            <div>
              <h2
                className="text-black font-bold 
                text-[18px] md:text-[24px] 
                tracking-tight md:tracking-[-3%]"
              >
                Bimbingan Mentor Ahli
              </h2>
              <p className="text-black text-[15px] md:text-[20px]">
                Peserta dibimbing selama proses belajar berlangung.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div
        className="flex justify-center items-center 
        absolute 
        w-40 sm:w-60 md:w-200 
        right-0 md:right-[-50] 
        bottom-0 md:bottom-50 
        opacity-20 md:opacity-100 
        pointer-events-none"
      >
        <img
          src="/itulah.png"
          alt=""
          className="hidden lg:block w-52 sm:w-72 md:w-250"
        />
      </div>
    </main>
  );
}
