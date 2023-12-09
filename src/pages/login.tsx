import LoginForm from "@/features/auth/LoginForm";
import Head from "next/head";

const login = () => {
  return (
    <>
      <Head>
        <title>Log in</title>
        <meta name="description" content="Secret santa" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="relative flex min-h-[150vh] flex-col items-center gap-2 bg-[#70BD91] text-black">
        <BackgroundDecoration />
        <LoginForm />
      </main>
    </>
  );
};

const BackgroundDecoration = () => {
  return (
    <div className="pointer-events-none absolute top-0 z-0 h-[80rem] w-full bg-[url('/images/bg-auth.png')] bg-contain bg-no-repeat" />
  );
};

export default login;
