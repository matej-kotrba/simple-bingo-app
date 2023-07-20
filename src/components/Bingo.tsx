"use client";

import { useState } from "react";
import BingoTable from "./BingoTable";
import BingoCreateNew from "./BingoCreateNew";

export default function Bingo() {
  const [data, setData] = useState([
    { title: "ASDSD", isChecked: false },
    { title: "iuweqe", isChecked: true },
  ]);

  const [isNewTileOpen, setIsNewTileOpen] = useState(false);

  function handleCheckToggle(index: number) {
    setData((old) => {
      const newData = [...old];
      newData[index].isChecked = !newData[index].isChecked;
      return newData;
    });
  }

  return (
    <div className={`flex`}>
      <div
        className={`grow-0 ${
          isNewTileOpen ? "basis-[35%]" : "basis-[10%]"
        } duration-150`}
      >
        <BingoCreateNew isOpen={isNewTileOpen} setIsOpen={setIsNewTileOpen} />
      </div>
      <div className="grow-[1] duration-150">
        <BingoTable data={data} toggleFunction={handleCheckToggle} />
      </div>
    </div>
  );
}
