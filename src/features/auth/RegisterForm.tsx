import Button from "@/components/Button";
import Input from "@/components/Input";
import PasswordInput from "@/components/PasswordInput";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  type RegisterRequest,
  RegisterRequestSchema,
} from "@/schemas/requests";
import { api } from "@/utils/api";
import { AuthPageRoute } from "@/pages/auth";
import { useRouter } from "next/router";
import Head from "next/head";

const RegisterForm = () => {
  const { push } = useRouter();
  const form = useForm<RegisterRequest>({
    defaultValues: { name: "", email: "", password: "" },
    resolver: zodResolver(RegisterRequestSchema),
  });
  const {
    register,
    watch,
    setError,
    formState: { errors },
    handleSubmit,
  } = form;

  const { mutateAsync: registerUser } = api.users.register.useMutation();

  const handleRegister = async (LoginRequest: RegisterRequest) => {
    try {
      await registerUser(LoginRequest);
      push(AuthPageRoute.login, undefined, { shallow: true });
    } catch (error) {
      if (error instanceof Error) {
        setError("email", { message: error.message });
      } else {
        setError("email", { message: "Something went wrong" });
      }
    }
  };

  return (
    <>
      <Head>
        <title>Register</title>
        <meta name="description" content="Secret santa - register page" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <form
        className="z-10 mt-16 flex w-[32rem] flex-col gap-4"
        onSubmit={handleSubmit(handleRegister)}
      >
        <div className="h-72 bg-[url('/images/secret-santa.svg')] bg-cover p-10" />

        <h1 className="flex items-center justify-center gap-4 text-5xl tracking-wider text-white">
          <Divider />
          Sign up
          <Divider />
        </h1>

        <Input
          label="Name"
          value={watch("name")}
          {...register("name")}
          className="w-full"
          errors={errors.name?.message}
        />
        <Input
          label="Email"
          value={watch("email")}
          {...register("email")}
          className="w-full"
          errors={errors.email?.message}
        />
        <PasswordInput
          label="Password"
          value={watch("password")}
          {...register("password")}
          className="w-full"
          errors={errors.password?.message}
        />
        <Button
          className="h-16 w-full rounded-full text-2xl font-bold"
          type="submit"
        >
          SUBMIT
        </Button>

        <Link
          href={AuthPageRoute.login}
          className="w-full text-center text-xl underline"
        >
          Ready to login?
        </Link>
      </form>
    </>
  );
};

const Divider = () => {
  return <div className="w-12 border-t-4 border-white" />;
};

export default RegisterForm;
