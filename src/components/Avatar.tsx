import Image from "next/image";
import Icon, { type IconId } from "./Icon";
import { match, P } from "ts-pattern";
import { twMerge } from "tailwind-merge";

type Props =
  | {
      variant: "initials";
      name: string;
    }
  | {
      variant: "image";
      avatar: string;
      indicator?: "check" | "minus" | "question";
      santaHat?: boolean;
    }
  | {
      variant: "icon";
      iconId: IconId;
    };

const Avatar = (props: Props) => {
  return (
    <div className="avatar avatar-lg relative border-4 border-white bg-green-800">
      {match(props)
        .with({ variant: "initials" }, ({ name }) => (
          <span className="text-lg">{name.at(0)}</span>
        ))
        .with({ variant: "image" }, ({ avatar, indicator, santaHat }) => (
          <>
            {santaHat && (
              <div className="absolute -right-3.5 -top-3.5">
                <Image
                  src={"/images/santa-hat.png"}
                  height={10}
                  width={10}
                  alt={"santa-hat"}
                />
              </div>
            )}
            <img src={avatar} alt="avatar" />
            {indicator && (
              <div
                className={twMerge(
                  "absolute -bottom-1.5 -right-2 h-5 w-5 rounded-full border-[2px] border-white bg-green-500",
                  indicator === "minus" && "bg-red-500",
                  indicator === "question" && "bg-yellow-500",
                )}
              >
                <Icon iconId={indicator} className="text-white" />
              </div>
            )}
          </>
        ))
        .with({ variant: "icon" }, ({ iconId }) => (
          <div className="grid items-center">
            <Icon iconId={iconId} className="text-white" />
          </div>
        ))
        .otherwise(() => null)}
    </div>
  );
};

export default Avatar;
