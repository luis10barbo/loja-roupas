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

const NoEmailLoginComponent: React.FC = () => {
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

  const { windowSize } = useContext(WindowPropertiesContext);

  return (
    <>
      <div className={`z-20 flex h-full ${windowSize.height > 600 ? "w-5/6" : "w-full"} max-w-screen-md flex-col justify-center gap-6  text-center text-white`}>
        <p>Escolha uma opção de login:</p>
        <button
          className=" rounded-xl bg-orange-700 p-4 text-white hover:bg-orange-600"
          onClick={() => {
            signIn("google");
          }}
        >
          Entrar com Google
        </button>
        <button
          className=" rounded-xl bg-blue-700 p-4 text-white hover:bg-blue-600"
          onClick={() => {
            signIn("instagram");
          }}
        >
          Entrar com Instagram
        </button>
      </div>
    </>
  );
};
export default NoEmailLoginComponent;
