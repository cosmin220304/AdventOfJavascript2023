import HamburgerButton from "@/components/HamburgerButton";
import { type PropsWithChildren } from "react";
import { match } from "ts-pattern";

type Props = {
  variant: "single-form" | "with-side-nav";
} & PropsWithChildren;

const Layout = ({ variant, children }: Props) => {
  return (
    <div className="relative flex h-[70rem] flex-col items-center gap-2 bg-[#70BD91]">
      {match(variant)
        .with("single-form", () => <BackgroundDecorationFull />)
        .with("with-side-nav", () => (
          <>
            <HamburgerButton className="absolute left-8 top-4" />
            <BackgroundDecorationHalf />
          </>
        ))
        .exhaustive()}
      {children}
    </div>
  );
};

const BackgroundDecorationFull = () => {
  return (
    <div className="pointer-events-none absolute top-0 z-0 h-[80rem] w-full bg-[url('/images/bg-decorations-full.svg')] bg-contain bg-no-repeat" />
  );
};

const BackgroundDecorationHalf = () => {
  return (
    <div className="pointer-events-none absolute left-0 top-0 z-0 h-[50rem] w-1/2 bg-[url('/images/bg-decorations-half.svg')] bg-contain bg-no-repeat">
      <div className="absolute left-10 top-24 h-[12rem] w-[32rem] bg-[url('/images/secret-santa.svg')] bg-contain bg-no-repeat p-10" />
    </div>
  );
};

export default Layout;
