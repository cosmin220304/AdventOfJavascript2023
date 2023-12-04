import { twMerge } from "tailwind-merge";

type Props = {
  iconId:
    | "calendar"
    | "check"
    | "chevron"
    | "close"
    | "eyeClosed"
    | "eyeOpened"
    | "logout"
    | "minus"
    | "plus"
    | "question"
    | "thumbsDown"
    | "thumbsUp"
    | "upload"
    | "user";
} & React.SVGProps<SVGSVGElement>;

const Icon = ({ iconId, className, ...props }: Props) => {
  return (
    <svg {...props} className={twMerge("h-4 w-4", className)}>
      <use href={`/icons.svg#${iconId}`} />
    </svg>
  );
};

export default Icon;
