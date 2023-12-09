import React, { forwardRef, useState } from "react";
import Input, { type InputProps } from "./Input";
import { EyeIcon, EyeOffIcon } from "lucide-react";

type PasswordInput = Omit<InputProps, "type" | "rightSide">;

const PasswordInput = forwardRef<HTMLInputElement, InputProps>((props, ref) => {
  const [show, setShow] = useState(false);

  return (
    <Input
      {...props}
      ref={ref}
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
});

export default PasswordInput;
