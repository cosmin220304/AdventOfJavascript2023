import HamburgerButton from "@/components/HamburgerButton";
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

      <div className="relative flex h-[70rem] flex-col items-center gap-2 bg-[#70BD91]">
        <BackgroundDecoration />
        <HamburgerButton className="absolute left-8 top-4" />
        <div className="m-32 flex gap-2">
          <h1 className="text-5xl">Dashboard</h1>
        </div>
      </div>
    </>
  );
}

const BackgroundDecoration = () => {
  return (
    <div className="pointer-events-none absolute left-0 top-0 z-0 h-[50rem] w-1/2 bg-[url('/images/bg-decorations-half.svg')] bg-contain bg-no-repeat">
      <div className="absolute left-10 top-24 h-[12rem] w-[32rem] bg-[url('/images/secret-santa.svg')] bg-contain bg-no-repeat p-10" />
    </div>
  );
};
