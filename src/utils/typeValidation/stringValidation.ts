export const EmailValidationError = {
  EmailInvalid: "EmailInvalid",
  NoDomain: "NoDomain",
  NoCharsBeforeDomain: "NoCharsBeforeDomain",
  InvalidCharsBeforeDomain: "InvalidCharsBeforeDomain",
  EmailEmpty: "EmailEmpty",
} as const;

export type EmailValidationError =
  (typeof EmailValidationError)[keyof typeof EmailValidationError];

export function emailValidation(string: string): EmailValidationError[] {
  const errors: EmailValidationError[] = [];

  if (string.length === 0) errors.push(EmailValidationError.EmailEmpty);
  else {
    if (!/^.*@\w*\.\w{1,}/.test(string))
      errors.push(EmailValidationError.NoDomain);
    else if (!/^.{1,}@/.test(string))
      errors.push(EmailValidationError.NoCharsBeforeDomain);
    else if (!/^\w{1,}@/.test(string))
      errors.push(EmailValidationError.InvalidCharsBeforeDomain);
  }

  if (errors.length > 0) errors.push(EmailValidationError.EmailInvalid);
  return errors;
}

export const PasswordValidationError = {
  PasswordInvalid: "PasswordInvalid",
  PasswordInvalidChars: "PasswordInvalidChars",
  PasswordLowCharNumber: "PasswordLowCharNumber",
  PasswordsNotMatch: "PasswordsNotMatch",
  PasswordEmpty: "PasswordEmpty",
} as const;

export type PasswordValidationError =
  (typeof PasswordValidationError)[keyof typeof PasswordValidationError];

export function passwordValidation(
  string: string,
  stringConfirmation?: string
): PasswordValidationError[] {
  const errors: PasswordValidationError[] = [];
  if (string.length === 0) errors.push(PasswordValidationError.PasswordEmpty);
  else {
    if (!/.{8,}/.test(string))
      errors.push(PasswordValidationError.PasswordLowCharNumber);

    if (!/^[a-zA-Z0-9!@#$%^&*]+$/.test(string))
      errors.push(PasswordValidationError.PasswordInvalidChars);

    console.log(stringConfirmation, string !== stringConfirmation);
    if (stringConfirmation && string !== stringConfirmation)
      errors.push(PasswordValidationError.PasswordsNotMatch);
  }

  if (errors.length > 0) errors.push(PasswordValidationError.PasswordInvalid);
  return errors;
}
