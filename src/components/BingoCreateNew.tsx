"use client";

import { Dispatch, SetStateAction } from "react";
import { SlArrowRight } from "react-icons/sl";

type Props = {
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
};

export default function BingoCreateNew({ isOpen, setIsOpen }: Props) {
  return (
    <div className="relative h-full min-h-[400px]">
      <div
        className={`${
          isOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        } duration-100
        flex flex-col p-3`}
      >
        <h3 className="mb-1">Create a new tile</h3>
        <input
          type="text"
          className="w-full mx-auto mb-4 text-white input input-bordered"
        />
        <button className="px-16 ml-auto btn btn-outline btn-warning w-fit">
          Add
        </button>
      </div>
      <div
        className={`absolute grid w-1 h-full rounded-full bg-neutral place-content-center top-0 duration-150 ${
          isOpen ? "left-full" : "left-1/2 -translate-x-1/2"
        }`}
      >
        <button
          type="button"
          onClick={() => setIsOpen((old) => !old)}
          className="grid w-10 p-1 duration-150 rounded-full bg-slate-700 aspect-square place-content-center hover:bg-slate-500"
        >
          <SlArrowRight
            className={`text-xl text-white duration-150 ${
              isOpen ? "rotate-180" : "rotate-0"
            }`}
          />
        </button>
      </div>
    </div>
  );
}
