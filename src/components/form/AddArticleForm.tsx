"use client";
import { yupResolver } from "@hookform/resolvers/yup";
import { TextField } from "@mui/material";
import React, { ChangeEvent, useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { object, string, mixed, number } from "yup";
import slugify from "slugify";

const schemaUser = object({
  title: string().required("Please enter a title").trim().min(5, "Too short"),
  description: string()
    .required("Please enter a description")
    .trim()
    .min(5, "Too short"),
  content: string()
    .required("Please enter a content")
    .trim()
    .min(5, "Too short"),
  slug: string().required("Please enter a slug").trim().min(5, "Too short"),
  category: number()
    .required("Please select a category")
    .integer("Category must be an integer"),
  image: mixed()
    .test("fileSize", "File size is too large", (file) => {
      if (!file) {
        return true; // No file uploaded, so no size validation needed.
      }
      if (file instanceof File) {
        return file.size <= 1024 * 1024 * 5; // 5MB maximum file size
      }
      return false; // Not a valid file type
    })
    .test("fileType", "Unsupported file type", (file) => {
      if (!file) {
        return true; // No file uploaded, so no type validation needed.
      }
      if (file instanceof File) {
        const supportedExtensions = [".jpeg", ".jpg", ".png", ".gif"]; // Add more extensions as needed.
        const fileExtension = file.name
          .substr(file.name.lastIndexOf("."))
          .toLowerCase();
        return supportedExtensions.includes(fileExtension);
      }
      return false; // Not a valid file type
    }),
}).required();

const AddArticleForm = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schemaUser),
  });
  const [slug, setSlug] = useState<string>("");
  const handleSlug = (e: ChangeEvent<HTMLInputElement>) => {
    const newSlug = slugify(e.target.value, {
      lower: true,
      strict: true,
      remove: /[*+~.()'"!:@]/g,
      trim: true,
    });
    setSlug(newSlug);
    console.log(newSlug);
  };

  const onSubmit = (data: any) => {
    console.log(data);
  };

  return (
    <form className="flex flex-col gap-5" onSubmit={handleSubmit(onSubmit)}>
      <Controller
        name="title"
        control={control}
        render={({ field }) => (
          <TextField
            placeholder=""
            type="text"
            label="Title"
            helperText={errors?.title ? errors?.title?.message : ""}
            {...field}
            error={errors?.title ? true : false}
            variant="standard"
            onChange={handleSlug}
          />
        )}
      />
      <Controller
        name="slug"
        control={control}
        render={({ field }) => (
          <TextField
            placeholder="Slug"
            type="text"
            InputProps={{
              readOnly: true,
            }}
            value={slug}
            variant="standard"
          />
        )}
      />
      <button type="submit">Submit</button>
    </form>
  );
};

export default AddArticleForm;
