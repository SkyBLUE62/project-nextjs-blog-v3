"use client";
import React, { useState } from "react";

import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { object, string } from "yup";
import clsx from "clsx";

import InputForm from "../utilities/InputForm";
import TextField from "@mui/material/TextField";

const schemaUser = object({
  email: string()
    .email("Invalid email address")
    .required("Please enter a valid email address"),
  password: string()
    .required("Please enter a password")
    .min(8, "Must be between 9 and 26 characters")
    .max(32, "Must be between 9 and 26 characters"),
}).required();

type InputsData = {
  email: string;
  password: string;
};

// Login Form
const SignInForm = () => {
  const [error, setError] = useState("");
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schemaUser),
  });

  const onSubmit = (data: any) => {
    const { email, password } = data;
    console.log(data);
    try {
    } catch (e: any) {
      setError(e.message);
    }
  };

  return (
    <form
      action=""
      className="flex flex-col gap-5"
      onSubmit={handleSubmit(onSubmit)}
    >
      <Controller
        name="email"
        control={control}
        defaultValue=""
        render={({ field }) => (
          <TextField
            placeholder="Email"
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
            placeholder="Password"
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
