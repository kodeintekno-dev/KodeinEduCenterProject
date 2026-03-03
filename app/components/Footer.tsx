export default function Footer() {
  return (
    <footer className="bg-white text-black h-fit max-w-full">
      <div className="flex flex-row justify-between items-start p-10">
        <div>
          <img src="logoKodeinEdu.png" alt="" className="max-w-61.75" />
        </div>

        <div className="flex flex-row gap-20 text-xl">
          <div>
            <p className=" font-semibold pb-5">Tentang</p>
            <p>Home</p>
            <p>About</p>
            <p>Services</p>
            <p>Contact</p>
          </div>

          <div>
            <p className=" font-semibold pb-5 ">Lainnya</p>
            <p>Blog</p>
            <p>FAQ</p>
            <p>Support</p>
          </div>
          <div>
            <p className=" font-semibold pb-5 ">Media</p>
            <p>Facebook</p>
            <p>Twitter</p>
            <p>Instagram</p>
          </div>
        </div>
      </div>
      <div className="border border-gray p-5">
        <p className="text-base">
          © 2024 Kodein Edu Center. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
