export default function Address() {
  return (
    <main className="relative bg-[linear-gradient(to_right,#FFFFFF_0%,#F6B562_50%,#FFFFFF_100%)]  p-16 overflow-hidden h-full text-black">
      <img
        src="/desktop/kontak-kanan.svg"
        alt=""
        className="hidden lg:block absolute top-0 right-0 w-[340px] pointer-events-none select-none z-0"
      />

      <img
        src="/desktop/kontak-kiri.svg"
        alt=""
        className="hidden lg:block absolute top-0 left-0 w-[340px] pointer-events-none select-none z-0"
      />

      <img
        src="/tab/kontak-1.svg"
        alt=""
        className="hidden md:block lg:hidden absolute left-24 top-0 w-[640px] pointer-events-none select-none z-0"
      />

      <img
        src="/tab/kontak-2.svg"
        alt=""
        className="hidden md:block lg:hidden absolute left-24 bottom-0 w-[640px] pointer-events-none select-none z-0"
      />

      <img
        src="/phone/kontak-1.svg"
        alt=""
        className=" md:hidden absolute left-13 top-0 w-[520px] pointer-events-none select-none z-0"
      />
      <img
        src="/phone/kontak-2.svg"
        alt=""
        className=" md:hidden absolute left-13 bottom-0 w-[520px] pointer-events-none select-none z-0"
      />

      <div className="flex flex-col justify-between items-center w-full md:my-10">
        <div className="flex flex-col items-center justify-between lg:px-50 w-full mt-20">
          <h1 className="text-[45px] lg:text-[65px] 
            leading-tight md:leading-16.25 
            tracking-tight md:tracking-[-3%] 
            font-black text-center z-10">
            Butuh informasi lebih lanjut tentang kami?
          </h1>
        </div>

        <div className="w-fit justify-between mt-10 text-center bg-red-500 text-white py-3 px-15 rounded-full text-[18px] font-semibold">
          <a href="">Pelajari</a>
        </div>

        <div className="md:flex md:flex-row flex flex-col justify-center gap-20 items-center md:justify-center md:gap-20 mt-10 px-93 w-full">
          <div className="flex flex-col gap-10 text-[18px]">
            <div className="flex items-center">
              <img src="/desktop/gmail.svg" alt="" />
              <p className="ml-2">info@kodeineducation.com</p>
            </div>

            <div className="flex items-center">
              <img src="/desktop/phone.svg" alt="" />
              <p className="ml-2">+62 812 3456 7890</p>
            </div>

            <div className="flex items-center">
              <img src="/desktop/address.svg" alt="" />
              <p className="ml-2">Jl. Raya Kedungkandang No. 123, Malang</p>
            </div>
          </div>

          <div>
            <iframe
              className="rounded-lg mb-20 "
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3019.2805534973663!2d106.58113947355943!3d-6.550263164030761!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69df67de5f758f%3A0xfe32d1b1330b1072!2sKebun%20Cikontol!5e1!3m2!1sid!2ssg!4v1774949532771!5m2!1sid!2ssg"
              width="364"
              height="300"
              style={{ border: "0" }}
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </div>
    </main>
  );
}
