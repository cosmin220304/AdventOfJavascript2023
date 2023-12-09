import { Redirect } from "@/components/Redirect";
import { useSession } from "next-auth/react";
import Head from "next/head";

export default function Home() {
  const session = useSession();

  if (session.status === "unauthenticated") {
    return <Redirect href="/login" />;
  }

  return (
    <>
      <Head>
        <title>Dashboard</title>
        <meta name="description" content="Secret santa" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="m-32 flex gap-2"></main>
    </>
  );
}
