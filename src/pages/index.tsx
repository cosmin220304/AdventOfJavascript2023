import Icon from "@/components/Icon";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Create T3 App</title>
        <meta name="description" content="Generated by create-t3-app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Icon iconId="calendar" />
        <Icon iconId="check" />
        <Icon iconId="chevron" />
        <Icon iconId="close" />
        <Icon iconId="eyeClosed" />
        <Icon iconId="eyeOpened" />
        <Icon iconId="logout" />
        <Icon iconId="minus" />
        <Icon iconId="plus" />
        <Icon iconId="question" />
        <Icon iconId="thumbsDown" />
        <Icon iconId="thumbsUp" />
        <Icon iconId="upload" />
        <Icon iconId="user" />
      </main>
    </>
  );
}
