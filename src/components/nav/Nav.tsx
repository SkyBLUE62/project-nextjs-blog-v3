"use client";

import Link from "next/link";
import VerticalSeparator from "../utilities/VerticalSeparator";
import "animate.css";
import { BsFacebook, BsTwitter, BsYoutube, BsPinterest } from "react-icons/bs";
import { FaBehanceSquare } from "react-icons/fa";
import { signIn, signOut } from "next-auth/react";

const Nav = () => {
  return (
    <>
      {/* Computer Nav */}
      <nav className="hidden xl:block xl:relative absolute top-0 left-0 z-50">
        <ul className="flex flex-row justify-between items-center space-x-5">
          <li className="font-Roboto font-bold text-primary text-sm relative">
            <Link href={"/"} className="nav-border">
              Home
            </Link>
          </li>
          <li className="font-Roboto font-bold text-primary text-sm relative">
            <Link href={"/about"} className="nav-border">
              About{" "}
            </Link>
          </li>
          <li className="font-Roboto font-bold text-primary text-sm relative">
            <Link href={"/articles"} className="nav-border">
              Articles
            </Link>
          </li>
          <li className="font-Roboto font-bold text-primary text-sm relative">
            <Link href={"/contact-us"} className="nav-border">
              Contact us
            </Link>
          </li>

          <VerticalSeparator />
          <li>
            <Link href={"#"}>
              <BsFacebook className="w-5 h-5 text-social-icons" />
            </Link>
          </li>
          <li>
            <Link href={"#"}>
              <BsTwitter className="w-5 h-5 text-social-icons" />
            </Link>
          </li>
          <li>
            <Link href={"#"}>
              <BsYoutube className="w-5 h-5 text-social-icons" />
            </Link>
          </li>
          <li>
            <Link href={"#"}>
              <BsPinterest className="w-5 h-5 text-social-icons" />
            </Link>
          </li>
          <li>
            <Link href={"#"}>
              <FaBehanceSquare className="w-5 h-5 text-social-icons" />
            </Link>
          </li>
          <li>
            <button onClick={() => signIn()}>Sign in</button>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Nav;
