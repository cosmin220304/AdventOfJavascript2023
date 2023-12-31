import { type Session } from "next-auth";
import { SessionProvider } from "next-auth/react";
import { type AppType } from "next/app";

import { api } from "@/utils/api";

import "@/styles/globals.css";
import Footer from "@/layouts/Footer";

const MyApp: AppType<{ session: Session | null }> = ({
  Component,
  pageProps: { session, ...pageProps },
}) => {
  return (
    <SessionProvider session={session}>
      <main className="text-black">
        <Component {...pageProps} />
      </main>
      <Footer />
    </SessionProvider>
  );
};

export default api.withTRPC(MyApp);
