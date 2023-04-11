import {
  Dispatch,
  ReactNode,
  SetStateAction,
  createContext,
  useState,
} from "react";

export type LoginPageMethod = "nomethod" | "login" | "register";

export type LoginPageContext = {
  currentMethod: LoginPageMethod;
  setMethod: Dispatch<SetStateAction<LoginPageMethod>>;
};

export const LoginPageContext = createContext<LoginPageContext>(
  {} as LoginPageContext
);

export const LoginPageContextProvider: React.FC<{
  children: ReactNode | ReactNode[];
}> = ({ children }) => {
  const [currentMethod, setMethod] = useState<LoginPageMethod>("nomethod");
  return (
    <LoginPageContext.Provider value={{ currentMethod, setMethod }}>
      {children}
    </LoginPageContext.Provider>
  );
};
