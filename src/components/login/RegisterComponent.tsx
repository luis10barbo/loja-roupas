import { useContext, useState } from "react";
import { LoginPageContext } from "~/context/loginPage/LoginPageContext";
import {
  addToSet,
  removeEnumFromSet,
  removeFromSet,
} from "~/utils/object/setUtils";
import {
  EmailValidationError,
  PasswordValidationError,
  emailValidation,
  passwordValidation,
} from "~/utils/typeValidation/stringValidation";

const RegisterComponent: React.FC = () => {
  const { setMethod } = useContext(LoginPageContext);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirmation, setPasswordConfirmation] = useState("");

  const [registerErrors, setRegisterErrors] = useState<
    Set<EmailValidationError | PasswordValidationError>
  >(new Set());
  function comparePasswords() {
    if (password !== passwordConfirmation)
      return setRegisterErrors((oldErrors) =>
        addToSet(oldErrors, "PasswordsNotMatch")
      );
    return setRegisterErrors((oldErrors) =>
      removeFromSet(oldErrors, "PasswordsNotMatch")
    );
  }

  function validateEmail() {
    const result = emailValidation(email);

    setRegisterErrors((oldSet) => {
      const newSet = removeEnumFromSet(oldSet, EmailValidationError);
      return addToSet(newSet, result);
    });
  }

  function validatePassword() {
    const result = passwordValidation(password, passwordConfirmation);

    setRegisterErrors((oldSet) => {
      let newSet = removeEnumFromSet(oldSet, PasswordValidationError);
      return addToSet(newSet, result);
    });
  }

  const canLogin =
    registerErrors.has("PasswordInvalid") ||
    registerErrors.has("EmailInvalid") ||
    !password ||
    !email;

  return (
    <>
      Registrar:
      {/* <button
        className="absolute left-0 top-0 m-8 rounded-xl p-4 duration-75 hover:bg-black hover:text-white"
        onClick={() => {
          setMethod("nomethod");
        }}
      >
        ◂ Voltar
      </button> */}
      <div className="z-20 flex h-full w-full  max-w-screen-md flex-col justify-center gap-4">
        {registerErrors.size > 0 && (
          <div className="errors mb-4 text-center text-red-500">
            <p>ERROS:</p>
            {registerErrors.has("NoCharsBeforeDomain") && (
              <p>
                O email precisa ter caracteres antes do dominio, Ex: a@gmail.com
              </p>
            )}
            {registerErrors.has("NoDomain") && (
              <p>
                *O email precisa ter um dominio, Ex: @gmail.com, @hotmail.com
              </p>
            )}
            {registerErrors.has("InvalidCharsBeforeDomain") && (
              <p>*Caracteres invalidos antes do domínio.</p>
            )}
            {registerErrors.has("PasswordInvalidChars") && (
              <p>
                *A senha fornecida tem caractéres inválidos, somente use (a-z,
                A-Z, 0-9, !@#$%^&*)
              </p>
            )}
            {registerErrors.has("PasswordLowCharNumber") && (
              <p>*A senha fornecida tem menos que 8 caracteres</p>
            )}
            {registerErrors.has("PasswordsNotMatch") && (
              <p>*As senhas não correspondem</p>
            )}
          </div>
        )}
        <input
          type="email"
          className={`w-full rounded-xl border p-3 outline-none ${
            registerErrors.has("EmailInvalid") ? "border-red-500" : ""
          }`}
          placeholder="Digite seu e-mail aqui"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          onBlur={() => validateEmail()}
        />
        <input
          type="password"
          className={` w-full rounded-xl border p-3 outline-none ${
            registerErrors.has("PasswordInvalid") ? "border-red-500" : ""
          }`}
          placeholder="Digite sua senha aqui"
          name="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          onBlur={() => validatePassword()}
        />
        <input
          type="password"
          className={`w-full rounded-xl border p-3 outline-none ${
            registerErrors.has("PasswordsNotMatch") ? "border-red-500" : ""
          }`}
          placeholder="Redigite sua senha aqui"
          value={passwordConfirmation}
          onChange={(e) => setPasswordConfirmation(e.target.value)}
          onBlur={() => validatePassword()}
        />
        <button
          className={`mt-8 rounded-xl bg-purple-700 p-4 text-white ${
            canLogin ? "opacity-50" : ""
          }`}
          disabled={canLogin}
        >
          Criar conta
        </button>
        <button className=" rounded-xl bg-orange-700 p-4 text-white">
          Usar conta Google
        </button>
        <button className=" rounded-xl bg-blue-700 p-4 text-white">
          Usar conta Facebook
        </button>

        <button
          className="my-8 rounded-xl bg-black p-4 text-white hover:bg-gray-900"
          onClick={() => {
            setMethod("login");
          }}
        >
          Já tenho uma conta
        </button>
      </div>
    </>
  );
};

export default RegisterComponent;
