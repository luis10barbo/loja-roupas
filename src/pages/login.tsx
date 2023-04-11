import type { NextPage } from "next";
import LoginPage from "~/components/login/LoginPage";
import { LoginPageContextProvider } from "~/context/loginPage/LoginPageContext";

const Login: NextPage = () => {
  return (
    <LoginPageContextProvider>
      <LoginPage />
    </LoginPageContextProvider>
  );
};
export default Login;
