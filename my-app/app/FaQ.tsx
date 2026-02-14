import Questions from "./components/Question";

const data = [
  {
    id: 1,
    question: "Kursus apa saja yang tersedia di Kodein Edu Center?",
    answer: "Kami menyediakan berbagai program..."
  },
  {
    id: 2,
    question: "Apakah kursus ini cocok untuk pemula?",
    answer: "Ya. Semua kursus dirancang bertahap."
  },
  {
    id: 3,
    question: "Metode pembelajaran seperti apa yang digunakan?",
    answer: "Pembelajaran interaktif, praktik langsung, dan project."
  },
  {
    id: 4,
    question: "Apakah ada konsultasi sebelum memilih kursus?",
    answer: "Ada, kami menyediakan konsultasi gratis."
  },
  {
    id: 5,
    question: "Bagaimana cara mendaftar?",
    answer: "Hubungi admin, website, atau datang langsung."
  }
];

export default function FaQ() {
  return (
    <div className="Kelima bg-gradient-to-br from-[#E3EEFF] to-[#FFD79E] min-h-screen m-7 rounded-3xl flex gap-16 p-12">
      <div className="flex flex-col gap-7 text-white justify-center">
        <h1 className="text-[66px] font-bold">
          Pertanyaan yang sering muncul
        </h1>
        <p className="text-[20px]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>
      </div>

      <div className="flex flex-col gap-5 w-full">
        {data.map((d) => (
          <Questions key={d.id} data={d} />
        ))}
      </div>
    </div>
  );
}
