"use client";

import { toast } from "react-toastify";

type Props = {
  data: {
    title: string;
    isChecked: boolean;
  }[];
  toggleFunction: (index: number) => void;
};

export default function BingoTable({ data, toggleFunction }: Props) {
  const toastOnToggle = (index: number, toggleState: boolean) => {
    toggleFunction(index);
    toast(
      toggleState
        ? `BINGO for tile ${data[index].title}`
        : `Not BINGO after all for tile ${data[index].title}`,
      {
        progressStyle: { backgroundColor: toggleState ? "green" : "red" },
      }
    );
  };

  return (
    <section className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6">
      {data.map((item, index) => {
        return (
          <button
            key={index}
            onClick={() => toastOnToggle(index, !item.isChecked)}
            className={`grid uppercase rounded-md aspect-square place-content-center duration-100 ${
              item.isChecked
                ? "bg-green-500 text-black shadow-lg shadow-green-800"
                : "bg-neutral"
            }`}
          >
            {item.title}
          </button>
        );
      })}
    </section>
  );
}
