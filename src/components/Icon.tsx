import { twMerge } from "tailwind-merge";

export const ICONS = [
  "calendar",
  "check",
  "chevron",
  "close",
  "eyeClosed",
  "eyeOpened",
  "logout",
  "minus",
  "plus",
  "question",
  "thumbsDown",
  "thumbsUp",
  "upload",
  "user",
] as const;

export type IconId = (typeof ICONS)[number];

type Props = {
  iconId: IconId;
} & React.SVGProps<SVGSVGElement>;

const Icon = ({ iconId, className, ...props }: Props) => {
  return (
    <svg {...props} className={twMerge("h-4 w-4", className)}>
      <use href={`/icons.svg#${iconId}`} />
    </svg>
  );
};

export default Icon;
