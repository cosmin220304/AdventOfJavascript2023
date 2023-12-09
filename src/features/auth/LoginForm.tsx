import Button from "@/components/Button";
import Input from "@/components/Input";
import PasswordInput from "@/components/PasswordInput";
import { signIn } from "next-auth/react";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { type LoginRequest, LoginRequestSchema } from "@/schemas/requests";
import { AuthPageRoute } from "@/pages/auth";
import { useRouter } from "next/router";
import Head from "next/head";

const LoginForm = () => {
  const { push } = useRouter();
  const form = useForm<LoginRequest>({
    defaultValues: { email: "", password: "" },
    resolver: zodResolver(LoginRequestSchema),
  });
  const {
    register,
    watch,
    setError,
    formState: { errors },
    handleSubmit,
  } = form;

  const handleLogin = async (LoginRequest: LoginRequest) => {
    const data = await signIn("credentials", {
      ...LoginRequest,
      redirect: false,
    });

    if (data?.status === 401) {
      setError("email", { message: "Invalid credentials" });
      setError("password", { message: "Invalid credentials" });
      return;
    }

    push("/", undefined, { shallow: true });
  };

  return (
    <>
      <Head>
        <title>Login</title>
        <meta name="description" content="Secret santa - login page" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <form
        className="z-10 mt-16 flex w-[32rem] flex-col gap-4"
        onSubmit={handleSubmit(handleLogin)}
      >
        <div className="h-72 bg-[url('/images/secret-santa.svg')] bg-cover p-10" />

        <h1 className="flex items-center justify-center gap-4 text-5xl tracking-wider text-white">
          <Divider />
          Login
          <Divider />
        </h1>

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
          href={AuthPageRoute.register}
          className="w-full text-center text-xl underline"
        >
          Need an Account?
        </Link>
      </form>
    </>
  );
};

const Divider = () => {
  return <div className="w-12 border-t-4 border-white" />;
};

export default LoginForm;
