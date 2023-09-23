"use client";
import { signIn, signOut } from "next-auth/react";
import Link from "next/link";
import React from "react";

type Props = {
  isLoggedIn: boolean;
};

const ButtonAuth = ({ isLoggedIn }: Props) => {
  
  return (
    <>
      {isLoggedIn ? (
        <Link href="#" onClick={() => signOut()} className="py-2 px-4 bg-active rounded-3xl text-sm font-bold">
          Sign out
        </Link>
      ) : (
        <Link href="#" onClick={() => signIn()} className="py-2 px-4 bg-primary rounded-3xl text-sm font-bold">
          Sign in
        </Link>
      )}
    </>
  );
};

export default ButtonAuth;
