import Image from "next/image";
import { useRouter } from "next/router";
import { useContext, useState } from "react";
import { WindowPropertiesContext } from "~/context/WindowPropertiesContext";
import { formatCEP } from "~/utils/object/textUtils";
import HeaderComponent from "../header/HeaderComponent";
import ProductCommentComponent from "./ProductCommentComponent";
import MiniBrowserComponent from "../browser/MiniBrowserComponent";

const ProductPage: React.FC = () => {
  const router = useRouter();
  const { productId } = router.query;

  const { windowSize } = useContext(WindowPropertiesContext);

  const [cep, setCep] = useState("");

  return (
    <>
      <main className="flex h-screen w-screen flex-col gap-4 overflow-auto font-extralight">
        <HeaderComponent />
        <div
          className={`flex  w-full gap-8 p-12 text-4xl ${
            windowSize.width < 1000 ? "flex-col" : "h-[80vh]"
          }`}
        >
          <div
            className={`image-container relative  ${
              windowSize.width < 1000
                ? "min-h-[70vw] w-full"
                : "min-h-[70vh] min-w-[500px]"
            } rounded-xl`}
          >
            <Image
              src="/static/products/test/d1.jpg"
              alt="vestido rosa"
              className="rounded-xl object-contain"
              fill={true}
            />
            <div className="absolute bottom-0 z-10 h-32 w-full bg-gradient-to-t from-white to-transparent"></div>
          </div>
          <div
            className={`flex h-full w-full flex-col gap-8 ${
              windowSize.width < 1000 ? "items-center justify-center" : ""
            }`}
          >
            Roupa rosa
            <div
              className={`w-full flex-1 overflow-y-auto rounded-xl bg-gray-100 px-4 text-xl ${
                windowSize.width < 1000 ? "min-h-[300px]" : ""
              }`}
            >
              <p className="h-[300px] w-full p-4">
                dWHDQIUDH QDHIUQWHDUIWQ QEFOHEQIUOFEQH OKEFIOQEHFOEQ H QDD WQD
                DQWIOFJQOEFE dWHDQIUDH QDHIUQWHDUIWQ QEFOHEQIUOFEQH
                OKEFIOQEHFOEQ H QDD WQD DQWIOFJQOEFE dWHDQIUDH QDHIUQWHDUIWQ
                QEFOHEQIUOFEQH OKEFIOQEHFOEQ H QDD WQD DQWIOFJQOEFE dWHDQIUDH
                QDHIUQWHDUIWQ QEFOHEQIUOFEQH OKEFIOQEHFOEQ H QDD WQD
                DQWIOFJQOEFE dWHDQIUDH QDHIUQWHDUIWQ QEFOHEQIUOFEQH
                OKEFIOQEHFOEQ H QDD WQD DQWIOFJQOEFE dWHDQIUDH QDHIUQWHDUIWQ
                QEFOHEQIUOFEQH OKEFIOQEHFOEQ H QDD WQD DQWIOFJQOEFE dWHDQIUDH
                QDHIUQWHDUIWQ QEFOHEQIUOFEQH OKEFIOQEHFOEQ H QDD WQD
                DQWIOFJQOEFE dWHDQIUDH QDHIUQWHDUIWQ QEFOHEQIUOFEQH
                OKEFIOQEHFOEQ H QDD WQD DQWIOFJQOEFE dWHDQIUDH QDHIUQWHDUIWQ
                QEFOHEQIUOFEQH OKEFIOQEHFOEQ H QDD WQD DQWIOFJQOEFE dWHDQIUDH
                QDHIUQWHDUIWQ QEFOHEQIUOFEQH OKEFIOQEHFOEQ H QDD WQD
                DQWIOFJQOEFE dWHDQIUDH QDHIUQWHDUIWQ QEFOHEQIUOFEQH
                OKEFIOQEHFOEQ H QDD WQD DQWIOFJQOEFE dWHDQIUDH QDHIUQWHDUIWQ
                QEFOHEQIUOFEQH OKEFIOQEHFOEQ H QDD WQD DQWIOFJQOEFE
              </p>
            </div>
            <div className="calculate-delivery flex w-full justify-center gap-4 text-xl">
              Taxa de Entrega
              <div className="relative w-[10ch] text-center">
                {/* <p className="pointer-events-none absolute w-full">{cep}</p> */}
                <input
                  type="text"
                  placeholder="CEP"
                  className=" w-full border-b text-center outline-none duration-75 focus:border-black/30 "
                  value={cep}
                  onChange={(e) => {
                    setCep(formatCEP(e.target.value));
                  }}
                />
              </div>
            </div>
            <div
              className={`flex w-full ${
                windowSize.width < 1378 ? "flex-col" : ""
              } gap-4`}
            >
              <button className="  w-full rounded-md bg-purple-700 p-4 text-2xl text-white duration-75 hover:bg-purple-800">
                Comprar Agora
              </button>
              <button className="  w-full rounded-md bg-gray-700 p-4 text-2xl text-white duration-75 hover:bg-gray-800">
                Adicionar ao Carrinho
              </button>
              <button className="  w-full rounded-md  bg-gray-700 p-4 text-2xl text-white duration-75 hover:bg-gray-800">
                Salvar na Lista de Desejos
              </button>
            </div>
          </div>
        </div>

        <div
          className={`flex p-4 ${windowSize.width < 1000 ? "flex-col" : ""}`}
        >
          <div className="flex w-full flex-col gap-2 rounded-xl bg-gray-100  p-4">
            <p className="w-full p-4 text-center text-4xl">
              Perguntas sobre o produto
            </p>
            <textarea
              placeholder="Faça uma pergunta sobre o produto..."
              className="h-16 rounded-md border border-transparent p-2 outline-none duration-75 focus:border-black/40"
            />
            <button className="rounded-md bg-purple-700 p-3 text-white duration-75 hover:bg-purple-800 ">
              Enviar pergunta
            </button>
            <ProductCommentComponent chainLevel={1} />
            <ProductCommentComponent chainLevel={1} />
          </div>
          <div className="w-full overflow-hidden p-4">
            <p className="w-full p-4 text-center text-4xl">
              Recomendados para você
            </p>
            <MiniBrowserComponent filterBar={false} maxItems={10} />
          </div>
        </div>
      </main>
    </>
  );
};
export default ProductPage;
