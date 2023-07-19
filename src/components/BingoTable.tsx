"use client";

type Props = {
  data: {
    title: string;
    isChecked: boolean;
  }[];
  toggleFunction: (index: number) => void;
};

export default function BingoTable({ data, toggleFunction }: Props) {
  return (
    <section className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6">
      {data.map((item, index) => {
        return (
          <button
            key={index}
            onClick={() => toggleFunction(index)}
            className={`grid uppercase rounded-md aspect-square place-content-center ${
              item.isChecked ? "bg-green-900" : "bg-slate-900"
            }`}
          >
            {item.title}
          </button>
        );
      })}
    </section>
  );
}
