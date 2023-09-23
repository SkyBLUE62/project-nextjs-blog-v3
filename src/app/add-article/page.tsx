"use server";

import Template from "@/components/template/Template";
import { yupResolver } from "@hookform/resolvers/yup";
import { TextField } from "@mui/material";
import { Controller, useForm } from "react-hook-form";
import { mixed, object, string } from "yup";

const schemaUser = object({
  title: string().required("Please enter a title").trim().min(5, "Too short"),
  description: string()
    .required("Please enter a description")
    .trim()
    .min(5, "Too short"),
  slug: string().required("Please enter a slug").trim().min(5, "Too short"),
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

const addArticle = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schemaUser),
  });
  return (
    <Template>
      <div className="h-1/2 w-full mx-auto">
        <div className="flex flex-col items-center justify-center">
          <h1>Add Article</h1>
          <form>
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
          </form>
        </div>
      </div>
    </Template>
  );
};

export default addArticle;
