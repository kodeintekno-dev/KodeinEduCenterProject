const data = [
  {
    id: 1,
    profile: "Pict",
    name: "Allen",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi, ex.",
  },

  {
    id: 2,
    profile: "Pict",
    name: "Allen",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi, ex.",
  },

  {
    id: 3,
    profile: "Pict",
    name: "Allen",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi, ex.",
  },

  {
    id: 4,
    profile: "Pict",
    name: "Allen",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi, ex.",
  },

  {
    id: 5,
    profile: "Pict",
    name: "Allen",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi, ex.",
  },
];

export default function Testimonials() {
  return (
    <main className="bg-black text-white p-5 mx-5 rounded-xl">
      <div className="flex flex-col gap-8">
        <div className="">
          <h1 className="text-4xl font-bold ">What our clients say?</h1>
          <p className="text-xl">Lorem ipsum dolor sit amet.</p>
        </div>

        <div className="flex items-center justify-between gap-4 ">
          <div className="bg-gray-500 p-3 w-fit rounded-xl">
            <h2 className="font-semibold">Allen</h2>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minus,
              provident.
            </p>
          </div>

          <div className="bg-gray-500 p-3 w-fit rounded-xl">
            <h2 className="font-semibold">Allen</h2>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minus,
              provident.
            </p>
          </div>

          <div className="bg-gray-500 p-3 w-fit rounded-xl">
            <h2 className="font-semibold">Allen</h2>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minus,
              provident.
            </p>
          </div>

          <div className="bg-gray-500 p-3 w-fit rounded-xl">
            <h2 className="font-semibold">Allen</h2>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minus,
              provident.
            </p>
          </div>

          <div className="bg-gray-500 p-3 w-fit rounded-xl">
            <h2 className="font-semibold">Allen</h2>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minus,
              provident.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
