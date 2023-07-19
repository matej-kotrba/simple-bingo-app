"use client";

import { useState } from "react";
import BingoTable from "./BingoTable";

export default function Bingo() {
  const [data, setData] = useState([
    { title: "ASDSD", isChecked: false },
    { title: "iuweqe", isChecked: true },
  ]);

  function handleCheckToggle(index: number) {
    setData((old) => {
      const newData = [...old];
      newData[index].isChecked = !newData[index].isChecked;
      return newData;
    });
  }

  return (
    <div>
      <BingoTable data={data} toggleFunction={handleCheckToggle} />
    </div>
  );
}
