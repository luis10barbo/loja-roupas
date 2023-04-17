import type { NextPage } from "next";
import { useSession } from "next-auth/react";
import { useEffect } from "react";
import LoginPage from "~/components/login/LoginPage";
import { LoginPageContextProvider } from "~/context/loginPage/LoginPageContext";
import { useRouter } from "next/router";

const Login: NextPage = () => {
  const navRouter = useRouter();
  const { data: session } = useSession();
  useEffect(() => {
    if (session?.user) navRouter.push("/");
  }, [session]);
  return (
    <LoginPageContextProvider>
      <LoginPage />
    </LoginPageContextProvider>
  );
};
export default Login;
