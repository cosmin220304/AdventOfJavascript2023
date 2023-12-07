import React from "react";
import { twMerge } from "tailwind-merge";

type Props = React.DetailedHTMLProps<
  React.ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
>;

const Button = ({ children, className, ...props }: Props) => {
  return (
    <button
      {...props}
      className={twMerge(
        "btn-solid bg-[#FAC900] shadow-[0_6px_0_0_rgba(176,142,0,0.3)]",
        "hover:brightness-95",
        className,
      )}
    >
      {children}
    </button>
  );
};

export default Button;
