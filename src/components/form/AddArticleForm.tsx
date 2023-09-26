"use client";
import { yupResolver } from "@hookform/resolvers/yup";
import React, { ChangeEvent, useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { object, string, mixed, number } from "yup";
import slugify from "slugify";

const schemaPost = object({
  title: string().required("Please enter a title").min(5, "Too short"),
  description: string()
    .required("Please enter a description")
    .min(5, "Too short"),
  content: string().required("Please enter a content").min(5, "Too short"),
  category: number()
    .required("Please select a category")
    .integer("Category must be an integer"),
  image: mixed()
    .test(
      "fileSize",
      "Le fichier est trop volumineux. La taille maximale autorisée est de 10 Mo.",
      (value: FileList) => {
        const maxSizeInBytes: number = 10 * 1024 * 1024; // 10 Mo
        const fileTypeAccepted: string[] = [
          "image/jpeg",
          "image/png",
          "image/jpg",
        ];
        if (!value[0]) {
          return true; // Aucun fichier téléchargé, aucune validation de la taille nécessaire.
        }
        if (value[0].size >= maxSizeInBytes) {
          return true;
        }

        console.log(value[0]);
        return value[0];
      }
    )
    .required("Veuillez télécharger un fichier"),
}).required();

const AddArticleForm = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schemaPost),
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
    console.log(newSlug); // Assurez-vous que la valeur de slug est correcte ici
  };

  const onSubmit = async (data: any) => {
    console.log(data);
  };

  return (
    <form className="flex flex-col gap-5" onSubmit={handleSubmit(onSubmit)}>
      <Controller
        name="title"
        control={control}
        defaultValue=""
        render={({ field }) => (
          <div>
            <input
              type="text"
              {...field}
              onChange={(e) => {
                field.onChange(e);
                handleSlug(e);
              }}
              placeholder="Title"
            />
            <p>{errors.title?.message}</p>
          </div>
        )}
      />

      <input type="text" placeholder="Slug" value={slug} readOnly />

      <Controller
        name="description"
        control={control}
        defaultValue=""
        render={({ field }) => (
          <div>
            <input type="text" {...field} placeholder="Description" />
            <p>{errors.description?.message}</p>
          </div>
        )}
      />
      <Controller
        name="content"
        control={control}
        defaultValue=""
        render={({ field }) => (
          <div>
            <textarea {...field} placeholder="Content" />
            <p>{errors.description?.message}</p>
          </div>
        )}
      />

      <Controller
        name="category"
        control={control}
        render={({ field }) => (
          <>
            <select {...field} defaultValue="" placeholder="Content">
              <option value="" disabled hidden>
                Category
              </option>
              <option value={1}>Option 1</option>
            </select>
            <p>{errors.category?.message}</p>
          </>
        )}
      />

      <Controller
        name="image"
        control={control}
        render={({ field }) => (
          <>
            <input
              type="file"
              onChange={(e) => field.onChange(e.target.files)}
            />
            {errors.image && <p>{errors.image.message}</p>}
          </>
        )}
      />
      <button>Submit</button>
    </form>
  );
};

export default AddArticleForm;
