import React, { forwardRef, useState } from "react";
import { twMerge } from "tailwind-merge";

export type InputProps = {
  label: string;
  labelClassName?: string;
  inputClassName?: string;
  errors?: string;
  rightSide?: React.ReactNode;
} & React.DetailedHTMLProps<
  React.InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
>;

const Input = forwardRef<HTMLInputElement, InputProps>((props, ref) => {
  const {
    label,
    value,
    className,
    labelClassName,
    inputClassName,
    errors,
    rightSide,
    ...rest
  } = props;
  const [isFocused, setIsFocused] = useState(false);
  const shrinkLabel = isFocused || value;

  return (
    <div className={twMerge("relative", className)}>
      <label
        className={twMerge(
          "pointer-events-none absolute left-4 top-6 text-2xl font-semibold text-green-950 transition-all duration-300 ease-in-out",
          shrinkLabel && "left-1 top-1 pl-0.5 text-xs",
          errors && "text-white",
          labelClassName,
        )}
      >
        {label}
      </label>
      <input
        {...rest}
        ref={ref}
        className={twMerge(
          "input-solid w-full bg-white px-2 pb-5 pt-6 text-2xl text-black ring-gray-50",
          errors && "border-2 border-[#C52425] bg-[#FD4801]",
          inputClassName,
        )}
        value={value}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
      />
      {rightSide && (
        <div className="absolute right-4 top-5 pt-1">{rightSide}</div>
      )}
      {errors && <div className="text-xl text-[#C52425]">{errors}</div>}
    </div>
  );
});

export default Input;
