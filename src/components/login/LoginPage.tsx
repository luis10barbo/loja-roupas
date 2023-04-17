import Image from "next/image";
import { LoginPageContext } from "~/context/loginPage/LoginPageContext";
import { useContext } from "react";
import RegisterComponent from "./RegisterComponent";
import LoginComponent from "./LoginComponent";
import NoEmailLoginComponent from "./NoEmailLoginComponent";
import Link from "next/link";

const LoginPage: React.FC = () => {
  const { currentMethod } = useContext(LoginPageContext);
  // }, []);

  return (
    <>
      <Link
        className="absolute z-30 m-4 rounded-xl p-4 text-white duration-75 hover:bg-white hover:text-black"
        href={"/"}
      >
        Pagina Inicial
      </Link>
      <main className="absolute inset-0 flex h-screen w-screen flex-col items-center  overflow-auto overflow-x-hidden font-extralight">
        <Image
          src={"/static/login/loginphoto.jpeg"}
          alt={""}
          fill={true}
          className="object-cover blur-sm "
        />

        <div className="absolute top-0 z-10 h-full w-full bg-gradient-to-tr from-black/90 to-black/50"></div>

        <div className="flex h-full min-h-fit w-full gap-6  overflow-auto bg-gray-100">
          <div className="right ml-auto flex h-full w-full flex-col items-center bg-white p-6 text-2xl font-extralight shadow-[0_0_6px_1px_rgba(0,0,0,0.25)]">
            <NoEmailLoginComponent />
            {/* {(() => {
            switch (currentMethod) {
              case "nomethod":
                return <LoginComponent></LoginComponent>;
              case "login":
                return <LoginComponent></LoginComponent>;
              case "register":
                return <RegisterComponent></RegisterComponent>;
            }
          })()} */}
          </div>
        </div>
      </main>
    </>
  );
};

export default LoginPage;
