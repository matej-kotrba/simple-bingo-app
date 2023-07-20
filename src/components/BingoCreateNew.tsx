"use client";

import { Dispatch, SetStateAction } from "react";

type Props = {
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
};

export default function BingoCreateNew({ isOpen, setIsOpen }: Props) {
  return <button onClick={() => setIsOpen((old) => !old)}>Open</button>;
}
