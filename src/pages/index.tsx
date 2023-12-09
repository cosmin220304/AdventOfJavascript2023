import { Redirect } from "@/components/Redirect";
import { api } from "@/utils/api";
import { useSession } from "next-auth/react";
import Head from "next/head";

export default function Home() {
  const session = useSession();

  const { data: events, isLoading: isLoadingEvent } =
    api.events.latest.useQuery(undefined, {
      enabled: session.status === "authenticated",
    });

  if (session.status === "unauthenticated") {
    return <Redirect href="/auth" />;
  }

  if (!isLoadingEvent && !events) {
    return <Redirect href="/events/new" />;
  }

  return (
    <>
      <Head>
        <title>Dashboard</title>
        <meta name="description" content="Secret santa" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="m-32 flex gap-2">
        <h1 className="text-5xl">Dashboard</h1>
      </div>
    </>
  );
}
