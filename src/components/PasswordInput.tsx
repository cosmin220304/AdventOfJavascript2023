import React, { useState } from "react";
import Input, { type InputProps } from "./Input";
import { EyeIcon, EyeOffIcon } from "lucide-react";

type PasswordInput = Omit<InputProps, "type" | "rightSide">;

const PasswordInput = (props: PasswordInput) => {
  const [show, setShow] = useState(false);

  return (
    <Input
      {...props}
      type={show ? "text" : "password"}
      rightSide={
        <button onClick={() => setShow(!show)}>
          {show ? (
            <EyeIcon className="h-8 w-8" />
          ) : (
            <EyeOffIcon className="h-8 w-8" />
          )}
        </button>
      }
    />
  );
};

export default PasswordInput;
