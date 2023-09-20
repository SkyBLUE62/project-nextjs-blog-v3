"use client";
import React, { useState } from "react";

import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { object, string } from "yup";
import clsx from "clsx";

import TextField from "@mui/material/TextField";
import { signIn } from "next-auth/react";
import { useParams } from "next/navigation";

const schemaUser = object({
  email: string()
    .email("Invalid email address")
    .required("Please enter a valid email address")
    .trim(),
  password: string()
    .required("Please enter a password")
    .min(8, "Must be between 8 and 26 characters")
    .max(26, "Must be between 8 and 26 characters")
    .trim(),
}).required();

// Login Form
const SignInForm = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schemaUser),
  });
  const [error, seterror] = useState<string>("");
  const onSubmit = async (data: any) => {
    try {
      const { email, password } = data;
      console.log(data);
      const res = await signIn("credentials", {
        email: email,
        password: password,
        redirect: true,
        callbackUrl: "/",
      });
      console.log("Res", res);
    } catch (error) {
      seterror("Invalid email or password");
    }
  };

  return (
    <form
      action=""
      className="flex flex-col gap-5"
      onSubmit={handleSubmit(onSubmit)}
    >
      {error && <p className="text-red-500">{error}</p>}
      <Controller
        name="email"
        control={control}
        defaultValue=""
        render={({ field }) => (
          <TextField
            placeholder=""
            type="email"
            label="Email"
            helperText={errors?.email ? errors?.email?.message : ""}
            {...field}
            error={errors?.email ? true : false}
            variant="standard"
          />
        )}
      />

      <Controller
        name="password"
        control={control}
        defaultValue=""
        render={({ field }) => (
          <TextField
            placeholder=""
            type="password"
            label="Password"
            helperText={errors?.password ? errors?.password?.message : ""}
            {...field}
            error={errors?.password ? true : false}
            variant="standard"
          />
        )}
      />
      <button
        type="submit"
        className={clsx(
          "bg-blue-600",
          "w-1/4 mx-auto px-2 py-3 rounded-2xl text-white font-semibold text-Lora",
          " hover:text-blue-600 hover:bg-blue-200"
        )}
      >
        Login
      </button>
    </form>
  );
};

export default SignInForm;
