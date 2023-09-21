"use server";
import SignInForm from "@/components/form/SignInForm";
import Template from "@/components/template/Template";
import Card from "@mui/joy/Card";
import React from "react";

const Login = () => {
  return (
    <Template>
      <main className="flex xl:h-[60vh]  flex-col justify-center items-center mx-auto xl:w-1/4 py-5 xl:px-0 px-2">
        <div className=" border-orange-100 border border-spacing-5 rounded-3xl shadow-2xl w-full">
          <div className="flex flex-col gap-5 py-5 px-5 w-full h-full">
            <h1 className="text-4xl font-Lora font-semibold">Sign In</h1>
            <h2 className="text-lg font-Lora text-secondary italic">
              Back on Runo to write new articles ?
            </h2>
            <SignInForm />
          </div>
        </div>
      </main>
    </Template>
  );
};

export default Login;
