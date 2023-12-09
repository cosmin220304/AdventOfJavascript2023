import LoginForm from "@/features/auth/LoginForm";
import RegisterForm from "@/features/auth/RegisterForm";
import Layout from "@/layouts/Layout";
import { useRouter } from "next/router";
import { match } from "ts-pattern";

export const AuthPageRoute = {
  login: "?pageType=login",
  register: "?pageType=register",
} as const;

export type AuthPage = keyof typeof AuthPageRoute;

const authPage = () => {
  const { query } = useRouter();
  const authPage = query.pageType ?? "login";

  return (
    <Layout variant="single-form">
      {match(authPage)
        .with("login", () => <LoginForm />)
        .with("register", () => <RegisterForm />)
        .otherwise(() => null)}
    </Layout>
  );
};

export default authPage;
