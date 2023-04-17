import { useContext } from "react";
import { LoginPageContext } from "~/context/loginPage/LoginPageContext";

const LoginMethodComponent: React.FC = () => {
  const { setMethod } = useContext(LoginPageContext);

  return (
    <>
      <div className="mb-auto flex h-full flex-col justify-center gap-16 text-center">
        <div className="flex flex-col  gap-4">
          <p className="text-7xl text-purple-700">TRANSFORME</p>
          <p className="text-4xl text-gray-900">seu visual</p>
        </div>

        <div className="flex flex-col gap-4">
          <p className="text-7xl text-purple-700">TRANSFORME</p>
          <p className="text-4xl text-gray-900">sua vida</p>
        </div>
      </div>
      <div className="flex w-full max-w-screen-lg flex-col gap-4">
        <button
          className="rounded-xl bg-purple-700 p-4 text-white  hover:bg-purple-800"
          onClick={() => setMethod("login")}
        >
          Fazer Login
        </button>
        <button
          className="rounded-xl bg-black p-4 text-white hover:bg-gray-900"
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
export default LoginMethodComponent;
