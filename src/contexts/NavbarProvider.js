import { useState, createContext } from "react";

export const NavbarContext = createContext();

const NavbarProvider = ({ children }) => {
  const [navbarActive, setNavbarActive] = useState(false);



  return (
    <NavbarContext.Provider value={{ navbarActive, setNavbarActive }}>
      {children}
    </NavbarContext.Provider>
  );
};

export default NavbarProvider;