import LoginForm from "@/features/auth/LoginForm";
import RegisterForm from "@/features/auth/RegisterForm";
import Head from "next/head";
import { useRouter } from "next/router";
import { match } from "ts-pattern";

export const AuthPageRoute = {
  login: "?pageType=login",
  register: "?pageType=register",
} as const;

export type AuthPage = keyof typeof AuthPageRoute;

const authPage = () => {
  const { query } = useRouter();
  const authPage = query.pageType ?? "login";

  return (
    <>
      <Head>
        <title>Authentication</title>
        <meta name="description" content="Secret santa" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="relative flex min-h-[150vh] flex-col items-center gap-2 bg-[#70BD91] text-black">
        <BackgroundDecoration />
        {match(authPage)
          .with("login", () => <LoginForm />)
          .with("register", () => <RegisterForm />)
          .otherwise(() => null)}
      </main>
    </>
  );
};

const BackgroundDecoration = () => {
  return (
    <div className="pointer-events-none absolute top-0 z-0 h-[80rem] w-full bg-[url('/images/bg-auth.png')] bg-contain bg-no-repeat" />
  );
};

export default authPage;
