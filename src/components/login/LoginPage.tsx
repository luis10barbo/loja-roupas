import Image from "next/image";
import LoginMethodComponent from "./LoginMethodComponent";
import { LoginPageContext } from "~/context/loginPage/LoginPageContext";
import { useContext, useEffect, useState } from "react";
import RegisterComponent from "./RegisterComponent";
import LoginComponent from "./LoginComponent";

const LoginPage: React.FC = () => {
  const { currentMethod, setMethod } = useContext(LoginPageContext);
  const [windowSize, setWindowSize] = useState({ width: 0, height: 0 });
  useEffect(() => {
    function resizeHandler(e: UIEvent) {
      setWindowSize({ width: window.innerWidth, height: window.innerHeight });
    }
    window.addEventListener("resize", resizeHandler);
  }, []);

  return (
    <main className="h-screen w-screen">
      <div className="flex h-full gap-6 overflow-auto bg-gray-100">
        {windowSize.width > 1100 ? (
          <div className="left h-full p-12">
            <Image
              src={"/static/login/loginphoto.jpeg"}
              width={1920}
              height={1080}
              alt="waga"
              style={{ objectPosition: "100% " }}
              className="object  h-full max-w-[630px] rounded-lg  object-cover object-right shadow-[0_0_6px_1px_rgba(0,0,0,0.25)]"
            ></Image>
          </div>
        ) : (
          <></>
        )}

        <div className="right relative ml-auto flex h-full w-full flex-col items-center gap-12 bg-white p-12 text-2xl font-extralight shadow-[0_0_6px_1px_rgba(0,0,0,0.25)]">
          {windowSize.width < 1100 ? (
            <>
              <div className="absolute top-0 z-10 h-full w-full bg-black/40"></div>
              <Image
                src={"/static/login/loginphoto.jpeg"}
                alt={""}
                fill={true}
                className="object-cover blur-sm"
              />
            </>
          ) : (
            <></>
          )}

          {(() => {
            switch (currentMethod) {
              case "nomethod":
                return <LoginComponent></LoginComponent>;
              case "login":
                return <LoginComponent></LoginComponent>;
              case "register":
                return <RegisterComponent></RegisterComponent>;
            }
          })()}
        </div>
      </div>
    </main>
  );
};

export default LoginPage;
