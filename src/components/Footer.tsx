import Image from "next/image";
import React from "react";

const Footer = () => {
  return (
    <footer className="sticky bottom-0 -z-10">
      <div className="mb-20 mt-24 flex flex-col items-center justify-center gap-2 text-sm text-[#EFE9CB]">
        <Image
          src="/images/footer-logo.png"
          width={250}
          height={250}
          alt="logo"
          className="mb-6"
        />
        <div className="">
          Copyright ©2023.{" "}
          <span className="underline">Ah Ha Creative, LLC</span>. All Rights
          Reserved.
        </div>
        <div className="flex gap-1">
          <span className="underline">Terms & Conditions</span>.
          <span className="underline">Privacy Policy</span>.
          <span className="underline">Disclaimers</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
