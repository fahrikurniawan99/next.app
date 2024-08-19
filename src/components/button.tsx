"use client";

import { addProduct } from "@/actions/product";
import { useState } from "react";

interface ButtonProps {}

export const ButtonAddProduct = () => {
  const [input, setInput] = useState("Defaut Text");
  return (
    <>
      <input
        type="text"
        onChange={(event) => setInput(event.target.value)}
        value={input}
        className="border px-4 py-2 mt-5"
      />
      <button
        onClick={() => addProduct({ title: input })}
        className="flex justify-center items-center mt-3 bg-gray-900 px-4 py-2 rounded text-sm text-gray-50"
      >
        Server Action
      </button>
    </>
  );
};
