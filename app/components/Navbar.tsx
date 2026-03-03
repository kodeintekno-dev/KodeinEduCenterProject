import { IoIosArrowDown } from "react-icons/io";

export default function NavBar() {
  return (
    <header className="bg-white shadow-xl text-black sticky top-0 z-50">
      <nav
        className="h-16 md:h-20 
  mx-4 md:mx-7 
  flex flex-row 
  justify-between items-center 
  text-base md:text-xl"
      >
        <div>
          <a href="#">
            <img
              src="logoKodeinEdu.png"
              alt=""
              className="w-28 sm:w-36 md:w-42 
        h-fit object-contain"
            />
          </a>
        </div>

        <div>
          <ul
            className="flex flex-row 
      gap-6 sm:gap-10 md:gap-15 
      items-center"
          >
            <div
              className="flex items-center 
        gap-1 cursor-pointer"
            >
              <li>About</li>
              <IoIosArrowDown className="text-sm md:text-base" />
            </div>

            <div
              className="flex items-center 
        gap-1 cursor-pointer"
            >
              <li>Program</li>
              <IoIosArrowDown className="text-sm md:text-base" />
            </div>

            <li className="cursor-pointer">Contact</li>
          </ul>
        </div>
      </nav>
    </header>
  );
}
