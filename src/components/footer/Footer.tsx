import React from "react";
import Link from "next/link";
import { BsFacebook, BsTwitter, BsYoutube, BsPinterest } from "react-icons/bs";
import { FaBehanceSquare } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="w-full xl:h-[25rem] h-auto bg-footer">
      <div className="grid grid-cols-1 xl:grid-cols-4 sm:grid-cols-2 font-Lora text-white justify-center items-start h-full w-full py-20 px-20 xl:gap-40 gap-12">
        <div className="flex flex-col h-auto gap-5">
          <h4 className="font-bold text-xl">Contact the Publisher</h4>
          <span className="text-primary text-xs">WdKjB@example.com</span>
          <span className="text-primary text-xs">+33 6 00 00 00 00</span>
        </div>
        <div className="flex flex-col h-auto gap-6">
          <h4 className="font-bold text-xl">Explorate</h4>
          <ul className="flex-col flex gap-6">
            <li className="text-primary text-xs">
              <Link href={"/"}>Home</Link>
            </li>
            <li className="text-primary text-xs">
              <Link href={"/"}>About</Link>
            </li>
            <li className="text-primary text-xs">
              <Link href={"/"}>Articles</Link>
            </li>
            <li className="text-primary text-xs">
              <Link href={"/"}>Contact us</Link>
            </li>
          </ul>
        </div>
        <div className="flex flex-col h-auto gap-6">
          <h4 className="font-bold text-xl">Headquarter</h4>
          <span className="w-1/2 text-primary text-xs">
            191 Middleville Road, NY 1001, Sydney Australia
          </span>
        </div>
        <div className="flex flex-col h-auto gap-6">
          <h4 className="font-bold text-xl">Connections</h4>
          <ul className="flex flex-row gap-6">
            <li>
              <Link href={"/"}>
                <BsFacebook className="w-5 h-5 text-social-icons" />
              </Link>
            </li>
            <li>
              <Link href={"/"}>
                <BsTwitter className="w-5 h-5 text-social-icons" />
              </Link>
            </li>
            <li>
              <Link href={"/"}>
                <BsYoutube className="w-5 h-5 text-social-icons" />
              </Link>
            </li>
            <li>
              <Link href={"/"}>
                <BsPinterest className="w-5 h-5 text-social-icons" />
              </Link>
            </li>
            <li>
              <Link href={"/"}>
                <FaBehanceSquare className="w-5 h-5 text-social-icons" />
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
