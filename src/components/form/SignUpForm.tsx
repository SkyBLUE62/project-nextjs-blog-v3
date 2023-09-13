"use client";
import React, { useState } from "react";

import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { object, ref, string } from "yup";
import clsx from "clsx";

import TextField from "@mui/material/TextField";

const schemaUser = object({
  name: string()
    .min(4, "Must be between 4 and 12 characters")
    .max(12, "Must be between 4 and 12 characters")
    .required("Please enter your name")
    .trim(),
  job: string().required("Please enter your job").trim(),
  email: string()
    .email("Invalid email address")
    .required("Please enter a valid email address")
    .trim(),
  password: string()
    .required("Please enter a password")
    .min(8, "Must be between 9 and 26 characters")
    .max(26, "Must be between 9 and 26 characters")
    .trim(),
  confirmPassword: string()
    .required("Please confirm your password")
    .oneOf([ref("password")], "Passwords dont match !")
    .trim(),
}).required();

// Register Form
const SignUpForm = () => {
  const [error, setError] = useState("");
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schemaUser),
  });

  const onSubmit = (data: any) => {
    const { email, password, name, job, confirmPassword } = data;
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
        name="name"
        control={control}
        defaultValue=""
        render={({ field }) => (
          <TextField
            placeholder=""
            type="text"
            label="Name"
            helperText={errors?.name ? errors?.name?.message : ""}
            {...field}
            error={errors?.name ? true : false}
            variant="standard"
          />
        )}
      />

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
        name="job"
        control={control}
        defaultValue=""
        render={({ field }) => (
          <TextField
            placeholder=""
            type="text"
            label="Job"
            helperText={errors?.job ? errors?.job?.message : ""}
            {...field}
            error={errors?.job ? true : false}
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

      <Controller
        name="confirmPassword"
        control={control}
        defaultValue=""
        render={({ field }) => (
          <TextField
            placeholder=""
            type="password"
            label="Confirm Password"
            helperText={
              errors?.confirmPassword ? errors?.confirmPassword?.message : ""
            }
            {...field}
            error={errors?.confirmPassword ? true : false}
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
        Register
      </button>
    </form>
  );
};

export default SignUpForm;
