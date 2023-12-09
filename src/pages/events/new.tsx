import CreateEventForm from "@/features/event/CreateEventForm";
import Head from "next/head";
import React from "react";

const eventsPage = () => {
  return (
    <>
      <Head>
        <title>Setup your event</title>
        <meta name="description" content="Secret santa" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="relative flex h-[70rem] flex-col items-center gap-2 bg-[#70BD91]">
        <BackgroundDecoration />
        <CreateEventForm />
      </div>
    </>
  );
};

const BackgroundDecoration = () => {
  return (
    <div className="pointer-events-none absolute top-0 z-0 h-[80rem] w-full bg-[url('/images/bg-decorations-full.svg')] bg-contain bg-no-repeat" />
  );
};

export default eventsPage;
