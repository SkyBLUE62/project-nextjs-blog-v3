import InputForm from "@/components/utilities/InputForm";
import clsx from "clsx";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { object, string } from "yup";

// Register Form
const SignUpForm = () => {
  return (
    <form action="">
      <div className="flex flex-col gap-5">
        <InputForm
          placeholder="Name"
          value=""
          type="text"
          label="Name"
          helperText=""
        />
        <InputForm
          placeholder="Email"
          value=""
          type="email"
          label="Email"
          helperText=""
        />
        <InputForm
          placeholder="Job"
          value=""
          type="text"
          label="Job"
          helperText=""
        />
        <InputForm
          placeholder="Password"
          value=""
          type="password"
          label="Password"
          helperText=""
        />
        <InputForm
          placeholder="Confirm password"
          value=""
          type="password"
          label="Confirm password"
          helperText=""
        />
        <button
          className={clsx(
            "bg-blue-600",
            "w-1/4 mx-auto px-2 py-3 rounded-2xl text-white font-semibold text-Lora",
            " hover:text-blue-600 hover:bg-blue-200"
          )}
        >
          Register
        </button>
      </div>
    </form>
  );
};

export default SignUpForm;
