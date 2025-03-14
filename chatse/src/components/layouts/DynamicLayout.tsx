import React from "react";
interface children {
  border: boolean;
  children: React.ReactNode;
}

export default function DynamicLayout({ border, children }: children) {
  return (
    <div
      className={`max-w-screen ${
        border ? `border-b border-[#e1d5d5]` : ``
      } flex`}
    >
      <div className="w-full flex justify-center mx-auto px-3 md:px-5 lg:px-4 xl:px-5">
        <div className="w-full max-w-[900px] overflow-hidden px-12">
          {children}
        </div>
      </div>
    </div>
  );
}
