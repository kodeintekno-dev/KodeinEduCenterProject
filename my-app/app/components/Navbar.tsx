export default function NavBar() {
  return (
    <header className="bg-white shadow text-black border-1 border-black">
      <nav className="mx-auto flex flex-row justify-between items-center">
          <div>
            <a href="#">
              <img src="logoKodeinEdu.png" alt="" className="w-[168px] h-[63px] object-contain "/>
            </a>
          </div>

          <div>
            <ul className="flex flex-row gap-4">
              <li>Home</li>
              <li>About</li>
              <li>Services</li>
              <li>Contact</li>
            </ul>
          </div>
      </nav>
    </header>
  );
}
