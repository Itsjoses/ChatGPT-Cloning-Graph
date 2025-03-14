import React from "react";

interface SelectButtonDTO {
  text: string;
  type: string;
  setType: React.Dispatch<React.SetStateAction<string>>;
}

export default function SelectButton({ text, type, setType }: SelectButtonDTO) {
  const setHandle = () => {
    setType(text);
  };
  return (
    <div
      className={`p-3 ${
        type == text ? "bg-[#3b3b3b]" : "bg-[#303030]/60"
      } text-gray-400 rounded-lg hover:bg-[#303030] cursor-pointer`}
      onClick={setHandle}
    >
      {text}
    </div>
  );
}
