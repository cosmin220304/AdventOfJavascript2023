import { useEffect } from "react";
import { useRouter } from "next/router";

export function Redirect({ href }: { href: string }) {
  const router = useRouter();

  useEffect(() => {
    router.push(href);
  }, [href, router]);

  return null;
}
