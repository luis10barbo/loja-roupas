import { useContext, useState } from "react";
import { LoginPageContext } from "~/context/loginPage/LoginPageContext";
import { addToSet, removeEnumFromSet } from "~/utils/object/setUtils";
import {
  EmailValidationError,
  PasswordValidationError,
  emailValidation,
  passwordValidation,
} from "~/utils/typeValidation/stringValidation";
import ErrorComponent from "./ErrorComponent";
import { signIn } from "next-auth/react";
import { WindowPropertiesContext } from "~/context/WindowPropertiesContext";

const LoginComponent: React.FC = () => {
  const { setMethod } = useContext(LoginPageContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [loginErrors, setLoginErrors] = useState<
    Set<EmailValidationError | PasswordValidationError>
  >(new Set());

  function validateEmail() {
    const result = emailValidation(email);

    setLoginErrors((oldSet) => {
      const newSet = removeEnumFromSet(oldSet, EmailValidationError);
      return addToSet(newSet, result);
    });
    return result;
  }

  function validatePassword() {
    const result = passwordValidation(password);

    setLoginErrors((oldSet) => {
      const newSet = removeEnumFromSet(oldSet, PasswordValidationError);
      return addToSet(newSet, result);
    });
    return result;
  }

  function trySignIn() {
    const emailValidationResult = validateEmail();
    const passwordValidationResult = validatePassword();

    if (emailValidationResult.length > 0 || passwordValidationResult.length > 0)
      return;

    signIn("email");
  }

  return (
    <>
      <div className="z-20 flex h-full  w-full max-w-screen-md flex-col justify-center gap-4 ">
        <ErrorComponent errors={loginErrors} />
        <input
          type="email"
          className={`w-full rounded-xl border p-3 outline-none duration-75 ${
            loginErrors.has("EmailInvalid") ? "border-red-500" : ""
          }`}
          placeholder="Digite seu e-mail aqui"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value.replaceAll(" ", ""))}
          onBlur={() => {
            validateEmail();
          }}
        />
        <input
          type="password"
          className={`w-full rounded-xl border p-3 outline-none duration-75 ${
            loginErrors.has("PasswordInvalid") ? "border-red-500" : ""
          }`}
          placeholder="Digite sua senha aqui"
          name="password"
          value={password}
          onChange={(e) => setPassword(e.target.value.replaceAll(" ", ""))}
          onBlur={() => {
            validatePassword();
          }}
        />
        <button
          className={`mt-8 rounded-xl bg-purple-700 p-4 text-white hover:bg-purple-600 `}
          onClick={() => {
            trySignIn();
          }}
        >
          Logar
        </button>
        <button className=" rounded-xl bg-orange-700 p-4 text-white hover:bg-orange-600">
          Entrar com Google
        </button>
        <button className=" rounded-xl bg-blue-700 p-4 text-white hover:bg-blue-600">
          Entrar com Facebook
        </button>
        <button
          className="my-8 rounded-xl bg-black p-4 text-white hover:bg-gray-900"
          onClick={() => {
            setMethod("register");
          }}
        >
          Crie Sua Conta
        </button>
      </div>
    </>
  );
};
export default LoginComponent;
