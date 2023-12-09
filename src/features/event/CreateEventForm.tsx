import Button from "@/components/Button";
import Input from "@/components/Input";
import { Controller, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { type CreateEvent, CreateEventSchema } from "@/schemas/requests";
import { useRouter } from "next/router";
import Checkbox from "@/components/Checkbox";
import { formatISO } from "date-fns";
import { api } from "@/utils/api";
import Head from "next/head";

const CreateEventForm = () => {
  const { push } = useRouter();
  const form = useForm<CreateEvent>({
    defaultValues: { name: "", date: new Date() },
    resolver: zodResolver(CreateEventSchema),
  });
  const {
    control,
    register,
    watch,
    formState: { errors },
    handleSubmit,
  } = form;

  const { mutateAsync: createEvent } = api.events.create.useMutation();

  const handleCreateEvent = async (event: CreateEvent) => {
    try {
      await createEvent(event);
      push("/events/invite", undefined, { shallow: true });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <Head>
        <title>Setup your event</title>
        <meta name="description" content="Secret santa - setup event page" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <form
        className="z-10 mt-16 flex w-[32rem] flex-col gap-4"
        onSubmit={handleSubmit(handleCreateEvent)}
      >
        <div className="h-72 bg-[url('/images/secret-santa.svg')] bg-cover p-10" />

        <h1 className="flex items-center justify-center gap-4 text-5xl tracking-wider text-white">
          <Divider />
          SET UP YOUR EVENT
          <Divider />
        </h1>

        <Input
          label="Event Name"
          value={watch("name")}
          {...register("name")}
          className="w-full"
          errors={errors.name?.message}
        />
        <Controller
          control={control}
          name="date"
          render={({ field: { onChange, value, ...field } }) => (
            <Input
              type="date"
              label="Event date"
              placeholder=""
              className="w-full"
              value={formatISO(value, { representation: "date" })}
              onChange={(e) => onChange(new Date(e.target.value))}
              {...field}
              errors={errors.date?.message}
            />
          )}
        />
        <Checkbox>
          <div className="text-xl font-black">
            SEND OUT A REMINDER BEFORE EVENT
          </div>
        </Checkbox>

        <Button className="h-16 w-full rounded-full text-2xl font-bold">
          SUBMIT
        </Button>
      </form>
    </>
  );
};

const Divider = () => {
  return <div className="w-12 border-t-4 border-white" />;
};

export default CreateEventForm;
