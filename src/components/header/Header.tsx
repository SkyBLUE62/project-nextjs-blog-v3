"use server";
import { isLogin } from "@/auth";
import Nav from "../nav/Nav";
import NavResponsive from "../nav/NavResponsive";
type Props = {
  slidersExist?: React.JSX.Element;
};

const Header = async ({ slidersExist }: Props) => {
  const session = await isLogin();

  let isLoginStatue: boolean = false;
  if (session) {
    isLoginStatue = true;
  } else {
    isLoginStatue = false;
  }

  return (
    <>
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
          {/* @ts-expect-error Server Component */}
          <Nav />
        </div>
      </header>
      <NavResponsive isLoggedIn={isLoginStatue} />
    </>
  );
};

export default Header;
