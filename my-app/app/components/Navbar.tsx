export default function NavBar() {
  return (
    <header className="bg-white shadow-xl text-black m-7 rounded-2xl">
      <nav className="mx-7 flex flex-row justify-between items-center">
        <div>
          <a href="#">
            <img
              src="logoKodeinEdu.png"
              alt=""
              className="w-42 h-15.75 object-contain "
            />
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
