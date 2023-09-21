"use client";

import Nav from "../nav/Nav";
import NavResponsive from "../nav/NavResponsive";
import {SessionProvider} from "next-auth/react";
type Props = {
  slidersExist?: React.JSX.Element;
};

const Header = ({ slidersExist }: Props) => {
  return (
    <SessionProvider>
      <header
        className={`sticky top-0 z-40 h-20 w-screen ${
          slidersExist !== undefined
            ? "bg-header-color-slider"
            : "bg-header-image bg-cover bg-top"
        }`}
      >
        <div className="max-w-10xl h-full mx-auto flex flex-row justify-between items-center">
          <span className="font-spartan text-xl font-bold text-icon ml-3 xl:ml-0">
            RUNO
          </span>
          <Nav />
        </div>
      </header>
      <NavResponsive />
    </SessionProvider>
  );
};

export default Header;
