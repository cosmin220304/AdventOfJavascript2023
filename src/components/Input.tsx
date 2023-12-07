import React, { useState } from "react";
import { twMerge } from "tailwind-merge";

type Props = {
  labelClassName?: string;
  inputClassName?: string;
  errors?: string;
} & React.DetailedHTMLProps<
  React.InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
>;

const Input = ({
  value,
  className,
  labelClassName,
  inputClassName,
  errors,
  ...props
}: Props) => {
  const [isFocused, setIsFocused] = useState(false);
  const shrinkLabel = isFocused || value;

  return (
    <div className={twMerge("relative", className)}>
      <label
        className={twMerge(
          "pointer-events-none absolute left-4 top-4 text-2xl font-semibold text-green-950 transition-all duration-300 ease-in-out",
          shrinkLabel && "left-1 top-1 text-xs",
          errors && "text-white",
          labelClassName,
        )}
      >
        Username
      </label>
      <input
        className={twMerge(
          "input-solid bg-white px-2 py-4 pt-5 text-black ring-gray-50",
          errors && "bg-[#C52425]",
          inputClassName,
        )}
        value={value}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        {...props}
      />
    </div>
  );
};

export default Input;
