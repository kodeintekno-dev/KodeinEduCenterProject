export default function Home() {
  return (
    <main>
      <div className="bg-white h-screen text-black m-7 rounded-3xl flex flex-row ">
        <div className="Herolefttext flex flex-col gap-6 m-20 justify-center w-150">
          <h1 className="text-[65px] font-bold">
            Belajar Skill Digital dengan Cara yang Tepat
          </h1>
          <h2>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
            rhoncus ante turpis, et ornare dui interdum at. Etiam libero urna,
            tincidunt ac viverra ac, facilisis at justo. Donec vitae lorem ac
            odio vestibulum rhoncus. Quisque in iaculis purus.
          </h2>
          <button className="w-40 h-12 bg-[#F37E2E] text-white flex justify-center items-center rounded-md">
            <p>CTA</p>
          </button>
        </div>
        <div className="Herorightimg flex flex-col gap-6 m-40 justify-center w-150">
          <img
            src="/Group-33.png"
            alt="Hero Image"
            width={621.49}
            height={468}
            className="m-20"
          />
        </div>
      </div>
    </main>
  );
}
