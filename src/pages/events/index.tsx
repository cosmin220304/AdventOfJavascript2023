import { Redirect } from "@/components/Redirect";
import Layout from "@/layouts/Layout";
import { api } from "@/utils/api";
import { useSession } from "next-auth/react";

export default function Home() {
  const session = useSession();

  const { data: event, isLoading: isLoadingEvent } = api.events.latest.useQuery(
    undefined,
    {
      enabled: session.status === "authenticated",
    },
  );

  if (session.status === "unauthenticated") {
    return <Redirect href="/auth" />;
  }

  if (!isLoadingEvent && !event) {
    return <Redirect href="/events/new" />;
  }

  return (
    <Layout variant="with-side-nav">
      <div className="m-32 flex gap-2">
        <h1 className="text-5xl">Dashboard</h1>
      </div>
    </Layout>
  );
}
