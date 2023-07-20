"use client";

import { useEffect, useState } from "react";

export default function BingoAnimation() {
  const [textDisplayAmount, setTextDisplayAmount] = useState<number>(0);

  useEffect(() => {
    setInterval(() => {
      setTextDisplayAmount((old) => old + 1);
    }, 300);
  }, []);

  return (
    <div className="absolute grid -translate-x-1/2 -translate-y-1/2 place-content-center left-1/2 top-1/2">
      <p
        className={`leading-[8px] text-[6rem] z-[6] text-white ${
          textDisplayAmount >= 1 ? "opacity-100" : "opacity-0"
        }`}
      >
        BINGO
      </p>
      <p
        className={`leading-[8px] text-[6rem] z-[5] translate-x-1 text-slate-100 ${
          textDisplayAmount >= 2 ? "opacity-100" : "opacity-0"
        }`}
      >
        BINGO
      </p>
      <p
        className={`leading-[8px] text-[6rem] z-[4] translate-x-2 text-slate-200 ${
          textDisplayAmount >= 3 ? "opacity-100" : "opacity-0"
        }`}
      >
        BINGO
      </p>
      <p
        className={`leading-[8px] text-[6rem] z-[3] translate-x-3 text-slate-300 ${
          textDisplayAmount >= 4 ? "opacity-100" : "opacity-0"
        }`}
      >
        BINGO
      </p>
      <p
        className={`leading-[8px] text-[6rem] z-[2] translate-x-4 text-slate-400 ${
          textDisplayAmount >= 5 ? "opacity-100" : "opacity-0"
        }`}
      >
        BINGO
      </p>
      <p
        className={`leading-[8px] text-[6rem] z-[1] translate-x-5 text-slate-500 ${
          textDisplayAmount >= 6 ? "opacity-100" : "opacity-0"
        }`}
      >
        BINGO
      </p>
    </div>
  );
}
