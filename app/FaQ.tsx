import Questions from "./components/Question";

const data = [
  {
    id: 1,
    question: "Kursus apa saja yang tersedia di Kodein Edu Center?",
    answer:
      "Kami menyediakan berbagai program, antara lain: Pelajaran Umum (Matematika, IPA, dll sesuai jenjang), Internet of Things (IoT), Web Development, UI&UX Design, Graphic Design, Video Editing, Fotografi, Digital Marketing",
  },
  {
    id: 2,
    question: "Apakah kursus ini cocok untuk pemula?",
    answer:
      "Ya. Semua kursus dirancang bertahap, mulai dari dasar hingga lanjutan, sehingga sangat cocok untuk pemula maupun peserta yang ingin memperdalam skill.",
  },
  {
    id: 3,
    question: "Metode pembelajaran seperti apa yang digunakan?",
    answer:
      "Kami menggunakan metode: Pembelajaran interaktif, Praktik langsung (hands-on), Studi kasus dan project, Pendampingan oleh mentor Sehingga peserta tidak hanya paham teori, tapi juga siap praktik.",
  },
  {
    id: 4,
    question: "Apakah ada konsultasi sebelum memilih kursus?",
    answer:
      "Ada. Kami menyediakan konsultasi gratis untuk membantu peserta memilih program yang sesuai dengan tujuan dan level kemampuan.",
  },
  {
    id: 5,
    question: "Bagaimana cara mendaftar?",
    answer:
      "Pendaftaran dapat dilakukan dengan: Menghubungi admin Kodein Edu Center, Melalui website atau media sosial resmi, Datang langsung ke tempat (untuk kelas offline)",
  },
];

export default function FaQ() {
  return (
    <div className="bg-[linear-gradient(to_right,#FFFFFF_0%,#F6B562_50%,#FFFFFF_100%)] min-h-screen m-7 rounded-3xl flex items-center justify-between gap-16 p-12">
      <div className="flex flex-col gap-7 text-black justify-center">
        <h1 className="text-[66px] font-bold">Pertanyaan yang sering muncul</h1>
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
