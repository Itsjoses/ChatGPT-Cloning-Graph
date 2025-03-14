import React, { createContext, useContext, useEffect, useState } from "react";

interface NavType {
  nav: string;
  setNav: React.Dispatch<React.SetStateAction<string>>;
}

const NavContext = createContext<NavType>({
  nav: "",
  setNav: () => {},
});

export const useNav = () => {
  return useContext(NavContext);
};

export default function NavbarProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [nav, setNav] = useState<string>("close");

  useEffect(() => {
    localStorage.setItem("nav", nav);
  }, [nav]);

  return (
    <NavContext.Provider value={{ nav, setNav }}>
      {children}
    </NavContext.Provider>
  );
}
