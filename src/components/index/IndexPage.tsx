import { NextPage } from "next";
import HeaderComponent from "../header/HeaderComponent";
import BrowserProductComponent from "../browser/BrowserProductComponent";
import MiniBrowserComponent from "../browser/MiniBrowserComponent";
import { useContext } from "react";
import { WindowPropertiesContext } from "~/context/WindowPropertiesContext";
import Image from "next/image";

const IndexPage: NextPage = () => {
  const { windowSize } = useContext(WindowPropertiesContext);

  return (
    <>
      <header>
        <title>Loja Roupas</title>
        <meta name="description" content="Template loja roupas m" />
        <link rel="icon" href="/favicon.ico" />
      </header>
      <main className="flex h-screen w-screen flex-col items-center overflow-auto overflow-x-hidden  font-extralight">
        <HeaderComponent />
        <div className="h-fit w-screen overflow-y-auto overflow-x-hidden">
          <div className="relative h-[70vh] ">
            <div className="absolute z-20 flex h-full w-full flex-col items-center justify-center gap-8 p-4 text-center text-7xl text-white">
              <p>COLOCAR ALGUMA FRASE AQUI</p>
            </div>
            <div
              style={{
                background:
                  "linear-gradient(to right, rgba(0,0,0,0.9), rgba(0,0,0,0.4), rgba(0,0,0,0.4), rgba(0,0,0,0.9)",
              }}
              className="absolute z-10 h-full w-full bg-black/20"
            ></div>
            <Image
              className="object-cover object-[70%_top]"
              src={"/static/landingPage/hero.jpg"}
              alt=""
              fill={true}
            />
          </div>
          <div className="w-full bg-white p-8">
            <p className="text-center text-4xl">Ofertas Imperdiveis</p>{" "}
          </div>

          <div className="w-full overflow-x-auto bg-gray-100">
            <div className="flex w-full min-w-fit gap-2   rounded-2xl p-4">
              {[...Array(12).keys()].map((element, index) => {
                return (
                  <BrowserProductComponent
                    key={index}
                    productName="vestido rosa 1"
                    productId={"a"}
                    price={19.99}
                    priceSale={12.99}
                    availableSizes={new Set(["M", "G"])}
                  />
                );
              })}
              <BrowserProductComponent
                productName="vestido rosa 2"
                productId={"b"}
                price={1500}
                availableSizes={new Set(["M", "G", "P"])}
              />
            </div>
          </div>
          <div className="w-full bg-white p-8">
            <p className="text-center text-4xl">Outras peças</p>{" "}
          </div>

          <div className="flex items-center justify-center ">
            <div
              className={` ${
                windowSize.width > 600 ? "w-10/12" : "w-full"
              } flex flex-col gap-4 rounded-xl bg-gray-100 p-4`}
            >
              <MiniBrowserComponent />
            </div>
          </div>
        </div>
      </main>
    </>
  );
};
export default IndexPage;
