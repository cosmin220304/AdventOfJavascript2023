import CreateEventForm from "@/features/event/CreateEventForm";
import Layout from "@/layouts/Layout";

const eventsPage = () => {
  return (
    <Layout variant="single-form">
      <CreateEventForm />
    </Layout>
  );
};

export default eventsPage;
