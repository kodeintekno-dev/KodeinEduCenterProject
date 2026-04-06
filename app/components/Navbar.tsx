import { IoIosArrowDown } from "react-icons/io";

export default function NavBar() {
  return (
    <header className="bg-white shadow-xl text-black sticky top-0 z-50">
      <nav className=" h-20 mx-7 flex flex-row justify-between items-center text-xl">
        <div>
          <a href="#">
            <img
              src="logoKodeinEdu.png"
              alt=""
              className="w-42 h-fit object-contain "
            />
          </a>
        </div>

        <div>
          <ul className="flex flex-row gap-15">
            <div className="flex items-center gap-1 curosor-pointer">
              <li>About</li>
              <IoIosArrowDown />
            </div>

            <div className="flex items-center gap-1 curosor-pointer">
              <li>Program</li>
              <IoIosArrowDown />
            </div>

            <li className="cursor-pointer">Contact</li>
          </ul>
        </div>
      </nav>
    </header>
  );
}
