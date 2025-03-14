import { BsLayoutSidebarInset } from "react-icons/bs";
import NavbarCard from "../cards/NavbarCard";
import { useNav } from "../../contexts/NavbarContext";

export default function Navbar() {
  const { nav, setNav } = useNav();
  return (
    <div
      className={`bg-neutral-900 text-neutral-50 min-h-screen transition-all duration-300 ${
        nav === "close" ? "w-0 overflow-hidden" : "w-[300px]"
      }`}
    >
      <div className="px-4 py-2 items-center justify-center w-full">
        <div>
          <div
            className="p-2 hover:bg-gray-400/30 hover:cursor-pointer w-fit flex items-center  rounded-lg"
            onClick={() => {
              setNav(nav == "close" ? "open" : "close");
            }}
          >
            <BsLayoutSidebarInset className="text-2xl inline-block" />
          </div>
          <div className="mt-5 gap-5 flex flex-col">
            <NavbarCard />
          </div>
        </div>
      </div>
    </div>
  );
}
