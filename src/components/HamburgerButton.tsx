import React, { MouseEventHandler, useState } from "react";
import Button from "./Button";
import { twMerge } from "tailwind-merge";

type Props = React.DetailedHTMLProps<
  React.ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
>;

const HamburgerButton = ({ onClick, className, ...props }: Props) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick: MouseEventHandler<HTMLButtonElement> = (e) => {
    setIsOpen((prev) => !prev);
    onClick?.(e);
  };

  return (
    <Button
      onClick={handleClick}
      {...props}
      className={twMerge("relative h-12 w-14 shadow-none", className)}
    >
      <div
        className={twMerge(
          "absolute left-3 top-3 mb-1 h-[2px] w-8 bg-black transition-all duration-300 ease-in",
          isOpen && "left-4 top-[21px] w-6 rotate-45",
        )}
      />
      <div
        className={twMerge(
          "absolute left-3 top-[21px] mb-1 h-[2px] w-8 bg-black transition-all duration-300 ease-in",
          isOpen && "left-4 w-6 opacity-0",
        )}
      />
      <div
        className={twMerge(
          "absolute bottom-3 left-3 mb-1 h-[2px] w-8 bg-black transition-all duration-300 ease-in",
          isOpen && "bottom-[21px] left-4 w-6 -rotate-45",
        )}
      />
    </Button>
  );
};

export default HamburgerButton;
