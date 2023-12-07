import Button from "@/components/Button";
import Input from "@/components/Input";
import PasswordInput from "@/components/PasswordInput";
import { useState } from "react";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="z-10 mt-16 flex w-[32rem] flex-col gap-4">
      <div className="h-72 bg-[url('/images/secret-santa.svg')] bg-cover p-10" />

      <h1 className="flex items-center justify-center gap-4 text-5xl tracking-wider text-white">
        <Divider />
        Login
        <Divider />
      </h1>

      <Input
        label="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="w-full"
      />
      <PasswordInput
        label="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className="w-full"
      />
      <Button className="h-16 w-full rounded-full text-2xl font-bold">
        SUBMIT
      </Button>

      <div className="w-full text-center text-xl underline">
        Need an Account?
      </div>
    </div>
  );
};

const Divider = () => {
  return <div className="w-12 border-t-4 border-white" />;
};

export default LoginForm;
