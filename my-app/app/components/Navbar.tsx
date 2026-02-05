export default function NavBar() {
  return (
    <header className="bg-white shadow-xl text-black">
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
            <li>About</li>
            <li>Program</li>
            <li>Contact</li>
          </ul>
        </div>
      </nav>
    </header>
  );
}
