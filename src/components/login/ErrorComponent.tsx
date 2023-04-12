import {
  EmailValidationError,
  PasswordValidationError,
} from "~/utils/typeValidation/stringValidation";

const ErrorComponent: React.FC<{
  errors: Set<EmailValidationError | PasswordValidationError>;
}> = ({ errors }) => {
  if (errors.size < 1) return <></>;
  return (
    <div className="errors mb-4 text-center text-red-500">
      <p>ERRO:</p>
      {errors.has("NoCharsBeforeDomain") && (
        <p>
          O email precisa ter caracteres antes do dominio, Ex:{" "}
          <span className="font-semibold">caracteresaqui</span>@gmail.com
        </p>
      )}
      {errors.has("NoDomain") && (
        <p>
          *O email precisa ter um dominio, Ex:{" "}
          <span className="font-semibold">@gmail.com</span>,{" "}
          <span className="font-semibold">@yahoo.com.br</span>,{" "}
          <span className="font-semibold">@outlook.com</span>{" "}
        </p>
      )}
      {errors.has("EmailEmpty") && <p>*Você precisa digitar um Email</p>}
      {errors.has("InvalidCharsBeforeDomain") && (
        <p>*Caracteres inválidos antes do domínio.</p>
      )}
      {errors.has("PasswordInvalidChars") && (
        <p>
          *A senha fornecida tem caracteres invalidos, somente use (a-z, A-Z,
          0-9, !@#$%^&*)
        </p>
      )}
      {errors.has("PasswordLowCharNumber") && (
        <p>*A senha fornecida tem menos que 8 caracteres</p>
      )}
      {errors.has("PasswordEmpty") && <p>*Você precisa digitar uma Senha</p>}
    </div>
  );
};
export default ErrorComponent;
