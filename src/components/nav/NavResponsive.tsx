"use client";

import React, { useState } from "react";
import "animate.css";
import {
  BsFacebook,
  BsTwitter,
  BsYoutube,
  BsPinterest,
  BsSearch,
} from "react-icons/bs";

import { FaBehanceSquare } from "react-icons/fa";
import Link from "next/link";
import ButtonAuth from "../utilities/ButtonAuth";
type Props = {
  isLoggedIn: boolean;
};

const NavResponsive = ({ isLoggedIn }: Props) => {
  const [menuOpened, setMenuOpened] = useState<boolean>(false);
  const [respNavAnim, setRespNavAnim] = useState<string>("");
  const [skewAnimation, setSkewAnimation] = useState<string>("");

  const toggleMenu = () => {
    if (!menuOpened) {
      setTimeout(() => {
        setSkewAnimation("animate__slideInLeft");
        setRespNavAnim("animate__slideInRight");
        setMenuOpened(true);
        document.body.classList.add("overflow-hidden");
      }, 1000);
    } else {
      setSkewAnimation("animate__slideOutLeft");
      setRespNavAnim("animate__slideOutRight");
      setTimeout(() => {
        document.body.classList.remove("overflow-hidden");
        setMenuOpened(false);
        setSkewAnimation("");
        setRespNavAnim("");
      }, 1000);
    }
  };

  return (
    <>
      <div className="xl:hidden">
        <button
          className={`menu ${
            menuOpened ? "opened" : ""
          } absolute right-0 top-4 z-[9999] `}
          onClick={toggleMenu}
          aria-label="Main Menu"
          aria-expanded={menuOpened}
        >
          <svg width="50" height="50" viewBox="0 0 100 100">
            <path
              className="line line1"
              d="M 20,29.000046 H 80.000231 C 80.000231,29.000046 94.498839,28.817352 94.532987,66.711331 94.543142,77.980673 90.966081,81.670246 85.259173,81.668997 79.552261,81.667751 75.000211,74.999942 75.000211,74.999942 L 25.000021,25.000058"
            />
            <path className="line line2" d="M 20,50 H 80" />
            <path
              className="line line3"
              d="M 20,70.999954 H 80.000231 C 80.000231,70.999954 94.498839,71.182648 94.532987,33.288669 94.543142,22.019327 90.966081,18.329754 85.259173,18.331003 79.552261,18.332249 75.000211,25.000058 75.000211,25.000058 L 25.000021,74.999942"
            />
          </svg>
        </button>
      </div>

      {menuOpened && (
        <>
          <div
            className={`h-screen w-1/4 z-98 absolute top-0 left-0 animate__animated ${skewAnimation} bg-center bg-cover bg-no-repeat`}
          >
            <div
              className={`absolute -skew-x-6 bg-nav-responsive bg-cover w-full h-full z-98 top-0 -left-14`}
            ></div>
          </div>

          <nav
            className={`fixed inset-0 animate__animated ${respNavAnim} bg-skew-responsive bg-cover top-0 right-0 -skew-x-12 w-full z-97 bg-gray-800 h-full flex flex-col justify-center items-center`}
          >
            <ul className="absolute flex flex-col justify-center items-center space-y-10 z-99">
              <li className="font-Roboto font-bold text-primary text-2xl relative">
                <Link href={"/"} className="nav-border">
                  Home
                </Link>
              </li>
              <li className="font-Roboto font-bold text-primary text-2xl relative">
                <Link href={"/about"} className="nav-border">
                  About
                </Link>
              </li>
              <li className="font-Roboto font-bold text-primary text-2xl relative">
                <Link href={"/articles"} className="nav-border">
                  Articles
                </Link>
              </li>
              <li className="font-Roboto font-bold text-primary text-2xl relative">
                <Link href={"/contact-us"} className="nav-border">
                  Contact us
                </Link>
              </li>
              <li>
                <ButtonAuth isLoggedIn={isLoggedIn} />
              </li>
              <div className="flex flex-row space-x-7">
                <li>
                  <Link href={"#"}>
                    <BsFacebook className="w-7 h-7 text-social-icons" />
                  </Link>
                </li>
                <li>
                  <Link href={"#"}>
                    <BsTwitter className="w-7 h-7 text-social-icons" />
                  </Link>
                </li>
                <li>
                  <Link href={"#"}>
                    <BsYoutube className="w-7 h-7 text-social-icons" />
                  </Link>
                </li>
                <li>
                  <Link href={"#"}>
                    <BsPinterest className="w-7 h-7 text-social-icons" />
                  </Link>
                </li>
                <li>
                  <Link href={"#"}>
                    <FaBehanceSquare className="w-7 h-7 text-social-icons" />
                  </Link>
                </li>
                <li>
                  <Link href={"#"}>
                    <BsSearch className="w-7 h-7 text-social-icons" />
                  </Link>
                </li>
              </div>
            </ul>
          </nav>
        </>
      )}
    </>
  );
};

export default NavResponsive;
