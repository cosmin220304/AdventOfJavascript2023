import Layout from "@/layouts/Layout";
import { api } from "@/utils/api";
import React from "react";

const invite = () => {
  const { data: event, isLoading: isLoadingEvent } =
    api.events.latest.useQuery();

  return (
    <Layout variant="with-side-nav">
      <div className="m-32 flex gap-2">
        <h1 className="text-5xl">Dashboard</h1>
      </div>
    </Layout>
  );
};

export default invite;
