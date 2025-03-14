import { BsLayoutSidebarInset } from "react-icons/bs";
import { useNav } from "../../contexts/NavbarContext";

export default function Header() {
  const { nav, setNav } = useNav();
  return (
    <div className="py-3 px-6 flex justify-between items-center w-full text-gray-400">
      <div className="flex items-center text-gray-400 gap-4">
        {nav == "close" ? (
          <div
            className="p-2 hover:bg-gray-400/30 hover:cursor-pointer w-fit flex items-center  rounded-lg"
            onClick={() => {
              setNav(nav == "close" ? "open" : "close");
            }}
          >
            <BsLayoutSidebarInset className="text-2xl inline-block" />
          </div>
        ) : (
          <></>
        )}
        <div className="font-semibold text-xl ">ChatSE</div>
      </div>

      <div className="w-8 h-8 rounded-full bg-gray-600"></div>
    </div>
  );
}
