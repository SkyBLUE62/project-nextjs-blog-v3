import Template from "@/components/template/Template";
import Card from "@mui/joy/Card";
import SignUpForm from "@/components/form/SignUpForm";

const Register = () => {
  return (
    <Template>
      <main className="flex flex-col  justify-center items-center mx-auto xl:w-1/4 py-10 px-2 xl:px-0">
        <div className=" border-orange-100 border border-spacing-5 rounded-3xl shadow-2xl w-full h-full">
          <div className="flex flex-col gap-5 py-5 px-5 w-full h-full">
            <h1 className="text-4xl font-Lora font-semibold">Sign Up</h1>
            <h2 className="text-lg font-Lora text-secondary italic">
              Welcome to Runo, every adventure is worth writing about, so come
              and join us!
            </h2>
            <SignUpForm />
          </div>
        </div>
      </main>
    </Template>
  );
};

export default Register;
