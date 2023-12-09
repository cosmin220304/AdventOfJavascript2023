import { type PropsWithChildren } from "react";
import { twMerge } from "tailwind-merge";

type Props = {
  className?: string;
  inputClassName?: string;
} & PropsWithChildren &
  React.DetailedHTMLProps<
    React.InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  >;

const Checkbox = ({ children, className, inputClassName, ...props }: Props) => {
  return (
    <div>
      <label className={twMerge("flex cursor-pointer gap-2", className)}>
        <input
          {...props}
          type="checkbox"
          className={twMerge("checkbox mt-0.5", inputClassName)}
        />
        <span>{children}</span>
      </label>
    </div>
  );
};

export default Checkbox;
